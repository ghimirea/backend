const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myMovie = new Schema({
  movie_title: { type: String, required: true },
  image: { type: String, required: true },
  year: { type: Number, required: true },
  movie_type: { type: String, required: true },
  company: { type: String, required: true },
  director: { type: String, required: true },
  script_writer: { type: String, required: true },
  main_star: { type: String, required: true },
  co_star: { type: String, required: true },
  description: { type: String, required: true },
  comments: [
    {
      author: { userId: { type: mongoose.Types.ObjectId }, userName: "" },
      userComment: { type: String, default: "" },
      date: { type: Date, default: Date.now },
    },
  ],
});

myMovie.method.userComment = function (item) {
  let comment = this.comments;
  comment.push({
    author: { userId: "", userName: "" },
    userComment: "",
    date: Date,
  });
  return this.save();
};

module.exports = mongoose.model("movies", myMovie);
