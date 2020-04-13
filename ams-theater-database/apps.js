const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const movieRouter = require("./routes/moviesRoute");

const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(movieRouter);


mongoose
  .connect("mongodb://localhost:27017/movieReviews", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(4000, () => {
      console.log(" server is running on 4000");
    });
  })
  .catch((err) => console.log(err));
