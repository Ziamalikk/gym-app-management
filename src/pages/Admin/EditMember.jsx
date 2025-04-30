import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const EditMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const form = useForm({
    defaultValues: {
      memberId: 0,
      name: "",
      email: "",
      phone: "",
      membershipType: "Monthly",
      startDate: "",
      endDate: "",
      password: "",
      role: "member"
    }
  });

  // Load user from localStorage
  useEffect(() => {
    const fetchMember = () => {
      try {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const member = users.find((u) => u.memberId === Number(id));

        if (member) {
          form.reset({
            ...member,
            startDate: member.startDate?.split("T")[0] || "",
            endDate: member.endDate?.split("T")[0] || ""
          });
        } else {
          toast.error("Member not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error loading member:", error);
        toast.error("Error loading member data");
        setLoading(false);
      }
    };

    fetchMember();
  }, [id, form]);

  const onSubmit = (updatedData) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const index = users.findIndex((u) => u.memberId === Number(id));
      if (index === -1) {
        toast.error("Member not found");
        return;
      }

      // Keep old password if empty
      if (!updatedData.password) {
        updatedData.password = users[index].password;
      }

      users[index] = { ...users[index], ...updatedData };

      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Member updated successfully!");
      console.log("updated");
      
      navigate("/manage-members");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update member");
    }
  };

  if (loading) return <div className="text-center p-8">Loading member data...</div>;

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">✏️ Edit Member</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField name="memberId" control={form.control} render={({ field }) => (
              <Input type="hidden" {...field} />
            )} />

            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Full name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="Email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="phone" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="membershipType" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Membership Type</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
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

            <FormField name="startDate" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="endDate" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="password" control={form.control} render={({ field }) => (
              <Input type="hidden" {...field} />
            )} />

            <FormField name="role" control={form.control} render={({ field }) => (
              <Input type="hidden" {...field} />
            )} />

            <div className="flex gap-4 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/manage-members")}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditMember;
