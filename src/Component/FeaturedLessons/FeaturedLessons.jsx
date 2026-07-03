// import { Link } from "react-router";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "../../Component/LoadingSpenner/LoadingSpenner";
// import { AiFillStar, AiFillLock } from "react-icons/ai";
// import { motion } from "framer-motion";
// import useRole from "../../Hooks/useRole";
// const FeaturedLessons = () => {
//   const axiosSecure = useAxiosSecure();
//   // get current user
//   const { isPremium } = useRole();

//   const { data: lessons = [], isLoading } = useQuery({
//     queryKey: ["featured-lessons"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/featured-lessons?limit=6");
//       return res.data;
//     },
//   });

//   if (isLoading) return <LoadingSpinner />;
//   if (lessons.length === 0) return null;

//   // Animation variants for cards
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.05,
//         type: "spring",
//         stiffness: 200,
//         damping: 20,
//       },
//     }),
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 mt-5">
//       <div className="flex items-center gap-2 mb-6">
//         <AiFillStar className="text-yellow-500" size={28} />
//         <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
//           Featured Life Lessons
//         </h1>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {lessons.map((lesson, index) => {
//           // 🔹 Lock logic:
//           const isLocked =
//             lesson.accessLevel === "Premium" && !(isPremium ?? false);

//           return (
//             <motion.div
//               key={lesson._id}
//               custom={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 relative"
//             >
//               <div className="h-48 w-full overflow-hidden">
//                 <img
//                   src={lesson.image}
//                   alt={lesson.title}
//                   className={`h-full w-full object-cover transform transition-transform duration-300 hover:scale-105 ${
//                     isLocked ? "blur-md opacity-70" : ""
//                   }`}
//                 />
//               </div>

//               {isLocked && (
//                 <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white">
//                   <AiFillLock size={40} className="mb-2" />
//                   <p className="font-semibold text-center">Premium Lesson</p>
//                 </div>
//               )}

//               <div className="p-5 space-y-3">
//                 <h3 className="font-bold text-lg line-clamp-1 text-gray-900 dark:text-white">
//                   ⭐ {lesson.title}
//                 </h3>

//                 <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
//                   {lesson.description}
//                 </p>

//                 <div className="flex gap-2 flex-wrap mt-2">
//                   <span className="badge badge-primary badge-sm">
//                     {lesson.category}
//                   </span>
//                   <span className="badge badge-secondary badge-sm">
//                     {lesson.emotionalTone}
//                   </span>
//                   <span
//                     className={`badge badge-sm ${
//                       lesson.accessLevel === "Premium"
//                         ? "badge-accent"
//                         : "badge-success"
//                     }`}
//                   >
//                     {lesson.accessLevel}
//                   </span>
//                 </div>

//                 {/* Author info */}
//                 <div className="flex items-center gap-3 mt-3">
//                   <img
//                     src={lesson.authorPhoto}
//                     alt={lesson.authorName}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="font-semibold text-sm text-gray-900 dark:text-white">
//                       {lesson.authorName}
//                     </p>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">
//                       {new Date(lesson.createdAt).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <Link
//                     to={`/lesson/${lesson._id}`}
//                     className="btn btn-primary btn-sm w-full hover:scale-105 transition-transform"
//                   >
//                     See Details
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FeaturedLessons;

// import { Link } from "react-router";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "../../Component/LoadingSpenner/LoadingSpenner";
// import { AiFillStar, AiFillLock } from "react-icons/ai";
// import { motion } from "framer-motion";
// import useRole from "../../Hooks/useRole";

// const FeaturedLessons = () => {
//   const axiosSecure = useAxiosSecure();
//   const { isPremium } = useRole();

//   const { data: lessons = [], isLoading } = useQuery({
//     queryKey: ["featured-lessons"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/featured-lessons?limit=6");
//       return res.data;
//     },
//   });

//   if (isLoading) return <LoadingSpinner />;
//   if (lessons.length === 0) return null;

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       },
//     }),
//   };

//   return (
//     /* Gradient Section Start */
//     <section className="relative py-20 overflow-hidden bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-transparent dark:from-[#0f172a] dark:via-gray-900 dark:to-black">
//       <div className="max-w-6xl mx-auto px-4 relative z-10">
//         {/* Header Section */}
//         <div className="flex flex-col items-center mb-12 text-center">
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4"
//           >
//             <AiFillStar className="text-yellow-500" size={32} />
//           </motion.div>
//           <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight uppercase">
//             Featured <span className="text-indigo-600">Life Lessons</span>
//           </h1>
//           <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
//             Wisdom curated from the best storytellers
//           </p>
//         </div>

//         {/* Lessons Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {lessons.map((lesson, index) => {
//             const isLocked =
//               lesson.accessLevel === "Premium" && !(isPremium ?? false);

//             return (
//               <motion.div
//                 key={lesson._id}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={cardVariants}
//                 className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-indigo-500 transition-all duration-500 shadow-xl hover:shadow-indigo-200/20 dark:hover:shadow-none relative"
//               >
//                 {/* Image Section */}
//                 <div className="h-52 w-full overflow-hidden relative">
//                   <img
//                     src={lesson.image}
//                     alt={lesson.title}
//                     className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
//                       isLocked ? "blur-sm grayscale" : ""
//                     }`}
//                   />

