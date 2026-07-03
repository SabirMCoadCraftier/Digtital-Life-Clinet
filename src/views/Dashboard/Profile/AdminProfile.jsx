// import { useForm } from "react-hook-form";
// import useAuth from "../../../Hooks/useAuth";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { imageUpload } from "../../../Utils/index.js";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const AdminProfile = () => {
//   const { user, updateUserProfile } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const [loading, setLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       // 1️⃣ Upload image to imgbb
//       const imageUrl = await imageUpload(data.photo[0]);

//       // 2️⃣ Update Firebase Auth
//       await updateUserProfile(data.displayName, imageUrl);

//       // 3️⃣ Update MongoDB
//       await axiosSecure.patch("/users/update-profile", {
//         email: user.email,
//         displayName: data.displayName,
//         photoURL: imageUrl,
//       });

//       toast.success("Profile updated successfully");
//       window.location.reload();
//     } catch (error) {
//       console.log("ERROR:", error);
//       toast.error("Profile update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       <h2 className="text-2xl font-bold mb-6">Admin Profile</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* LEFT */}
//         <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 text-center">
//           <img
//             src={user?.photoURL}
//             className="w-28 h-28 rounded-full mx-auto border border-gray-300 dark:border-gray-600"
//           />
//           <h3 className="text-xl font-semibold mt-3">{user?.displayName}</h3>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             {user?.email}
//           </p>

//           <span className="inline-block mt-3 px-4 py-1 rounded-full bg-red-100 dark:bg-red-600 text-red-600 dark:text-red-100 font-semibold">
//             Admin
//           </span>
//         </div>

//         {/* RIGHT */}
//         <div className="md:col-span-2 bg-white dark:bg-gray-800 shadow rounded-2xl p-6">
//           <h3 className="text-lg font-semibold mb-4">Update Profile</h3>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div>
//               <label className="text-sm font-medium">Display Name</label>
//               <input
//                 defaultValue={user?.displayName}
//                 {...register("displayName", { required: true })}
//                 className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
//               />
//               {errors.displayName && (
//                 <p className="text-red-500 text-sm">Name is required</p>
//               )}
//             </div>

//             <div>
//               <label className="text-sm font-medium">Profile Photo</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 {...register("photo", { required: true })}
//                 className="file-input file-input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
//               />
//             </div>

//             <button disabled={loading} className="btn btn-primary w-full">
//               {loading ? "Updating..." : "Update Profile"}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Activity Summary */}
//       <div className="mt-8 bg-white dark:bg-gray-800 shadow rounded-2xl p-6">
//         <h3 className="text-lg font-semibold mb-4">Activity Summary</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl text-center">
//             <p className="text-2xl font-bold">12</p>
//             <p className="text-sm text-gray-500 dark:text-gray-300">
//               Lessons Moderated
//             </p>
//           </div>
//           <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl text-center">
//             <p className="text-2xl font-bold">5</p>
//             <p className="text-sm text-gray-500 dark:text-gray-300">
//               Actions Taken
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminProfile;

"use client";

import { useForm } from "react-hook-form";
import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { imageUpload } from "@/Utils";
import { useState, useEffect } from "react";
import {
  FaUserShield,
  FaCamera,
  FaCheckCircle,
  FaChartPie,
  FaEdit,
} from "react-icons/fa";

const AdminProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const photoFile = watch("photo");

  // Image Preview Logic
  useEffect(() => {
    if (photoFile && photoFile.length > 0) {
      const file = photoFile[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [photoFile]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setIsSuccess(false);

      // 1. Upload image if selected
      let imageUrl = user?.photoURL;
      if (data.photo && data.photo[0]) {
        imageUrl = await imageUpload(data.photo[0]);
      }

      // 2. Update auth profile
      await updateUserProfile(data.displayName, imageUrl);

      // 3. Update MongoDB
      await axiosSecure.patch("/users/update-profile", {
        email: user.email,
        displayName: data.displayName,
        photoURL: imageUrl,
      });

      setIsSuccess(true);
      // Reload for sync
      setTimeout(() => window.location.reload(), 1500);
    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] p-4 md:p-10 transition-colors">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>

          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl ring-4 ring-indigo-50 dark:ring-gray-700">
              <img
                src={preview || user?.photoURL}
                className="w-full h-full object-cover"
                alt="Admin"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-indigo-600 p-2 rounded-lg text-white shadow-lg">
              <FaUserShield size={18} />
            </div>
          </div>

          <div className="text-center md:text-left space-y-2">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <h2 className="text-3xl font-black text-gray-800 dark:text-white tracking-tight">
                {user?.displayName}
              </h2>
              <span className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest border border-indigo-200 dark:border-indigo-800">
                System Administrator
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              {user?.email}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Update Section */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl text-indigo-600">
                  <FaEdit size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Credentials Management
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="text-xs font-bold uppercase text-gray-400 mb-2 ml-1">
                      Admin Name
                    </label>
                    <input
                      defaultValue={user?.displayName}
                      {...register("displayName", {
                        required: "Name is required",
                      })}
                      className="input input-bordered w-full h-14 bg-gray-50 dark:bg-gray-700 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all font-semibold"
                    />
                    {errors.displayName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.displayName.message}
                      </p>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="text-xs font-bold uppercase text-gray-400 mb-2 ml-1">
                      Profile Photo
                    </label>
                    <div className="relative group">
                      <input
                        type="file"
                        accept="image/*"
                        {...register("photo")}
                        className="file-input file-input-bordered w-full h-14 bg-gray-50 dark:bg-gray-700 border-none rounded-xl file:bg-indigo-600 file:text-white file:border-none file:h-full file:mr-4 file:px-6 file:font-bold cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    disabled={loading}
                    className={`btn w-full h-14 rounded-xl text-white font-bold border-none shadow-lg transition-all ${
                      isSuccess
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-900 dark:bg-indigo-600 hover:bg-black"
                    }`}
                  >
                    {loading ? (
                      <span className="loading loading-spinner"></span>
                    ) : isSuccess ? (
                      <span className="flex items-center gap-2 animate-pulse">
                        <FaCheckCircle /> Updated Successfully
                      </span>
                    ) : (
                      "Apply Changes"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Stats Section */}
          <div className="lg:col-span-1 order-1 lg:order-2 space-y-6">
            <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-200 dark:shadow-none">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold uppercase text-xs tracking-widest opacity-80">
                  Activity Summary
                </h4>
                <FaChartPie />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-black">12</p>
                  <p className="text-[10px] uppercase font-bold opacity-70">
                    Moderated
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black">05</p>
                  <p className="text-[10px] uppercase font-bold opacity-70">
                    Actions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-dashed border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium italic">
                Security Note: Profile changes require a manual page
                synchronization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
