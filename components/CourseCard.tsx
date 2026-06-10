"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  progress: number;
}

export default function CourseCard({
  title,
  progress,
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-zinc-900 rounded-3xl p-6"
    >
      <h3 className="text-white font-semibold text-xl">
        {title}
      </h3>

      <div className="mt-4 h-3 bg-zinc-800 rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
        />
      </div>

      <p className="mt-2 text-zinc-400">
        {progress}% Complete
      </p>
    </motion.div>
  );
}