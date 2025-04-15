const express = require("express");
const router = express.Router();
const FeePackage = require("../models/feePackageModel"); // Import the model

// ✅ GET all fee packages
router.get("/", async (req, res) => {
  try {
    const packages = await FeePackage.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});

// ✅ POST a new fee package
router.post("/", async (req, res) => {
  try {
    const newPackage = new FeePackage(req.body); // Get data from frontend
    const savedPackage = await newPackage.save(); // Save to DB
    res.status(201).json(savedPackage);
  } catch (error) {
    res.status(400).json({ message: "Error saving data", error });
  }
});

// ✅ PUT (update) a fee package
router.put("/:id", async (req, res) => {
  try {
    const updated = await FeePackage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating data", error });
  }
});

// ✅ DELETE a fee package
router.delete("/:id", async (req, res) => {
  try {
    await FeePackage.findByIdAndDelete(req.params.id);
    res.json({ message: "Fee package deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting data", error });
  }
});

module.exports = router;
