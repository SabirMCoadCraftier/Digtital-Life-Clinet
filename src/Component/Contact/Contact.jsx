import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#0b0f1a] transition-colors duration-500">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase"
          >
            Get in <span className="text-indigo-600">Touch</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-8 text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] max-w-2xl mx-auto">
            We’d love to hear from you • Reach out anytime
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="grid gap-8">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Address",
                  detail: "Jamalpur, Mymensingh, Bangladesh",
                  color: "text-blue-500",
                },
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  detail: "+880 01893505618",
                  color: "text-emerald-500",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  detail: "abdulmajed5618@gmail.com",
                  color: "text-pink-500",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-base font-bold text-slate-800 dark:text-slate-200">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Styled Map Container */}
            <div className="relative p-2 bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner">
              <div className="w-full h-72 rounded-[2rem] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                <iframe
                  title="Digital Life Lessons Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57964.38209804245!2d89.92131934863282!3d24.9150041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd94843b000001%3A0xf64f5262846d1b7!2sJamalpur!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0 opacity-80"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-slate-50/50 dark:bg-slate-800/40 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] border border-slate-100 dark:border-slate-700 shadow-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-400">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-400">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-400">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-400">
                  Message
                </label>
                <textarea
                  placeholder="Your thoughts..."
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-3 transition-all"
              >
                Send Message <FaPaperPlane size={14} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
