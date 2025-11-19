import React, { use, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../assets/Firebase/firebase.init";

const SignUp = () => {
  const { CreateUser, updateProfileInfo, GoogleSignIN } = use(AuthContext);
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [error, setError] = useState("");

  const passwordUpperCase = /(?=.*[A-Z])/;
  const passwordLowerCase = /(?=.*[a-z])/;
  const passwordSpecialChar = /(?=.*[^a-zA-Z0-9])/;

  const HandleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 character long");
      return;
    }
    if (!passwordUpperCase.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    }
    if (!passwordLowerCase.test(password)) {
      setError("Must have a Lowercase letter in the password");
      return;
    }
    if (!passwordSpecialChar.test(password)) {
      setError("Must have a special character in the password");
      return;
    }
    if (confirmPassword !== password) {
      setError("Password didn't matched...! Confirm Password again.");
      // toast.error(`Password didn't matched...! Confirm Password again.`);
      e.target.confirmPassword.value = "";
      return;
    }

    toast.success("Creating account...");

    CreateUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfileInfo(name, photoUrl)
          .then(async () => {
            await auth.currentUser.reload();
            // console.log("Profile Updated");
            navigate("/");
          })
          .catch(() => {
            // console.log("Couldn't Update profile");
          });
      })
      .catch((error) => {
        // console.log(error);
        if (error.message == "Firebase: Error (auth/email-already-in-use).")
          toast.error("Email Already in Use");
        else toast.error(error.message);
      });
  };

  const HandleGoogleLogIn = () => {
    GoogleSignIN()
      .then((result) => {
        // console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-lg bg-white p-8 md:p-10 rounded-xl shadow-2xl border-t-4 border-emerald-500 space-y-3">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us and start mastering new skills today.
          </p>
        </div>

        <form className="space-y-3" onSubmit={HandleRegister}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                name="name"
                type="text"
                placeholder="Your name Here"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address<span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <div className="mt-1">
              <input
                name="photoUrl"
                type="photoUrl"
                placeholder="URL of The Photo Here"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password<span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative">
              <input
                name="password"
                type={eye ? "text" : "password"}
                placeholder="Create a strong password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
              <div
                className="absolute top-3 right-2"
                onClick={() => setEye(!eye)}
              >
                {!eye ? <IoEye /> : <IoMdEyeOff />}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                name="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 font-semibold text-sm">{error}</div>
          )}

          <div className="mt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150"
            >
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-400 h-px"></div>
          <div>or</div>
          <div className="w-full bg-gray-400 h-px"></div>
        </div>

        <div>
          <button
            className="btn border-[#e5e5e5] w-full rounded-lg bg-black text-white hover:text-yellow-400"
            onClick={HandleGoogleLogIn}
          >
            <FaGoogle />
            Sign In with Google
          </button>
        </div>

        <div className="text-center pt-2">
          <p className="text-sm text-gray-600">
            Already have an account?
            <a
              href="/log-in"
              className="font-medium text-emerald-600 hover:text-emerald-500 ml-1"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
