<template>
  <div 
    class="relative rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    :class="[
      mode === 'grid' 
        ? 'w-[600px] h-[120px]' 
        : 'w-full h-[120px]'
    ]"
  >
    <!-- 背景圆角矩形 -->
    <div 
      class="absolute inset-0 rounded-3xl"
      :class="[
        mode === 'grid' 
          ? 'bg-gradient-to-r from-[#00cd95]/10 to-[#438bf1]/10 dark:from-[#00cd95]/5 dark:to-[#438bf1]/5' 
          : ''
      ]"
    ></div>
    
    <!-- 卡片背景 -->
    <div 
      class="absolute inset-0 rounded-3xl"
      :class="[
        mode === 'grid' 
          ? 'bg-white dark:bg-gray-900 shadow-lg' 
          : 'bg-white dark:bg-gray-900 shadow-md'
      ]"
    ></div>
    
    <!-- 照片 -->
    <div class="absolute left-[18px] top-[18px] bottom-[18px] w-[84px] rounded-2xl overflow-hidden border-2 border-white dark:border-gray-800 z-10">
      <img 
        :src="member.avatar" 
        :alt="member.name"
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- 姓名 -->
    <div 
      class="absolute font-bold z-10"
      :class="[
        mode === 'grid' 
          ? 'left-[120px] top-[12px] text-2xl text-gray-800 dark:text-white' 
          : 'left-[198px] top-[18px] text-2xl text-gray-800 dark:text-white'
      ]"
    >
      {{ member.name }}
    </div>
    
    <!-- 描述 -->
    <div 
      class="absolute z-10"
      :class="[
        mode === 'grid' 
          ? 'left-[120px] bottom-[18px] text-lg text-gray-600 dark:text-gray-300' 
          : 'left-[198px] bottom-[18px] text-lg text-gray-600 dark:text-gray-300'
      ]"
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
