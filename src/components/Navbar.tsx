import { NavLink, Link } from "react-router-dom";
import { Home, Info, History, Users, Sun, Moon, Clock } from "lucide-react";
import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";
import { useTime } from "@/context/TimeContext";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "主页", path: "/", icon: Home },
  { name: "关于我们", path: "/aboutus", icon: Info },
  { name: "回顾过往", path: "/lookback", icon: History },
  { name: "成员列表", path: "/members", icon: Users },
];

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const { currentTerm, setCurrentTerm, availableTerms } = useTime();
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark') || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <nav className="
      group
      flex flex-col
      fixed left-0 top-0 h-full z-[9999]
      w-16 hover:w-64 transition-[width] duration-300 ease-in-out
      border-r border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-md
      
      md:relative md:w-full md:hover:w-full md:h-14 md:flex-row md:border-r-0 md:border-b md:justify-between md:px-6 md:bg-white/10
    ">
      
      {/* Top Section / Desktop Left Section */}
      <div className="flex flex-col md:flex-row items-center justify-center pt-4 pb-2 md:pt-0 md:pb-0 gap-4 md:gap-4">
        <Link to="/" className="font-bold text-base tracking-tight text-stone-800 dark:text-white shrink-0 hidden md:block">
          G2501
        </Link>
        <Link to="/" className="font-bold text-sm tracking-tight text-stone-800 dark:text-white shrink-0 md:hidden">
          G2501
        </Link>
        
        {/* Time Switcher Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)} 
            className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-md transition-colors flex items-center gap-1.5 text-gray-600 dark:text-gray-300 relative overflow-hidden"
            title="切换时间/学期"
          >
            <Clock className="w-5 h-5 md:w-4 md:h-4 shrink-0" />
            <span className="
              text-[10px] md:text-xs font-medium 
              whitespace-nowrap overflow-hidden
              opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto
              transition-all duration-300
              md:opacity-100 md:w-auto md:block
            ">
              {currentTerm}
            </span>
          </button>
          
          <AnimatePresence>
            {isTimeDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute left-10 md:left-0 top-0 md:top-full mt-2 w-36 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl shadow-xl border border-black/5 dark:border-white/10 overflow-hidden z-[10000]"
              >
                {availableTerms.map(term => (
                  <button
                    key={term}
                    onClick={() => {
                      setCurrentTerm(term);
                      setIsTimeDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2.5 text-xs transition-colors",
                      currentTerm === term 
                        ? "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-bold" 
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                    )}
                  >
                    {term}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right/Bottom Section */}
      <div className="flex flex-col flex-1 md:flex-row md:items-center md:flex-none">
        {/* Nav Items Container */}
        <ul className="flex flex-col w-full md:flex-row md:w-auto md:gap-4 md:items-center md:h-full pt-4 md:pt-0 md:text-sm">
          {navItems.map((item) => (
            <li key={item.name} className="w-full md:w-auto">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center h-12 md:h-auto w-full md:w-auto transition-all duration-200 relative cursor-pointer",
                    "text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 md:hover:bg-transparent md:dark:hover:bg-transparent md:rounded-md md:px-3 md:py-2",
                    isActive && "bg-black/5 dark:bg-white/10 md:bg-black/10 md:dark:bg-white/20 text-black dark:text-white font-medium"
                  )
                }
              >
                {/* Icon Container - Fixed width on Mobile Sidebar to ensure centering */}
                <div className="flex items-center justify-center w-16 shrink-0 md:w-auto md:mr-2">
                  <item.icon className="h-6 w-6 md:h-4 md:w-4" />
                </div>

                {/* Text Label - Hidden on collapsed sidebar, visible on hover. Always visible on desktop. */}
                <span className="
                  whitespace-nowrap overflow-hidden
                  opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto
                  transition-all duration-300
                  md:opacity-100 md:w-auto md:block
                ">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle - Pushed to bottom on sidebar */}
        <div className="mt-auto mb-4 w-full md:mt-0 md:mb-0 md:w-auto md:ml-4 flex flex-col md:flex-row items-center justify-center">
           <button
            onClick={toggleTheme}
            className="flex items-center h-12 w-full md:w-auto md:h-auto md:p-2 rounded-md text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title="切换深浅模式"
          >
            {/* Icon Container for Toggle - Same logic */}
            <div className="flex items-center justify-center w-16 shrink-0 md:w-auto">
               {isDark ? <Sun className="h-6 w-6 md:h-4 md:w-4" /> : <Moon className="h-6 w-6 md:h-4 md:w-4" />}
            </div>
            
             {/* Text Label for Toggle */}
             <span className="
                  whitespace-nowrap overflow-hidden
                  opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto
                  transition-all duration-300
                  md:hidden
                ">
                  切换深浅模式
              </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
