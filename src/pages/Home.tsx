import { motion } from "framer-motion";

export function Home() {
  return (
    <div className="flex-1 w-full flex flex-col justify-center items-center p-8 relative overflow-hidden text-center">
      {/* Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center z-10"
      >
        <h1 className="text-6xl md:text-6xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 dark:from-white dark:to-orange-200 transition-colors duration-300">
          G2501
        </h1>
        <h2 className="text-xl md:text-xl font-bold mb-8 text-stone-800 dark:text-orange-200 tracking-wide">
          创新领航 · 竞赛风华
        </h2>
        <div className="bg-white/30 dark:bg-black/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 w-auto mx-auto transform hover:scale-105 transition-transform duration-300">
          <p className="text-base md:text-lg font-serif font-medium leading-relaxed text-stone-900 dark:text-gray-100 italic">
            <span className="block md:inline">"湘水滔滔，二五〇一。</span>
            <span className="block md:inline">他日问鼎，还看今朝。"</span>
          </p>
        </div>
        
        <p className="mt-8 text-base text-stone-600 dark:text-gray-300 max-w-2xl">
          一个由信息学、物理、数学、化学、生物五大学科竞赛生汇聚而成的创新集体。
        </p>
      </motion.div>
    </div>
  );
}
