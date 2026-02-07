import { NavLink } from "react-router-dom";
import { Home, Info, History, Users, Sun, Moon } from "lucide-react";
import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";

const navItems = [
  { name: "主页", path: "/", icon: Home },
  { name: "关于我们", path: "/aboutus", icon: Info },
  { name: "回顾过往", path: "/lookback", icon: History },
  { name: "成员列表", path: "/members", icon: Users },
];

export function Navbar() {
  const [isDark, setIsDark] = useState(false);

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
      
      md:relative md:w-full md:hover:w-full md:h-10 md:flex-row md:border-r-0 md:border-b md:justify-between md:px-3 md:bg-white/10
    ">
      
      {/* Spacer for desktop centering balance */}
      <div className="hidden md:block w-8" /> 

      {/* Nav Items Container */}
      <ul className="flex flex-col w-full md:flex-row md:w-auto md:gap-3 md:items-center md:h-full pt-4 md:pt-0 md:text-xs">
        {navItems.map((item) => (
          <li key={item.name} className="w-full md:w-auto">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center h-12 md:h-auto w-full md:w-auto transition-all duration-200 relative cursor-pointer",
                  "text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 md:hover:bg-transparent md:dark:hover:bg-transparent md:rounded-md md:px-2 md:py-1",
                  isActive && "bg-black/5 dark:bg-white/10 md:bg-black/10 md:dark:bg-white/20 text-black dark:text-white font-medium"
                )
              }
            >
              {/* Icon Container - Fixed width on Mobile Sidebar to ensure centering */}
              <div className="flex items-center justify-center w-16 shrink-0 md:w-auto md:mr-1.5">
                <item.icon className="h-6 w-6 md:h-3.5 md:w-3.5" />
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
      <div className="mt-auto mb-4 w-full md:mt-0 md:mb-0 md:w-auto flex flex-col md:flex-row items-center justify-center">
         <button
          onClick={toggleTheme}
          className="flex items-center h-12 w-full md:w-auto md:h-auto md:p-1.5 rounded-md text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
          title="Switch Theme"
        >
          {/* Icon Container for Toggle - Same logic */}
          <div className="flex items-center justify-center w-16 shrink-0 md:w-auto">
             {isDark ? <Sun className="h-6 w-6 md:h-3.5 md:w-3.5" /> : <Moon className="h-6 w-6 md:h-3.5 md:w-3.5" />}
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
    </nav>
  );
}
