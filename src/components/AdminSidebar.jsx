import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logout from "@/pages/Auth/Logout";
import { cn } from "@/lib/utils"; // For conditional styling

export function AdminSidebar() {
  const location = useLocation();

  const navItems = [
    { to: "/admin-dashboard", label: "Dashboard", icon: "🏠" },
    { to: "/member", label: "Add Member", icon: "➕" },
    { to: "/billing", label: "Billing", icon: "💳" },
    { to: "/manage-members", label: "Manage Members", icon: "👥" },
    { to: "/reports", label: "Reports", icon: "📊" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">☰</Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <h1 className="text-2xl font-bold text-blue-400 mb-6">🏋️ GymPro Admin</h1>

          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <SheetClose asChild key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "hover:text-blue-400 transition-colors",
                    location.pathname === item.to && "text-blue-400 font-semibold"
                  )}
                >
                  {item.icon} {item.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-700">
          <Logout />
        </div>
      </SheetContent>
    </Sheet>
  );
}
