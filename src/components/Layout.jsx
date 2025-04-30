import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";  // ✅ Import Navbar
import { Menubar } from "@radix-ui/react-menubar";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
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
          <button
            className="bg-blue-600 cursor-pointer hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-green-600 cursor-pointer hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Layout;
