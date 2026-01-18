<template>
  <div class="min-h-screen w-full mx-auto relative flex flex-col">
    <!-- 背景层 -->
    <BackgroundLayer />
    
    <!-- 导航栏 -->
    <Navbar />
    
    <!-- 主页内容 -->
    <div class="relative flex-1">
      <!-- 页面标题区域 -->
      <div class="absolute left-[1.5rem] sm:left-[2rem] lg:left-[130px] top-[120px] sm:top-[150px] lg:top-[160px]">
        <h1 class="text-[2.5rem] sm:text-[4rem] lg:text-[70px] font-bold bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent leading-tight lg:leading-none h-auto lg:h-[70px] flex items-end">
          关于我们
        </h1>
      </div>
      
      <!-- 主显示区域 -->
      <div class="absolute top-[200px] sm:top-[280px] md:top-[350px] lg:top-[330px] left-[1rem] sm:left-[1.5rem] md:left-[2rem] lg:left-[85px] right-[1rem] sm:right-[1.5rem] md:right-[2rem] lg:right-[85px] pb-[20px] sm:pb-[40px] md:pb-[80px] lg:pb-[85px]">
        <!-- 总领性文段 -->
        <div class="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-[12px] sm:p-[20px] md:p-[32px] lg:p-[33px] shadow-2xl mb-[16px] sm:mb-[28px] md:mb-[40px] lg:mb-[42px]">
          <p class="text-xs sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium break-words">
            G2501是一个充满活力和创意的班集体。班内成员来自各个不同的竞赛学科，包括物理、数学、化学等领域。
            我们遵循"<span class="text-transparent bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text font-bold">湘水滔滔，二五〇一。他日问鼎，还看今朝</span>"的班级口号，
            相信协作、创新和持续学习的力量。每个成员都是团队不可或缺的一部分，共同推动班级向前发展。
          </p>
        </div>

        <!-- 卡片网格 - 响应式：1列(手机) -> 2列(平板以上) -->
        <div class="flex flex-col lg:flex-row gap-[15px] sm:gap-[20px] md:gap-[35px] lg:gap-[42px]">
          <!-- 左列 -->
          <div class="flex-1 flex flex-col gap-[15px] sm:gap-[20px] md:gap-[35px] lg:gap-[42px]">
            <!-- 我们的荣誉 -->
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-[12px] sm:p-[20px] md:p-[32px] lg:p-[48px] shadow-2xl border-2 border-purple-200 dark:border-purple-700">
              <h2 class="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-[12px] sm:mb-[16px] md:mb-[20px] lg:mb-[25px] break-words">我们的荣誉</h2>
              <ul class="space-y-[8px] sm:space-y-[10px] md:space-y-[12px] lg:space-y-[16px]">
                <li class="flex items-start gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <span class="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-600 dark:text-purple-400 mt-[1px] flex-shrink-0">★</span>
                  <span class="text-xs sm:text-sm md:text-base lg:text-xl text-gray-700 dark:text-gray-200 break-words">学校2025级高一新生歌咏比赛特等奖</span>
                </li>
                <li class="flex items-start gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <span class="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-600 dark:text-purple-400 mt-[1px] flex-shrink-0">★</span>
                  <span class="text-xs sm:text-sm md:text-base lg:text-xl text-gray-700 dark:text-gray-200 break-words">校园剧学校一等奖</span>
                </li>
                <li class="flex items-start gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <span class="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-600 dark:text-purple-400 mt-[1px] flex-shrink-0">★</span>
                  <span class="text-xs sm:text-sm md:text-base lg:text-xl text-gray-700 dark:text-gray-200 break-words">多次获得校流动红旗</span>
                </li>
                <li class="flex items-start gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <span class="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-600 dark:text-purple-400 mt-[1px] flex-shrink-0">★</span>
                  <span class="text-xs sm:text-sm md:text-base lg:text-xl text-gray-700 dark:text-gray-200 break-words">……</span>
                </li>
              </ul>
            </div>

            <!-- 任课老师 -->
            <div class="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-[12px] sm:p-[20px] md:p-[32px] lg:p-[48px] shadow-2xl border-2 border-amber-200 dark:border-amber-700">
              <h2 class="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-600 dark:text-amber-400 mb-[12px] sm:mb-[16px] md:mb-[20px] lg:mb-[25px] break-words">任课老师</h2>
              <ul class="space-y-[8px] sm:space-y-[10px] md:space-y-[12px] lg:space-y-[16px]">
                <li class="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <div class="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 break-words">徐&nbsp;&nbsp;&nbsp;丹&nbsp;&nbsp;语文</span>
                </li>
                <li class="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]"> 
                  <div class="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 break-words">陈记铭&nbsp;&nbsp;数学</span>
                </li>
                <li class="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <div class="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 break-words">刘&nbsp;&nbsp;&nbsp;正&nbsp;&nbsp;数学竞赛</span>
                </li>
                <li class="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <div class="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 break-words">任荟梓&nbsp;&nbsp;英语&nbsp;×&nbsp;班主任</span>
                </li>
                <li class="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <div class="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 break-words">罗重学&nbsp;&nbsp;物理</span>
                </li>
                <li class="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <div class="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 break-words">袁如意&nbsp;&nbsp;物理竞赛</span>
                </li>
                <li class="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <div class="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 break-words">杨英伟&nbsp;&nbsp;化学&nbsp;×&nbsp;化学竞赛</span>
                </li>
                <li class="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <div class="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 break-words">彭小倩&nbsp;&nbsp;生物&nbsp;×&nbsp;生物竞赛</span>
                </li>
                <li class="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px]">
                  <div class="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1] flex-shrink-0"></div>
                  <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 break-words">彭礼斯&nbsp;&nbsp;信息竞赛</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- 右列 -->
          <div class="flex-1 flex flex-col gap-[15px] sm:gap-[20px] md:gap-[35px] lg:gap-[42px]">
            <!-- 班委 -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-[12px] sm:p-[20px] md:p-[32px] lg:p-[48px] shadow-2xl border-2 border-blue-200 dark:border-blue-700">
              <h2 class="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-[12px] sm:mb-[16px] md:mb-[20px] lg:mb-[25px] break-words">班委</h2>
              <div class="space-y-[10px] sm:space-y-[12px] md:space-y-[14px] lg:space-y-[18px]">
                <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-lg md:rounded-xl p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] shadow-md">
                  <p class="text-xs sm:text-sm md:text-base lg:text-base font-bold text-gray-800 dark:text-gray-200 break-words">学习班长 - 杨可为</p>
                  <p class="text-[9px] sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 break-words">带领班级学习整体发展</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-lg md:rounded-xl p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] shadow-md">
                  <p class="text-xs sm:text-sm md:text-base lg:text-base font-bold text-gray-800 dark:text-gray-200 break-words">活动班长 - 陈彰沛</p>
                  <p class="text-[9px] sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 break-words">组织班级活动有序开展</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-lg md:rounded-xl p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] shadow-md">
                  <p class="text-xs sm:text-sm md:text-base lg:text-base font-bold text-gray-800 dark:text-gray-200 break-words">班主任助理 - 杜玘岳</p>
                  <p class="text-[9px] sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 break-words">承上启下，协助班主任管理班级</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-lg md:rounded-xl p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] shadow-md">
                  <p class="text-xs sm:text-sm md:text-base lg:text-base font-bold text-gray-800 dark:text-gray-200 break-words">团支部书记 - 游宇哲</p>
                  <p class="text-[9px] sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 break-words">负责团支部工作，组织团员活动</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-lg md:rounded-xl p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] shadow-md">
                  <p class="text-xs sm:text-sm md:text-base lg:text-base font-bold text-gray-800 dark:text-gray-200 break-words">学习委员 - 胡清清</p>
                  <p class="text-[9px] sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 break-words">促进班级学业进步，监督班级学习情况</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-lg md:rounded-xl p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] shadow-md">
                  <p class="text-xs sm:text-sm md:text-base lg:text-base font-bold text-gray-800 dark:text-gray-200 break-words">纪律委员 - 黄季熙</p>
                  <p class="text-[9px] sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 break-words">维护班级纪律，营造良好学习氛围</p>
                </div>
              </div>
            </div>

            <!-- 日常 -->
            <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-[12px] sm:p-[20px] md:p-[32px] lg:p-[48px] shadow-2xl border-2 border-green-200 dark:border-green-700">
              <h2 class="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-[12px] sm:mb-[16px] md:mb-[20px] lg:mb-[25px] break-words">日常</h2>
              <div class="space-y-[10px] sm:space-y-[12px] md:space-y-[14px] lg:space-y-[18px]">
                <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-lg md:rounded-xl p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] shadow-md">
                  <p class="text-xs sm:text-sm md:text-base lg:text-base font-semibold text-gray-800 dark:text-gray-200 break-words">学习与竞赛</p>
                  <p class="text-[9px] sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 break-words">专注学业，积极参赛</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-lg md:rounded-xl p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] shadow-md">
                  <p class="text-xs sm:text-sm md:text-base lg:text-base font-semibold text-gray-800 dark:text-gray-200 break-words">班级活动</p>
                  <p class="text-[9px] sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 break-words">丰富多彩，凝聚人心</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-lg md:rounded-xl p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] shadow-md">
                  <p class="text-xs sm:text-sm md:text-base lg:text-base font-semibold text-gray-800 dark:text-gray-200 break-words">互助合作</p>
                  <p class="text-[9px] sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 break-words">携手同心，共同进步</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 页脚 -->
        <Footer />
      </div>
      
      <!-- 占位符 div 用于推动 Footer -->
      <div class="h-[700px] sm:h-[800px] md:h-[1000px] lg:h-[1200px]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import BackgroundLayer from '../components/BackgroundLayer.vue'
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'
</script>
