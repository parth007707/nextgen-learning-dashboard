"use client";

import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-zinc-900 rounded-3xl p-4 min-h-[500px]">
      <h2 className="text-white text-xl font-bold mb-6">
        LearnHub
      </h2>

      <nav className="space-y-4">
        <div className="flex gap-3 text-white">
          <Home size={20} />
          Dashboard
        </div>

        <div className="flex gap-3 text-zinc-400">
          <BookOpen size={20} />
          Courses
        </div>

        <div className="flex gap-3 text-zinc-400">
          <BarChart3 size={20} />
          Analytics
        </div>

        <div className="flex gap-3 text-zinc-400">
          <Settings size={20} />
          Settings
        </div>
      </nav>
    </aside>
  );
}