const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// ✅ Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;


// ✅ Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enables frontend communication

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/gym-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Import Routes
const memberRoutes = require("./routes/memberRoutes");
app.use("/api/members", memberRoutes); // Links /api/members to member routes
// const memberRoutes = require("./routes/members");
// app.use("/api/members", memberRoutes);
// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));