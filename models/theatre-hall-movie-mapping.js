const { Schema, model } = require("mongoose");
const { endianness } = require("node:os");

const theatreHallMovieMappingSchema = new Schema(
  {
    movieId: {
      type: Schema.Types.ObjectId,
      ref: "movie",
      required: true,
    },
    theatreHallId: {
      type: Schema.Types.ObjectId,
      ref: "theatreHall",
      required: true,
    },
    startTimeStamp: {
      type: Number,
      required: true,
    },
    endTimeStamp: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

theatreHallMovieMappingSchema.index(
  { movieId: 1, theatreHallId: 1, startTimeStamp: 1, endTimeStamp: 1 },
  { unique: true }
);

const TheatreHallMovieMapping = model(
  "theatreHallMovieMapping",
  theatreHallMovieMappingSchema
);
module.exports = TheatreHallMovieMapping;
