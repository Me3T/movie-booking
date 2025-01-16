const { Schema } = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    language: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    durationInMinutes: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Movie = model("movie", movieSchema);

module.exports = Movie;
