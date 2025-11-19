import React, { use, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const ResetPassword = () => {
  const { resetEmail, HandleForgetPassword } = use(AuthContext);
  const newResetEmailRef = useRef(null);
  const navigate = useNavigate();
  // console.log(resetEmail);

  const HandleReset = () => {
    const email = newResetEmailRef?.current?.value || resetEmail;
    if (email) {
      // console.log(email);
      HandleForgetPassword(email)
        .then(() => {
          // console.log("Password Reset successful");
          window.open("https://mail.google.com/", "_blank");
          navigate("/log-in");
        })
        .catch((error) => {
          // console.log(error.message);
          if (error.message == "Firebase: Error (auth/invalid-email).")
            toast.error("Invalid Email");
        });
    } else {
      toast.error("Enter a valid Email");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-start items-center pt-20 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-2xl border-t-4 border-indigo-500">
        <form className="mt-8 space-y-6">
          <label className="text-gray-600 pl-1">Email address</label>
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              type="email"
              required
              ref={newResetEmailRef}
              className="appearance-none rounded-lg relative block w-full pl-3 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
              placeholder={resetEmail || "Enter email address"}
            />
          </div>

          <div>
            <button
              type="button"
              onClick={HandleReset}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 shadow-lg"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
