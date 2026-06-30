// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import LoadingSpinner from "../LoadingSpenner/LoadingSpenner";
// import { motion } from "framer-motion";
// import { FaHeart, FaRibbon } from "react-icons/fa";

// export default function MostSavedLessons() {
//   const axiosSecure = useAxiosSecure();

//   const { data: lessons = [], isLoading } = useQuery({
//     queryKey: ["mostSavedLessons"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/most-saved-lessons");
//       return res.data;
//     },
//   });

//   if (isLoading) return <LoadingSpinner />;

//   if (!lessons.length)
//     return (
//       <div className="text-center py-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-transparent dark:from-gray-900 dark:via-black dark:to-black">
//         <p className="text-gray-500 dark:text-gray-400 italic text-lg font-medium">
//           No saved lessons yet. ❤️
//         </p>
//       </div>
//     );

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5,
//         type: "spring",
//         stiffness: 100,
//       },
//     }),
//   };

//   const top3 = lessons.slice(0, 3);
//   const rest = lessons.slice(3);

//   return (
//     <section className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-50/40 via-white to-transparent dark:from-[#0f172a] dark:via-[#0b0f1a] dark:to-black">
//       {/* Decorative Blur BG */}
//       <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-500/5 blur-[120px] rounded-full -z-10"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Section Header - Styled like Featured Lessons */}
//         <div className="text-center mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase"
//           >
//             Most <span className="text-pink-600">Saved</span> Lessons
//           </motion.h2>
//           <div className="w-24 h-1.5 bg-pink-500 mx-auto mt-4 rounded-full"></div>
//           <p className="mt-6 text-gray-500 dark:text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">
//             The community's favorite wisdom
//           </p>
//         </div>

//         {/* Top 3 Highlight Cards */}
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-20">
//           {top3.map((lesson, index) => (
//             <motion.div
//               key={lesson._id}
//               custom={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               whileHover={{ y: -12 }}
//               className="relative group"
//             >
//               {/* Modern Rank Badge */}
//               <div className="absolute -top-5 -left-5 z-20 w-16 h-16 flex flex-col items-center justify-center rounded-3xl bg-indigo-600 text-white font-black shadow-2xl rotate-[-12deg] group-hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-gray-800">
//                 <span className="text-[10px] uppercase">Rank</span>
//                 <span className="text-xl">#{index + 1}</span>
//               </div>

//               <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-xl rounded-[3rem] overflow-hidden border border-gray-100 dark:border-gray-700 shadow-2xl group-hover:border-pink-500/50 transition-all duration-500">
//                 {/* Lesson Image Section */}
//                 <div className="h-56 w-full overflow-hidden relative">
//                   <img
//                     src={
//                       lesson.image ||
//                       "https://i.ibb.co/0Vfj6k4q/jhankar-mahabub.jpg"
//                     }
//                     alt={lesson.lessonTitle}
//                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute bottom-4 left-6 flex items-center gap-2">
//                     <span className="bg-pink-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1">
//                       <FaHeart /> {lesson.savesCount} SAVES
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-8">
//                   <h3 className="text-xl font-black text-gray-800 dark:text-white mb-4 line-clamp-2 uppercase tracking-tighter group-hover:text-pink-600 transition-colors">
//                     {lesson.lessonTitle}
//                   </h3>

//                   <div className="flex items-center gap-3 mb-6">
//                     <img
//                       src={lesson.authorPhoto}
//                       alt={lesson.authorName}
//                       className="w-10 h-10 rounded-full border-2 border-indigo-500"
//                     />
//                     <p className="text-xs font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider">
//                       {lesson.authorName}
//                     </p>
//                   </div>

//                   {/* Badges */}
//                   <div className="flex flex-wrap gap-2">
//                     <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-lg text-[9px] font-black uppercase">
//                       {lesson.category}
//                     </span>
//                     <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-lg text-[9px] font-black uppercase">
//                       {lesson.emotionalTone}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Rest of the Lessons - Grid Layout */}
//         {rest.length > 0 && (
//           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
//             {rest.map((lesson, index) => (
//               <motion.div
//                 key={lesson._id}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={cardVariants}
//                 whileHover={{ y: -5 }}
//                 className="bg-white/50 dark:bg-gray-800/30 backdrop-blur-md rounded-[2rem] p-6 border border-gray-100 dark:border-gray-800 shadow-lg hover:border-pink-500/30 transition-all duration-300"
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-lg font-black text-gray-800 dark:text-white line-clamp-2 uppercase tracking-tight">
//                     {lesson.lessonTitle}
//                   </h3>
//                   <div className="flex items-center gap-1 text-pink-600 font-black text-xs">
//                     <FaHeart size={10} /> {lesson.savesCount}
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 mb-4">
//                   <img
//                     src={lesson.authorPhoto}
//                     className="w-8 h-8 rounded-full"
//                     alt=""
//                   />
//                   <span className="text-[10px] font-bold text-gray-500 uppercase">
//                     {lesson.authorName}
//                   </span>
//                 </div>

