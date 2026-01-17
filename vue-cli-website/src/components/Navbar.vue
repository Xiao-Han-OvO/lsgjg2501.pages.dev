<template>
  <!-- 导航栏容器，宽度100%，固定定位 -->
  <div class="fixed top-0 left-0 right-0 h-[80px] sm:h-[100px] lg:h-[120px] z-50">
    <!-- 导航栏背景层 -->
    <div class="absolute inset-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800"></div>
    
    <!-- 导航栏内容 -->
    <div class="relative w-full h-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[120px] max-w-[2160px] mx-auto">
      <div class="h-full flex items-center justify-between">
        <!-- 左侧G2501和导航项 -->
        <div class="flex items-center h-full gap-[10px] sm:gap-[20px] lg:gap-[45px]">
          <!-- G2501圆角矩形 - 边框渐变 -->
          <RouterLink to="/" class="w-[100px] sm:w-[120px] lg:w-[160px] h-[40px] sm:h-[50px] lg:h-[70px] block flex-shrink-0">
            <!-- 边框渐变层 -->
            <div class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl p-[2px] bg-gradient-to-r from-[#00cd95] to-[#438bf1] hover:opacity-80 transition-opacity cursor-pointer">
              <!-- 内部背景 -->
              <div class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl bg-white dark:bg-gray-950 flex items-center justify-center">
                <span class="font-bold text-sm sm:text-lg lg:text-3xl leading-none bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent">
                  G2501
                </span>
              </div>
            </div>
          </RouterLink>
          
          <!-- 导航项 -->
          <div class="hidden sm:flex items-center gap-[12px] sm:gap-[20px] lg:gap-[30px]">
            <RouterLink to="/about">
              <NavItem label="关于我们" :active="$route.name === 'about'" />
            </RouterLink>
            <NavItem label="BBB" :active="false" />
            <RouterLink to="/members">
              <NavItem label="成员列表" :active="$route.name === 'members'" />
            </RouterLink>
          </div>
        </div>

        <!-- 右侧留空，保持对称 -->
        <div class="w-[40px] sm:w-[50px] lg:w-[60px] flex-shrink-0"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavItem from './NavItem.vue'
import { RouterLink } from 'vue-router'

const $route = useRoute()
</script>
