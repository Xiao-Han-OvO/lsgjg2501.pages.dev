import { motion } from "framer-motion";
import { Sparkles, TrainFront, GraduationCap, Home, Flame, Users, Quote, HelpCircle } from "lucide-react";

export function Throwback() {
  const events = [
    {
      date: "2025.3.16",
      title: "初见",
      icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
      content: "三月的傍晚，微风轻拂。一群怀揣竞赛梦想的少年，第一次以\u201CG2501\u201D之名相聚。从那一刻起，我们不再只是信息、物理、数学、化学、生物的单科行者，而成了一个共同体的星辰。"
    },
    {
      date: "2025.6.27 \u2014 7.2",
      title: "向北之行",
      icon: <TrainFront className="w-6 h-6 text-blue-500" />,
      content: "夏日清晨，我们一同启程，奔赴北京。这不仅仅是一次旅行，更是一场并肩的远征。在古老的城垣下，在现代的霓虹中，我们笑着、走着，共享一段远离题海的青春时光。"
    },
    {
      date: "2025.6.30",
      title: "燕园一瞥",
      icon: <GraduationCap className="w-6 h-6 text-red-500" />,
      content: "那个下午，我们走进北京大学。穿过绿荫，驻足未名湖畔，仰望博雅塔的光影。这里不仅是梦想的学府，更是我们未来可能的远方。一颗名为\u201C向往\u201D的种子，悄悄种进了很多人的心里。"
    },
    {
      date: "2025.7.2",
      title: "傍晚南归",
      icon: <Home className="w-6 h-6 text-green-500" />,
      content: "傍晚返程，行李箱里装满回忆，心中载着明晰的向往。我们知道，看过更广阔的世界，是为了更坚定地走好脚下的路。"
    },
    {
      date: "2025.8.26-29",
      title: "军训淬炼",
      icon: <Flame className="w-6 h-6 text-orange-600" />,
      content: "夏末，迷彩服与烈日相遇。军训的四天，是汗水与意志的较量。站军姿、齐步走\u2026\u2026我们在重复中学习坚持，在集体中体会秩序。皮肤晒黑了，眼神却更亮了\u2014\u2014我们像被淬炼过的刀刃，暗自锋锐。"
    },
    {
      date: "2025.9.1",
      title: "同学加入",
      icon: <Users className="w-6 h-6 text-purple-500" />,
      content: "金秋伊始，班集体迎来了26张新面孔。新鲜的笑容注入，故事有了新的篇章。从\u201C我\u201D到\u201C我们\u201D，队伍更加完整，征程也更加辽阔。"
    }
  ];

  return (
    <div className="h-full w-full flex flex-col items-center p-8 overflow-y-auto relative">
      
      <div className="max-w-4xl w-full pb-16">
        <div className="text-center mt-8">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-12">
            回顾过往
          </h1>
        </div>

        {/* Timeline Section */}
        <section className="relative mb-16 pl-4 md:pl-0">
          
          <div className="space-y-12 relative">
             <div className="absolute left-[23px] top-2 bottom-0 w-0.5 bg-stone-300 dark:bg-stone-700" />
             {events.map((event, index) => (
              <div key={index} className="relative pl-24 pr-4 md:pr-12 overflow-hidden">
                {/* Icon - fade in */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                  className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center bg-white dark:bg-stone-800 rounded-full border-2 border-stone-400 dark:border-stone-600 shadow-md z-10"
                >
                  {event.icon}
                </motion.div>
                {/* Content - slide in from right, slower */}
                <motion.div
                  initial={{ opacity: 0, x: 120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.7, delay: index * 0.05 + 0.15, ease: "easeOut" }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2 pt-1">
                    <span className="text-sm font-bold bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200 px-2 py-1 rounded inline-block w-fit">
                      {event.date}
                    </span>
                    <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-200">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed bg-white/50 dark:bg-stone-800/50 p-4 rounded-lg">
                    {event.content}
                  </p>
                </motion.div>
              </div>
            ))}

            {/* Future Node */}
            <div className="relative pl-24 pr-4 md:pr-12 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: events.length * 0.05, ease: "easeOut" }}
                className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center bg-white dark:bg-stone-800 rounded-full border-2 border-stone-400 dark:border-stone-600 shadow-md z-10"
              >
                <HelpCircle className="w-6 h-6 text-indigo-500" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: events.length * 0.05 + 0.15, ease: "easeOut" }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2 pt-1">
                   <span className="text-sm font-bold bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200 px-2 py-1 rounded inline-block w-fit">
                      Future
                    </span>
                    <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-200">
                      未来可期
                    </h3>
                </div>
                 <p className="text-stone-600 dark:text-stone-400 leading-relaxed bg-white/50 dark:bg-stone-800/50 p-4 rounded-lg">
                    我们的未来充满无限可能
                  </p>
              </motion.div>
            </div>
          </div>

        </section>

        {/* Footer Section */}
        <section className="mt-16 border-t-2 border-stone-300 dark:border-stone-700 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12"
          >
             <h3 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4">时光向前，我们向上</h3>
             <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
               这些日子，被郑重地标记在G2501班的时间线上。它们不只是日期，更是我们共同心跳的证明。从相遇，到同行，从看见远方，到回归初心{"\u2014\u2014"}我们正在书写属于自己的历史。
             </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="bg-white/80 dark:bg-stone-800/80 p-8 rounded-lg shadow-xl border-l-8 border-orange-500 backdrop-blur-sm relative overflow-hidden"
          >
             <Quote className="absolute top-4 right-4 w-12 h-12 text-orange-200 dark:text-orange-900/50" />
            <blockquote className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-white mb-2 leading-relaxed italic text-center relative z-10">
              {`\u201C湘水滔滔，二五〇一。他日问鼎，还看今朝。\u201D`}
            </blockquote>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
