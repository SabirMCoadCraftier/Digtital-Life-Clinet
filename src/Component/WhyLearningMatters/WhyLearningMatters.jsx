import React from "react";
import { motion } from "framer-motion";

export default function WhyLearningMatters() {
  const benefits = [
    {
      title: "Grow Through Experiences",
      desc: "Life teaches lessons no classroom ever can. Every success and failure shapes who we become.",
      icon: "🌱",
      glow: "group-hover:shadow-green-500/20",
    },
    {
      title: "Build Emotional Strength",
      desc: "Understanding your past helps you control your future. Emotional maturity comes from reflection.",
      icon: "💛",
      glow: "group-hover:shadow-yellow-500/20",
    },
    {
      title: "Make Better Decisions",
      desc: "Learning from life gives clarity. It helps you avoid old mistakes and choose your purpose.",
      icon: "🧠",
      glow: "group-hover:shadow-blue-500/20",
    },
    {
      title: "Inspire Others",
      desc: "Your life lessons can guide someone else who is struggling. Sharing wisdom multiplies its value.",
      icon: "✨",
      glow: "group-hover:shadow-purple-500/20",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-indigo-50/30 to-transparent dark:from-[#0f172a] dark:via-gray-900 dark:to-black">
      {/* Background Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header - Styled like Featured Lessons */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase"
          >
            Why Learning <span className="text-indigo-600">From Life</span>{" "}
            Matters
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`group p-8 rounded-[2.5rem] bg-white/80 dark:bg-gray-800/40 backdrop-blur-md border border-gray-100 dark:border-gray-700 hover:border-indigo-500/50 transition-all duration-500 shadow-xl ${item.glow}`}
            >
              {/* Icon Section */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                {item.icon}
              </div>

              {/* Title with Featured Lesson Font Style */}
              <h3 className="text-lg font-black text-gray-800 dark:text-white mb-3 uppercase tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Decorative Element */}
              <div className="mt-6 w-8 h-1 bg-gray-100 dark:bg-gray-700 group-hover:w-full group-hover:bg-indigo-500 transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
