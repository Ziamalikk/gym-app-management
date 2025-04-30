import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AdminSidebar } from "@/components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar - Always Visible */}
      <div className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between min-h-screen">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 p-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-10">🏋️ Admin Dashboard</h1>

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-green-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle>Total Members</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">120</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">₹50,000</p>
            </CardContent>
          </Card>

          <Card className="bg-yellow-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle>Active Memberships</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">75</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-6">
          
          <Link to="/billing">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded shadow">
              💳 Generate Bill
            </Button>
          </Link>
          <Link to="/manage-members">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg rounded shadow">
              👥 Manage Members
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
