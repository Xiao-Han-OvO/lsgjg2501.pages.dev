import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { pinyin } from "pinyin-pro";
import { Users, SortAsc, Hash } from "lucide-react";
import { StudentModal } from "@/components/StudentModal";
import { getStudentProfile, StudentProfile, rawGroups, specialNames } from "@/data/classInfo";

type ViewMode = "group" | "name" | "id";

export function Members() {
  const [viewMode, setViewMode] = useState<ViewMode>("group");
  const [selectedProfile, setSelectedProfile] = useState<StudentProfile | null>(null);

  const pinyinSort = (a: string, b: string) => {
    return pinyin(a, { toneType: 'none' }).localeCompare(pinyin(b, { toneType: 'none' }));
  };

  const processedGroups = useMemo(() => {
    return rawGroups.map(group => ({
      ...group,
      members: [...group.members].sort(pinyinSort)
    }));
  }, []);

  const sortedMembersByName = useMemo(() => {
    const allMembers = rawGroups.flatMap(group => 
      group.members.map(name => ({
        name,
        groupName: group.name,
        color: group.color,
      }))
    );
    const unique = Array.from(new Map(allMembers.map(item => [item.name, item])).values());
    return unique.sort((a, b) => pinyinSort(a.name, b.name));
  }, []);

  const sortedMembersById = useMemo(() => {
    const all = [...sortedMembersByName];
    const others = all.filter(m => !specialNames.includes(m.name));
    const specials = all.filter(m => specialNames.includes(m.name));
    
    others.sort((a, b) => pinyinSort(a.name, b.name));
    specials.sort((a, b) => pinyinSort(a.name, b.name));

    return [...others, ...specials];
  }, [sortedMembersByName]);

  const flatListToRender = viewMode === "id" ? sortedMembersById : sortedMembersByName;

  const handleMemberClick = (name: string) => {
    const profile = getStudentProfile(name);
    setSelectedProfile(profile);
  };

  return (
    <div className="h-full w-full flex flex-col items-center p-8 overflow-y-auto relative">
      <div className="flex flex-col items-center mb-12 mt-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-6">成员列表</h1>
        
        {/* Toggle Switch */}
        <div className="flex flex-wrap justify-center items-center gap-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-sm">
          <button
            onClick={() => setViewMode("group")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              viewMode === "group" 
                ? "bg-violet-600 text-white shadow-md" 
                : "text-slate-600 dark:text-slate-300 hover:bg-white/40 dark:hover:bg-slate-700/40"
            }`}
          >
            <Users size={16} />
            <span>按学科</span>
          </button>
          <button
            onClick={() => setViewMode("name")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              viewMode === "name" 
                ? "bg-violet-600 text-white shadow-md" 
                : "text-slate-600 dark:text-slate-300 hover:bg-white/40 dark:hover:bg-slate-700/40"
            }`}
          >
            <SortAsc size={16} />
            <span>按姓名</span>
          </button>
          <button
            onClick={() => setViewMode("id")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              viewMode === "id" 
                ? "bg-violet-600 text-white shadow-md" 
                : "text-slate-600 dark:text-slate-300 hover:bg-white/40 dark:hover:bg-slate-700/40"
            }`}
          >
            <Hash size={16} />
            <span>按学号</span>
          </button>
        </div>
      </div>
      
      <div className="w-full max-w-6xl pb-12 min-h-[50vh]">
        {viewMode === "group" ? (
          <div className="space-y-12">
            {processedGroups.map((group) => (
              <div key={group.name} className="flex flex-col gap-6">
                <h3 className={`text-2xl font-bold text-slate-800 dark:text-white pl-4 border-l-4 ${group.color.includes('blue') ? 'border-blue-500' : group.color.includes('red') ? 'border-red-500' : group.color.includes('purple') ? 'border-purple-500' : group.color.includes('emerald') ? 'border-emerald-500' : 'border-lime-500'}`}>
                  {group.name}
                </h3>
                <div className="flex flex-wrap gap-6">
                  {group.members.map((member, i) => (
                    <motion.div
                      key={member}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      onClick={() => handleMemberClick(member)}
                      className="w-32 h-32 md:w-36 md:h-36 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center border border-white/60 dark:border-white/10 hover:scale-105 hover:bg-white/60 dark:hover:bg-white/10 transition-all shadow-lg cursor-pointer group"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${group.color} rounded-full mb-3 shadow-inner flex items-center justify-center text-white font-bold text-xs opacity-80 group-hover:opacity-100 transition-opacity`}>
                         {group.name[0]}
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white/90">{member}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {flatListToRender.map((member, i) => (
              <motion.div
                key={`${member.name}-${viewMode}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                onClick={() => handleMemberClick(member.name)}
                className="w-32 h-32 md:w-36 md:h-36 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center border border-white/60 dark:border-white/10 hover:scale-105 hover:bg-white/60 dark:hover:bg-white/10 transition-all shadow-lg cursor-pointer group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 px-2 py-1 rounded-bl-lg text-[10px] font-bold text-white bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  {member.groupName.replace("竞赛组", "")}
                </div>

                <div className={`w-10 h-10 bg-gradient-to-br ${member.color} rounded-full mb-3 shadow-inner flex items-center justify-center text-white font-bold text-xs opacity-80 group-hover:opacity-100 transition-opacity`}>
                   {viewMode === "id" 
                     ? i + 1 
                     : pinyin(member.name, { pattern: 'first', toneType: 'none' }).charAt(0).toUpperCase()}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white/90">{member.name}</h4>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <StudentModal 
        isOpen={!!selectedProfile}
        onClose={() => setSelectedProfile(null)}
        profile={selectedProfile}
      />
    </div>
  );
}
