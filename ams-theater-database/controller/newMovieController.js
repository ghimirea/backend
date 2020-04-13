const MoviesSchema = require("../models/movieSchema");

exports.addNewMovie = (req, res, next) => {
  console.log(req.body);

  const newMovie = new MoviesSchema({
    movie_title: req.body.movie_title,
    image: req.body.image,
    year: req.body.year,
    movie_type: req.body.movie_type,
    company: req.body.company,
    director: req.body.director,
    script_writer:req.body.script_writer,
    main_star: req.body.main_star,
    co_star: req.body.co_star,
    description: req.body.description
  });

  newMovie
    .save()
    .then((response) => {
      res.status(200).json("New Movie Successfully Added");
      console.log(response);
    })
    .catch((err) => {
      res.status(400).send("couldn't add movies");
    });
};

