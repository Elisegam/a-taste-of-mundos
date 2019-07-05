const mongoose = require("mongoose"); // Import mongoose
const Schema = mongoose.Schema; // Assign the Schema
// const Country = require("Country");

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  region: {
    // type: String,
    // default: "Not defined"
    type: Schema.Types.ObjectId,
    ref: "countryModel"
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: false
  },

  image: {
    type: String,
    default:
      "https://images-na.ssl-images-amazon.com/images/I/61u91QNXueL._UX395_.jpg"
  }
});

const recipeModel = mongoose.model("recipeModel", RecipeSchema);
module.exports = recipeModel;
