import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { addMembers } from "@/services/memberService";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Validation Schema
const formSchema = z.object({
  memberId: z.coerce.number().min(1, "Member ID must be at least 1"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  membershipType: z.enum(["Monthly", "Quarterly", "Annual"]),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  password: z.string().min(6, "Password must be 6+ characters"),
  role: z.enum(["admin", "member"])
});

const MemberForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      memberId: "",
      name: "",
      email: "",
      phone: "",
      membershipType: "",
      startDate: "",
      endDate: "",
      password: "",
      role: "member"
    },
  });

  async function onSubmit(values) {
    try {
      const data = await addMembers(values);
      toast.success("Member added successfully!");
      form.reset(); // Reset form on success
    } catch (err) {
      toast.error(err.message || "Failed to add member");
    }
  }

  return (
    <div className="bg-blue-100 flex items-center justify-center min-h-screen">
      <div className="bg-yellow-50 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Member Form</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField control={form.control} name="memberId" render={({ field }) => (
              <FormItem>
                <FormLabel>Member ID</FormLabel>
                <FormControl><Input type="number" placeholder="Enter Member ID" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            {/* Full Name */}
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl><Input type="text" placeholder="Enter Full Name" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            {/* Email Address */}
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl><Input type="email" placeholder="Enter Email Address" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            {/* Phone Number */}
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl><Input type="number" placeholder="Enter Phone Number" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            {/* Membership Type */}
            <FormField control={form.control} name="membershipType" render={({ field }) => (
              <FormItem>
                <FormLabel>Membership Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger><SelectValue placeholder="Select Membership Type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Quarterly">Quarterly</SelectItem>
                    <SelectItem value="Annual">Annual</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />

            {/* Start Date */}
            <FormField control={form.control} name="startDate" render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            {/* End Date */}
            <FormField control={form.control} name="endDate" render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            {/* Password */}
            <FormField control={form.control} name="password" render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl><Input type="password" placeholder="Enter Password" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            {/* Role */}
            <FormField control={form.control} name="role" render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger><SelectValue placeholder="Select Role" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            
            <Button type="submit" className="w-full font-bold hover:bg-blue-200 bg-blue-500">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MemberForm;