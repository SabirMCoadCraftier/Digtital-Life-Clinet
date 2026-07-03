// import React, { useState } from "react";
// import useAuth from "../../../Hooks/useAuth";
// import { useForm } from "react-hook-form";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import SocialLogin from "../SocialLogin/SocialLogin";
// import { Link, useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { imageUpload } from "../../../Utils";

// const Register = () => {
//   const { createUser, updateUserProfile } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const handleRegister = async (data) => {
//     const { name, email, photo, password } = data;
//     const profileImage = photo[0];
//     const photoURL = await imageUpload(profileImage);

//     createUser(email, password)
//       .then((result) => {
//         const userInfo = {
//           email,
//           displayName: name,
//           photoURL,
//           role: "user",
//           isPremium: false,
//         };

//         axiosSecure.post("/users", userInfo).then((res) => {
//           if (res.data.insertedId) console.log("User created in DB");
//         });

//         const userProfile = { displayName: name, photoURL };
//         updateUserProfile(userProfile, photoURL)
//           .then(() => {
//             toast.success("User registered Successfully");
//             navigate("/");
//           })
//           .catch(console.log);
//       })
//       .catch(console.log);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-white dark:bg-gray-800 w-full max-w-sm shadow-2xl">
//           <div className="card-body">
//             <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
//               Register Now!
//             </h1>
//             <form onSubmit={handleSubmit(handleRegister)}>
//               <fieldset className="fieldset">
//                 <label className="label text-gray-700 dark:text-gray-200">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   {...register("name", { required: true })}
//                   className="input bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                   placeholder="Name"
//                 />
//                 {errors.name?.type === "required" && (
//                   <p className="text-red-500">Name is required</p>
//                 )}

//                 <label className="label text-gray-700 dark:text-gray-200">
//                   Photo
//                 </label>
//                 <input
//                   type="file"
//                   {...register("photo", { required: true })}
//                   className="input bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                 />
//                 {errors.photo?.type === "required" && (
//                   <p className="text-red-500">Photo is required</p>
//                 )}

//                 <label className="label text-gray-700 dark:text-gray-200">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   {...register("email", { required: true })}
//                   className="input bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                   placeholder="Email"
//                 />
//                 {errors.email?.type === "required" && (
//                   <p className="text-red-500">Email is required</p>
//                 )}

//                 <div className="relative mt-4">
//                   <label className="label text-gray-700 dark:text-gray-200">
//                     Password
//                   </label>
//                   <input
//                     type={show ? "text" : "password"}
//                     {...register("password", {
//                       required: true,
//                       pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
//                     })}
//                     className="input bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                     placeholder="Password"
//                   />
//                   <span
//                     onClick={() => setShow(!show)}
//                     className="absolute top-7 right-3 cursor-pointer text-gray-600 dark:text-gray-300"
//                   >
//                     {show ? (
//                       <FaRegEye size={22} />
//                     ) : (
//                       <FaRegEyeSlash size={22} />
//                     )}
//                   </span>
//                   {errors.password?.type === "required" && (
//                     <p className="text-red-500">Password is required</p>
//                   )}
//                   {errors.password?.type === "pattern" && (
//                     <p className="text-red-500">
//                       Password must contain at least 1 uppercase, 1 lowercase,
//                       and be at least 6 characters long.
//                     </p>
//                   )}
//                 </div>

//                 <div className="mt-2">
//                   <a className="link link-hover text-blue-500 dark:text-blue-400">
//                     Forgot password?
//                   </a>
//                 </div>

//                 <button className="btn btn-neutral mt-4 w-full">
//                   Register
//                 </button>
//               </fieldset>

//               <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
//                 Already have an account?{" "}
//                 <Link to="/login" className="text-red-500 underline">
//                   Login
//                 </Link>
//               </p>
//             </form>

//             <SocialLogin />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

"use client";

import { useState } from "react";
import useAuth from "@/Hooks/useAuth";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { imageUpload } from "@/Utils";

const Register = () => {
  const { createUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [show, setShow] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { name, email, photo, password } = data;

    try {
      const profileImage = photo[0];
      const photoURL = await imageUpload(profileImage);

      await createUser(email, password, { name, photoURL });

      const userInfo = {
        email,
        displayName: name,
        photoURL,
        role: "user",
        isPremium: false,
      };

      await axiosSecure.post("/users", userInfo);
      toast.success("User registered Successfully");
      router.push("/");
    } catch (error) {
      toast.error(error.message || "Registration failed");
      console.error(error);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-900 dark:to-black p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side Illustration */}
        <div className="lg:w-1/2 relative flex flex-col justify-center items-center p-6 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden">
          <Image
            src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-login-illustration-svg-download-png-3723273.png"
            width={288}
            height={288}
            alt="Register Illustration"
            className="w-72 h-72 mb-4 animate-float"
          />
          <h2 className="text-white text-3xl font-bold text-center mb-2">
            Join Us!
          </h2>
          <p className="text-indigo-200 text-center max-w-xs text-sm">
            Create your account and start exploring digital life lessons curated
            just for you.
          </p>

          {/* Decorative circles */}
          <div className="absolute w-28 h-28 bg-white opacity-10 rounded-full top-8 left-8 animate-pulse-slow"></div>
          <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full bottom-8 right-8 animate-pulse-slow"></div>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
            Register Now
          </h1>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-3">
            {/* Name */}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>

            {/* Photo */}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Photo
              </label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              />
              {errors.photo && (
                <p className="text-red-500 text-sm mt-1">Photo is required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute top-10 right-3 cursor-pointer text-gray-500 dark:text-gray-300"
              >
                {show ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
              </span>
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm mt-1">
                  Password must contain at least 1 uppercase, 1 lowercase, and
                  6+ characters
                </p>
              )}
            </div>

            <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold shadow-md transition-all mt-2">
              Register
            </button>
          </form>

          <p className="text-center mt-4 text-gray-700 dark:text-gray-300 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-red-500 underline">
              Login
            </Link>
          </p>

          <div className="mt-4">
            <SocialLogin />
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.1; }
            50% { transform: scale(1.2); opacity: 0.15; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Register;
