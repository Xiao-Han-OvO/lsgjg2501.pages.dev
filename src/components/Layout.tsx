import { ReactNode, useState } from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const backgrounds: Record<string, string> = {
  "/": "bg-gradient-to-br from-orange-100 via-amber-200 to-yellow-100 dark:from-neutral-950 dark:via-red-950 dark:to-purple-950",
  "/aboutus": "bg-gradient-to-bl from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-950 dark:via-cyan-950 dark:to-gray-950",
  "/members": "bg-gradient-to-r from-violet-200 to-pink-200 dark:from-violet-950 dark:to-indigo-950",
  "/lookback": "bg-gradient-to-tr from-amber-100 via-stone-200 to-orange-100 dark:from-stone-950 dark:via-neutral-950 dark:to-orange-950",
};

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const currentBg = backgrounds[location.pathname] || backgrounds["/"];
  const [baseBg, setBaseBg] = useState(currentBg);

  return (
    <div className="flex h-screen w-full overflow-hidden flex-row md:flex-col font-sans relative">
      {/* Background: two-layer crossfade to prevent flash */}
      <div className="absolute inset-0 -z-10">
        {/* Base layer - always fully visible, shows previous bg */}
        <div className={`absolute inset-0 ${baseBg}`} />
        {/* Crossfade layer - fades in new bg on top, then updates base */}
        {currentBg !== baseBg && (
          <motion.div
            key={currentBg}
            className={`absolute inset-0 ${currentBg}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onAnimationComplete={() => setBaseBg(currentBg)}
          />
        )}
      </div>

      <header className="z-50 shrink-0">
        <Navbar />
      </header>

      {/* Main Content with Left Margin for Mobile Sidebar */}
      <main className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden ml-16 md:ml-0">
        <motion.div
          key={location.pathname}
          className="h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