//                 <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-3 mb-4 leading-relaxed">
//                   {lesson.lessonDescription}
//                 </p>

//                 <div className="flex gap-2">
//                   <span className="text-[9px] font-black text-indigo-500 uppercase bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded-md">
//                     {lesson.category}
//                   </span>
//                   <span
//                     className={`text-[9px] font-black uppercase px-2 py-1 rounded-md ${
//                       lesson.accessLevel === "Premium"
//                         ? "bg-yellow-100 text-yellow-600"
//                         : "bg-green-100 text-green-600"
//                     }`}
//                   >
//                     {lesson.accessLevel}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../LoadingSpenner/LoadingSpenner";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function MostSavedLessons() {
  const axiosSecure = useAxiosSecure();

  const { data: lessons = [], isLoading } = useQuery({
    queryKey: ["mostSavedLessons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/most-saved-lessons");
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  if (!lessons.length)
    return (
      <div className="text-center py-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-transparent dark:from-gray-900 dark:via-black dark:to-black">
        <p className="text-gray-500 dark:text-gray-400 italic text-lg font-medium">
          No saved lessons yet. ❤️
        </p>
      </div>
    );

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const top3 = lessons.slice(0, 3);
  const rest = lessons.slice(3);

  return (
    <section className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-50/40 via-white to-transparent dark:from-[#0f172a] dark:via-[#0b0f1a] dark:to-black">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-500/5 blur-[120px] rounded-full -z-10"></div>

      {/* SYNCED WIDTH: max-w-6xl aligned with Featured Lessons */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase"
          >
            Most <span className="text-pink-600">Saved</span> Lessons
          </motion.h2>
          <div className="w-24 h-1.5 bg-pink-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-500 dark:text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">
            The community's favorite wisdom
          </p>
        </div>

        {/* Top 3 Highlight Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-10 mb-20">
          {top3.map((lesson, index) => (
            <motion.div
              key={lesson._id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              {/* Modern Rank Badge */}
              <div className="absolute -top-5 -left-5 z-20 w-14 h-14 md:w-16 md:h-16 flex flex-col items-center justify-center rounded-3xl bg-indigo-600 text-white font-black shadow-2xl rotate-[-12deg] group-hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-gray-800">
                <span className="text-[9px] md:text-[10px] uppercase">
                  Rank
                </span>
                <span className="text-lg md:text-xl">#{index + 1}</span>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-gray-100 dark:border-gray-700 shadow-2xl group-hover:border-pink-500/50 transition-all duration-500">
                {/* Image Section */}
                <div className="h-52 md:h-56 w-full overflow-hidden relative">
                  <img
                    src={
                      lesson.image ||
                      "https://i.ibb.co/0Vfj6k4q/jhankar-mahabub.jpg"
                    }
                    alt={lesson.lessonTitle}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <span className="bg-pink-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1">
                      <FaHeart /> {lesson.savesCount} SAVES
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-black text-gray-800 dark:text-white mb-4 line-clamp-2 uppercase tracking-tighter group-hover:text-pink-600 transition-colors">
                    {lesson.lessonTitle}
                  </h3>

                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={lesson.authorPhoto}
                      alt={lesson.authorName}
                      className="w-10 h-10 rounded-full border-2 border-indigo-500"
                    />
                    <p className="text-xs font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      {lesson.authorName}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-lg text-[9px] font-black uppercase">
                      {lesson.category}
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-lg text-[9px] font-black uppercase">
                      {lesson.emotionalTone}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest of the Lessons */}
        {rest.length > 0 && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-10">
            {rest.map((lesson, index) => (
              <motion.div
                key={lesson._id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-white/50 dark:bg-gray-800/30 backdrop-blur-md rounded-[2rem] p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-black text-gray-800 dark:text-white line-clamp-2 uppercase tracking-tight">
                    {lesson.lessonTitle}
                  </h3>
                  <div className="flex items-center gap-1 text-pink-600 font-black text-xs">
                    <FaHeart size={10} /> {lesson.savesCount}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <img
                    src={lesson.authorPhoto}
                    className="w-8 h-8 rounded-full"
                    alt=""
                  />
                  <span className="text-[10px] font-bold text-gray-500 uppercase">
                    {lesson.authorName}
                  </span>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-3 mb-6 leading-relaxed">
                  {lesson.lessonDescription}
                </p>

                <div className="flex gap-2">
                  <span className="text-[9px] font-black text-indigo-500 uppercase bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded-md">
                    {lesson.category}
                  </span>
                  <span
                    className={`text-[9px] font-black uppercase px-2 py-1 rounded-md ${
                      lesson.accessLevel === "Premium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {lesson.accessLevel}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
