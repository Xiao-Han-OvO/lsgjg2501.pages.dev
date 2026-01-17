<template>
  <div class="min-h-screen w-[2160px] mx-auto relative">
    <!-- 背景层 -->
    <BackgroundLayer />
    
    <!-- 导航栏 -->
    <Navbar />
    
    <!-- 主页内容 -->
    <div class="relative">
      <!-- 页面标题区域 -->
      <div class="absolute left-[180px] top-[210px]">
        <h1 class="text-[150px] font-bold bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent leading-none h-[150px] flex items-end">
          欢迎来到
        </h1>
        <h1 class="text-[150px] font-bold bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent leading-none h-[150px] flex items-end">
          G2501的班级网站
        </h1>
      </div>
      
      <!-- 主显示区域 -->
      <div class="absolute top-[570px] left-[120px] right-[120px]">
        <!-- 主页内容卡片 -->
        <div class="grid grid-cols-2 gap-[60px]">
          <!-- 左侧内容 -->
          <div class="space-y-[60px]">
            <div class="bg-white dark:bg-gray-900 rounded-3xl p-[60px] shadow-2xl">
              <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-[30px]">关于我们</h2>
              <p class="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                G2501是一个充满活力的班集体。
                班内成员来自各个不同的竞赛学科，拥有丰富的经验和专业知识。
              </p>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-3xl p-[60px] shadow-2xl">
              <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-[30px]">班级口号</h2>
              <p class="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                “湘水滔滔，二五〇一。他日问鼎，还看今朝。”
              </p>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-3xl p-[60px] shadow-2xl">
              <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-[30px]">班级理念</h2>
              <p class="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                我们相信协作、创新和持续学习的力量。
                每个成员都是团队不可或缺的一部分，共同推动项目向前发展。
              </p>
            </div>
          </div>
          
          <!-- 右侧内容 -->
          <div class="space-y-[60px]">
            <div class="bg-gradient-to-r from-[#00cd95] to-[#438bf1] rounded-3xl p-[60px] shadow-2xl">
              <h2 class="text-4xl font-bold text-white mb-[30px]">快速导航</h2>
              <div class="flex flex-col gap-[30px]">
                <RouterLink to="/members" class="text-2xl font-medium text-white hover:opacity-80 transition-opacity">
                  查看团队成员 →
                </RouterLink>
                <RouterLink to="/projects" class="text-2xl font-medium text-white hover:opacity-80 transition-opacity">
                  浏览项目 →
                </RouterLink>
                <RouterLink to="/about" class="text-2xl font-medium text-white hover:opacity-80 transition-opacity">
                  了解更多 →
                </RouterLink>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-3xl p-[60px] shadow-2xl">
              <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-[30px]">技术栈</h2>
              <ul class="space-y-[20px]">
                <li class="flex items-center gap-[20px]">
                  <div class="w-[20px] h-[20px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1]"></div>
                  <span class="text-2xl text-gray-600 dark:text-gray-300">Rolldown-Vite v7.2.2</span>
                </li>
                <li class="flex items-center gap-[20px]">
                  <div class="w-[20px] h-[20px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1]"></div>
                  <span class="text-2xl text-gray-600 dark:text-gray-300">Vue 3.0</span>
                </li>
                <li class="flex items-center gap-[20px]">
                  <div class="w-[20px] h-[20px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1]"></div>
                  <span class="text-2xl text-gray-600 dark:text-gray-300">Typescript</span>
                </li>
                <li class="flex items-center gap-[20px]">
                  <div class="w-[20px] h-[20px] rounded-full bg-gradient-to-r from-[#00cd95] to-[#438bf1]"></div>
                  <span class="text-2xl text-gray-600 dark:text-gray-300">Tailwind CSS v4.1</span>  
                </li>
              </ul>
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
