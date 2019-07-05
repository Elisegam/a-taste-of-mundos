const mongoose = require("mongoose"); // Import mongoose
const Schema = mongoose.Schema; // Assign the Schema

const CommentSchema = new Schema({
  username: {
    type: String
  },
  comment: {
    type: String
  }
});

const comment = mongoose.model("comment", CommentSchema);
module.exports = comment;
