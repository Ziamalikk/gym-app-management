const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // ✅ Import JWT
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

// 👉 POST /api/register
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log("⚠️ Registration failed: Username already exists -", username); 
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    console.log("✅ User registered:", newUser.username);
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 👉 POST /api/login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      console.log("❌ Login failed: No user found with username -", username);
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Login failed: Wrong password for user -", username);
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // ✅ Create JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    console.log("✅ User logged in:", username);
    res.status(200).json({ message: "Login successful!", token }); // 👈 Send token to frontend
  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
