const express = require("express");
const router = express.Router();
const Payment = require("../models/paymentModel");

// ✅ GET all payments
router.get("/", async (req, res) => {
    try {
        const payments = await Payment.find().populate("memberId", "name email");
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});

// ✅ POST a new payment
router.post("/", async (req, res) => {
    try {
        const newPayment = new Payment(req.body);
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(400).json({ message: "Error adding payment", error });
    }
});

// ✅ PUT (Update a payment)
router.put("/:id", async (req, res) => {
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(400).json({ message: "Error updating payment", error });
    }
});

// ✅ DELETE a payment
router.delete("/:id", async (req, res) => {
    try {
        await Payment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Payment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting payment", error });
    }
});

module.exports = router;
