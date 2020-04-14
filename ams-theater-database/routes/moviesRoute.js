const express = require("express");
const newMovieController = require("../controller/newMovieController");

const router = express.Router();
router.get("/all", newMovieController.getMovies);
router.get("/Detail/:id",newMovieController.detailMovie)
router.post("/add-new-movie", newMovieController.addNewMovie);

module.exports = router;
