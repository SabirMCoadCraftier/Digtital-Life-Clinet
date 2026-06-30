import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-50/40 via-white to-transparent dark:from-yellow-900/10 dark:via-[#0b0f1a] dark:to-black">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Section Header - Styled like Featured Lessons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-none">
            Get Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              Daily Life Lessons
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter and receive a practical digital life
            lesson every day directly in your inbox.
          </p>
        </motion.div>

        {/* Subscription Form with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/70 dark:bg-gray-800/40 backdrop-blur-xl p-3 rounded-[2.5rem] shadow-2xl border border-white dark:border-gray-700 max-w-2xl mx-auto"
        >
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your professional email"
              className="flex-1 px-8 py-5 rounded-[2rem] bg-gray-50 dark:bg-gray-900/50 border-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white font-medium outline-none transition-all"
              required
            />
            <button
              type="submit"
              className="group bg-yellow-500 hover:bg-yellow-600 text-black font-black uppercase tracking-widest px-10 py-5 rounded-[2rem] flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-lg shadow-yellow-500/20"
            >
              Subscribe
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        </motion.div>

        {/* Anti-Spam Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          No spam. Unsubscribe anytime.
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
