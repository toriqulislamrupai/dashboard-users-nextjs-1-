"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const footerText = "Built with Next.js, Tailwind, Framer Motion, and a sprinkle of 3D ✨";

  return (
    <motion.footer
      className="container py-10 text-center text-xs text-gray-400 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Floating particles behind text */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              x: [Math.random() * -100, Math.random() * 100],
              y: [Math.random() * -20, Math.random() * 20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Wave animated text */}
      <motion.div className="relative z-10 inline-block">
        {footerText.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            animate={{ y: [0, -3, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1, color: "#8B5CF6" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.footer>
  );
}
