import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(u => 
        u.username === values.username && 
        u.password === values.password
      );

      if (!user) throw new Error("Invalid credentials");
      
      localStorage.setItem("token", "dummy-token");
      localStorage.setItem("role", user.role);
      localStorage.setItem("user", JSON.stringify(user));
      
      if (user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/member-dashboard");
      }
      
      alert("Login successful!");
    } catch (err) {
      alert("Login failed: " + err.message);
      console.error("Login error:", err);
    }
  }

  return (
    <div className="bg-blue-100 flex items-center justify-center min-h-screen">
      <div className="bg-yellow-50 p-8 rounded-lg shadow-lg w-96">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <h1 className="text-2xl font-bold text-center mb-6">Login Form</h1>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input 
                      type="text" 
                      placeholder="Enter username" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;