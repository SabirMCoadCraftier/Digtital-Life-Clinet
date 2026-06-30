// import React from "react";
// import {
//   FaBook,
//   FaExclamationTriangle,
//   FaUserCircle,
//   FaUsers,
// } from "react-icons/fa";
// import {
//   MdAddCircleOutline,
//   MdFavoriteBorder,
//   MdLibraryBooks,
// } from "react-icons/md";
// import { Link, Outlet } from "react-router";
// import useRole from "../Hooks/useRole";
// import image from "../assets/image.png";
// import useAuth from "../Hooks/useAuth";

// const DashboardLayout = () => {
//   const { role } = useRole();
//   const { user } = useAuth();

//   return (
//     <div className="drawer lg:drawer-open">
//       <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

//       {/* Main Content */}
//       <div className="drawer-content flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
//         {/* Navbar */}
//         <nav className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-20">
//           <label
//             htmlFor="my-drawer-4"
//             aria-label="open sidebar"
//             className="btn btn-square btn-ghost lg:hidden"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="currentColor"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-6 h-6 text-gray-800 dark:text-gray-200"
//             >
//               <path d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </label>
//           <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//             Digital Life Lessons
//           </h1>
//         </nav>

//         {/* Page Content */}
//         <main className="flex-1 p-6">
//           <Outlet />
//         </main>
//       </div>

//       {/* Sidebar */}
//       <div className="drawer-side">
//         <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
//         <aside className="flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen">
//           {/* Logo */}
//           <div className="flex items-center justify-center py-6 border-b border-gray-200 dark:border-gray-700">
//             <Link to="/" className="flex items-center gap-2">
//               <img src={image} className="w-10 h-auto" alt="Logo" />
//               <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
//                 Life Lessons
//               </span>
//             </Link>
//           </div>

//           {/* Menu Items */}
//           <ul className="menu grow p-4 space-y-2">
//             <li>
//               <Link
//                 to="/dashboard"
//                 className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition text-lg text-gray-800 dark:text-gray-200"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-6 h-6 text-gray-800 dark:text-gray-200"
//                 >
//                   <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2z" />
//                 </svg>
//                 <span>Dashboard</span>
//               </Link>
//             </li>

//             {role === "user" && (
//               <>
//                 <li>
//                   <Link
//                     to="/dashboard/add-lesson"
//                     className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition text-lg text-gray-800 dark:text-gray-200"
//                   >
//                     <MdAddCircleOutline size={24} />
//                     <span>Add Lesson</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/dashboard/my-lessons"
//                     className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition text-lg text-gray-800 dark:text-gray-200"
//                   >
//                     <MdLibraryBooks size={24} />
//                     <span>My Lessons</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/dashboard/my-favorite"
//                     className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition text-lg text-gray-800 dark:text-gray-200"
//                   >
//                     <MdFavoriteBorder size={24} />
//                     <span>My Favorite</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/dashboard/profile"
//                     className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition text-lg text-gray-800 dark:text-gray-200"
//                   >
//                     <img
//                       src={user?.photoURL}
//                       className="rounded-full w-8 h-8"
//                       alt=""
//                     />
//                     <span>Profile</span>
//                   </Link>
//                 </li>
//               </>
//             )}

