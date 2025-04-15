import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";  // ✅ Import Navbar
import { Menubar } from "@radix-ui/react-menubar";

const Layout = () => {
  return (
    <>
<img src="https://plus.unsplash.com/premium_photo-1670505059783-806c0708bb31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-screen h-screen object-cover"/>
<div className="absolute top-6 left-6 flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/80" // Replace with actual logo
          alt="Gym Logo"
          className="w-20 h-20 rounded-full border-2 border-white shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-blue-500">FitZone Gym</h1>
      </div>

{/* Motivational Content - Positioned Right Side */}
<div className="absolute top-1/4 right-6 p-6 text-white text-right space-y-6">
        {/* Motivational Slogan */}
        <h2 className="text-5xl italic font-bold text-blue-900">Stay Fit, Don't Quit!</h2>

        {/* Motivational Lines */}
        <p className="text-lg leading-relaxed max-w-md font-extrabold font-serif text-blue-600">
        Your body is stronger than you think—push beyond limits.
Every drop of sweat is a step toward greatness.
Pain is temporary, but strength lasts forever.
Success starts when excuses end.
Transform your hustle into muscle.
Be better than yesterday, stronger than ever.
Consistency is the key to unlocking your potential.
Start now, because your future self will thank you!
        </p>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="bg-blue-600 cursor-pointer hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
            Login
          </button>
          <button className="bg-green-600 cursor-pointer hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
            Register
          </button>
        </div>
      </div>


  
    
      </>
  );
};

export default Layout;
