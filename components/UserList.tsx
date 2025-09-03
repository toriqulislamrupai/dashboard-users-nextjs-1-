"use client";

import { motion, AnimatePresence } from "framer-motion";
import UserCard from "@/components/UserCard";

type Props = {
  users: {
    id: number;
    name: string;
    email: string;
    company: { name: string };
  }[];
};

export default function UserList({ users }: Props) {
  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {users.map((u) => (
          <UserCard
            key={u.id}
            id={u.id}
            name={u.name}
            email={u.email}
            company={u.company.name}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
