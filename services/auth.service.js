const crypto = require("crypto");
const User = require("../models/user.model");
const JWT = require("jsonwebtoken");
const { hash } = require("../utils/hash"); // Import the hash function from utils/hash.js
const AppError = require("../errors/app.error");

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET || JWT_SECRET === "") {
  throw new Error("JWT_SECRET is required");
}

class AuthService {
  /**
   * @function generateUserToken
   * @param {{_id:string; role:'admin'|'user'}} payload
   * @returns {Promise<String>} JWT signed token
   */

  static generateUserToken(payload) {
    const token = JWT.sign(payload, JWT_SECRET);
    return token;
  }

  /**
   *@function signUpwithEmailAndPassword
   * @param {{firstname:string, lastname?:string,email:string,password:string}} data
   * @returns {Promise<String>} JWT signed token
   */

  static async signUpwithEmailAndPassword(data) {
    const { firstName, lastName, email, password } = data;

    const salt = crypto.randomBytes(26).toString("hex");

    try {
      const user = await User.create({
        firstName,
        lastName,
        email,
        salt,
        password: hash(password, salt),
      });
      const token = AuthService.generateUserToken({
        _id: user._id,
        role: user.role,
      });
      return token;
    } catch (err) {
      console.log(`Error creating user`, err);
      throw err;
    }
  }

  /**
   *@function signInwithEmailAndPassword
   * @param {{email:string,password:string}} data
   * @returns {Promise<String>} JWT signed token
   */

  static async signInWithEmailAndPassword(data) {
    const { email, password } = data;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error(`User with email ${email} does not exist`);
    }

    if (hash(password, user.salt) !== user.password)
      throw new AppError(`Email or Password is incorrect`);

    const token = AuthService.generateUserToken({
      _id: user._id,
      role: user.role,
    });
    return token;
  }

  /**
   *
   * @param {string} token
   * @returns {{_id:string; role:'admin'|'user'}} payload
   */

  static decodeUserToken(token) {
    try {
      const payload = JWT.verify(token, JWT_SECRET);
      return payload;
    } catch (err) {
      return false;
    }
  }
}

module.exports = AuthService;
