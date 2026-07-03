"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const privacySections = [
  {
    title: "Introduction & Our Commitment",
    description: `Welcome to Digital Life Lessons! We believe in protecting your privacy and providing a safe online experience. 
    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
    or use our services. We commit to ensuring that your personal data is handled securely and responsibly.`,
  },
  {
    title: "Information We Collect",
    description: `When you interact with Digital Life Lessons, we may collect personal information you voluntarily provide, 
    such as your name, email address, and subscription preferences. We also automatically collect certain usage data 
    (like your IP address, browser type, and pages visited) to help us understand how users engage with our content and 
    improve overall platform performance.`,
  },
  {
    title: "How We Use Your Information",
    description: `We use your data to deliver the services you've requested — including sending daily lessons, updates, 
    and personalized recommendations. Your information helps us tailor content that aligns with your interests. We never sell 
    your personal data to external parties and only share with trusted service partners who help us operate the platform.`,
  },
  {
    title: "Cookies & Tracking Technologies",
    description: `To enhance your experience, we use cookies and similar tracking technologies. These tools help us remember 
    your preferences, analyze trends, and serve you better content. You may choose to disable cookies through your browser 
    settings, but some features may not function as intended without them.`,
  },
  {
    title: "Data Security & Protection",
    description: `Your data security matters to us. We implement appropriate technical and organizational safeguards to protect 
    your information from unauthorized access, theft, or misuse. While we strive to use commercially acceptable means to 
    protect your personal information, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: "Your Rights & Choices",
    description: `You have the right to access, correct, or delete your personal information at any time. If you wish to update 
    your details or unsubscribe from our newsletter, you can do so through your account settings or by contacting our support team. 
    We respect your choices and will respond to your requests promptly.`,
  },
];

const PrivacyPolicySection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#0b0f1a] transition-colors duration-500">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent dark:from-indigo-900/10 -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase"
          >
            Privacy <span className="text-indigo-600">Policy</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-slate-500 dark:text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">
            Legal Framework & User Protection
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {privacySections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                openIndex === index
                  ? "bg-white dark:bg-gray-800/60 border-indigo-500/50 shadow-xl shadow-indigo-500/10"
                  : "bg-gray-50/50 dark:bg-gray-900/40 border-gray-100 dark:border-gray-800 hover:border-indigo-500/30"
              }`}
            >
              {/* Title / Trigger */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >
                <h3
                  className={`text-sm md:text-base font-black uppercase tracking-tight transition-colors duration-300 ${
                    openIndex === index
                      ? "text-indigo-600"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {section.title}
                </h3>
                <div
                  className={`p-2 rounded-full transition-transform duration-500 ${
                    openIndex === index
                      ? "rotate-180 bg-indigo-600 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-500"
                  }`}
                >
                  <FaChevronDown size={14} />
                </div>
              </button>

              {/* Content with Smooth Height Animation */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-600 dark:text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                      <div className="pt-2 border-t border-gray-100 dark:border-gray-700/50">
                        {section.description}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-gray-600">
          Last Updated: October 2023 • Digital Life Lessons Security
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
