import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, Activity, BookOpen, 
  Sparkles, Zap, FlaskConical, Dna, UserCheck,
  GraduationCap, Award, Lightbulb,
  Trophy, Music, Dumbbell, Medal
} from "lucide-react";
import { StudentModal } from "@/components/StudentModal";
import { getTermData, getStudentProfile, StudentProfile } from "@/data/classInfo";
import { useTime } from "@/context/TimeContext";

const academicCards = [
  {
    title: "物理先锋",
    desc: "追问万物之理，以实验丈量世界，用公式解读宇宙。",
    icon: Zap,
    bg: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
    border: "border-purple-100 dark:border-purple-800/30",
    iconBg: "bg-purple-100 dark:bg-purple-800",
    iconColor: "text-purple-600 dark:text-purple-300",
  },
  {
    title: "数学头脑",
    desc: "于抽象中见真章，以逻辑编织真理的经纬。",
    icon: Activity,
    iconRotate: true,
    bg: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
    border: "border-red-100 dark:border-red-800/30",
    iconBg: "bg-red-100 dark:bg-red-800",
    iconColor: "text-red-600 dark:text-red-300",
  },
  {
    title: "化学精英",
    desc: "破解分子密码，探索物质变化的奥秘。",
    icon: FlaskConical,
    bg: "from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20",
    border: "border-teal-100 dark:border-teal-800/30",
    iconBg: "bg-teal-100 dark:bg-teal-800",
    iconColor: "text-teal-600 dark:text-teal-300",
  },
  {
    title: "生物探秘",
    desc: "探秘生命图谱，解码自然演化的奇迹。",
    icon: Dna,
    bg: "from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20",
    border: "border-lime-100 dark:border-lime-800/30",
    iconBg: "bg-lime-100 dark:bg-lime-800",
    iconColor: "text-lime-600 dark:text-lime-300",
  },
  {
    title: "信息学子",
    desc: "以代码为舟，算法为桨，在虚拟世界中构建未来。",
    icon: Activity,
    bg: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    border: "border-blue-100 dark:border-blue-800/30",
    iconBg: "bg-blue-100 dark:bg-blue-800",
    iconColor: "text-blue-600 dark:text-blue-300",
  },
  {
    title: "竞赛学习",
    desc: "在大风大浪中勇于向前航行。",
    icon: BookOpen,
    bg: "from-gray-50 to-slate-100 dark:from-gray-900/60 dark:to-slate-900/60",
    border: "border-gray-200 dark:border-gray-700/50",
    iconBg: "bg-gray-200 dark:bg-gray-800",
    iconColor: "text-gray-600 dark:text-gray-300",
  },
];

