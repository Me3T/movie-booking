const express = require("express");
const theatreController = require("../controllers/theatre.controller");
const movieController = require("../controllers/movie.controller");
const { restrictToRole } = require("../middlewares/auth.middleware");
const router = express.Router();

router.use(restrictToRole("admin"));

// Theatre

router.get("/theatres", theatreController.getAllTheatres);
router.get("/theatres/:id", theatreController.getTheatreById);
router.post("/theatres", theatreController.createTheatre);
router.patch("/theatres/:id");
router.delete("/theatres/:id");

router.get(
  "/theatres/:theatreId/halls",
  theatreController.getTheatreHallsByTheatreId
);
router.post("/theatres/halls", theatreController.createTheatreHall);

//Theatre Hall movie mapping

router.get("/shows/:movieId", theatreController.listShowsByMovieId);
router.post("/shows", theatreController.createShow);

// Movies
router.get("/movies", movieController.getAllMovies);
router.get("/movies/:id", movieController.getMovieById);
router.post("/movies/", movieController.createMovie);
router.patch("/movies/:id");
router.delete("/movies/:id");

module.exports = router;
