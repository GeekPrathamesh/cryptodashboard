
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { verifyUsermailregister } from "../../api/query/userQuery";
import toast from "react-hot-toast";


const RegistrationSuccess = () => {
const {token} = useParams()
console.log(token);
const navigate = useNavigate();

  const { isLoading , isSuccess , data } = useQuery({
    queryKey: ["verify-token-sent"],
    queryFn: ()=>verifyUsermailregister({token}),
    onSuccess: () => {

    },
    onError: (error) => {
      toast.error(error.message || "Sign in failed");
            navigate(`/register`);
    },
    enabled: !!token
  });

  if(isLoading) return <div>Loading...</div>
  const handleEnterApp = () => {
    navigate("/dashboard"); // or wherever your app's home page is
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isSuccess && <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full">
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
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{data.message}</h1>
        <p className="text-gray-600 mb-6">
          You have successfully created your account. Enter the app to explore all its features.
        </p>
        <button
          onClick={handleEnterApp}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
        >
          Enter the App
        </button>
      </div>}
    </div>
  );
};

export default RegistrationSuccess;
