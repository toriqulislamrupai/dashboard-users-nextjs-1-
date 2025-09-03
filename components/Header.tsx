"use client";

import { motion } from "framer-motion";

export default function Header() {
  const leftSection = "Dashboard";
  const rightSection = "JSONPlaceholder";

  return (
    <motion.header
      className="sticky top-0 z-10 backdrop-blur border-b bg-white/60 px-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between py-3 relative">
        {/* Left Section */}
        <motion.div
          className="font-bold text-lg relative"
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <span className="relative z-10 text-gray-900">{leftSection}</span>
          {/* Subtle glow behind text */}
          <motion.span
            className="absolute inset-0 text-transparent shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            aria-hidden="true"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            {leftSection}
          </motion.span>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="text-sm relative"
          animate={{ y: [0, 1.5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <span className="relative z-10 text-gray-700">{rightSection}</span>
          {/* Subtle glow behind text */}
          <motion.span
            className="absolute inset-0 text-transparent shadow-[0_0_12px_rgba(139,92,246,0.2)]"
            aria-hidden="true"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            {rightSection}
          </motion.span>
        </motion.div>
      </div>
    </motion.header>
  );
}
