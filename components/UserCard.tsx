"use client";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

type Props = {
  id: number;
  name: string;
  email: string;
  company: string;
};

export default function UserCard({ id, name, email, company }: Props) {
  const [hover, setHover] = useState(false);
  const controls = useAnimation();

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 }
    },
    hover: {
      scale: 1.07,
      borderRadius: "2rem",
      transition: { type: "spring", stiffness: 200, damping: 16 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120 }
    })
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="relative cursor-pointer overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-2xl p-6 rounded-xl w-72 h-44 flex flex-col justify-between"
      style={{
        perspective: 800,
      }}
    >
      {/* Liquid shimmer / glow effect */}
      <motion.div
        animate={{
          rotate: hover ? [0, 5, -5, 0] : [0],
          scale: hover ? [1, 1.03, 0.97, 1] : [1],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-white/10 rounded-xl blur-2xl pointer-events-none"
      />

      <Link href={`/users/${id}`} className="relative z-10 flex flex-col h-full justify-between">
        <motion.h3
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-bold text-white text-xl"
        >
          {name}
        </motion.h3>
        <motion.p
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-white/80 text-sm"
        >
          {email}
        </motion.p>
        <motion.span
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/20 px-3 py-1 text-xs rounded-full text-white/90 self-start"
        >
          {company}
        </motion.span>
      </Link>

     
      {hover && (
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {/* You can replace these with Three.js glowing spheres later */}
          <div className="absolute w-3 h-3 bg-white/50 rounded-full top-10 left-10 animate-bounce-slow"></div>
          <div className="absolute w-2 h-2 bg-white/30 rounded-full top-20 right-16 animate-bounce-slow"></div>
          <div className="absolute w-4 h-4 bg-white/40 rounded-full bottom-10 left-20 animate-bounce-slow"></div>
        </motion.div>
      )}
    </motion.div>
  );
}
