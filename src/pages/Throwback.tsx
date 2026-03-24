import { motion } from "framer-motion";
import { 
  Sparkles, 
  Factory, 
  TrainFront, 
  Landmark, 
  Sunset, 
  Dumbbell, 
  Handshake, 
  Activity, 
  PartyPopper,
  Users
} from "lucide-react";
import React from "react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

const events: TimelineEvent[] = [
  {
    date: "2025.3.16",
    title: "初见",
    description: "三月的傍晚，微风轻拂。一群怀揣竞赛梦想的少年，第一次以“G2501”之名相聚。从那一刻起，我们不再只是信息、物理、数学、化学、生物的单科行者，而成了一个共同体的星辰。",
    Icon: Sparkles,
  },
  {
    date: "2025.4.24",
    title: "探访",
    description: "走进华自科技，亲眼见证智能控制技术如何驱动水力发电、管理能源。算法与原理，在真实工程中找到回响。这是一次从理论到实践的“锚定”，让我们明晰了所学知识的重量与方向。",
    Icon: Factory,
  },
  {
    date: "2025.6.27-7.2",
    title: "向北之行",
    description: "夏日清晨，我们一同启程，奔赴北京。这不仅仅是一次旅行，更是一场并肩的远征。在古老的城垣下，在现代的霓虹中，我们笑着、走着，共享一段远离题海的青春时光。",
    Icon: TrainFront,
  },
  {
    date: "2025.6.30",
    title: "燕园一瞥",
    description: "那个下午，我们走进北京大学。穿过绿荫，驻足未名湖畔，仰望博雅塔的光影。这里不仅是梦想的学府，更是我们未来可能的远方。一颗名为“向往”的种子，悄悄种进了很多人的心里。",
    Icon: Landmark,
  },
  {
    date: "2025.7.2",
    title: "傍晚南归",
    description: "傍晚返程，行李箱里装满回忆，心中载着明晰的向往。我们知道，看过更广阔的世界，是为了更坚定地走好脚下的路。",
    Icon: Sunset,
  },
  {
    date: "2025.8.26-29",
    title: "军训淬炼",
    description: "夏末，迷彩服与烈日相遇。军训的四天，是汗水与意志的较量。站军姿、齐步走……我们在重复中学习坚持，在集体中体会秩序。皮肤晒黑了，眼神却更亮了——我们像被淬炼过的刀刃，暗自锋锐。",
    Icon: Dumbbell,
  },
  {
    date: "2025.9.1",
    title: "同学加入",
    description: "金秋伊始，班集体迎来了新面孔。新鲜的笑容注入，故事有了新的篇章。从“我”到“我们”，队伍更加完整，征程也更加辽阔。",
    Icon: Handshake,
  },
  {
    date: "2025.9.28-29",
    title: "奔跑",
    description: "操场成为新的赛场。从短跑的爆发到长跑的坚持，从田赛的跃起到接力的默契——我们不仅以笔为剑，亦能以汗水为歌。看台上的呐喊，跑道上的身影，共同拼成属于G2501的秋日群像。名次之外，我们收获了另一种全力以赴的酣畅。",
    Icon: Activity,
  },
  {
    date: "2025.12.25",
    title: "绽放",
    description: "平安夜的舞台，属于我们的课本剧。纵最终排名第九，但那份全心投入的酣畅、观众席真诚的笑声与掌声，早已超越名次。我们自信、尽兴、闪耀——过程比结果，更值得珍藏。这晚，我们不仅是竞赛生，更是生活的创作者。",
    Icon: PartyPopper,
  },
  {
    date: "2026.3.12",
    title: "重组",
    description: "春日的告别与相遇。分班之后，16位伙伴挥别此间，奔赴新的山海；15张新面孔携梦而来，汇入二五〇一的江河。\n\n离别不是句点，是曾经并肩的回响；相遇不是偶然，是故事翻开的下一章。教室里的座位变了，但窗外的阳光依旧；名单上的名字换了，但“湘水滔滔”的誓言仍在。\n\n人来人往，我们依然是G2501。",
    Icon: Users,
  },
];

export function Throwback() {
  return (
    <div className="flex-1 w-full">
      {/* Header */}
      <section className="px-6 pt-16 md:pt-20 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-300 dark:to-orange-300 mb-4">
            时光回顾
          </h1>
          <p className="text-stone-600 dark:text-gray-400 max-w-xl mx-auto">
            记录G2501班的每一个重要时刻，那些共同走过的日子。
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300 via-orange-300 to-amber-300 dark:from-amber-700 dark:via-orange-700 dark:to-amber-700 md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={event.date}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex items-start gap-4 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } ml-12 md:ml-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-30px] md:left-1/2 md:-translate-x-1/2 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-amber-50 dark:border-stone-900 z-10 shadow-md" />

                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/30 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm hover:shadow-md">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <div className="text-amber-500 dark:text-amber-400 bg-amber-100/50 dark:bg-amber-900/30 p-2 rounded-xl">
                          <event.Icon size={24} />
                        </div>
                        <span className="text-sm font-mono font-medium text-amber-600 dark:text-amber-400 bg-amber-100/50 dark:bg-amber-900/30 px-3 py-1 rounded-full">
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-base text-stone-600 dark:text-gray-400 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>

          {/* End dot */}
          <div className="absolute left-6 md:left-1/2 bottom-0 md:-translate-x-1/2 w-3 h-3 rounded-full bg-amber-300 dark:bg-amber-700" />
        </div>
      </section>
    </div>
  );
}
