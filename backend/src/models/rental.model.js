import mongoose, { Schema } from "mongoose";

const rentalSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  minRentalTime: {
    type: Number,
    required: true,
  },
  maxRentalTime: {
    type: Number,
    required: true,
  },
  availableDates: {
    type: [Date],
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Rental = mongoose.model("Rental", rentalSchema);

module.exports = Rental;
