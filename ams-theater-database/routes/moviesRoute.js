const express = require("express");
const newMovieController = require("../controller/newMovieController");

const router = express.Router();

router.post("/add-new-movie", newMovieController.addNewMovie);

module.exports = router;
