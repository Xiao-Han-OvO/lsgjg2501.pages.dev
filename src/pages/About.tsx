import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, Activity, FileText, Flag, BookOpen, ShieldCheck, 
  Dumbbell, Heart, Sparkles, Zap, Music, FlaskConical, Dna, UserCheck,
  GraduationCap, Award, Lightbulb, Trophy, Medal
} from "lucide-react";
import { StudentModal } from "@/components/StudentModal";
import { getStudentProfile, StudentProfile } from "@/data/classInfo";

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

const committeeData = [
  { role: "学习班长", name: "杨可为", icon: UserCheck, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-950/60", desc: "引领学风，统筹学术" },
  { role: "活动班长", name: "陈彰沛", icon: Activity, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-950/60", desc: "凝聚集体，策划精彩" },
  { role: "班主任助理", name: "杜玘岳", icon: FileText, color: "text-slate-500", bg: "bg-slate-100 dark:bg-slate-900/60", desc: "承上启下，衔接内外" },
  { role: "团支部书记", name: "游宇哲", icon: Flag, color: "text-red-500", bg: "bg-red-100 dark:bg-red-950/60", desc: "思想引领，组织建设" },
  { role: "学习委员", name: "胡清清", icon: BookOpen, color: "text-cyan-500", bg: "bg-cyan-100 dark:bg-cyan-950/60", desc: "细致落实，助力日常" },
  { role: "纪律委员", name: "黄季熙", icon: ShieldCheck, color: "text-indigo-500", bg: "bg-indigo-100 dark:bg-indigo-950/60", desc: "维护秩序，营造静心" },
  { role: "体育委员", name: "艾可为", icon: Dumbbell, color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-950/60", desc: "强健体魄，凝聚活力" },
  { role: "心理委员", name: "董晋玮、胡清清", icon: Heart, color: "text-pink-500", bg: "bg-pink-100 dark:bg-pink-950/60", desc: "聆听陪伴，守护心灵" },
  { role: "卫生委员", name: "康子超、黎劢", icon: Sparkles, color: "text-teal-500", bg: "bg-teal-100 dark:bg-teal-950/60", desc: "守护环境，共建舒心" },
  { role: "生活委员", name: "高铭森", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-100 dark:bg-yellow-950/60", desc: "关照日常，细致入微" },
  { role: "文娱委员", name: "周浩然", icon: Music, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-950/60", desc: "点燃才情，丰富时光" },
];

const subjectTeachers = [
  { name: "徐丹", subject: "语文", desc: "以文字为舟，以思想为帆。带我们穿越千年文脉，在语言的疆界里感受逻辑与美感的交融。她让看似\u201c遥远\u201d的人文之光，照亮竞赛生理性思考的深处。", color: "from-rose-400 to-pink-500" },
  { name: "陈记铭", subject: "数学", desc: "公式在她笔下不止是符号，更是构建世界的骨架。她严谨的推理与清晰的演绎，为我们夯实思维的基石，让数学不仅是竞赛的武器，更成为理解万物秩序的眼睛。", color: "from-red-400 to-orange-500" },
  { name: "任荟梓", subject: "英语", tag: "班主任", desc: "她是语言的传授者，更是成长的守护人。在课堂上，她带我们连接世界；在班级中，她以细致与智慧凝聚集体。亦师亦友，如涓涓细流，润泽着我们共同前行的每一天。", color: "from-amber-400 to-yellow-500" },
  { name: "罗重学", subject: "物理", desc: "从牛顿到量子，他为我们拆解宇宙的运行法则。实验与理论在他手中交织，让抽象的物理概念落地生根。他是带领我们仰望星空，又脚踏实地的那位引路人。", color: "from-purple-400 to-indigo-500" },
  { name: "杨英伟", subject: "化学", desc: "分子在他讲述中仿佛有了生命。他用反应诠释变化之美，用实验点燃探索之趣。课堂如同精密的化学反应，严谨而充满创造的惊喜。", color: "from-emerald-400 to-teal-500" },
  { name: "彭小倩", subject: "生物", desc: "从细胞到生态系统，她为我们铺开生命的画卷。她讲述的不仅是知识，更是对生命奥秘的敬畏与好奇，让生物学成为连接微观与宏观的迷人学科。", color: "from-lime-400 to-green-500" },
];

const competitionCoaches = [
  { name: "刘正", subject: "数学竞赛", desc: "他带领我们攀登纯思维的巅峰。在符号与证明的密林中，他为我们辟出路径，点燃灵感。不仅是技巧的传授，更是数学直觉与信念的培育者。", color: "from-red-400 to-pink-500" },
  { name: "袁如意", subject: "物理竞赛", desc: "专注、深邃、举重若轻。他以清晰的物理图像和精妙的解题视角，将复杂的竞赛难题化为有序的思维训练。他是方向，也是后盾。", color: "from-purple-400 to-indigo-500" },
  { name: "杨英伟", subject: "化学竞赛", desc: "从课堂到竞赛场，他带领我们深入化学的更深层。他搭建起从基础到高阶的桥梁，让热爱在挑战中淬炼成锋芒。", color: "from-emerald-400 to-teal-500" },
  { name: "彭小倩", subject: "生物竞赛", desc: "她带领我们超越课本，直面生命科学的广阔前沿。在她的指导下，知识网络不断延展，对生命现象的理解也走向系统与深刻。", color: "from-lime-400 to-green-500" },
  { name: "彭礼斯", subject: "信息竞赛", desc: "她是代码世界的架构师。从算法思维到实战调试，她陪伴我们在虚拟空间中构建逻辑的城堡，将创造力转化为解决实际问题的能力。", color: "from-blue-400 to-cyan-500" },
];

export function About() {
  const [selectedProfile, setSelectedProfile] = useState<StudentProfile | null>(null);

  const handleMemberClick = (namesStr: string) => {
    const name = namesStr.split('、')[0]; 
    const profile = getStudentProfile(name);
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
            <Users /> 班级总览
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            <p>
              这里是 <span className="font-bold text-sky-600 dark:text-sky-400">G2501班</span>，一个由信息学、物理、数学、化学、生物五大学科竞赛生汇聚而成的创新集体。我们因热爱而相遇，为梦想而并肩，在理论与实验的交织中探索未知，在代码与公式的世界里开创新篇。
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
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleMemberClick(item.name)}
                className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-md rounded-2xl p-6 border border-white/50 dark:border-white/10 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all cursor-pointer group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">{item.role}</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">{item.name}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
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
        <section className="bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
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
                desc: "一根绳，一条心。倾尽全力的呐喊与汗水，诠释了何为\u201c力出一孔\u201d的团队信念。",
                icon: Dumbbell,
                gradient: "from-orange-400 to-red-500",
                bg: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30",
                border: "border-orange-200 dark:border-orange-800/30",
              },
              {
                title: "年级篮球赛第一名",
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
