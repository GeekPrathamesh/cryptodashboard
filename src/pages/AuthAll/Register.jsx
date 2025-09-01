import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from "yup";

const Register = () => {
const userSchema = Yup.object({
  name: Yup.string().required("First name is required"),
  surname: Yup.string().required("Surname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6,"Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),
  agree: Yup.bool().oneOf([true], "You must accept the terms"),
});
const navigate = useNavigate();

  const submit=(values) => {
            console.log(values);
            navigate("/RegistrationSuccess")
          }


  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Welcome to Crypto App
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Create a free account by filling data below.
        </p>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            password: "",
            repeatPassword: "",
            agree: false,
          }}
          onSubmit={submit}
          validationSchema={userSchema}
        >
          <Form className="space-y-4">
            <div className="flex flex-row gap-2">
              {" "}
              <div>
                <label className="block font-semibold mb-1">First Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="James"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Surname</label>
                <Field
                  type="text"
                  name="surname"
                  placeholder="Arthur"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div>
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

            <div>
              <label className="block font-semibold mb-1">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="••••••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Repeat Password
              </label>
              <Field
                type="password"
                name="repeatPassword"
                placeholder="••••••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <ErrorMessage
                name="repeatPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex items-center">
              <Field name="agree">
                {({ field }) => (
                  <input
                    type="checkbox"
                    {...field}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-200 border-gray-300 rounded"
                  />
                )}
              </Field>
              <label className="ml-2 text-gray-700">
                I agree with Terms & Conditions.
              </label>
            </div>
            <ErrorMessage
              name="agree"
              component="div"
              className="text-red-500 text-sm ml-6"
            />

            <button
              type="submit"
              className="w-full bg-[#D8DDE2] text-black font-bold py-2 rounded-md hover:opacity-90 transition duration-150 hover:bg-[#893eec] hover:text-white"
            >
              Create Account
            </button>
          </Form>
        </Formik>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="underline text-[#5F00D9]">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
