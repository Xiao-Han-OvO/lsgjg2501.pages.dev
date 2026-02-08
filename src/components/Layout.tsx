import { ReactNode, useState } from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

const backgrounds: Record<string, string> = {
  "/": "bg-gradient-to-br from-orange-100 via-amber-200 to-yellow-100 dark:from-neutral-950 dark:via-red-950 dark:to-purple-950",
  "/aboutus": "bg-gradient-to-bl from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-950 dark:via-cyan-950 dark:to-gray-950",
  "/members": "bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-200 dark:from-teal-950 dark:via-emerald-950 dark:to-cyan-950",
  "/lookback": "bg-gradient-to-tr from-amber-100 via-stone-200 to-orange-100 dark:from-stone-950 dark:via-neutral-950 dark:to-orange-950",
};

const accentGradients: Record<string, string> = {
  "/": "from-orange-500 to-red-500",
  "/aboutus": "from-blue-500 to-cyan-500",
  "/members": "from-teal-500 to-emerald-500",
  "/lookback": "from-amber-500 to-orange-500",
};

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const currentBg = backgrounds[location.pathname] || backgrounds["/"];
  const accentGradient = accentGradients[location.pathname] || accentGradients["/"];
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
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="min-h-screen md:min-h-[calc(100vh-2.5rem)] flex flex-col">{children}</div>
          <footer className="relative pt-10 sm:pt-15 md:pt-20 lg:pt-25 pb-5 sm:pb-7.5 md:pb-10 lg:pb-12.5 px-6">
            {/* Spacer */}

            {/* Footer content */}
            <div className="max-w-[2160px] mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5">
                {/* Left: Copyright */}
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                    Beta Build v1.0.0
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                    © 2025-2026{" "}
                    <a
                      href="https://github.com/Federico-Prask"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                    >
                      <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${accentGradient}`}>
                        Federico&nbsp;Prask
                      </span>
                    </a>
                    . All rights reserved.
                  </p>
                  <p className="text-[9px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-500 mt-1 sm:mt-1.5">
                    Built with{" "}
                    <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">Vite</a>,{" "}
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">React</a>,{" "}
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">Tailwind CSS</a>, and{" "}
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">TypeScript</a>.
                  </p>
                </div>

                {/* Right: Quick Links */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-9">
                  <Link to="/" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    首页
                  </Link>
                  <Link to="/aboutus" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    关于
                  </Link>
                  <Link to="/members" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    成员
                  </Link>
                  <Link to="/lookback" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    回顾
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      </main>
    </div>
  );
}
