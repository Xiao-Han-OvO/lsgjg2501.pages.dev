<template>
  <footer class="relative mt-auto pt-[40px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[20px] sm:pb-[30px] md:pb-[40px] lg:pb-[50px]">
    <!-- 分隔线 -->
    <div class="mb-[20px] sm:mb-[30px] md:mb-[40px] lg:mb-[50px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

    <!-- 页脚内容 -->
    <div class="max-w-[2160px] mx-auto">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-[15px] sm:gap-[20px]">
        <!-- 左侧：版权信息 -->
        <div class="text-center sm:text-left">
          <p class="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
            Beta Build v1.0.0
          </p>
          <p class="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
            © 2026 <a href="https://github.com/Federico-Prask" class="transition-colors"><span class="text-transparent bg-gradient-to-r from-[#438bf1] to-[#00cd95] bg-clip-text font-bold">Federico Prask</span></a>. All rights reserved.
          </p>
          <p class="text-[9px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-500 mt-[4px] sm:mt-[6px]">
            Build with <a href="https://vite.dev/">Rolldown-Vite</a>, <a href="https://vuejs.org/">Vue 3</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a>, and <a href="https://www.typescriptlang.org/">Typescript</a>.
          </p>
        </div>

        <!-- 右侧：快速链接 -->
        <div class="flex items-center gap-[15px] sm:gap-[25px] md:gap-[35px]">
          <RouterLink to="/" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            首页
          </RouterLink>
          <RouterLink to="/about" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            关于
          </RouterLink>
          <RouterLink to="/members" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            成员
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
