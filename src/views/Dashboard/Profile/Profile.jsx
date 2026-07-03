"use client";

import { useState, useEffect } from "react";
import {
  FaStar,
  FaCamera,
  FaUserEdit,
  FaGraduationCap,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import LoadingSpinner from "@/Component/LoadingSpenner/LoadingSpenner";
import { imageUpload } from "@/Utils";
import Link from "next/link";

const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [displayName, setDisplayName] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoURL, setPhotoURL] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const { data: userProfile, isLoading: loadingProfile } = useQuery({
    queryKey: ["user-profile", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const { data: lessonsData = {}, isLoading: loadingLessons } = useQuery({
    queryKey: ["my-lessons", user?.email, sortBy],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/my-lessons/${user.email}?sortBy=${sortBy}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (!user || loadingProfile || loadingLessons) return <LoadingSpinner />;

  const { lessons = [], totalLessons = 0 } = lessonsData;

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSuccess(false);

    try {
      let updatedPhotoURL = photoURL;
      if (photoFile) {
        updatedPhotoURL = await imageUpload(photoFile);
        setPhotoURL(updatedPhotoURL);
      }

      await axiosSecure.put(`/users/${user.email}`, {
        displayName,
        photoURL: updatedPhotoURL,
      });

      // Success indicator set kora (Toast-er poriborte)
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-10 bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* Header Profile Section */}
      <div className="relative bg-white dark:bg-gray-900 rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="h-36 md:h-52 bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500"></div>
        <div className="px-8 pb-10">
          <div className="relative -mt-20 md:-mt-24 flex flex-col md:flex-row items-end gap-6">
            <div className="avatar">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-3xl ring-8 ring-white dark:ring-gray-900 shadow-2xl overflow-hidden bg-gray-100">
                <img
                  src={photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left mb-2">
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white flex items-center justify-center md:justify-start gap-3">
                {displayName}
                {userProfile?.role === "Premium" && (
                  <span className="badge badge-warning border-none py-4 px-4 font-bold shadow-md italic text-xs">
                    <FaStar className="mr-1" /> Premium
                  </span>
                )}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">
                {user.email}
              </p>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <div className="flex-1 md:w-32 bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
                <p className="text-2xl font-black text-indigo-600">
                  {totalLessons}
                </p>
                <p className="text-[10px] uppercase font-bold text-gray-400">
                  Lessons
                </p>
              </div>
              <div className="flex-1 md:w-32 bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
                <p className="text-2xl font-black text-rose-500">
                  {userProfile?.totalFavorites || 0}
                </p>
                <p className="text-[10px] uppercase font-bold text-gray-400">
                  Favorites
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left: Update Form */}
        <div className="lg:col-span-4">
          <div className="card bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
              <FaUserEdit className="text-indigo-600" /> Profile Settings
            </h3>

            <form className="space-y-6" onSubmit={handleProfileUpdate}>
              <div className="form-control">
                <label className="label text-xs font-bold uppercase tracking-widest text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl h-12 focus:ring-2 focus:ring-indigo-500"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label text-xs font-bold uppercase tracking-widest text-gray-400">
                  Avatar Image
                </label>
                <label className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer group">
                  <FaCamera className="text-3xl text-gray-300 group-hover:text-indigo-500 transition-colors" />
                  <span className="text-xs mt-3 font-bold text-gray-400 uppercase">
                    Change Photo
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => setPhotoFile(e.target.files[0])}
                  />
                </label>
              </div>

              <button
                disabled={loading}
                className={`btn w-full h-14 rounded-xl text-white font-bold border-none transition-all ${
                  isSuccess
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2">
                    <FaCheckCircle /> Updated!
                  </span>
                ) : (
                  "Save Profile"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right: Lessons List */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex justify-between items-center px-2">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white">
              My Lessons
            </h3>
            <div className="join bg-white dark:bg-gray-800 p-1 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setSortBy("newest")}
                className={`join-item btn btn-sm border-none ${
                  sortBy === "newest"
                    ? "bg-indigo-600 text-white"
                    : "bg-transparent text-gray-500"
                }`}
              >
                Newest
              </button>
              <button
                onClick={() => setSortBy("popular")}
                className={`join-item btn btn-sm border-none ${
                  sortBy === "popular"
                    ? "bg-indigo-600 text-white"
                    : "bg-transparent text-gray-500"
                }`}
              >
                Popular
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <div
                key={lesson._id}
                className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={lesson.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 badge badge-primary py-3 px-4 font-bold border-none">
                    {lesson.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4 line-clamp-1">
                    {lesson.title}
                  </h4>
                  <Link
                    href={`/lessons/${lesson._id}`}
                    className="btn btn-outline btn-primary btn-sm btn-block rounded-xl border-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
