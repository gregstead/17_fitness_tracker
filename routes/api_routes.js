// dependencies
const router = require("express").Router();
const Workout = require("../models/workout");

// /api/workouts
router.get("/workouts", (_req, res) => {
  // Find all workouts
  Workout.find({}).then((data) => {
    console.log("data[9] :>> ", data[8]);
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

module.exports = router;
