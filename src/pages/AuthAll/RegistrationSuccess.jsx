import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  const handleEnterApp = () => {
    navigate("/dashboard"); // or wherever your app's home page is
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Hurray!</h1>
        <p className="text-gray-600 mb-6">
          You have successfully created your account. Enter the app to explore all its features.
        </p>
        <Link to="/Dashboard"><button
          onClick={handleEnterApp}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
        >
          Enter the App
        </button></Link>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
