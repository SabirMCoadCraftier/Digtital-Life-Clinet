import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../LoadingSpenner/LoadingSpenner";
import { motion } from "framer-motion";
import { FaCrown, FaHeart, FaBookOpen } from "react-icons/fa";

export default function TopContributorsWeekly() {
  const axiosSecure = useAxiosSecure();

  const { data: contributors = [], isLoading } = useQuery({
    queryKey: ["topContributorsWeekly"],
    queryFn: async () => {
      const res = await axiosSecure.get("/top-contributors-weekly");
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  if (contributors.length === 0)
    return (
      <div className="text-center py-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-transparent dark:from-gray-900 dark:via-black dark:to-black">
        <p className="text-gray-500 dark:text-gray-400 italic text-lg font-medium">
          No heroes found this week. Be the first one! 🚀
        </p>
      </div>
    );

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lime-50/40 via-white to-transparent dark:from-[#0f172a] dark:via-[#0b0f1a] dark:to-black">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/10 blur-[120px] rounded-full -z-10"></div>

      {/* Container - Width adjusted to max-w-6xl to match Featured Lessons */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase"
          >
            Weekly{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">
              Superstars
            </span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-lime-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-500 dark:text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">
            Top Contributors of the week
          </p>
        </div>

        {/* Contributors Grid - Responsive column gap to match width */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-10">
          {contributors.map((person, index) => (
            <motion.div
              key={person._id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              {/* Rank Badge */}
              <div
                className={`absolute -top-5 -right-3 z-20 w-14 h-14 flex items-center justify-center rounded-[1.2rem] rotate-12 shadow-2xl font-black text-white transition-transform group-hover:scale-110 group-hover:rotate-0
                  ${
                    index === 0
                      ? "bg-gradient-to-br from-yellow-400 to-orange-600 ring-4 ring-yellow-500/20"
                      : index === 1
                      ? "bg-gradient-to-br from-slate-300 to-slate-500 ring-4 ring-slate-400/20"
                      : index === 2
                      ? "bg-gradient-to-br from-orange-400 to-red-600 ring-4 ring-red-400/20"
                      : "bg-gray-600"
                  }`}
              >
                {index === 0 ? (
                  <FaCrown size={24} className="drop-shadow-md" />
                ) : (
                  index + 1
                )}
              </div>

              {/* Card Body - Balanced padding for matching width */}
              <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-gray-100 dark:border-gray-700 shadow-xl group-hover:shadow-lime-500/20 group-hover:border-lime-500/50 transition-all duration-500">
                {/* Profile Image Area */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute inset-[-6px] md:inset-[-8px] rounded-full border-2 border-dashed ${
                      index === 0
                        ? "border-yellow-500/50"
                        : "border-lime-500/50"
                    }`}
                  ></motion.div>
                  <img
                    src={
                      person.authorPhoto ||
                      "https://i.ibb.co/4pDNDk1/avatar.png"
                    }
                    alt={person.authorName}
                    className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-900 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-black text-gray-800 dark:text-white mb-1 line-clamp-1 uppercase tracking-tighter">
                    {person.authorName}
                  </h3>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">
                    Contributor ID: {person._id.slice(-6)}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 md:p-5 rounded-3xl border border-gray-100 dark:border-gray-800">
                    <div className="text-center">
                      <p className="flex items-center justify-center gap-1.5 text-[8px] md:text-[9px] font-black text-indigo-500 uppercase tracking-widest mb-1">
                        <FaBookOpen /> Lessons
                      </p>
                      <p className="text-xl md:text-2xl font-black text-gray-800 dark:text-white">
                        {person.totalLessons}
                      </p>
                    </div>
                    <div className="text-center border-l border-gray-200 dark:border-gray-700">
                      <p className="flex items-center justify-center gap-1.5 text-[8px] md:text-[9px] font-black text-pink-500 uppercase tracking-widest mb-1">
                        <FaHeart /> Likes
                      </p>
                      <p className="text-xl md:text-2xl font-black text-gray-800 dark:text-white">
                        {person.totalLikes}
                      </p>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="mt-8">
                    <span className="px-5 py-2 rounded-2xl bg-gradient-to-r from-lime-500/10 to-emerald-500/10 text-lime-600 dark:text-lime-400 text-[10px] font-black uppercase tracking-[0.2em] border border-lime-500/20 group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
                      🏆 Weekly MVP
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
