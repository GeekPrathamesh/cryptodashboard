
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";


import * as Yup from "yup";
import { forgotpasswordEmailsent } from "../../api/query/userQuery";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";

const ForgotPassword = () => {

  const [mail , setmail]=useState();

  const passwordSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const navigate = useNavigate()


  const { mutate, isLoading } = useMutation({
    mutationKey: ["Register"],
    mutationFn: forgotpasswordEmailsent,
    onSuccess: () => {
      navigate(`/passwordresetsent/${mail}`);
    },
    onError: (error) => {
      toast.error(error.message || "Sign in failed");
    },
  });


    const submit=(values) => {
      setmail(values.email);
            mutate({email:values.email})

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

       
              <button disabled={isLoading}
                type="submit"
                className="w-full bg-[#5F00D9] text-white font-bold py-2 rounded-md hover:bg-[#4500b0] transition-colors duration-200"
              >
                {isLoading ? "Sending..." : "Reset Password"}
              </button>
          
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
