import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { fetchFeePackages } from "@/services/feeServices";

const FeePackageTable = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPackages = async () => {
      const data = await fetchFeePackages();
      setPackages(data);
    };
    getPackages();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          📦 Assigned Fee Packages
        </h1>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-100">
                <TableHead>Member ID</TableHead>
                <TableHead>Member Name</TableHead>
                <TableHead>Package Type</TableHead>
                <TableHead>Fee Amount (₹)</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {packages.length > 0 ? (
                packages.map((pkg) => (
                  <TableRow key={pkg.packageId}>
                    <TableCell>{pkg.memberId}</TableCell>
                    <TableCell>{pkg.memberName}</TableCell>
                    <TableCell>{pkg.packageType}</TableCell>
                    <TableCell>₹{pkg.feeAmount}</TableCell>
                    <TableCell>{pkg.startDate}</TableCell>
                    <TableCell>{pkg.endDate}</TableCell>
                    <TableCell className="flex flex-col md:flex-row gap-2">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3"
                        onClick={() => navigate(`/edit-fee-package/${pkg.packageId}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        className="px-3"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="7" className="text-center py-6 text-gray-500">
                    No fee packages assigned.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default FeePackageTable;
