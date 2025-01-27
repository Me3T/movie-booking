const { Schema, model } = require("zod");

const bookingSchema = new Schema(
  {
    showId: {
      type: Schema.Types.ObjectId,
      ref: "theatreHallMovieMapping",
      required: true,
    },
    seatNumber: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    status: "IN_PROGRESS | DONE",
  },
  { timestamps: true }
);

bookingSchema.index({ showId: 1, seatNumber: 1 }, { unique: true });

const Booking = model("booking", bookingSchema);

module.exports = Booking;
