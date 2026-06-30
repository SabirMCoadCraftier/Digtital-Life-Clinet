import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#0b0f1a] text-slate-900 dark:text-gray-300 pt-20 pb-10 transition-colors duration-500 overflow-hidden">
      {/* Top Border Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                <img
                  src="https://i.ibb.co/4pDNDk1/avatar.png"
                  alt="logo"
                  className="h-14 w-14 rounded-2xl relative z-10 border border-gray-100 dark:border-gray-800"
                />
              </div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">
                Digital <br />{" "}
                <span className="text-indigo-600">Life Lessons</span>
              </h2>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-gray-400 leading-relaxed">
              Empowering individuals through shared wisdom. Learn from real
              experiences and build your digital legacy with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black text-slate-900 dark:text-white mb-6 uppercase tracking-[0.3em]">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
              <li>
                <a
                  href="/"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/public-lessons"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  All Lessons
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-black text-slate-900 dark:text-white mb-6 uppercase tracking-[0.3em]">
              Get In Touch
            </h3>
            <ul className="text-sm font-medium space-y-4 text-slate-600 dark:text-gray-400">
              <li className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-indigo-500 mb-1">
                  Email
                </span>
                abdulmajed5618@gmail.com
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-indigo-500 mb-1">
                  Location
                </span>
                Jamalpur,Mymensingh, Bangladesh
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-xs font-black text-slate-900 dark:text-white mb-6 uppercase tracking-[0.3em]">
              Connect With Us
            </h3>
            <div className="flex items-center gap-4 mb-8">
              {[
                {
                  icon: <FaFacebook />,
                  link: "https://www.facebook.com/mdabdul.majed.1806",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/abdulmajed123",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/mdabdulmajed/",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <a
                href="/privacy-policy"
                className="hover:text-indigo-600 transition-colors"
              >
                Terms
              </a>
              <span className="text-gray-300 dark:text-gray-800">|</span>
              <a
                href="/privacy-policy"
                className="hover:text-indigo-600 transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-gray-100 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-gray-500">
            © {currentYear} Digital Life Lessons — Crafted for Growth.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            System Status: Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
