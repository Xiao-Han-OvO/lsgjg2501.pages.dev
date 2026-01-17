<template>
  <div class="min-h-screen w-full mx-auto relative">
    <!-- 背景层 -->
    <BackgroundLayer />
    
    <!-- 导航栏 -->
    <Navbar />
    
    <!-- 主页内容 -->
    <div class="relative">
      <!-- 页面标题区域 -->
      <div class="absolute left-[1.5rem] sm:left-[2rem] lg:left-[180px] top-[120px] sm:top-[150px] lg:top-[210px]">
        <h1 class="text-[2.5rem] sm:text-[4rem] lg:text-[150px] font-bold bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent leading-tight lg:leading-none h-auto lg:h-[150px] flex items-end">
          关于我们
        </h1>
      </div>
      
      <!-- 主显示区域 -->
      <div class="absolute top-[200px] sm:top-[280px] md:top-[350px] lg:top-[420px] left-[1rem] sm:left-[1.5rem] md:left-[2rem] lg:left-[120px] right-[1rem] sm:right-[1.5rem] md:right-[2rem] lg:right-[120px] pb-[20px] sm:pb-[40px] md:pb-[80px] lg:pb-[120px]">
        <!-- 总领性文段 -->
        <div class="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-[15px] sm:p-[25px] md:p-[40px] lg:p-[60px] shadow-2xl mb-[20px] sm:mb-[35px] md:mb-[50px] lg:mb-[60px]">
          <p class="text-xs sm:text-lg md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium break-words">
            G2501是一个充满活力和创意的班集体。班内成员来自各个不同的竞赛学科，包括物理、数学、化学等领域。
            我们遵循"<span class="text-transparent bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text font-bold">湘水滔滔，二五〇一。他日问鼎，还看今朝</span>"的班级口号，
            相信协作、创新和持续学习的力量。每个成员都是团队不可或缺的一部分，共同推动班级向前发展。
          </p>
        </div>

        <!-- 卡片网格 - 响应式：1列(手机) -> 2列(平板以上) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[15px] sm:gap-[20px] md:gap-[35px] lg:gap-[60px]">
          <!-- 我们的荣誉 -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-[15px] sm:p-[25px] md:p-[40px] lg:p-[60px] shadow-2xl border-2 border-purple-200 dark:border-purple-700">
            <h2 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 dark:text-purple-400 mb-[15px] sm:mb-[20px] md:mb-[25px] lg:mb-[30px] break-words">我们的荣誉</h2>
            <ul class="space-y-[10px] sm:space-y-[12px] md:space-y-[15px] lg:space-y-[20px]">
              <li class="flex items-start gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[15px]">
                <span class="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-purple-600 dark:text-purple-400 mt-[1px] flex-shrink-0">★</span>
                <span class="text-xs sm:text-base md:text-lg lg:text-2xl text-gray-700 dark:text-gray-200 break-words">校园剧学校二等奖</span>
              </li>
              <li class="flex items-start gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[15px]">
                <span class="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-purple-600 dark:text-purple-400 mt-[1px] flex-shrink-0">★</span>
                <span class="text-xs sm:text-base md:text-lg lg:text-2xl text-gray-700 dark:text-gray-200 break-words">竞赛学科成绩突出</span>
              </li>
              <li class="flex items-start gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[15px]">
                <span class="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-purple-600 dark:text-purple-400 mt-[1px] flex-shrink-0">★</span>
                <span class="text-xs sm:text-base md:text-lg lg:text-2xl text-gray-700 dark:text-gray-200 break-words">班级文体活动先进</span>
              </li>
              <li class="flex items-start gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[15px]">
                <span class="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-purple-600 dark:text-purple-400 mt-[1px] flex-shrink-0">★</span>
                <span class="text-xs sm:text-base md:text-lg lg:text-2xl text-gray-700 dark:text-gray-200 break-words">团结友爱标兵班级</span>
              </li>
            </ul>
          </div>

          <!-- 班委 -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-[15px] sm:p-[25px] md:p-[40px] lg:p-[60px] shadow-2xl border-2 border-blue-200 dark:border-blue-700">
            <h2 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-[15px] sm:mb-[20px] md:mb-[25px] lg:mb-[30px] break-words">班委</h2>
            <div class="space-y-[12px] sm:space-y-[15px] md:space-y-[18px] lg:space-y-[25px]">
              <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-[10px] sm:p-[12px] md:p-[16px] lg:p-[20px] shadow-md">
                <p class="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800 dark:text-gray-200 break-words">班长</p>
                <p class="text-[10px] sm:text-xs md:text-sm lg:text-xl text-gray-600 dark:text-gray-300 break-words">带领班级整体发展</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-[10px] sm:p-[12px] md:p-[16px] lg:p-[20px] shadow-md">
                <p class="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800 dark:text-gray-200 break-words">学习委员</p>
                <p class="text-[10px] sm:text-xs md:text-sm lg:text-xl text-gray-600 dark:text-gray-300 break-words">促进班级学业进步</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-[10px] sm:p-[12px] md:p-[16px] lg:p-[20px] shadow-md">
                <p class="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800 dark:text-gray-200 break-words">班级其他委员</p>
                <p class="text-[10px] sm:text-xs md:text-sm lg:text-xl text-gray-600 dark:text-gray-300 break-words">各司其职，共同建设</p>
              </div>
            </div>
          </div>

          <!-- 任课老师 -->
          <div class="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-[15px] sm:p-[25px] md:p-[40px] lg:p-[60px] shadow-2xl border-2 border-amber-200 dark:border-amber-700">
            <h2 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-600 dark:text-amber-400 mb-[15px] sm:mb-[20px] md:mb-[25px] lg:mb-[30px] break-words">任课老师</h2>
            <ul class="space-y-[10px] sm:space-y-[12px] md:space-y-[15px] lg:space-y-[20px]">
              <li class="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[15px]">
                <div class="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                <span class="text-xs sm:text-base md:text-lg lg:text-2xl text-gray-700 dark:text-gray-200 break-words">语文、数学、英语</span>
              </li>
              <li class="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[15px]">
                <div class="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                <span class="text-xs sm:text-base md:text-lg lg:text-2xl text-gray-700 dark:text-gray-200 break-words">物理、化学、生物</span>
              </li>
              <li class="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[15px]">
                <div class="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                <span class="text-xs sm:text-base md:text-lg lg:text-2xl text-gray-700 dark:text-gray-200 break-words">政治、历史、地理</span>
              </li>
              <li class="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[15px]">
                <div class="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                <span class="text-xs sm:text-base md:text-lg lg:text-2xl text-gray-700 dark:text-gray-200 break-words">班主任全心投入</span>
              </li>
            </ul>
          </div>

          <!-- 日常 -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-[15px] sm:p-[25px] md:p-[40px] lg:p-[60px] shadow-2xl border-2 border-green-200 dark:border-green-700">
            <h2 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 dark:text-green-400 mb-[15px] sm:mb-[20px] md:mb-[25px] lg:mb-[30px] break-words">日常</h2>
            <div class="space-y-[10px] sm:space-y-[12px] md:space-y-[15px] lg:space-y-[20px]">
              <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-[10px] sm:p-[12px] md:p-[16px] lg:p-[20px] shadow-md">
                <p class="text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-gray-800 dark:text-gray-200 break-words">学习与竞赛</p>
                <p class="text-[10px] sm:text-xs md:text-sm lg:text-lg text-gray-600 dark:text-gray-300 break-words">专注学业，积极参赛</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-[10px] sm:p-[12px] md:p-[16px] lg:p-[20px] shadow-md">
                <p class="text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-gray-800 dark:text-gray-200 break-words">班级活动</p>
                <p class="text-[10px] sm:text-xs md:text-sm lg:text-lg text-gray-600 dark:text-gray-300 break-words">丰富多彩，凝聚人心</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-[10px] sm:p-[12px] md:p-[16px] lg:p-[20px] shadow-md">
                <p class="text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-gray-800 dark:text-gray-200 break-words">互助合作</p>
                <p class="text-[10px] sm:text-xs md:text-sm lg:text-lg text-gray-600 dark:text-gray-300 break-words">携手同心，共同进步</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import BackgroundLayer from '../components/BackgroundLayer.vue'
import { RouterLink } from 'vue-router'
</script>
