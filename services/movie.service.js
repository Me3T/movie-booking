const {
  createMovieValidationSchema,
} = require("../lib/validators/movie.validators");
const Movie = require("../models/movies.model");

class MovieService {
  static getAll() {
    return Movie.find({});
  }
  static async createMovie(data) {
    const safeParsedData = await createMovieValidationSchema.safeParseAsync(
      data
    );
    if (safeParsedData.error) throw new Error(safeParsedData.error);
    return await Movie.create(safeParsedData.data);
  }
}

module.exports = MovieService;
