<template>
  <!-- 使用 div 而不是 RouterLink，因为我们已经在父组件中包装了 RouterLink -->
  <div 
    class="relative cursor-pointer"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- 外部容器，控制边距 -->
    <div class="px-1 py-1">
      <!-- 边框渐变层 -->
      <div 
        class="rounded-2xl transition-all duration-300"
        :class="[
          active 
            ? 'p-[2px] bg-gradient-to-r from-[#00cd95] to-[#438bf1]' 
            : hover 
              ? 'p-[2px] bg-gradient-to-r from-[#00cd95]/20 to-[#438bf1]/20 dark:from-[#00cd95]/10 dark:to-[#438bf1]/10' 
              : ''
        ]"
      >
        <!-- 内部背景 -->
        <div 
          class="rounded-2xl px-7 py-3 transition-all duration-300"
          :class="[
            active 
              ? 'bg-white dark:bg-gray-950' 
              : 'bg-transparent'
          ]"
        >
          <span 
            class="font-medium text-lg transition-all duration-300"
            :class="[
              active 
                ? 'bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent' 
                : 'text-gray-800 dark:text-gray-200'
            ]"
          >
            <slot>{{ label }}</slot>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  label?: string
  active?: boolean
}>()

const hover = ref(false)
</script>
