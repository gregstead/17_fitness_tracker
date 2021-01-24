// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: String,
        name: String,
        weight: Number,
        duration: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      },
    ],
  },
  opts
);
// Setter for totalDuration calculated value
workoutSchema.virtual("totalDuration").get(function () {
  let ex = this.exercises;
  return ex.length > 0 ? ex.reduce(reducer) : 0;
});
const reducer = (accumulator, exercise) => accumulator + exercise.duration;

const Workout = mongoose.model("Workout", workoutSchema);

// exports the model
module.exports = Workout;
