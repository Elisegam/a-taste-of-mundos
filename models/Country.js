const mongoose = require("mongoose"); // Import mongoose
const Schema = mongoose.Schema; // Assign the Schema

const CountrySchema = new Schema({
  flag: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/International_flag_globe.png/592px-International_flag_globe.png"
  },
  name: {
    type: String,
    default: "Not defined"
  },
  capital: { type: String },
  latlng: { type: Array }
});

const countryModel = mongoose.model("countryModel", CountrySchema);
module.exports = countryModel;
