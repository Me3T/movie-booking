const express = require("express");
const controller = require("../controllers/theatre.controller");
const { restrictToRole } = require("../middlewares/auth.middleware");
const router = express.Router();

router.use(restrictToRole("admin"));

// Theatre

router.get("/theatres", controller.getAllTheatres);
router.get("/theatres/:id");
router.post("/theatres", controller.createTheatre);
router.patch("/theatres/:id");
router.delete("/theatres/:id");

router.get("/theatres/:theatreId/halls");
router.post("/theatres/:theatreId/halls");

// Movies
router.get("/movies");
router.get("/movies/:id");
router.post("/movies/");
router.patch("/movies/:id");
router.delete("/movies/:id");

module.exports = router;
