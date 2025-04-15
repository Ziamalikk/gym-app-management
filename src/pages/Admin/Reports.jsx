import React, { useEffect, useState } from 'react';
import { fetchPayments } from '@/services/billingService';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Reports = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const getPayments = async () => {
      const data = await fetchPayments();
      setPayments(data);
    };
    getPayments();
  }, []);

  const totalRevenue = payments.reduce((sum, payment) => sum + Number(payment.amount), 0);
  const totalPayments = payments.length;
  const cashPayments = payments.filter(payment => payment.paymentMode === 'Cash').length;
  const cardPayments = payments.filter(payment => payment.paymentMode === 'Card').length;
  const onlinePayments = payments.filter(payment => payment.paymentMode === 'Online').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">📊 Reports</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-10">
        <Card className="bg-blue-500 text-white shadow-xl">
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">₹{totalRevenue}</p>
          </CardContent>
        </Card>

        <Card className="bg-green-500 text-white shadow-xl">
          <CardHeader>
            <CardTitle>Total Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{totalPayments}</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-500 text-white shadow-xl">
          <CardHeader>
            <CardTitle>Payment Modes</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Cash: {cashPayments}</p>
            <p>Card: {cardPayments}</p>
            <p>Online: {onlinePayments}</p>
          </CardContent>
        </Card>
      </div>

      {/* Billing Table */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">🧾 Detailed Billing</h2>
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
                <TableCell colSpan="8" className="text-center text-gray-500">
                  No payments found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Reports;