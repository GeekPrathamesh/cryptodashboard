import React from "react";

const PasswordResetDone = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center flex flex-col items-center ">
        <div className="mb-4"><img src="success.png" alt="success icon" /></div>
        <h2 className="text-2xl font-bold mb-2 text-[22px]">Password Reset Done</h2>
        <p className="text-[#797E82] mb-4 text-[14px] ">
          Now you can access your account.
        </p>

        <a
          href="/login"
          className="inline-block w-full bg-[#5F00D9] text-white font-bold py-2 rounded-md hover:bg-[#4500b0] transition-colors duration-200"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default PasswordResetDone;
