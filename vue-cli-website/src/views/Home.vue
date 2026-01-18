<template>
  <div class="min-h-screen w-full mx-auto relative flex flex-col">
    <!-- 背景层 -->
    <BackgroundLayer />
    
    <!-- 导航栏 -->
    <Navbar />
    
    <!-- 主页内容 -->
    <div class="relative flex-1">
      <!-- 页面标题区域 -->
      <div class="absolute left-[1rem] sm:left-[1.5rem] md:left-[2rem] lg:left-[130px] top-[80px] sm:top-[120px] md:top-[150px] lg:top-[160px]">
        <h1 class="text-[1.5rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[70px] font-bold bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent leading-tight lg:leading-none h-auto lg:h-[70px] flex items-end break-words">
          欢迎来到
        </h1>
        <h1 class="text-[1.5rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[70px] font-bold bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent leading-tight lg:leading-none h-auto lg:h-[70px] flex items-end mt-[8px] sm:mt-[10px] md:mt-[15px] lg:mt-0 break-words">
          G2501的班级网站
        </h1>
      </div>
      
      <!-- 主显示区域 -->
      <div class="absolute top-[220px] sm:top-[300px] md:top-[400px] lg:top-[430px] left-[1rem] sm:left-[1.5rem] md:left-[2rem] lg:left-[85px] right-[1rem] sm:right-[1.5rem] md:right-[2rem] lg:right-[85px] pb-[20px] sm:pb-[40px] md:pb-[80px] lg:pb-[85px]">
        <!-- 主页内容卡片 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[12px] sm:gap-[20px] md:gap-[32px] lg:gap-[33px]">
          <!-- 左侧内容 -->
          <div class="space-y-[12px] sm:space-y-[20px] md:space-y-[32px] lg:space-y-[33px]">
            <div class="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-[12px] sm:p-[20px] md:p-[32px] lg:p-[33px] shadow-2xl">
              <h2 class="text-sm sm:text-lg md:text-2xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-[10px] sm:mb-[12px] md:mb-[16px] lg:mb-[14px] break-words"><span class="text-transparent bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text font-bold">关于我们</span></h2>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                G2501是一个充满活力的班集体。
                班内成员来自各个不同的竞赛学科，拥有丰富的经验和专业知识。
              </p>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-[12px] sm:p-[20px] md:p-[32px] lg:p-[33px] shadow-2xl">
              <h2 class="text-sm sm:text-lg md:text-2xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-[10px] sm:mb-[12px] md:mb-[16px] lg:mb-[14px] break-words"><span class="text-transparent bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text font-bold">班级口号</span></h2>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                "湘水滔滔，二五〇一。他日问鼎，还看今朝。"
              </p>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-[12px] sm:p-[20px] md:p-[32px] lg:p-[33px] shadow-2xl">
              <h2 class="text-sm sm:text-lg md:text-2xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-[10px] sm:mb-[12px] md:mb-[16px] lg:mb-[14px] break-words"><span class="text-transparent bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text font-bold">班级理念</span></h2>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                我们相信协作、创新和持续学习的力量。
                每个成员都是团队不可或缺的一部分，共同推动项目向前发展。
              </p>
            </div>
          </div>
          
          <!-- 右侧内容 -->
          <div class="space-y-[12px] sm:space-y-[20px] md:space-y-[32px] lg:space-y-[33px]">
            <div class="bg-gradient-to-r from-[#00cd95] to-[#438bf1] rounded-xl sm:rounded-2xl md:rounded-3xl p-[12px] sm:p-[20px] md:p-[32px] lg:p-[33px] shadow-2xl">
              <h2 class="text-sm sm:text-lg md:text-2xl lg:text-2xl font-bold text-white mb-[10px] sm:mb-[12px] md:mb-[16px] lg:mb-[14px] break-words">快速导航</h2>
              <div class="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[16px] lg:gap-[14px]">
                <RouterLink to="/members" class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white hover:opacity-80 transition-opacity break-words">
                  查看团队成员 →
                </RouterLink>
                <RouterLink to="/projects" class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white hover:opacity-80 transition-opacity break-words">
                  浏览项目 →
                </RouterLink>
                <RouterLink to="/about" class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white hover:opacity-80 transition-opacity break-words">
                  了解更多 →
                </RouterLink>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-[12px] sm:p-[20px] md:p-[32px] lg:p-[33px] shadow-2xl">
              <h2 class="text-sm sm:text-lg md:text-2xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-[10px] sm:mb-[12px] md:mb-[16px] lg:mb-[14px] break-words"><span class="text-transparent bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text font-bold">技术栈</span></h2>
              <ul class="space-y-[8px] sm:space-y-[10px] md:space-y-[12px] lg:space-y-[11px]">
                <li class="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px]">
                  <div class="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 break-words">Rolldown-Vite v7.2.2</span>
                </li>
                <li class="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px]">
                  <div class="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 break-words">Vue 3.0</span>
                </li>
                <li class="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px]">
                  <div class="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 break-words">Typescript</span>
                </li>
                <li class="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px]">
                  <div class="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 break-words">Tailwind CSS v4.1</span>  
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 页脚 -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import BackgroundLayer from '../components/BackgroundLayer.vue'
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'
</script>
