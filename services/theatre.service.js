const {
  createTheatreValidationSchema,
} = require("../lib/validators/theatre.validators");
const Theatre = require("../models/theatre.model");

class TheatreService {
  /**
   *@function getAll
   *@returns  {Promise<Theatre[]>} List of theatres
   */

  static async getAll() {
    const theatres = await Theatre.find({});
    return theatres;
  }

  static async create(data) {
    const safeParsedData = await createTheatreValidationSchema.safeParseAsync(
      data
    );

    if (safeParsedData.error) throw new Error(safeParsedData.error);
    return await Theatre.create(safeParsedData.data);
  }
}

module.exports = TheatreService;
