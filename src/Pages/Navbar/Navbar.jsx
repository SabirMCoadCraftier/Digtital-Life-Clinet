// import React, { useState } from "react";
// import { Link, NavLink } from "react-router";
// import useAuth from "../../Hooks/useAuth";
// import image from "../../assets/image.png";
// import useRole from "../../Hooks/useRole";
// import { useTheme } from "next-themes";

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   const [open, setOpen] = useState(false);
//   const { isPremium, role } = useRole();
//   const { theme, setTheme } = useTheme();

//   const handleLogOut = () => {
//     logOut().catch((error) => console.log(error));
//   };

//   const links = (
//     <>
//       {[
//         { to: "/", label: "Home" },
//         { to: "/public-lessons", label: "Public Lessons" },
//         { to: "/dashboard/add-lesson", label: "Add Lesson" },
//         { to: "/about", label: "About" },
//         { to: "/contact", label: "Contact" },
//         { to: "/privacy-policy", label: "Privacy Policy" },
//       ].map((item) => (
//         <NavLink
//           key={item.to}
//           to={item.to}
//           className={({ isActive }) =>
//             `px-3 py-2 rounded-md font-medium transition-colors
//             ${isActive && "text-pink-500 underline underline-offset-4"}`
//           }
//         >
//           {item.label}
//         </NavLink>
//       ))}

//       {user &&
//         (isPremium ? (
//           <span className="px-3 py-2 text-yellow-400 font-semibold">
//             Premium ⭐
//           </span>
//         ) : (
//           <Link
//             to="/premium"
//             className="px-3 py-2 text-blue-500 dark:text-blue-400 hover:text-blue-700"
//           >
//             Upgrade
//           </Link>
//         ))}
//     </>
//   );

//   return (
//     /* OUTER STICKY WRAPPER */
//     <div className="sticky top-0 z-50 bg-white dark:bg-black shadow-md">
//       {/* NAVBAR */}
//       <div className="navbar px-4 py-2 text-gray-900 dark:text-white">
//         {/* Mobile + Logo */}
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div
//               tabIndex={0}
//               className="btn btn-ghost lg:hidden text-gray-900 dark:text-white"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </div>

//             <ul
//               className="menu menu-compact dropdown-content mt-2 w-52 p-2 rounded-lg shadow-lg
//               bg-white dark:bg-gray-800 text-gray-900 dark:text-white z-50"
//             >
//               {links}
//             </ul>
//           </div>

//           <Link to="/" className="flex items-center gap-2">
//             <img src={image} className="w-10 h-10 rounded-full" alt="Logo" />
//             <span className="text-xl font-bold">Life Lessons</span>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal gap-1">{links}</ul>
//         </div>

//         {/* Right Side */}
//         <div className="navbar-end relative">
//           {!user ? (
//             <Link
//               to="/login"
//               className="px-4 py-2 bg-lime-600 text-white rounded-md hover:bg-lime-700"
//             >
//               Login
//             </Link>
//           ) : (
//             <div className="relative">
//               <img
//                 src={user.photoURL || image}
//                 referrerPolicy="no-referrer"
//                 alt="User"
//                 onClick={() => setOpen(!open)}
//                 className="w-10 h-10 rounded-full border-2 border-lime-500 cursor-pointer"
//               />

//               {open && (
//                 <div
//                   className="absolute right-0 mt-3 w-48 rounded-lg shadow-lg p-4 z-50
//                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                 >
//                   <p className="font-semibold mb-2">{user.displayName}</p>
//                   <hr className="border-gray-300 dark:border-gray-600 my-2" />

//                   {role && (
//                     <Link
//                       to={
//                         role === "admin"
//                           ? "/dashboard/admin-profile"
//                           : "/dashboard/profile"
//                       }
//                       className="block py-1 px-2 rounded hover:bg-lime-600 hover:text-white"
//                       onClick={() => setOpen(false)}
//                     >
//                       Profile
//                     </Link>
//                   )}

//                   <Link
//                     to="/dashboard"
//                     className="block py-1 px-2 rounded hover:bg-lime-600 hover:text-white"
//                     onClick={() => setOpen(false)}
//                   >
//                     Dashboard
//                   </Link>

//                   {/* Theme Toggle */}
//                   <div className="mt-2">
//                     <input
//                       type="checkbox"
//                       checked={theme === "dark"}
//                       onChange={() =>
//                         setTheme(theme === "light" ? "dark" : "light")
//                       }
//                       className="toggle"
//                     />
//                   </div>

