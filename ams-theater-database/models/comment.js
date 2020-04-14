const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId: { type: Schema.ObjectId },
    date: { type: Date, default: Date.now },
    userComment: { type: String, default: "" },
});

module.exports = mongoose.model("Comments", commentSchema);