//                   {isLocked && (
//                     <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 backdrop-blur-[2px] text-white p-4">
//                       <div className="bg-white/20 p-3 rounded-full mb-2">
//                         <AiFillLock size={24} className="text-yellow-400" />
//                       </div>
//                       <p className="font-black text-xs uppercase tracking-widest text-yellow-400">
//                         Premium Only
//                       </p>
//                     </div>
//                   )}

//                   <div className="absolute top-4 right-4">
//                     <span
//                       className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter shadow-lg ${
//                         lesson.accessLevel === "Premium"
//                           ? "bg-yellow-400 text-black"
//                           : "bg-green-500 text-white"
//                       }`}
//                     >
//                       {lesson.accessLevel}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6">
//                   <h3 className="font-black text-lg line-clamp-1 text-gray-800 dark:text-white group-hover:text-indigo-600 transition-colors uppercase">
//                     {lesson.title}
//                   </h3>

//                   <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mt-2 leading-relaxed font-medium">
//                     {lesson.description}
//                   </p>

//                   {/* Tags */}
//                   <div className="flex gap-2 mt-4">
//                     <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold rounded-md">
//                       #{lesson.category}
//                     </span>
//                     <span className="px-2 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-[10px] font-bold rounded-md">
//                       {lesson.emotionalTone}
//                     </span>
//                   </div>

//                   {/* Author & Button */}
//                   <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50 dark:border-gray-700">
//                     <div className="flex items-center gap-2">
//                       <img
//                         src={lesson.authorPhoto}
//                         className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-600"
//                         alt={lesson.authorName}
//                       />
//                       <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
//                         {lesson.authorName.split(" ")[0]}
//                       </span>
//                     </div>

//                     <Link
//                       to={`/lesson/${lesson._id}`}
//                       className="text-xs font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 underline underline-offset-4"
//                     >
//                       Read Story
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedLessons;

"use client";

import Link from "next/link";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/Component/LoadingSpenner/LoadingSpenner";
import { AiFillStar, AiFillLock } from "react-icons/ai";
import { motion } from "framer-motion";
import useRole from "@/Hooks/useRole";

const FeaturedLessons = () => {
  const axiosSecure = useAxiosSecure();
  const { isPremium } = useRole();

  const { data: lessons = [], isLoading } = useQuery({
    queryKey: ["featured-lessons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/featured-lessons?limit=6");
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (lessons.length === 0) return null;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-transparent dark:from-[#0f172a] dark:via-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4"
          >
            <AiFillStar className="text-yellow-500" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
            Featured <span className="text-indigo-600">Life Lessons</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-6 font-bold uppercase text-[10px] tracking-[0.3em]">
            Wisdom curated from the best storytellers
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => {
            // Strict Logic: If lesson is Premium and user is NOT premium, it is LOCKED
            const isLocked = lesson.accessLevel === "Premium" && !isPremium;

            return (
              <motion.div
                key={lesson._id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className={`group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-500 shadow-xl relative ${
                  isLocked
                    ? "cursor-not-allowed"
                    : "hover:border-indigo-500 hover:shadow-indigo-200/20"
                }`}
              >
                {/* Image Section */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={lesson.image}
                    alt={lesson.title}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      !isLocked && "group-hover:scale-110"
                    } ${isLocked ? "blur-md grayscale scale-110" : ""}`}
                  />

                  {/* Lock Overlay for Non-Premium Users */}
                  {isLocked && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 backdrop-blur-[4px] text-white p-4 z-20">
                      <motion.div
                        initial={{ y: 10 }}
                        animate={{ y: 0 }}
                        className="bg-white/10 p-4 rounded-full mb-3 border border-white/20 shadow-2xl"
                      >
                        <AiFillLock size={32} className="text-yellow-400" />
                      </motion.div>
                      <p className="font-black text-[10px] uppercase tracking-[0.2em] text-white bg-indigo-600 px-4 py-1.5 rounded-full shadow-lg">
                        Premium Members Only
                      </p>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 z-30">
                    <span
                      className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg ${
                        lesson.accessLevel === "Premium"
                          ? "bg-yellow-400 text-black"
                          : "bg-emerald-500 text-white"
                      }`}
                    >
                      {lesson.accessLevel}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`p-8 ${
                    isLocked ? "opacity-50 select-none pointer-events-none" : ""
                  }`}
                >
                  <h3 className="font-black text-xl line-clamp-1 text-gray-800 dark:text-white transition-colors uppercase tracking-tighter">
                    {lesson.title}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2 mt-3 leading-relaxed font-bold uppercase tracking-tight">
                    {lesson.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 mt-5">
                    <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[9px] font-black uppercase rounded-md">
                      #{lesson.category}
                    </span>
                    <span className="px-2 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-[9px] font-black uppercase rounded-md">
                      {lesson.emotionalTone}
                    </span>
                  </div>

                  {/* Author & Button */}
                  <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <img
                        src={lesson.authorPhoto}
                        className="w-8 h-8 rounded-full border-2 border-indigo-500"
                        alt={lesson.authorName}
                      />
                      <span className="text-[10px] font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                        {lesson.authorName.split(" ")[0]}
                      </span>
                    </div>

                    {/* Conditional Link Rendering */}
                    {!isLocked ? (
                      <Link
                        href={`/lessons/${lesson._id}`}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 underline underline-offset-4 transition-all"
                      >
                        Read Story
                      </Link>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-1">
                        Locked <AiFillLock size={12} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLessons;
