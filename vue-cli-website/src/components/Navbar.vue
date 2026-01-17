<template>
  <!-- 导航栏容器，宽度100%，固定定位 -->
  <div class="fixed top-0 left-0 right-0 h-[120px] z-50">
    <!-- 导航栏背景层 -->
    <div class="absolute inset-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800"></div>
    
    <!-- 导航栏内容 -->
    <div class="relative w-[2160px] mx-auto h-full">
      <div class="h-full flex items-center justify-between">
        <!-- 左侧G2501和导航项 -->
        <div class="flex items-center h-full">
          <!-- G2501圆角矩形 - 边框渐变 -->
          <RouterLink to="/" class="w-40 h-15 mr-[45px] ml-[30px] block">
            <!-- 边框渐变层 -->
            <div class="w-full h-full rounded-2xl p-[2px] bg-gradient-to-r from-[#00cd95] to-[#438bf1] hover:opacity-80 transition-opacity cursor-pointer">
              <!-- 内部背景 -->
              <div class="w-full h-full rounded-2xl bg-white dark:bg-gray-950 flex items-center justify-center">
                <span class="font-bold text-[2.75rem] leading-none bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent">
                  G2501
                </span>
              </div>
            </div>
          </RouterLink>
          
          <!-- 导航项 -->
          <div class="flex items-center gap-[30px]">
            <NavItem label="AAA" :active="false" />
            <NavItem label="BBB" :active="false" />
            <RouterLink to="/members">
              <NavItem label="成员列表" :active="$route.name === 'members'" />
            </RouterLink>
          </div>
        </div>

        <!-- 右侧留空，保持对称 -->
        <div class="w-[60px] mr-[30px]"></div>
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
