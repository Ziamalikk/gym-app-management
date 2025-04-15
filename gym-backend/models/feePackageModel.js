const mongoose = require("mongoose");
const feePackageSchema  = new mongoose.Schema({
    memberId: { type: String, required: true },  
    memberName: { type: Number, required: true },  
    packageType: { type: String,    enum: ["Monthly", "Quarterly", "Annual"], required: true, unique: true },  
    feeAmount: { type: String, required: true },  
    startDate: { type: Date, default: Date.now },  
    endDate: { type: Date, default: Date.now }  

  });
  const feePackage = mongoose.model("feePackage", feePackageSchema);

module.exports = feePackage;