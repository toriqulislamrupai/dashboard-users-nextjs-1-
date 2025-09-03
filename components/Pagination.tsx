"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

type Props = { total: number; pageSize: number };

export default function Pagination({ total, pageSize }: Props) {
  const params = useSearchParams();
  const page = Math.max(1, parseInt(params.get("page") || "1", 10));
  const pages = Math.max(1, Math.ceil(total / pageSize));

  const createHref = (p: number) => {
    const next = new URLSearchParams(params);
    if (p <= 1) next.delete("page");
    else next.set("page", String(p));
    return `?${next.toString()}`;
  };

  const buttonVariants = {
    initial: { scale: 1, opacity: 0.9 },
    hover: {
      scale: 1.15,
      boxShadow: "0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(236, 72, 153, 0.5)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex items-center justify-center text-white gap-3 mt-6">
      {/* Prev Button */}
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={`rounded-full px-4 py-1 border cursor-pointer ${
          page === 1
            ? "opacity-40 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
        }`}
      >
        <Link href={page === 1 ? "#" : createHref(Math.max(1, page - 1))}>Prev</Link>
      </motion.div>

      {/* Page Indicator */}
      <motion.span
        className="text-white font-medium px-3 py-1 rounded-full border border-white/20 bg-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Page {page} / {pages}
      </motion.span>

      {/* Next Button */}
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={`rounded-full px-4 py-1 border cursor-pointer ${
          page === pages
            ? "opacity-40 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
        }`}
      >
        <Link href={page === pages ? "#" : createHref(Math.min(pages, page + 1))}>Next</Link>
      </motion.div>
    </div>
  );
}
