// dependencies
const router = require("express").Router();
const Workout = require("../models/workout");

// /api/workouts
router.get("/workouts", (req, res) => {
  // Find all workouts
  Workout.find({})
    .then((data) => {
      // ... then add them to the response as JSON
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.put("/workouts/:id", (req, res) => {
  Workout.updateOne({ id: req.params.id }, { exercises: req.body }, (data) => {
    console.log(`id ${req.params.id} updated`);
  });
});
// router.put("/workouts", (req, res) => {
//   console.log(req.body);
// });

module.exports = router;
