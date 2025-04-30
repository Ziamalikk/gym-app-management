// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import MemberDashboard from "./pages/MemberDashboard";
import Login from "./pages/Auth/Login";
import Layout from "./components/Layout";
import MemberForm from "./pages/Admin/MemberForm";

import "./App.css";
import { ManageMembers } from "./pages/Admin/ManageMembers";
import Billing from "./pages/Admin/Billing";
import Reports from "./pages/Admin/Reports";
import EditMember from "./pages/Admin/EditMember";

// Mock user database in localStorage
const initializeMockData = () => {
  if (!localStorage.getItem("users")) {
// In your initializeMockData function
localStorage.setItem("users", JSON.stringify([
  {
    username: "admin",
    password: "admin123",
    role: "admin",
    name: "Admin User"
  },
  {
    memberId: 1001,
    username: "john_doe",
    password: "member123",
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    membershipType: "Monthly",
    startDate: "2024-03-01",
    endDate: "2024-04-01",
    role: "member"
  },
  {
    memberId: 1002,
    username: "alice_s",
    password: "member123",
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "9876543211",
    membershipType: "Annual",
    startDate: "2024-01-15",
    endDate: "2025-01-15",
    role: "member"
  }
]));
  }
};
initializeMockData();

// Protected Route Component
const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  
  if (!token) return <Navigate to="/login" replace />;
  if (role !== allowedRole) return <Navigate to="/" replace />;
  
  return children;
};

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<MemberForm />} />

        <Route
          path="/member-dashboard"
          element={
            <ProtectedRoute allowedRole="member">
              <MemberDashboard />
            </ProtectedRoute>
          }
        />

<Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member"
          element={
            <ProtectedRoute allowedRole="admin">
              <MemberForm />
            </ProtectedRoute>
          }
        />
       
        <Route
          path="/billing"
          element={
            <ProtectedRoute allowedRole="admin">
              <Billing/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-members"
          element={
            <ProtectedRoute allowedRole="admin">
              <ManageMembers />
            </ProtectedRoute>
          }
        />
       
       <Route
  path="/edit-member/:memberId"
  element={
    <ProtectedRoute allowedRole="admin">
      <EditMember />
    </ProtectedRoute>
  }
/>
        <Route
          path="/reports"
          element={
            <ProtectedRoute allowedRole="admin">
              <Reports />
            </ProtectedRoute>
          }
        />


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
}

export default App;