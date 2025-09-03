"use client";

import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initial = useMemo(() => searchParams.get("q") ?? "", [searchParams]);
  const [value, setValue] = useState(initial);
  const [focused, setFocused] = useState(false);

  const updateQuery = useDebouncedCallback((q: string) => {
    const params = new URLSearchParams(searchParams);
    if (q) params.set("q", q);
    else params.delete("q");
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating shimmer background */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(139,92,246,0.2), rgba(236,72,153,0.2), rgba(255,195,0,0.2))",
            "linear-gradient(270deg, rgba(236,72,153,0.2), rgba(139,92,246,0.2), rgba(255,195,0,0.2))",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatType: "mirror" }}
      />

      {/* Motion Input */}
      <motion.input
        type="text"
        aria-label="Search users"
        placeholder="Search by name or email..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          updateQuery(e.target.value);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full rounded-2xl border border-b-2 px-4 py-2 pr-10 outline-none bg-black/10 text-white placeholder:text-gray-400 relative z-10"
        style={{
          boxShadow: focused
            ? "0 0 12px rgba(139,92,246,0.6), 0 0 24px rgba(236,72,153,0.4)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Search Icon - original position */}
      <motion.div
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white z-20"
        animate={focused ? { x: [0, -2, 2, 0] } : {}}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      >
        <Search size={18} aria-hidden />
      </motion.div>
    </motion.div>
  );
}
