import React from "react";
import { IoMail } from "react-icons/io5";

const EmailVerification = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center flex flex-col items-center gap-2">
        <IoMail fontSize="40px" color="#5F00D9" />

        <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
        <p className="text-gray-700 mb-6">
          We have sent you an email verification to{" "}
          <span className="font-semibold">jenny.wilson@gmail.com</span>.
        </p>
        <p className="text-gray-600 mb-6">
          If you didn’t receive it, click the button below.
        </p>

        <button
          className="w-full bg-[#5F00D9] text-white font-bold py-2 rounded-md hover:bg-[#4500b0] transition-colors duration-200"
        >
          Re-Send Email
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
