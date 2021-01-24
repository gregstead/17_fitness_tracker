// dependencies
const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", (_req, res) => {
  // Find all workouts
  Workout.find({}).then((data) => {
    res.json(data);
  });
});

router.put("/workouts/:id", (req, res) => {
  Workout.updateOne({ id: req.params.id }, { exercises: req.body }, (data) => {
    res.json(data);
  });
});
router.post("/workouts", (req, res) => {
  Workout.create(req.body).then((results) => {
    res.json(results);
  });
});
router.get("/workouts/range", (req, res) => {
  // Find all workouts
  Workout.find({}).then((data) => {
    res.json(data);
  });
});

module.exports = router;
