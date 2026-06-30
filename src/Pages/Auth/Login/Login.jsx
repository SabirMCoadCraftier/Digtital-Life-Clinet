// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import useAuth from "../../../Hooks/useAuth";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import SocialLogin from "../SocialLogin/SocialLogin";
// import { Link, useNavigate, useLocation } from "react-router";
// import { toast } from "react-toastify";

// const Login = () => {
//   const { signInUser } = useAuth();
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const handleLogin = (data) => {
//     signInUser(data.email, data.password)
//       .then((result) => {
//         console.log(result.user);
//         toast.success("User login Successfully");
//         navigate("/");
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error(error.message);
//       });
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-white dark:bg-gray-800 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
//               Login now!
//             </h1>
//             <form onSubmit={handleSubmit(handleLogin)}>
//               <fieldset className="fieldset">
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
//                     {...register("password", { required: true, minLength: 6 })}
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
//                   {errors.password?.type === "minLength" && (
//                     <p className="text-red-500">
//                       Password must be 6 characters or longer.
//                     </p>
//                   )}
//                 </div>

//                 <div className="mt-2">
//                   <a className="link link-hover text-blue-500 dark:text-blue-400">
//                     Forgot password?
//                   </a>
//                 </div>

//                 <button className="btn btn-neutral mt-4 w-full">Login</button>
//               </fieldset>

//               <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
//                 New to Digital Life Lessons?{" "}
//                 <Link
//                   state={location.state}
//                   to="/register"
//                   className="text-lg text-red-500 underline"
//                 >
//                   Register
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

// export default Login;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = useAuth();
  const [show, setShow] = useState(false);
  const [loginType, setLoginType] = useState("user");

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Default credentials
  const defaultCredentials = {
    user: { email: "dejuja@mailinator.com", password: "JaelGuzman" },
    admin: { email: "progamming123@gmail.com", password: "Progamming12" },
  };

  const handleLoginType = (type) => {
    setLoginType(type);
    setValue("email", defaultCredentials[type].email);
    setValue("password", defaultCredentials[type].password);
  };

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        toast.success(
          loginType === "admin"
            ? "Admin login successful"
            : "User login successful"
        );
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-900 dark:to-black p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side Illustration */}
        <div className="lg:w-1/2 relative flex flex-col justify-center items-center p-6 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden">
          {/* Login Illustration */}
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-svg-download-png-2757111.png"
            alt="Login Illustration"
            className="w-64 h-64 mb-4 animate-float"
          />

          <h2 className="text-white text-3xl font-bold text-center mb-2">
            Welcome Back!
          </h2>
          <p className="text-indigo-200 text-center max-w-xs text-sm">
            Sign in to your account and start exploring digital life lessons
            today!
          </p>

          {/* Floating subtle circles */}
          <div className="absolute w-28 h-28 bg-white opacity-10 rounded-full top-8 left-8 animate-pulse-slow"></div>
          <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full bottom-8 right-8 animate-pulse-slow"></div>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
            Login Now
          </h1>

          {/* User/Admin Toggle */}
          <div className="flex justify-center gap-4 mb-4">
            <button
              onClick={() => handleLoginType("user")}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                loginType === "user"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              }`}
            >
              User Access
            </button>
            <button
              onClick={() => handleLoginType("admin")}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                loginType === "admin"
                  ? "bg-red-500 text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              }`}
            >
              Admin Access
            </button>
          </div>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
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
              {errors.email?.type === "required" && (
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
                {...register("password", { required: true, minLength: 6 })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute top-10 right-3 cursor-pointer text-gray-500 dark:text-gray-300"
              >
                {show ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
              </span>
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm mt-1">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            <div className="flex justify-between items-center text-sm mt-1">
              <label className="flex items-center gap-2 text-gray-500 dark:text-gray-300">
                <input type="checkbox" className="checkbox checkbox-xs" />
                Remember me
              </label>
              <Link
                to="#"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold shadow-md mt-2 transition-all">
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-gray-700 dark:text-gray-300 text-sm">
            New to Digital Life Lessons?{" "}
            <Link
              state={location.state}
              to="/register"
              className="text-red-500 underline"
            >
              Register
            </Link>
          </p>

          <div className="mt-4">
            <SocialLogin />
          </div>
        </div>
      </div>

      {/* Custom animations */}
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

export default Login;
