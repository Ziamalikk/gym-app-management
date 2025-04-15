// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { addPayment, fetchPayments } from "@/services/billingService";
// import { toast } from "sonner";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useState, useEffect } from "react";
// import { fetchMembers } from "@/services/memberService";

// const formSchema = z.object({
//   memberId: z.string().min(2, { message: "Please select a valid Member ID." }),
//   memberName: z.string().min(2, { message: "Member name cannot be empty." }),
//   amount: z.coerce.number().min(1, { message: "Enter a valid amount greater than 0." }),
//   paymentDate: z.string().min(1, { message: "Please select a valid payment date." }),
//   paymentMode: z.enum(["Cash", "Card", "Online"], { message: "Please select a payment mode." }),
//   transactionId: z.string().min(5, { message: "Enter a valid transaction ID." }).optional(),
//   remarks: z.string().max(250, { message: "Remarks should be under 250 characters." }).optional(),
// });

// const BillingForm = () => {
//   const [payments, setPayments] = useState([]);
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     const getMembers = async () => {
//       const data = await fetchMembers();
//       setMembers(data);
//     };
//     getMembers();
//   }, []);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       memberId: "",
//       memberName: "",
//       amount: 0,
//       paymentDate: "",
//       paymentMode: "",
//       transactionId: "",
//       remarks: "",
//     },
//   });

//   const onSubmit = async (values) => {
//     const newPayment = await addPayment(values);
//     if (newPayment) {
//       toast.success("Payment added successfully!");
//       form.reset();
//       const updatedPayments = await fetchPayments();
//       setPayments(updatedPayments);
//     } else {
//       toast.error("Failed to add payment.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
//       <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">💳 Billing Form</h1>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <FormField
//               control={form.control}
//               name="memberId"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Member ID</FormLabel>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select Member ID" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {members.map((member) => (
//                         <SelectItem key={member.memberId} value={member.memberId}>
//                           {member.memberId} - {member.name}
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
//                     <Input type="text" placeholder="Enter Member Name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="amount"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Amount (₹)</FormLabel>
//                   <FormControl>
//                     <Input type="number" placeholder="Enter Amount" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="paymentDate"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Payment Date</FormLabel>
//                   <FormControl>
//                     <Input type="date" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="paymentMode"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Payment Mode</FormLabel>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select Payment Mode" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Cash">Cash</SelectItem>
//                       <SelectItem value="Card">Card</SelectItem>
//                       <SelectItem value="Online">Online</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="transactionId"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Transaction ID</FormLabel>
//                   <FormControl>
//                     <Input type="text" placeholder="Enter Transaction ID (if applicable)" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="remarks"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Remarks</FormLabel>
//                   <FormControl>
//                     <Input type="text" placeholder="Enter Remarks (Optional)" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-lg">
//               Submit Payment
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default BillingForm;
