import React from "react";
import { Button } from "@/components/ui/button";

const MemberDashboard = () => {
  // Dummy data (replace with API/fetch later)
  const member = {
    name: "John Doe",
    membershipType: "Monthly",
    startDate: "2025-04-01",
    endDate: "2025-05-01",
    lastPayment: {
      amount: 1000,
      date: "2025-03-28",
      mode: "UPI",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex flex-col items-center">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-3xl mb-8">
        <h1 className="text-3xl font-bold text-blue-800 animate-fade-in">
          Welcome, {member.name} 👋
        </h1>
        <Button className="bg-red-500 hover:bg-red-600">Logout</Button>
      </div>

      {/* Dashboard Cards in Column */}
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        {/* Membership Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 h-52 border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold mb-4">📋 Membership Details</h2>
          <p><strong>Type:</strong> {member.membershipType}</p>
          <p><strong>Start Date:</strong> {member.startDate}</p>
          <p><strong>End Date:</strong> {member.endDate}</p>
        </div>

        {/* Last Payment Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 h-52 border-l-4 border-green-500">
          <h2 className="text-xl font-semibold mb-4">💰 Last Payment</h2>
          <p><strong>Amount:</strong> ₹{member.lastPayment.amount}</p>
          <p><strong>Date:</strong> {member.lastPayment.date}</p>
          <p><strong>Mode:</strong> {member.lastPayment.mode}</p>
        </div>
      </div>

      {/* Renewal Reminder */}
      <div className="mt-8 text-center text-yellow-700 font-medium">
        🔔 Your package ends on <strong>{member.endDate}</strong>. Renew soon!
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <Button className="bg-blue-600 text-white px-6 py-3 text-lg rounded hover:bg-blue-700">
          View Full Billing History
        </Button>
      </div>
    </div>
  );
};

export default MemberDashboard;
