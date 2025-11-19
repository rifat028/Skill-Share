import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.jpg";
import "./NavBAr.css";
import { AuthContext } from "../../Context/AuthContext";

const NavBar = () => {
  const navigate = useNavigate();

  const { user, logOutUser, loading } = use(AuthContext);
  // console.log(user?.photoURL || null);

  const HandleLogOut = () => {
    logOutUser()
      .then(() => console.log("Sign Out Successful"))
      .catch((error) => console.log(error));
  };
  if (!loading)
    return (
      <div className="navbar bg-base-200 shadow-sm md:px-10 sticky top-0 z-50">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/my-profile">Profile</NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="text-xl" to="/">
            <div className="flex items-center justify-between gap-2">
              <div className="rounded-full">
                <img className="rounded-full h-4 md:h-8" src={logo} alt="" />
              </div>
              <div className="font-bla md:font-black">Skill Share</div>
            </div>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile">Profile</NavLink>
            </li>
          </ul>
        </div>

        {user ? (
          <div className="navbar-end flex gap-2">
            <button
              className="btn rounded-3xl bg-blue-700 hover:bg-blue-800 text-white font-bold"
              onClick={() => {
                // navigate("/log-in");
                HandleLogOut();
              }}
            >
              Log Out
            </button>
            <div className="rounded-full h-10">
              <img
                className="rounded-full h-full border-2 border-white ring-1 ring-indigo-400"
                src={user.photoURL}
                title={user.displayName}
              />
            </div>
          </div>
        ) : (
          <div className="join navbar-end">
            <button
              className="btn join-item rounded-l-3xl bg-blue-700 hover:bg-blue-800 text-white font-bold"
              onClick={() => navigate("/log-in")}
            >
              Log In
            </button>
            <button
              className="btn join-item rounded-r-3xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    );
};

export default NavBar;
