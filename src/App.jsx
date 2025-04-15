import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import MemberForm from "./pages/Admin/MemberForm";
import Layout from "./components/Layout";  // ✅ Layout includes Navbar & Sidebar
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Reports from "./pages/Admin/Reports";
import Billing from "./pages/Admin/Billing";
import './app.css';
import MemberDashboard from "./pages/MemberDashboard";
import EditMember from "./pages/Admin/EditMember";
// import FeePackageAssignment from "./pages/Admin/FeePackage";
import FeePackageTable from "./pages/Admin/FeePackageList";
// import { ManageMembers } from "./pages/Admin/ManageMembers";

function App() {
  return (
  //   <Routes>
  //     {/* ✅ Layout wraps all pages that require Navbar & Sidebar */}
  //     <Route element={<Layout />}>
  //       <Route path="/" element={<Login />} />
  //       <Route path="/admin-dashboard" element={<AdminDashboard />} />
  //       {/* <Route path="/manage-members" element={<ManageMembers />} /> */}
  //       <Route path="/billing" element={<BillingForm />} />
  //       <Route path="/billing-report" element={<Billing />} />

  //       <Route path="/reports" element={<Reports />} />
  //       <Route path="/member" element={<MemberForm />} />
  //     </Route>
  //   </Routes>

// App.jsx
<>

{/* <Layout/> */}
{/* <Login/> */}
<MemberForm/>
{/* <MemberDashboard/> */}
{/* <Reports/> */}
{/* <AdminDashboard/> */}
{/* <Billing/> */}
{/* <BillingForm/> */}
{/* <EditMember/> */}
{/* <FeePackageAssignment/> */}
{/* <FeePackageTable/> */}
{/* <ManageMembers/> */}
    </>
  );
}


export default App;
