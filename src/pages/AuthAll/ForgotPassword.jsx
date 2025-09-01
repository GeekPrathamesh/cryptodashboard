import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";


import * as Yup from "yup";

const ForgotPassword = () => {
  const passwordSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });


    const submit=(values) => {
            console.log(values);

          }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center flex flex-col">
        <Link to="/login">
          <IoMdArrowBack fontSize="1.5rem" className="cursor-pointer" />
        </Link>

        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <p className="text-gray-700 mb-6">
          Enter your email address for which account you want to reset your
          password.
        </p>
        <Formik
          initialValues={{

            email: "",

          }}
          onSubmit={submit}
          validationSchema={passwordSchema}
        >
          <Form className="space-y-4">
            <div className="text-left">
              <label className="block font-semibold mb-1">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="name@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                
              />
                             <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
            </div>

            <Link to="/PasswordResetSent">
              <button
                type="submit"
                className="w-full bg-[#5F00D9] text-white font-bold py-2 rounded-md hover:bg-[#4500b0] transition-colors duration-200"
              >
                Reset Password
              </button>
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
