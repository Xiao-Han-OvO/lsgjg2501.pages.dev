import { motion, AnimatePresence } from "framer-motion";
import { X, Hash, Award, UserCheck, Quote } from "lucide-react";
import { StudentProfile } from "@/data/classInfo";

interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile | null;
}

export function StudentModal({ isOpen, onClose, profile }: StudentModalProps) {
  if (!profile) return null;

  const { name, id, groups, roles, descriptions, color } = profile;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
          >
            {/* Content Container */}
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/40 dark:border-white/10 relative pointer-events-auto flex flex-col md:flex-row overflow-hidden">
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100/50 dark:bg-slate-800/50 hover:bg-red-500 hover:text-white transition-all duration-300 text-slate-500 dark:text-slate-400 z-50 group"
              >
                <div className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <X size={24} />
              </button>

              {/* Left Column: Visual & Basic Info */}
              <div className="w-full md:w-2/5 p-8 md:p-12 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col items-center justify-center text-center relative">
                 {/* Background Gradient Blob */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 blur-3xl`} />

                 {/* Avatar */}
                 <div className={`w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-8 shadow-2xl ring-8 ring-white/30 dark:ring-white/5`}>
                    <span className="text-7xl font-bold text-white drop-shadow-md">
                      {name.charAt(0)}
                    </span>
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-2 tracking-tight">
                   {name}
                 </h2>
                 
                 <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mt-2 bg-white/60 dark:bg-slate-700/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
                   <Hash size={18} />
                   <span className="font-mono text-lg font-bold">{id.toString().padStart(2, '0')}</span>
                 </div>
              </div>

              {/* Right Column: Detailed Info */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                 
                 {/* Section: Identity Tags */}
                 <div className="mb-10">
                   <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
                     <UserCheck size={16} /> 身份标签
                   </h3>
                   <div className="flex flex-wrap gap-3">
                     {/* Groups */}
                     {groups.map(g => (
                       <span key={g} className={`px-4 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${color} shadow-md`}>
                         {g}
                       </span>
                     ))}
                     {/* Roles */}
                     {roles.map(r => (
                       <span key={r} className="px-4 py-2 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 shadow-sm border border-slate-300 dark:border-slate-600">
                         {r}
                       </span>
                     ))}
                   </div>
                 </div>

                 {/* Section: Description */}
                 {descriptions.length > 0 && (
                   <div>
                     <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
                       <Quote size={16} /> 职责与描述
                     </h3>
                     <div className="space-y-4">
                       {descriptions.map((desc, i) => (
                         <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                           <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                             {desc}
                           </p>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
                 
                 {descriptions.length === 0 && (
                   <div className="p-8 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center text-slate-400">
                     <Award size={32} className="mb-2 opacity-50" />
                     <p>G2501 班级核心成员</p>
                   </div>
                 )}

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
