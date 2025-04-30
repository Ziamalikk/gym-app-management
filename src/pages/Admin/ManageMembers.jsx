// ManageMembers.jsx
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

export function ManageMembers() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  // Load members from localStorage
  useEffect(() => {
    const loadMembers = () => {
      try {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        // Filter members and add missing fields
        const memberUsers = users
          .filter(user => user.role === "member")
          .map(member => ({
            memberId: member.memberId || 'N/A',
            name: member.name || 'Unknown',
            email: member.email || 'No email',
            phone: member.phone || 'No phone',
            membershipType: member.membershipType || 'Unknown',
            startDate: member.startDate || 'Unknown',
            endDate: member.endDate || 'Unknown'
          }));
        setMembers(memberUsers);
      } catch (error) {
        console.error("Error loading members:", error);
        setMembers([]);
      }
    };

    loadMembers();
    window.addEventListener("storage", loadMembers);
    return () => window.removeEventListener("storage", loadMembers);
  }, []);

  const clickEditHandler = (memberId) => {
    navigate(`/edit-member/${memberId}`);
  };

  const handleDelete = (memberId) => {
    const updatedUsers = members.filter(member => member.memberId !== memberId);
    localStorage.setItem("users", JSON.stringify([
      ...updatedUsers,
      // Keep admin user
      JSON.parse(localStorage.getItem("users")).find(u => u.role === "admin")
    ]));
    setMembers(updatedUsers);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">👥 Manage Members</h1>
      <Table>
        <TableCaption>List of all gym members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Member ID</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Start</TableHead>
            <TableHead>End</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.memberId}>
              <TableCell>{member.memberId}</TableCell>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.phone}</TableCell>
              <TableCell>{member.membershipType}</TableCell>
              <TableCell>{member.startDate}</TableCell>
              <TableCell>{member.endDate}</TableCell>
              <TableCell className="space-x-2">
                <Button
                  className="bg-blue-500 text-white"
                  onClick={() => clickEditHandler(member.memberId)}
                >
                  ✏️ Edit
                </Button>
                <Button
                  className="bg-red-500 text-white"
                  onClick={() => handleDelete(member.memberId)}
                >
                  🗑️ Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
        {members.length === 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan="8" className="text-center text-gray-500">
                No members found. Add some members first!
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
}