import React, { useEffect, useState } from "react";
import { fetchPayments } from "@/services/billingService";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AdminSidebar } from "@/components/AdminSidebar";

const Billing = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const getPayments = async () => {
      const data = await fetchPayments();
      setPayments(data);
    };
    getPayments();
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between min-h-screen">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 p-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">💳 Billing Transactions</h1>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>All Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Member ID</TableHead>
                  <TableHead>Member Name</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment Date</TableHead>
                  <TableHead>Payment Mode</TableHead>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.length > 0 ? (
                  payments.map((payment) => (
                    <TableRow key={payment.paymentId}>
                      <TableCell>{payment.paymentId}</TableCell>
                      <TableCell>{payment.memberId}</TableCell>
                      <TableCell>{payment.memberName}</TableCell>
                      <TableCell>₹{payment.amount}</TableCell>
                      <TableCell>{payment.paymentDate}</TableCell>
                      <TableCell>{payment.paymentMode}</TableCell>
                      <TableCell>{payment.transactionId || "N/A"}</TableCell>
                      <TableCell>{payment.remarks || "N/A"}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan="8" className="text-center">
                      No payments found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Billing;
