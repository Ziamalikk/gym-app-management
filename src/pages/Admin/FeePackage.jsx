// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useState, useEffect } from "react";
// import { fetchMembers } from "@/services/memberService";

// const formSchema = z.object({
//   memberId: z.string().min(1, { message: "Select a valid member" }),
//   memberName: z.string().min(2, { message: "Member name cannot be empty" }),
// });

// const FeePackageAssignment = () => {
//   const [members, setMembers] = useState([]);
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       memberId: "",
//       memberName: "",
//       packageType: "Monthly",
//       feeAmount: 1000,
//       startDate: "",
//       endDate: "",
//     },
//   });

//   useEffect(() => {
//     fetchMembers().then(setMembers);
//   }, []);

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">📦 Assign Fee Package</h1>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit((values) => console.log(values))} className="space-y-6">
//             <FormField
//               control={form.control}
//               name="memberId"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Member ID</FormLabel>
//                   <Select
//                     onValueChange={(value) => {
//                       field.onChange(value);
//                       const selected = members.find((m) => m.memberId === value);
//                       form.setValue("memberName", selected ? selected.name : "");
//                     }}
//                     defaultValue={field.value}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select Member ID" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {members.map((member) => (
//                         <SelectItem key={member.memberId} value={member.memberId}>
//                           {member.memberId}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="memberName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Member Name</FormLabel>
//                   <FormControl>
//                     <Input type="text" {...field} readOnly />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="packageType"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Package Type</FormLabel>
//                   <Select
//                     onValueChange={(value) => {
//                       field.onChange(value);
//                       const fee = value === "Monthly" ? 1000 : value === "Quarterly" ? 2500 : 9000;
//                       form.setValue("feeAmount", fee);
//                     }}
//                     defaultValue={field.value}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select Package Type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Monthly">Monthly</SelectItem>
//                       <SelectItem value="Quarterly">Quarterly</SelectItem>
//                       <SelectItem value="Annual">Annual</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="feeAmount"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Fee Amount (₹)</FormLabel>
//                   <FormControl>
//                     <Input type="number" {...field} readOnly />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="startDate"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Start Date</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="date"
//                       {...field}
//                       onChange={(e) => {
//                         field.onChange(e.target.value);
//                         const start = new Date(e.target.value);
//                         let end = new Date(start);
//                         const type = form.getValues("packageType");
//                         if (type === "Monthly") end.setMonth(end.getMonth() + 1);
//                         else if (type === "Quarterly") end.setMonth(end.getMonth() + 3);
//                         else if (type === "Annual") end.setFullYear(end.getFullYear() + 1);
//                         form.setValue("endDate", end.toISOString().split("T")[0]);
//                       }}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="endDate"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>End Date</FormLabel>
//                   <FormControl>
//                     <Input type="date" {...field} readOnly />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
//               ✅ Assign Package
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default FeePackageAssignment;