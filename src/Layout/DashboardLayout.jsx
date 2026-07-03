"use client";

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
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";
import useRole from "@/Hooks/useRole";
import useAuth from "@/Hooks/useAuth";

const LOGO_URL = "https://i.ibb.co/4pDNDk1/avatar.png";

const DashboardLayout = ({ children }) => {
  const { role } = useRole();
  const { user } = useAuth();

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm ${
      isActive
        ? "bg-indigo-600 text-white shadow-md shadow-indigo-100 dark:shadow-none"
        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600"
    }`;

  return (
    <div className="drawer lg:drawer-open font-sans">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col min-h-screen bg-[#F9FAFB] dark:bg-[#0b0f1a]">
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
                <Image
                  src={user?.photoURL || "https://i.ibb.co/bc99hYJ/user.png"}
                  width={32}
                  height={32}
                  alt="Admin"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>

      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <aside className="w-64 bg-white dark:bg-[#111827] border-r border-gray-100 dark:border-gray-800 min-h-screen flex flex-col">
          <div className="px-6 py-8">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="bg-indigo-600 p-1.5 rounded-lg shadow-lg">
                <Image
                  src={LOGO_URL}
                  width={24}
                  height={24}
                  className="w-6 h-6 brightness-0 invert"
                  alt="Logo"
                />
              </div>
              <span className="text-xl font-black text-gray-800 dark:text-white tracking-tighter">
                Life<span className="text-indigo-600">Sync</span>
              </span>
            </Link>
          </div>

          <div className="px-3 flex-1 overflow-y-auto">
            <ul className="space-y-1.5">
              <li>
                <NavLink href="/dashboard" end className={navLinkStyles}>
                  <MdOutlineDashboard size={20} />
                  <span>Overview</span>
                </NavLink>
              </li>

              {role === "user" && (
                <>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-6 mb-2 ml-4">
                    User Panel
                  </p>
                  <li>
                    <NavLink
                      href="/dashboard/add-lesson"
                      className={navLinkStyles}
                    >
                      <MdAddCircleOutline size={20} />
                      <span>Add Lesson</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/dashboard/my-lessons"
                      className={navLinkStyles}
                    >
                      <MdLibraryBooks size={20} />
                      <span>My Lessons</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/dashboard/my-favorites"
                      className={navLinkStyles}
                    >
                      <MdFavoriteBorder size={20} />
                      <span>Favorites</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/dashboard/profile" className={navLinkStyles}>
                      <FaUserCircle size={20} />
                      <span>Profile</span>
                    </NavLink>
                  </li>
                </>
              )}

              {role === "admin" && (
                <>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-6 mb-2 ml-4">
                    Management
                  </p>
                  <li>
                    <NavLink
                      href="/dashboard/manage-users"
                      className={navLinkStyles}
                    >
                      <FaUsers size={20} />
                      <span>Users</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/dashboard/manage-lessons"
                      className={navLinkStyles}
                    >
                      <FaBook size={20} />
                      <span>Lessons</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/dashboard/reported-lessons"
                      className={navLinkStyles}
                    >
                      <FaExclamationTriangle size={20} />
                      <span>Reports</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/dashboard/admin" className={navLinkStyles}>
                      <FaUserCircle size={20} />
                      <span>Admin Profile</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="p-4 border-t border-gray-50 dark:border-gray-800">
            <Link
              href="/"
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
