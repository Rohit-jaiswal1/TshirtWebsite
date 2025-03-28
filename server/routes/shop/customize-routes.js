const express = require('express');
const TshirtDesign = require('../../models/TshirtDesign'); // Path to your model
const router = express.Router();

router.post('/api/tshirts/save', async (req, res) => {
  const { userId, productId, design } = req.body;

  // Validate if all required fields are present
  if (!userId || !productId || !design) {
    return res.status(400).json({ message: "Missing required fields: userId, productId, or design" });
  }

  try {
    // Create a new TshirtDesign instance
    const newDesign = new TshirtDesign({
      userId,
      productId,
      design,
    });

    // Save the design to the database
    await newDesign.save();

    // Send success response
    res.status(200).json({ message: 'Design saved successfully!', design: newDesign });
  } catch (error) {
    // Handle error
    console.error("Error saving design:", error);
    res.status(500).json({ error: 'Failed to save design.' });
  }
});

module.exports = router;