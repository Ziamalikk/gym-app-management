import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useParams, useNavigate } from "react-router-dom";
// import { getMemberById, updateMember } from "@/services/memberService";
import { toast } from "sonner"; // ✅ For success/error messages

// ✅ Validation Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  phone: z.string().min(10, { message: "Enter a valid phone number (10 digits)." }),
  membershipType: z.enum(["Monthly", "Quarterly", "Annual"], { message: "Select a membership type." }),
  startDate: z.string().min(1, { message: "Start date is required." }),
  endDate: z.string().optional(),
});

const EditMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      membershipType: "",
      startDate: "",
      endDate: "",
    },
  });

  useEffect(() => {
    const fetchMember = async () => {
      const member = await getMemberById(id);
      if (member) {
        form.reset(member);
      }
      setLoading(false);
    };
    fetchMember();
  }, [id, form]);

  const onSubmit = async (updatedData) => {
    const updatedMember = await updateMember(id, updatedData);
    if (updatedMember) {
      toast.success("Member updated successfully!");
      navigate("/members");
    } else {
      toast.error("Failed to update member.");
    }
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">✏️ Edit Member</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl><Input type="text" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl><Input type="email" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl><Input type="text" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="membershipType" render={({ field }) => (
              <FormItem>
                <FormLabel>Membership Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Membership Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Quarterly">Quarterly</SelectItem>
                    <SelectItem value="Annual">Annual</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="startDate" render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="endDate" render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              💾 Save Changes
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditMember;
