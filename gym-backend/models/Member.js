
const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
  memberId: {
    type: Number,
    required: [true, "Member ID is required"],
    unique: [true, "Member ID already exists"]
  },
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"]
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
    validate: {
      validator: (v) => /^\d{10}$/.test(v),
      message: "Phone must be 10 digits"
    }
  },
  membershipType: {
    type: String,
    enum: ["Monthly", "Quarterly", "Annual"],
    required: [true, "Membership type is required"]
  },
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
    set: (v) => new Date(v)
  },
  endDate: {
    type: Date,
    set: (v) => v ? new Date(v) : undefined
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  role: {
    type: String,
    enum: ["admin", "member"],
    default: "member"
  }
}, { timestamps: true });