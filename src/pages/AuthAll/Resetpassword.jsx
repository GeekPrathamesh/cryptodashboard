import { Formik, Form, Field, ErrorMessage } from "formik";
import {useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {  verifyForgottokennmail } from "../../api/query/userQuery";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
const ResetPassword = () => {

const resetSchema = Yup.object({
  newPassword: Yup.string().required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Repeat password is required"),
});

const {token} = useParams();
console.log(token);
const navigate = useNavigate();

  const { mutate , isLoading  } = useMutation({
    mutationKey: ["verify-token-sent"],
    mutationFn:verifyForgottokennmail,
    onSuccess: () => {
navigate("/passwordrestsuccess");
    },
    onError: (error) => {
      toast.error(error.message || "Sign in failed");
            navigate(`/register`);
    },

  });

  if(isLoading) return <div>Loading...</div>


const submit=(values)=>{
mutate({token , password:values.newPassword})

}


  return (
    <div className="min-h-screen bg-white flex items-center justify-center">

      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <p className="text-gray-700 mb-6">Enter your new password.</p>
  <Formik
          initialValues={{
            newPassword: "",

            repeatPassword: "",

          }}
          onSubmit={submit}
          validationSchema={resetSchema}
        >
        <Form className="space-y-4 text-left">
          <div>
            <label className="block font-semibold mb-1">New Password</label>
            <Field
              type="password"
              name="newPassword"

              placeholder="••••••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
                            <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
          </div>

          <div>
            <label className="block font-semibold mb-1">Repeat New Password</label>
            <Field
              type="password"
              name="repeatPassword"

              placeholder="••••••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
            
                            <ErrorMessage
                  name="repeatPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
          </div>

          <button disabled={isLoading}
            type="submit"
            className="w-full bg-[#5F00D9] text-white font-bold py-2 rounded-md hover:bg-[#4500b0] transition-colors duration-200"
          >
           {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
