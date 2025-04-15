import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h2 className="text-xl font-bold">Gym Management</h2>
      <div className="flex space-x-4">
    
        <Link to="/" className="hover:underline">Login</Link>
        <Link to="/billing" className="hover:underline">Billing</Link>
        <Link to="/member" className="hover:underline">Member Registration</Link>
        <Link to="/logout" className="text-red-400 hover:underline">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
