import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Personal Growth",
    description:
      "Develop mindset, confidence, and habits for self-improvement.",
    icon: "🌱",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Career & Skills",
    description:
      "Learn digital skills and career tips to succeed professionally.",
    icon: "💼",
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Digital Discipline",
    description:
      "Build focus, productivity, and consistency in your digital life.",
    icon: "📱",
    color: "from-purple-400 to-fuchsia-600",
  },
  {
    title: "Mindset & Motivation",
    description: "Stay motivated, positive, and resilient every day.",
    icon: "💡",
    color: "from-yellow-400 to-orange-600",
  },
  {
    title: "Financial Awareness",
    description:
      "Understand money, budgeting, and financial growth strategies.",
    icon: "💰",
    color: "from-amber-400 to-yellow-600",
  },
  {
    title: "Health & Wellbeing",
    description: "Balance your mental and physical health for a better life.",
    icon: "🧘‍♂️",
    color: "from-teal-400 to-cyan-600",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-50 to-transparent dark:from-[#0f172a] dark:via-[#0b0f1a] dark:to-black transition-colors duration-500">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header - Styled like Featured Lessons */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase"
          >
            Explore <span className="text-indigo-600">Categories</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-medium leading-relaxed">
            Choose the area you want to grow in and start learning practical
            lessons today from our expert community.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] bg-white/70 dark:bg-gray-800/40 backdrop-blur-md border border-gray-100 dark:border-gray-700 hover:border-indigo-500/50 transition-all duration-500 shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Icon Container with subtle glow */}
              <div className="relative w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-900 group-hover:scale-110 transition-transform duration-500">
                <div
                  className={`absolute inset-0 opacity-20 blur-lg rounded-full bg-gradient-to-br ${cat.color}`}
                ></div>
                <span className="text-4xl relative z-10">{cat.icon}</span>
              </div>

              {/* Title with Featured Lesson Font Style */}
              <h3 className="text-xl font-black text-gray-800 dark:text-white mb-3 uppercase tracking-tight group-hover:text-indigo-600 transition-colors">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                {cat.description}
              </p>

              {/* Hover Indicator */}
              <div className="mt-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Browse Lessons <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
