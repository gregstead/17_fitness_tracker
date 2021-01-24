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
workoutSchema.virtual("totalDuration").get(function () {
  let ex = this.exercises;
  return ex.reduce(reducer);
});
const reducer = (accumulator, exercise) => accumulator + exercise.duration;

const Workout = mongoose.model("Workout", workoutSchema);

// exports the model
module.exports = Workout;
