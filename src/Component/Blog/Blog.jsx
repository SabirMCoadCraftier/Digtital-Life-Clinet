// const blogs = [
//   {
//     title: "5 Habits to Boost Your Digital Productivity",
//     description: `In today's fast-paced digital world, staying productive can be challenging.
//     This article explores five actionable habits to boost your productivity, including:
//     1. Prioritizing tasks effectively,
//     2. Minimizing digital distractions,
//     3. Setting clear daily goals,
//     4. Using technology to your advantage, and
//     5. Reviewing your day to optimize future performance.

//     By following these simple yet effective habits, you can transform your daily routine
//     and make consistent progress in your studies, work, and personal projects.`,
//     category: "Productivity",
//     date: "Jan 10, 2026",
//     link: "#",
//   },
//   {
//     title: "Building a Growth Mindset in the Digital Age",
//     description: `A growth mindset is essential for personal and professional development.
//     In this guide, we explain how to cultivate a mindset that embraces challenges, learns
//     from failures, and continuously improves. Topics include:
//     - Overcoming fear of failure,
//     - Practicing self-reflection,
//     - Setting long-term growth goals, and
//     - Adapting to new digital tools effectively.

//     This article is perfect for students, freelancers, and anyone who wants to thrive in
//     a world driven by technology and continuous learning.`,
//     category: "Mindset",
//     date: "Jan 8, 2026",
//     link: "#",
//   },
//   {
//     title: "Financial Awareness Tips for Students",
//     description: `Financial awareness is a crucial life skill that is often overlooked in education.
//     In this detailed guide, we cover practical techniques for managing your finances as a student,
//     including budgeting, saving, and investing basics. Learn how to:
//     1. Track your expenses efficiently,
//     2. Prioritize needs over wants,
//     3. Build an emergency fund, and
//     4. Start saving for long-term goals.

//     By applying these tips, you can achieve financial stability, make informed decisions,
//     and develop healthy money habits that last a lifetime.`,
//     category: "Finance",
//     date: "Jan 5, 2026",
//     link: "#",
//   },
// ];

// const Blog = () => {
//   return (
//     <section className="py-28 bg-gray-50 dark:bg-slate-900 transition-colors duration-500">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
//             Latest <span className="text-indigo-600">Blogs</span>
//           </h2>
//           <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
//             Explore in-depth articles, strategies, and lessons to improve your
//             digital life. Learn practical skills, productivity hacks, mindset
//             tips, and personal growth techniques curated to help you succeed in
//             the digital era.
//           </p>
//         </div>

//         {/* Blog Cards */}
//         <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
//             >
//               {/* Category Tag */}
//               <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
//                 {blog.category}
//               </span>

//               {/* Blog Title */}
//               <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
//                 {blog.title}
//               </h3>

//               {/* Description */}
//               <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-sm md:text-base whitespace-pre-line">
//                 {blog.description}
//               </p>

//               {/* Footer: Date + Read More */}
//               <div className="flex justify-between items-center">
//                 <span className="text-slate-500 dark:text-slate-400 text-sm">
//                   {blog.date}
//                 </span>
//                 <a
//                   href={blog.link}
//                   className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline text-sm"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

import React from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react"; // install lucide-react if not present

const blogs = [
  {
    title: "5 Habits to Boost Your Digital Productivity",
    description:
      "In today's fast-paced digital world, staying productive can be challenging. This article explores five actionable habits to boost your productivity...",
    category: "Productivity",
    date: "Jan 10, 2026",
    link: "#",
  },
  {
    title: "Building a Growth Mindset in the Digital Age",
    description:
      "A growth mindset is essential for development. In this guide, we explain how to cultivate a mindset that embraces challenges and learns from failures...",
    category: "Mindset",
    date: "Jan 8, 2026",
    link: "#",
  },
  {
    title: "Financial Awareness Tips for Students",
    description:
      "Financial awareness is a crucial life skill. In this detailed guide, we cover practical techniques for managing your finances as a student...",
    category: "Finance",
    date: "Jan 5, 2026",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="relative py-24 bg-[#f8fafc] dark:bg-[#0f172a] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-[120px] -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Insightful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                Perspectives
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore in-depth articles and productivity hacks curated to help
              you succeed in the digital era.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            View All Posts <ArrowRight size={18} />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              <div className="p-8">
                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Tag size={12} /> {blog.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                    <Calendar size={12} /> {blog.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 text-sm md:text-base leading-relaxed">
                  {blog.description}
                </p>

                {/* Action Link */}
                <a
                  href={blog.link}
                  className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold group/link"
                >
                  <span className="relative">
                    Read Article
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
