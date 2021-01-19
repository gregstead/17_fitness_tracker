const apiRoutes = require("./api_routes");
const htmlRoutes = require("./html_routes");
const router = require("express").Router();

router.use("/api", apiRoutes);
router.use(htmlRoutes);

module.exports = router;
