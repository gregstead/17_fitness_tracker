// dependencies
const router = require("express").Router();
const Workout = require("../models/");

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
  console.log(req.body);
});
// router.put("/workouts", (req, res) => {
//   console.log(req.body);
// });

module.exports = router;
