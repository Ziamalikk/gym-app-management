// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { fetchMembers } from "@/services/memberService";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import DeleteConfirmation from "@/components/DeleteConfirmation"; // ✅ Add correct path

// export function ManageMembers() {
//   const [members, setMembers] = useState([]);
//   const navigate = useNavigate(); // ✅ Hook to handle navigation

//   const getMembers = async () => {
//     const data = await fetchMembers();
//     setMembers(data);
//   };

//   useEffect(() => {
//     getMembers();
//   }, []);

//   const clickEditHandler = (memberId) => {
//     navigate(`/edit-member/${memberId}`);
//   };

//   return (
//     <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
//       <h1 className="text-2xl font-bold text-blue-800 mb-4">👥 Manage Members</h1>
//       <Table>
//         <TableCaption>List of all gym members</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Member ID</TableHead>
//             <TableHead>Full Name</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Phone</TableHead>
//             <TableHead>Type</TableHead>
//             <TableHead>Start</TableHead>
//             <TableHead>End</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {members.map((member) => (
//             <TableRow key={member.memberId}>
//               <TableCell>{member.memberId}</TableCell>
//               <TableCell>{member.name}</TableCell>
//               <TableCell>{member.email}</TableCell>
//               <TableCell>{member.phone}</TableCell>
//               <TableCell>{member.membershipType}</TableCell>
//               <TableCell>{member.startDate}</TableCell>
//               <TableCell>{member.endDate}</TableCell>
//               <TableCell className="space-x-2">
//                 <Button
//                   className="bg-blue-500 text-white"
//                   onClick={() => clickEditHandler(member.memberId)}
//                 >
//                   ✏️ Edit
//                 </Button>
//                 <DeleteConfirmation member={member} fetchMembers={getMembers} />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         {members.length === 0 && (
//           <TableFooter>
//             <TableRow>
//               <TableCell colSpan="8" className="text-center text-gray-500">
//                 No members found.
//               </TableCell>
//             </TableRow>
//           </TableFooter>
//         )}
//       </Table>
//     </div>
//   );
// }
