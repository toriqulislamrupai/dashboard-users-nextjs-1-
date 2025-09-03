"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type Props = { user: any };

export default function UserDetailClient({ user }: Props) {
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 mx-auto"
    >
      <Link href="/users" className="text-sm underline hover:opacity-70 animate-pulse text-white">
        ← Back to Users
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Info Card */}
        <FloatingCard>
          <motion.h2 custom={0} variants={textVariants} initial="hidden" animate="visible" className="text-xl font-semibold mb-2">
            {user.name}
          </motion.h2>
          <motion.p custom={1} variants={textVariants} initial="hidden" animate="visible" className="text-gray-200">
            {user.email}
          </motion.p>
          <motion.p custom={2} variants={textVariants} initial="hidden" animate="visible" className="text-gray-200">
            {user.phone}
          </motion.p>
          <motion.p custom={3} variants={textVariants} initial="hidden" animate="visible" className="text-gray-200">
            {user.website}
          </motion.p>
        </FloatingCard>

        {/* Company Card */}
        <FloatingCard>
          <motion.h3 custom={0} variants={textVariants} initial="hidden" animate="visible" className="font-semibold mb-1">
            Company
          </motion.h3>
          <motion.p custom={1} variants={textVariants} initial="hidden" animate="visible">{user.company.name}</motion.p>
          <motion.p custom={2} variants={textVariants} initial="hidden" animate="visible" className="text-sm text-gray-300">
            {user.company.catchPhrase}
          </motion.p>
          <motion.p custom={3} variants={textVariants} initial="hidden" animate="visible" className="text-sm text-gray-300">
            {user.company.bs}
          </motion.p>
        </FloatingCard>

        {/* Address Card */}
        <FloatingCard className="md:col-span-2">
          <motion.h3 custom={0} variants={textVariants} initial="hidden" animate="visible" className="font-semibold mb-1">
            Address
          </motion.h3>
          <motion.p custom={1} variants={textVariants} initial="hidden" animate="visible">
            {user.address.street}, {user.address.suite}
          </motion.p>
          <motion.p custom={2} variants={textVariants} initial="hidden" animate="visible">
            {user.address.city} {user.address.zipcode}
          </motion.p>
          <motion.p custom={3} variants={textVariants} initial="hidden" animate="visible" className="text-xs text-gray-400 mt-2">
            Geo: {user.address.geo.lat}, {user.address.geo.lng}
          </motion.p>
        </FloatingCard>
      </div>
    </motion.div>
  );
};

// Fixed FloatingCard with internal mouse handlers
const FloatingCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15; // rotateX
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 15; // rotateY
    setRotate({ x, y });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
      className={`relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 rounded-2xl p-6 shadow-2xl text-white cursor-pointer transition-transform ${className}`}
      whileHover={{ scale: 1.04 }}
    >
      {/* Glow / Shimmer Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-white/10 blur-2xl pointer-events-none"
        animate={{ opacity: [0.2, 0.05, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {children}
    </motion.div>
  );
};
