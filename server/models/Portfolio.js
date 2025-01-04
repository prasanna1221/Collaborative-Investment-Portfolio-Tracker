const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  assets: [
    {
      ticker: { type: String },
      quantity: { type: Number },
      currentPrice: { type: Number },
      totalValue: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
