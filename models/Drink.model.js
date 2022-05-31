const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  drinkInStock: Boolean,
  containsCaffeine: Boolean,
  volume: Number,
  description: String,
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
