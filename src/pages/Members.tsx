import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, User } from "lucide-react";
import { StudentModal } from "@/components/StudentModal";
import { getTermData, getStudentProfile, StudentProfile, pinyinSort } from "@/data/classInfo";
import { useTime } from "@/context/TimeContext";
import { cn } from "@/utils/cn";

type GroupMode = "competition" | "team" | "id" | "name";

export function Members() {
  const { currentTerm } = useTime();
  const termData = getTermData(currentTerm);
  const [selectedProfile, setSelectedProfile] = useState<StudentProfile | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [groupMode, setGroupMode] = useState<GroupMode>("competition");

  useEffect(() => {
    // Reset to competition view if 'team' view is selected but no team data exists for the current term
    if (groupMode === 'team' && !termData.tuanData) {
      setGroupMode('competition');
    }
  }, [currentTerm, termData.tuanData, groupMode]);

  const handleMemberClick = (name: string) => {
    const profile = getStudentProfile(name, currentTerm);
    setSelectedProfile(profile);
  };

  // Get unique members list
  const allMembers = Array.from(new Set(termData.rawGroups.flatMap(g => g.members)));
  const filteredMembers = allMembers.filter(name => name.includes(searchQuery));

  const getRenderSections = () => {
    if (groupMode === 'competition') {
      return termData.rawGroups.map(group => ({
        name: group.name,
        color: group.color,
        members: group.members.filter(m => filteredMembers.includes(m)).sort(pinyinSort)
      })).filter(g => g.members.length > 0);
    }
    
    if (groupMode === 'team' && termData.tuanData) {
      return termData.tuanData.map(tuan => ({
        name: tuan.name,
        color: "from-indigo-400 to-purple-500", 
        members: tuan.members.filter(m => filteredMembers.includes(m)).sort(pinyinSort)
      })).filter(t => t.members.length > 0);
    }

    if (groupMode === 'id') {
      const sorted = [...filteredMembers].sort((a, b) => {
        const idA = getStudentProfile(a, currentTerm).id;
        const idB = getStudentProfile(b, currentTerm).id;
        return idA - idB;
      });
      return [{
        name: "全体成员 (按学号排序)",
        color: "from-teal-400 to-emerald-500",
        members: sorted
      }].filter(g => g.members.length > 0);
    }

    if (groupMode === 'name') {
      const sorted = [...filteredMembers].sort(pinyinSort);
      return [{
        name: "全体成员 (按拼音排序)",
        color: "from-blue-400 to-cyan-500",
        members: sorted
      }].filter(g => g.members.length > 0);
    }

    return [];
  };

  const sections = getRenderSections();

  return (
    <div className="flex-1 w-full p-6 md:p-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="shrink-0">
            <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-2">成员列表</h1>
            <p className="text-slate-500 dark:text-slate-400">G2501 班级全体成员 ({currentTerm})</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            {/* View Mode Toggle */}
            <div className="flex bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto hide-scrollbar shrink-0">
              <button 
                onClick={() => setGroupMode("competition")}
                className={cn("px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap", groupMode === "competition" ? "bg-white dark:bg-slate-800 shadow-sm text-teal-600 dark:text-teal-400" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300")}
              >
                按竞赛
              </button>
              {termData.tuanData && (
                <button 
                  onClick={() => setGroupMode("team")}
                  className={cn("px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap", groupMode === "team" ? "bg-white dark:bg-slate-800 shadow-sm text-teal-600 dark:text-teal-400" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300")}
                >
                  按团队
                </button>
              )}
              <button 
                onClick={() => setGroupMode("id")}
                className={cn("px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap", groupMode === "id" ? "bg-white dark:bg-slate-800 shadow-sm text-teal-600 dark:text-teal-400" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300")}
              >
                按学号
              </button>
              <button 
                onClick={() => setGroupMode("name")}
                className={cn("px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap", groupMode === "name" ? "bg-white dark:bg-slate-800 shadow-sm text-teal-600 dark:text-teal-400" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300")}
              >
                按姓名
              </button>
            </div>

            {/* Search Box */}
            <div className="relative group w-full lg:w-64 shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 z-10 pointer-events-none" size={20} />
              <input
                type="text"
                placeholder="搜索成员姓名..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-shadow dark:text-white"
              />
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.name}>
              <div className="flex items-center gap-4 mb-6">
                <h2 className={cn(
                  "text-xl font-bold px-4 py-1.5 rounded-full text-white bg-gradient-to-r shadow-lg shadow-teal-500/10 whitespace-nowrap",
                  section.color
                )}>
                  {section.name}
                </h2>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                <span className="text-sm font-medium text-slate-400 whitespace-nowrap">{section.members.length} 人</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {section.members.map((name) => {
                  const profile = getStudentProfile(name, currentTerm);
                  // Ensure consistent color fallback if missing
                  const avatarColor = profile.color || "from-slate-400 to-slate-500";
                  
                  return (
                    <motion.button
                      key={name}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleMemberClick(name)}
                      className="group relative bg-white dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10 text-left"
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-xl mb-3 flex items-center justify-center bg-gradient-to-br text-white shadow-inner",
                        avatarColor
                      )}>
                        <span className="text-xl font-bold">{name.charAt(0)}</span>
                      </div>
                      <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {name}
                      </h3>
                      <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">
                        ID: {profile.id.toString().padStart(2, '0')}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </section>
          ))}
          
          {sections.length === 0 && (
            <div className="text-center py-20 text-slate-400 dark:text-slate-500">
              <User size={48} className="mx-auto mb-4 opacity-50" />
              <p>没有找到匹配的成员</p>
            </div>
          )}
        </div>
      </div>

      <StudentModal
        isOpen={!!selectedProfile}
        onClose={() => setSelectedProfile(null)}
        profile={selectedProfile}
      />
    </div>
  );
}
