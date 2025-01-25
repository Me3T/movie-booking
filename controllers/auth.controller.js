const AppError = require("../errors/app.error");
const User = require("../models/user.model");

const {
  userSignupValidationSchema,
  userSigninValidationSchema,
} = require("../lib/validators/auth.validators");
const AuthService = require("../services/auth.service");

async function handleSignup(req, res) {
  const validationResult = await userSignupValidationSchema.safeParseAsync(
    req.body
  );

  if (validationResult.error)
    return res.status(400).json({ error: validationResult.error });

  const { firstName, lastName, email, password } = validationResult.data;
  //signUpwithEmailAndPassword
  try {
    const token = await AuthService.signUpwithEmailAndPassword({
      firstName,
      lastName,
      email,
      password,
    });
    return res.status(201).json({ status: "success", data: { token } });
  } catch (error) {
    if (error instanceof AppError)
      return res
        .status(error.code)
        .json({ status: "error", error: error.message });

    console.log(`Error signing in user`, error);

    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
}

async function handleSignin(req, res) {
  const validationResult = await userSigninValidationSchema.safeParseAsync(
    req.body
  );

  if (validationResult.error)
    return res.status(400).json({ error: validationResult.error });

  const { email, password } = validationResult.data;

  try {
    const token = await AuthService.signInWithEmailAndPassword({
      email,
      password,
    });

    return res.status(201).json({ status: "success", data: { token } });
  } catch (error) {
    if (error instanceof AppError)
      return res
        .status(error.code)
        .json({ status: "error", error: error.message });

    console.log(`Error signing in user`, error);

    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
}

// async function handleMe(req, res) {
//   if (!req.user) return res.json({ isLoggedin: false });
//   return res.json({ isLoggedin: true, data: { user: req.user } });

// }
async function handleMe(req, res) {
  if (!req.user) return res.json({ isLoggedIn: false });

  const user = await User.findById(req.user._id).select({
    firstName: true,
    lastName: true,
    email: true,
    role: true,
  });

  return res.json({ isLoggedIn: true, data: { user } });
}

module.exports = {
  handleSignup,
  handleSignin,
  handleMe,
};
