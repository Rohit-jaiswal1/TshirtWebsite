const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tshirtId: { type: mongoose.Schema.Types.ObjectId, ref: 'TShirt' },
  designData: { type: String, required: true }, // Base64 image or canvas data
  createdAt: { type: Date, default: Date.now },
});

const Design = mongoose.model('Design', designSchema);

module.exports = Design;







// const mongoose = require('mongoose');

// const designSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   image: { type: String },
//   color: { type: String },
//   fontSize: { type: String },
//   position: { type: Object }, 
// });

// module.exports = mongoose.model('Design', designSchema);