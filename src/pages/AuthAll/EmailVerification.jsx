import { useMutation } from "@tanstack/react-query";
import { IoMail } from "react-icons/io5";
import { useLocation, useParams } from "react-router-dom";
import { sendverificationmail } from "../../api/query/userQuery";
import toast from "react-hot-toast";
import { useEffect } from "react";

const EmailVerification = () => {

  const {email} = useParams();



  // Mutation for sending email
  const { mutate: sendMail, isLoading  } = useMutation({
    mutationFn: () => sendverificationmail({ email }),
    onSuccess: () => toast.success("Verification mail sent!"),
    onError: (error) => toast.error(error?.response?.data?.message || error.message || "Mail sending failure"),
  });

  // Send verification email on mount
  useEffect(() => {
    if (email) sendMail();
  }, [email]);

  // Mutation for re-sending email
  const { mutate: resend, isLoading: isResending } = useMutation({
    mutationFn: () => sendverificationmail({ email }),
    onSuccess: () => toast.success("Verification mail re-sent!"),
    onError: (error) => toast.error(error?.response?.data?.message || error.message || "Failed to resend email"),
  });

  if (!email)
    return <div className="flex items-center justify-center">Invalid email, sign in again</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center flex flex-col items-center gap-2">
        <IoMail className="text-5xl text-[#5F00D9]" />
        <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
        <p className="text-gray-700 mb-6">
          We have sent you an email verification to <span className="font-semibold">{email}</span>.
        </p>
        <p className="text-gray-600 mb-6">If you didn’t receive it, click the button below.</p>
        <button
          onClick={resend}
          disabled={isResending}
          className="w-full bg-[#5F00D9] text-white font-bold py-2 rounded-md hover:bg-[#4500b0] transition-colors duration-200 disabled:opacity-50"
        >
          {isResending ? "Resending..." : "Re-Send Email"}
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
