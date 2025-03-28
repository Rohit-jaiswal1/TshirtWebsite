const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware,
} = require("../../controllers/auth/auth-controller");

const {resetPasswordToken,resetPassword}=require("../../controllers/shop/ResetPassword");
const { sendotp,
  changePassword}= require("../../controllers/auth/auth-controller")
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/sendotp", sendotp)

// Route for Changing the password


router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
    message: "Authenticated user!",
  });
});

router.post("/changepassword", changePassword)
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)

module.exports = router;
