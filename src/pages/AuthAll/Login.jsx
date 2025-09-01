import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { signInUser } from "../../api/query/userQuery";
import { useMutation } from "@tanstack/react-query";

import * as Yup from "yup";

const Login = () => {
  const loginSchema  = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),

  remember: Yup.bool(),
  });

  const submit=(values) => {
                        console.log(values);
            mutate(values);
          }

              const {mutate , isloading , error , isError} = useMutation({
        mutationKey:["signin"],
        mutationFn:signInUser,
        onSuccess: ()=>navigate("/RegistrationSuccess"),
    })

    if(isError) return <div>{error.message}</div>


  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Welcome to Crypto App
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your credentials to access the account.
        </p>
        <Formik
          initialValues={{ email: "", password: "" ,remember: false}}
          onSubmit={submit}
          
          validationSchema={loginSchema }
        >
          <Form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="name@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="••••••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <Field
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 text-[#5F00D9] focus:ring-[#5F00D9] border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>

              <Link
                to="/forgotpassword"
                className="text-[#5F00D9] font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button disabled={isloading}
              type="submit"
              className="w-full bg-[#5F00D9] text-white font-bold py-2 rounded-md hover:bg-[#4500b0] transition-colors duration-200"
            >
              Log In
            </button>
          </Form>
        </Formik>
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?
          </p>
          <Link
            to="/register"
            className="text-black px-4 py-2 rounded-md hover:bg-[#eeeef4b8] transition-colors duration-200 w-full text-center bg-[#EEEEF4]"
          >
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