//                   <button
//                     onClick={() => {
//                       handleLogOut();
//                       setOpen(false);
//                     }}
//                     className="mt-3 w-full bg-red-600 text-white py-1 rounded hover:bg-red-700"
//                   >
//                     Log Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";
import image from "../../assets/image.png";
import useRole from "../../Hooks/useRole";
import { useTheme } from "next-themes";
import {
  HiMenuAlt3,
  HiOutlineLogout,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi";
import { RiDashboardLine, RiUserLine, RiStarFill } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const { isPremium, role } = useRole();
  const { theme, setTheme } = useTheme();

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  const links = (
    <>
      {[
        { to: "/", label: "Home" },
        { to: "/public-lessons", label: "Public Lessons" },
        { to: "/dashboard/add-lesson", label: "Add Lesson" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
        { to: "/privacy-policy", label: "Privacy Policy" },
      ].map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300
            ${
              isActive
                ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}

      {user && isPremium && (
        <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-yellow-200 dark:shadow-none ml-2">
          <RiStarFill size={12} /> Premium Member
        </div>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-[100] bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto navbar px-4 py-3">
        {/* START: LOGO & MOBILE MENU */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden p-1 mr-2">
              <HiMenuAlt3 size={28} className="text-gray-800 dark:text-white" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-4 w-64 p-4 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 z-[100] gap-2"
            >
              {links}
              {!user && (
                <Link
                  to="/login"
                  className="btn btn-indigo border-none bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl mt-4"
                >
                  Login Now
                </Link>
              )}
            </ul>
          </div>

          {/* PROFESSIONAL LOGO SECTION */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img
                src={image}
                className="w-10 h-10 rounded-xl relative z-10 shadow-lg"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black text-gray-900 dark:text-white tracking-tighter uppercase">
                Life<span className="text-indigo-600">Sync</span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Digital Lessons
              </span>
            </div>
          </Link>
        </div>

        {/* CENTER: DESKTOP LINKS */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-900/50 p-1.5 rounded-2xl border border-gray-100 dark:border-gray-800">
            {links}
          </div>
        </div>

        {/* END: USER PROFILE & ACTIONS */}
        <div className="navbar-end gap-3">
          {/* Upgrade Button (Visible only if not premium) */}
          {user && !isPremium && (
            <Link
              to="/premium"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-indigo-100 dark:shadow-none"
            >
              Upgrade <RiStarFill className="text-yellow-300" />
            </Link>
          )}

          {!user ? (
            <Link
              to="/login"
              className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform active:scale-95"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <div className="p-0.5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 hover:rotate-12 transition-transform cursor-pointer">
                <img
                  src={user.photoURL || "https://i.ibb.co/bc99hYJ/user.png"}
                  referrerPolicy="no-referrer"
                  alt="User"
                  onClick={() => setOpen(!open)}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
                />
              </div>

              {open && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-4 w-72 rounded-3xl shadow-2xl p-6 z-50 bg-white dark:bg-[#111827] border border-gray-100 dark:border-gray-800 animate-in fade-in zoom-in duration-200">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={user.photoURL}
                        className="w-12 h-12 rounded-2xl object-cover"
                        alt=""
                      />
                      <div className="overflow-hidden">
                        <p className="font-black text-gray-800 dark:text-white truncate uppercase text-sm tracking-tight">
                          {user.displayName}
                        </p>
                        <p className="text-xs text-gray-400 font-bold truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 mt-6">
                      <Link
                        to={
                          role === "admin"
                            ? "/dashboard/admin-profile"
                            : "/dashboard/profile"
                        }
                        className="flex items-center gap-3 w-full py-3 px-4 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        <RiUserLine size={20} className="text-indigo-500" /> My
                        Profile
                      </Link>

                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 w-full py-3 px-4 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        <RiDashboardLine
                          size={20}
                          className="text-indigo-500"
                        />{" "}
                        Dashboard
                      </Link>

                      {/* Theme Toggle Button */}
                      <button
                        onClick={() =>
                          setTheme(theme === "light" ? "dark" : "light")
                        }
                        className="flex items-center justify-between w-full py-3 px-4 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          {theme === "dark" ? (
                            <HiOutlineSun
                              size={20}
                              className="text-yellow-500"
                            />
                          ) : (
                            <HiOutlineMoon
                              size={20}
                              className="text-indigo-500"
                            />
                          )}
                          Theme Mode
                        </span>
                        <div
                          className={`w-10 h-5 rounded-full relative transition-colors ${
                            theme === "dark" ? "bg-indigo-600" : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${
                              theme === "dark" ? "left-6" : "left-1"
                            }`}
                          ></div>
                        </div>
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        handleLogOut();
                        setOpen(false);
                      }}
                      className="mt-6 w-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 border border-red-100 dark:border-red-900/30"
                    >
                      <HiOutlineLogout size={18} /> Log Out Account
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
