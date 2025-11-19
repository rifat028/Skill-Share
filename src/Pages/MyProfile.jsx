import React, { use, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyProfile = () => {
  const { user, updateProfileInfo } = use(AuthContext);

  const nameRef = useRef(null);
  const urlRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = () => {
    if (isEditing) {
      const name = nameRef.current.value || user.displayName;
      const photoUrl = urlRef.current.value || user.photoURL;

      updateProfileInfo(name, photoUrl)
        .then(() => {
          // console.log("Profile Updated");
          setIsEditing(false);
          window.location.reload();
        })
        .catch(() => {
          // console.log("Couldn't Update profile");
        });
    } else {
      setIsEditing(true);
      // console.log("Entering edit mode...");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start md:items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-xl shadow-2xl space-y-8 border-t-4 border-indigo-600">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">My Profile</h2>
          <p className="mt-2 text-sm text-gray-500">
            View and manage your personal details.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img
              className="h-32 w-32 rounded-full object-cover shadow-lg border-4 border-white ring-2 ring-indigo-500"
              src={user.photoURL}
            />
            <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"></span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-500 block mb-1">
              User Name
            </label>
            {isEditing ? (
              <input
                className="px-4 py-3 w-full bg-indigo-50 border border-indigo-200 rounded-lg text-gray-800 font-semibold shadow-inner"
                ref={nameRef}
                type="text"
                name="UserName"
                placeholder="Update Name"
              />
            ) : (
              <div className="px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg text-gray-800 font-semibold shadow-inner">
                {user.displayName}
              </div>
            )}
          </div>

          {isEditing || (
            <div>
              <label className="text-sm font-medium text-gray-500 block mb-1">
                Email Address
              </label>
              <div className="px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg text-gray-800 shadow-inner overflow-hidden truncate">
                {user.email}
              </div>
            </div>
          )}

          {isEditing && (
            <div>
              <label className="text-sm font-medium text-gray-500 block mb-1">
                Image Url
              </label>
              <input
                className="px-4 py-3 w-full bg-indigo-50 border border-indigo-200 rounded-lg text-gray-800 font-semibold shadow-inner"
                ref={urlRef}
                type="text"
                name="UserName"
                placeholder="Update Image Url"
              />
            </div>
          )}
        </div>

        <div className="mt-6">
          <button
            onClick={handleUpdateProfile}
            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white transition duration-200 ${
              isEditing
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-indigo-600 hover:bg-indigo-700"
            } shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isEditing ? "Save Changes" : "Update Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
