import { IoCloudDone } from "react-icons/io5";
import { useParams } from "react-router-dom";


const PasswordResetSent = () => {
  const {mail} =useParams();
  console.log(mail);
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center flex flex-col items-center ">
        <div className="mb-4"><IoCloudDone fontSize="45px" color="green" />
</div>
       

        <h2 className="text-2xl font-bold mb-4">Successfully Sent</h2>
        <p className="text-gray-700 mb-6">
          We have sent instructions on how to reset your password to{" "}
          <span className="font-semibold">{mail}</span>. Please follow the instructions from the email.
        </p>
      </div>
    </div>
  );
};

export default PasswordResetSent;