export function About() {
  const { currentTerm } = useTime();
  const termData = getTermData(currentTerm);
  const { committeeData, subjectTeachers, competitionCoaches, rawGroups } = termData;
  const [selectedProfile, setSelectedProfile] = useState<StudentProfile | null>(null);

  const studentCount = termData.idList 
    ? termData.idList.length 
    : rawGroups.reduce((acc: number, group) => acc + group.members.length, 0);

  const handleMemberClick = (namesStr: string) => {
    const name = namesStr.split('、')[0]; 
    const profile = getStudentProfile(name, currentTerm);
    setSelectedProfile(profile);
  };

  return (
    <div className="min-h-full w-full flex flex-col items-center p-8 overflow-y-auto">
      <div className="max-w-4xl w-full space-y-24 pb-16">
        
        {/* Header */}
        <div className="text-center mt-8">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-12">
            关于我们
          </h1>
        </div>

        {/* Overview */}
        <section className="bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 dark:border-white/10">
          <h2 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-6 flex items-center gap-3">
            <Users /> 班级总览 ({currentTerm})
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            <p>
              这里是 <span className="font-bold text-sky-600 dark:text-sky-400">G2501班</span>，一个由信息学、物理、数学、化学、生物五大学科竞赛生汇聚而成的创新集体。目前共计 {studentCount} 名同学。我们因热爱而相遇，为梦想而并肩，在理论与实验的交织中探索未知，在代码与公式的世界里开创新篇。
            </p>
            <p>
              这里不仅是学术深耕的土壤，更是思维碰撞、志同道合的精神家园。我们尊重每一份专注，也珍惜每一次合作；既有个体钻研的寂静时刻，也有团队备战的炽热场景。
            </p>
          </div>
        </section>

        {/* Academic Profile */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            学术风采 · 竞攀巅峰
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
            {academicCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className={`bg-gradient-to-br ${card.bg} p-8 rounded-2xl border ${card.border} hover:shadow-lg transition-shadow`}
              >
                <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center ${card.iconColor} mb-4`}>
                  <card.icon size={24} className={card.iconRotate ? "rotate-45" : ""} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Class Committee */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            G2501班 · 班委
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeData.map((item, index) => (
              <motion.div 
                key={item.role + item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleMemberClick(item.name)}
                className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-md rounded-2xl p-6 border border-white/50 dark:border-white/10 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all cursor-pointer group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-500`}>
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">{item.role}</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">{item.name}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Teachers Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-4">
            <span className="flex items-center justify-center gap-3">
              <GraduationCap /> 师者引路，明灯相照
            </span>
          </h2>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            他们不仅是知识的传授者，更是我们学术生涯的奠基人与点灯者。
          </p>

          {/* Subject Teachers */}
          <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-8 flex items-center gap-3 pl-4 border-l-4 border-amber-500">
            <BookOpen size={22} /> 科任教师团队
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {subjectTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-md rounded-2xl p-6 border border-white/50 dark:border-white/10 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${teacher.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                    {teacher.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                      {teacher.name}
                      {teacher.tag && (
                        <span className="text-xs font-medium bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full">{teacher.tag}</span>
                      )}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{teacher.subject}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {teacher.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Competition Coaches */}
          <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-8 flex items-center gap-3 pl-4 border-l-4 border-indigo-500">
            <Award size={22} /> 竞赛教练团队
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {competitionCoaches.map((coach, index) => (
              <motion.div
                key={coach.name + coach.subject}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-md rounded-2xl p-6 border border-white/50 dark:border-white/10 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${coach.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                    {coach.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">{coach.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{coach.subject}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {coach.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Teachers Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-2xl p-8 border border-amber-200/50 dark:border-amber-800/30 text-center"
          >
            <Lightbulb className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <p className="text-lg font-bold text-slate-800 dark:text-white mb-2">
              幸得师者，如舟有舵，如夜有灯。
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              我们在此汲取智慧，亦在此学会攀登。
            </p>
          </motion.div>
        </section>

        {/* Atmosphere */}
        <section className="bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Sparkles /> 班级氛围
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              这里有深入探讨的晚自习，有相互讲题的课间十分钟，也有赛场外的欢声笑语。我们尊重每一份专注，也珍惜每一次合作；既有个体钻研的寂静时刻，也有团队备战的炽热场景。在这里，理性与热情并存，独立与协作共生。
            </p>
          </div>
        </section>

        {/* Honor Wall */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-4">
            <span className="flex items-center justify-center gap-3">
              <Trophy className="text-amber-500" /> 班级荣誉墙
            </span>
          </h2>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            我们不仅在知识的疆场中竞逐，也在集体的舞台上发光。每一份荣誉，都是我们携手共进的证明。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "校军训歌咏比赛特等奖",
                desc: "当嘹亮的歌声穿透迷彩的盛夏，我们以最整齐的和声，唱出了青春的第一份凝聚力。",
                icon: Music,
                gradient: "from-amber-400 to-yellow-500",
                bg: "from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30",
                border: "border-amber-200 dark:border-amber-800/30",
              },
              {
                title: "校军训拔河比赛特等奖",
                desc: "一根绳，一条心。倾尽全力的呐喊与汗水，诠释了何为“力出一孔”的团队信念。",
                icon: Dumbbell,
                gradient: "from-orange-400 to-red-500",
                bg: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30",
                border: "border-orange-200 dark:border-orange-800/30",
              },
              {
                title: "年级篮球赛第三名",
                desc: "奔跑、传球、跃起。赛场上的每一次配合，都是智慧与热血的双重奏，我们为共同的目标而战。",
                icon: Award,
                gradient: "from-blue-400 to-indigo-500",
                bg: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
                border: "border-blue-200 dark:border-blue-800/30",
              },
              {
                title: "校课本剧表演一等奖",
                desc: "从文字到舞台，我们赋予经典以青春的灵魂。台前的演绎与幕后的协作，展现了我们理性思维之外的创意与才情。",
                icon: Sparkles,
                gradient: "from-purple-400 to-fuchsia-500",
                bg: "from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/30",
                border: "border-purple-200 dark:border-purple-800/30",
              },
            ].map((honor, index) => (
              <motion.div
                key={honor.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className={`bg-gradient-to-br ${honor.bg} p-8 rounded-2xl border ${honor.border} hover:shadow-lg transition-shadow relative overflow-hidden group`}
              >
                {/* Decorative medal icon in background */}
                <Medal className="absolute -bottom-4 -right-4 w-24 h-24 text-slate-200/20 dark:text-white/5 group-hover:text-slate-200/40 dark:group-hover:text-white/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${honor.gradient} flex items-center justify-center text-white mb-4 shadow-md`}>
                    <honor.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{honor.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{honor.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Honor Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl -ml-12 -mt-12" />
            <div className="relative z-10">
              <Trophy className="w-8 h-8 mx-auto mb-4 opacity-90" />
              <p className="text-lg font-bold mb-1">
                荣誉，是过去的勋章，更是未来的起点。
              </p>
              <p className="opacity-90">
                G2501班的故事，由拼搏与热爱共同写就。
              </p>
            </div>
          </motion.div>
        </section>

      </div>
      
      <StudentModal 
        isOpen={!!selectedProfile}
        onClose={() => setSelectedProfile(null)}
        profile={selectedProfile}
      />
    </div>
  );
}
