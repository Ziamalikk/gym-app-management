import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/services/authService";

// ✅ Fixed Validation Schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  async function onSubmit(values) {
    try {
      const data = await loginUser(values);
      console.log("Login Success:", data);
  
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      // ✅ Navigate to dashboard or any page if needed
  
    } catch (err) {
      console.error("Login Error:", err.message);
      alert("Login failed: " + err.message);
    }
  }
  

  return (
    <>
      <div className=" bg-blue-100 flex items-center justify-center h-screen">
      <div className="bg-yellow-50 p-8 rounded-lg shadow-lg w-96 h-80">
          <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h1 className="  flex justify-center text-2xl font-bold mb-4">Login Form</h1>

          {/* ✅ Username Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ✅ Password Field (Corrected type="password") */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ✅ Submit Button */}
          <Button type="submit" className="w-full font-bold hover:bg-blue-200  bg-blue-500 cursor-pointer">Submit</Button>
        </form>
      </Form>
      </div>
      </div>
    </>
  );
};

export default Login;
