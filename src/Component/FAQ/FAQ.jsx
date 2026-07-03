// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const faqs = [
//   {
//     question: "Is Digital Life Lessons free to use?",
//     answer:
//       "Yes! You can access most lessons for free. Some advanced content may require a premium subscription.",
//   },
//   {
//     question: "Who can benefit from these lessons?",
//     answer:
//       "Students, freelancers, entrepreneurs, and anyone who wants to improve their digital skills, habits, and mindset.",
//   },
//   {
//     question: "Can I get lessons via email?",
//     answer:
//       "Absolutely! Subscribe to our newsletter and receive a daily life lesson directly in your inbox.",
//   },
//   {
//     question: "Are these lessons practical or just motivational?",
//     answer:
//       "All lessons are actionable and practical, designed to help you apply them in real life.",
//   },
//   {
//     question: "How often are new lessons added?",
//     answer:
//       "New lessons are added weekly, covering personal growth, digital skills, career tips, and more.",
//   },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-28 bg-white dark:bg-slate-900 transition-colors duration-500">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
//             Frequently Asked <span className="text-indigo-600">Questions</span>
//           </h2>
//           <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400">
//             Find answers to the most common queries about Digital Life Lessons.
//           </p>
//         </div>

//         {/* FAQ Items */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800 transition hover:shadow-lg"
//             >
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="w-full flex justify-between items-center px-6 py-4 text-left"
//               >
//                 <span className="text-lg font-medium text-slate-900 dark:text-white">
//                   {faq.question}
//                 </span>
//                 {openIndex === index ? (
//                   <ChevronUp className="w-6 h-6 text-indigo-600" />
//                 ) : (
//                   <ChevronDown className="w-6 h-6 text-indigo-600" />
//                 )}
//               </button>

//               {openIndex === index && (
//                 <div className="px-6 pb-6 text-slate-700 dark:text-slate-300">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is Digital Life Lessons free to use?",
    answer:
      "Yes! You can access most lessons for free. Some advanced content may require a premium subscription for exclusive insights.",
  },
  {
    question: "Who can benefit from these lessons?",
    answer:
      "Students, freelancers, entrepreneurs, and anyone who wants to improve their digital skills, habits, and mindset.",
  },
  {
    question: "Can I get lessons via email?",
    answer:
      "Absolutely! Subscribe to our newsletter and receive a daily life lesson directly in your inbox.",
  },
  {
    question: "Are these lessons practical or just motivational?",
    answer:
      "All lessons are actionable and practical, designed to help you apply them in real life with step-by-step guidance.",
  },
  {
    question: "How often are new lessons added?",
    answer:
      "New lessons are added weekly, covering personal growth, digital skills, career tips, and more.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-indigo-50/20 to-transparent dark:from-[#0f172a] dark:via-[#0b0f1a] dark:to-black transition-colors duration-500">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/5 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header - Styled like Featured Lessons */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase"
          >
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-500 dark:text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">
            Your queries answered by our experts
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? "bg-white/80 dark:bg-gray-800/60 border-indigo-500/50 shadow-xl shadow-indigo-500/10 backdrop-blur-xl"
                    : "bg-white/40 dark:bg-gray-800/20 border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-8 py-6 text-left"
                >
                  <span
                    className={`text-lg font-black uppercase tracking-tight transition-colors duration-300 ${
                      isOpen
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-all duration-500 ${
                      isOpen
                        ? "bg-indigo-600 text-white rotate-180"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-500"
                    }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                        <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-700 mb-6"></div>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
