const mongoose = require('mongoose');

const tshirtDesignSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  design: [
    {
      type: { type: String, required: true },  // 'text' or 'image'
      content: { type: String, required: true },  // Text or image URL
      x: { type: Number, default: 0 },  // Position X
      y: { type: Number, default: 0 },  // Position Y
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const TshirtDesign = mongoose.model('TshirtDesign', tshirtDesignSchema);

module.exports = TshirtDesign;