//             {role === "admin" && (
//               <>
//                 <li>
//                   <Link
//                     to="/dashboard/manage-user"
//                     className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition text-lg text-gray-800 dark:text-gray-200"
//                   >
//                     <FaUsers size={24} />
//                     <span>Manage User</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/dashboard/manage-lesson"
//                     className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition text-lg text-gray-800 dark:text-gray-200"
//                   >
//                     <FaBook size={24} />
//                     <span>Manage Lessons</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/dashboard/reported-lessons"
//                     className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition text-lg text-gray-800 dark:text-gray-200"
//                   >
//                     <FaExclamationTriangle size={24} />
//                     <span>Reported Lessons</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/dashboard/admin-profile"
//                     className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition text-lg text-gray-800 dark:text-gray-200"
//                   >
//                     <FaUserCircle size={24} />
//                     <span>Admin Profile</span>
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React from "react";
import {
  FaBook,
  FaExclamationTriangle,
  FaUserCircle,
  FaUsers,
  FaHome,
  FaChartLine,
} from "react-icons/fa";
import {
  MdAddCircleOutline,
  MdFavoriteBorder,
  MdLibraryBooks,
  MdOutlineDashboard,
} from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router";
import useRole from "../Hooks/useRole";
import image from "../assets/image.png";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const { role } = useRole();
  const { user } = useAuth();

  // Active Link Styling
  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm ${
      isActive
        ? "bg-indigo-600 text-white shadow-md shadow-indigo-100 dark:shadow-none"
        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600"
    }`;

  return (
    <div className="drawer lg:drawer-open font-sans">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Main Content Area */}
      <div className="drawer-content flex flex-col min-h-screen bg-[#F9FAFB] dark:bg-[#0b0f1a]">
        {/* Compact Navbar */}
        <nav className="flex items-center justify-between px-6 h-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-700 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <label
              htmlFor="my-drawer-4"
              className="btn btn-sm btn-ghost lg:hidden text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <h1 className="hidden sm:flex items-center gap-2 text-lg font-bold text-gray-800 dark:text-white">
              <span className="p-1.5 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                <FaChartLine className="text-indigo-600" size={14} />
              </span>
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden xs:block">
              <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-tighter leading-none mb-1">
                {role}
              </p>
              <p className="text-xs font-bold text-gray-700 dark:text-white leading-none">
                {user?.displayName?.split(" ")[0]}
              </p>
            </div>
            <div className="avatar ring-2 ring-gray-100 dark:ring-gray-700 rounded-full">
              <div className="w-8 rounded-full">
                <img src={user?.photoURL} alt="Admin" />
              </div>
            </div>
          </div>
        </nav>

        {/* Dynamic Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Compact Sidebar */}
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <aside className="w-64 bg-white dark:bg-[#111827] border-r border-gray-100 dark:border-gray-800 min-h-screen flex flex-col">
          {/* Logo Section */}
          <div className="px-6 py-8">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="bg-indigo-600 p-1.5 rounded-lg shadow-lg">
                <img
                  src={image}
                  className="w-6 h-6 brightness-0 invert"
                  alt="Logo"
                />
              </div>
              <span className="text-xl font-black text-gray-800 dark:text-white tracking-tighter">
                Life<span className="text-indigo-600">Sync</span>
              </span>
            </Link>
          </div>

          {/* Sidebar Menu */}
          <div className="px-3 flex-1 overflow-y-auto">
            <ul className="space-y-1.5">
              <li>
                <NavLink to="/dashboard" end className={navLinkStyles}>
                  <MdOutlineDashboard size={20} />
                  <span>Overview</span>
                </NavLink>
              </li>

              {/* User Section */}
              {role === "user" && (
                <>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-6 mb-2 ml-4">
                    User Panel
                  </p>
                  <li>
                    <NavLink
                      to="/dashboard/add-lesson"
                      className={navLinkStyles}
                    >
                      <MdAddCircleOutline size={20} />
                      <span>Add Lesson</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/my-lessons"
                      className={navLinkStyles}
                    >
                      <MdLibraryBooks size={20} />
                      <span>My Lessons</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/my-favorite"
                      className={navLinkStyles}
                    >
                      <MdFavoriteBorder size={20} />
                      <span>Favorites</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/profile" className={navLinkStyles}>
                      <FaUserCircle size={20} />
                      <span>Profile</span>
                    </NavLink>
                  </li>
                </>
              )}

              {/* Admin Section */}
              {role === "admin" && (
                <>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-6 mb-2 ml-4">
                    Management
                  </p>
                  <li>
                    <NavLink
                      to="/dashboard/manage-user"
                      className={navLinkStyles}
                    >
                      <FaUsers size={20} />
                      <span>Users</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-lesson"
                      className={navLinkStyles}
                    >
                      <FaBook size={20} />
                      <span>Lessons</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/reported-lessons"
                      className={navLinkStyles}
                    >
                      <FaExclamationTriangle size={20} />
                      <span>Reports</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/admin-profile"
                      className={navLinkStyles}
                    >
                      <FaUserCircle size={20} />
                      <span>Admin Profile</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-50 dark:border-gray-800">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all text-sm font-bold"
            >
              <FaHome size={18} />
              <span>Exit Dashboard</span>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
