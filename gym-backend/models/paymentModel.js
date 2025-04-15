const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
    memberName: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, required: true },
    paymentMode: { type: String, enum: ["Cash", "Card", "Online"], required: true },
    transactionId: { type: String, required: function () { return this.paymentMode === "Online"; } },
    remarks: { type: String, maxlength: 250 }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
