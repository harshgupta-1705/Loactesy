const mongoose = require("mongoose");

const buyPropertySchema = new mongoose.Schema(
  {
    link: String,
    name: String,
    location: String,
    rooms: String,
    priceRange: String,
    owner: String,
    description: String,
    status: String,
  },
  {
    strict: true,
  }
);

const BuyPropertySchema = mongoose.model("Buy Property", buyPropertySchema);
module.exports = BuyPropertySchema;
