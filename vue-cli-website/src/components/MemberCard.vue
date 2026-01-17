<template>
  <div 
    class="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl w-full h-[50px] sm:h-[65px] md:h-[80px] lg:h-[100px]"
  >
    <!-- 背景 -->
    <div 
      class="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[#00cd95]/10 to-[#438bf1]/10 dark:from-[#00cd95]/5 dark:to-[#438bf1]/5"
    ></div>
    
    <!-- 卡片背景 -->
    <div 
      class="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl bg-white dark:bg-gray-900 shadow-lg"
    ></div>
    
    <!-- 照片 -->
    <div class="absolute left-[4px] sm:left-[6px] md:left-[8px] lg:left-[12px] top-[4px] sm:top-[6px] md:top-[8px] lg:top-[12px] bottom-[4px] sm:bottom-[6px] md:bottom-[8px] lg:bottom-[12px] aspect-square rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-xl overflow-hidden border-2 border-white dark:border-gray-800 z-10">
      <div class="w-full h-full object-cover flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <svg style="color:#999; width: 70%; height: 70%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/>
        </svg>
      </div>
    </div>
    
    <!-- 姓名 -->
    <div 
      class="absolute font-bold z-10 line-clamp-1 break-words text-gray-800 dark:text-white left-[48px] sm:left-[62px] md:left-[76px] lg:left-[100px] top-[3px] sm:top-[5px] md:top-[6px] lg:top-[8px] text-xs sm:text-xs md:text-sm lg:text-lg"
    >
      {{ member.name }}
    </div>
    
    <!-- 描述 -->
    <div 
      class="absolute z-10 line-clamp-1 break-words text-gray-600 dark:text-gray-300 left-[48px] sm:left-[62px] md:left-[76px] lg:left-[100px] bottom-[3px] sm:bottom-[5px] md:bottom-[6px] lg:bottom-[8px] text-[8px] sm:text-[8px] md:text-xs lg:text-sm"
    >
      {{ member.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Member {
  id: number
  name: string
  description: string
  avatar: string
}

defineProps<{
  member: Member
  mode: 'list' | 'grid'
}>()
</script>
