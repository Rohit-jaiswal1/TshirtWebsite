const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },

  resetPasswordExpires: {
    type: Date,
  },
  token: {
    type: String,
  },
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
// module.exports = mongoose.model("User", UserSchema);








