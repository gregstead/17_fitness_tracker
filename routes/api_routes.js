// dependencies
const router = require("express").Router();
const db = require("../models/");
const ObjectId = require("mongojs").ObjectId;

router.get("/workouts", (_req, res) => {
  // Find all workouts
  db.Workout.find({}).then((data) => {
    res.json(data);
  });
});

router.post("/workouts", (_req, res) => {
  // create a workout
  db.Workout.create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  db.Workout.findOneAndUpdate(
    { _id: ObjectId(id) },
    {
      $push: {
        exercises: data,
      },
    },
    { new: true }
  ).then((workout) => {
    res.json(workout);
  });
});

router.get("/workouts/range", (_req, res) => {
  // Find all workouts
  db.Workout.find({}).then((data) => {
    res.json(data);
  });
});

module.exports = router;
