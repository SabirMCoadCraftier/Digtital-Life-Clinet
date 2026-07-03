"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0b0f1a] py-24 transition-colors duration-500">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-tight"
          >
            About <span className="text-indigo-600">Digital Life Lessons</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-8 text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] max-w-2xl mx-auto">
            Practical wisdom for the modern digital era
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter leading-snug">
              Learn Skills That <br />
              <span className="text-indigo-600">Actually Matter</span>
            </h3>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              <p>
                Digital Life Lessons is a learning platform built for people who
                want more than just information. We focus on real-life
                experience, practical digital skills, and the right mindset to
                help you grow consistently.
              </p>
              <p>
                Here, you will learn how to manage your time, build digital
                habits, improve focus, and make better decisions for your
                personal and professional life.
              </p>
            </div>
          </motion.div>

          {/* Right Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Practical Lessons",
                desc: "Action-based lessons you can apply in real life.",
              },
              {
                title: "Digital Discipline",
                desc: "Learn focus, consistency, and self-control.",
              },
              {
                title: "Growth Mindset",
                desc: "Build habits that help you grow every day.",
              },
              {
                title: "Simple Language",
                desc: "Easy explanations without fake motivation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <h4 className="font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tighter group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
