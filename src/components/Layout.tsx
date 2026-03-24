import { ReactNode, useState, useRef, useEffect } from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

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
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="flex h-screen w-full overflow-hidden flex-row md:flex-col font-sans relative">
      {/* Background: two-layer crossfade to prevent flash */}
      <div className="absolute inset-0 -z-10">
        {/* Base layer */}
        <div className={`absolute inset-0 ${baseBg}`} />
        {/* Crossfade layer */}
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

      {/* Main Content */}
      <main ref={mainRef} className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden ml-16 md:ml-0">
        <motion.div
          key={location.pathname}
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="min-h-screen md:min-h-[calc(100vh-3.5rem)] flex flex-col">{children}</div>
          <footer className="relative pt-6 sm:pt-8 md:pt-12 pb-4 sm:pb-6 px-6 sm:px-12">
            <div className="w-full">
              {/* Decorative line */}
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className={`flex-1 h-px bg-gradient-to-r ${accentGradient} opacity-20`} />
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${accentGradient} opacity-40`} />
                <div className={`flex-1 h-px bg-gradient-to-l ${accentGradient} opacity-20`} />
              </div>

              {/* Footer content */}
              <div className="w-full">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
                  {/* Left: Copyright */}
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      Stable Build v1.1.3
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">
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
                    <p className="text-[8px] sm:text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                      Built with{" "}
                      <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Vite</a>,{" "}
                      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">React</a>,{" "}
                      <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Tailwind CSS</a>, and{" "}
                      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">TypeScript</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      </main>
    </div>
  );
}
