<template>
  <div class="min-h-screen w-full mx-auto relative flex flex-col">
    <!-- 背景层 -->
    <BackgroundLayer />
    
    <!-- 导航栏 -->
    <Navbar />
    
    <!-- 页面内容区域 -->
    <div class="relative flex-1">
      <!-- 页面标题区域 -->
      <div class="absolute left-[1rem] sm:left-[1.5rem] md:left-[2rem] lg:left-[130px] top-[80px] sm:top-[120px] md:top-[150px] lg:top-[160px] w-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-0">
        <!-- 标题和切换按键 -->
        <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-[15px] sm:gap-[20px]">
          <!-- 页面标题 -->
          <h1 class="text-[1.8rem] sm:text-[3rem] md:text-[5rem] lg:text-[70px] font-bold bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent leading-tight lg:leading-none h-auto lg:h-[70px] flex items-end flex-shrink-0 break-words">
            成员列表
          </h1>
          
          <!-- 视图切换按钮 -->
          <div class="flex items-center gap-[8px] sm:gap-[12px] md:gap-[15px] lg:gap-[20px] flex-shrink-0">
            <button 
              @click="viewMode = 'list'"
              class="w-[40px] h-[40px] sm:w-[55px] sm:h-[55px] md:w-[75px] md:h-[75px] lg:w-[63px] lg:h-[63px] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300"
              :class="[
                viewMode === 'list' 
                  ? 'bg-gradient-to-r from-[#00cd95] to-[#438bf1] text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              ]"
            >
              <font-awesome-icon icon="list" class="text-sm sm:text-lg md:text-2xl lg:text-2xl" />
            </button>
            
            <button 
              @click="viewMode = 'grid'"
              class="w-[40px] h-[40px] sm:w-[55px] sm:h-[55px] md:w-[75px] md:h-[75px] lg:w-[63px] lg:h-[63px] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300"
              :class="[
                viewMode === 'grid' 
                  ? 'bg-gradient-to-r from-[#00cd95] to-[#438bf1] text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              ]"
            >
              <font-awesome-icon icon="table" class="text-sm sm:text-lg md:text-2xl lg:text-2xl" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- 主显示区域 -->
      <div class="absolute top-[180px] sm:top-[260px] md:top-[350px] lg:top-[330px] left-[1rem] sm:left-[1.5rem] md:left-[2rem] lg:left-[85px] right-[1rem] sm:right-[1.5rem] md:right-[2rem] lg:right-[85px] pb-[20px] sm:pb-[40px] md:pb-[60px] lg:pb-[42px]">
        <!-- 网格视图 -->
        <div v-if="viewMode === 'grid'">
          <!-- 响应式网格：1列(手机) -> 2列(平板) -> 3列(桌面) -->
          <div 
            v-for="(row, rowIndex) in memberRows" 
            :key="rowIndex"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] sm:gap-[15px] md:gap-[20px] lg:gap-[30px] mb-[12px] sm:mb-[18px] md:gap-[25px] lg:mb-[30px]"
          >
            <div 
              v-for="m in row"
              :key="m.id"
              class="w-full"
            >
              <MemberCard :member="m" mode="grid" />
            </div>
          </div>
        </div>
        
        <!-- 列表视图 -->
        <div v-else class="space-y-[12px] sm:space-y-[15px] md:space-y-[20px] lg:space-y-[30px]">
          <div 
            v-for="(m, index) in members" 
            :key="m.id"
            class="relative"
          >
            <!-- 分隔线 -->
            <div 
              v-if="index > 0"
              class="absolute -top-[6px] sm:-top-[8px] md:-top-[10px] lg:-top-[15px] left-[35px] sm:left-[50px] md:left-[70px] lg:left-[90px] right-[35px] sm:right-[50px] md:right-[70px] lg:right-[90px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
            ></div>
            
            <MemberCard :member="m" mode="list" />
          </div>
        </div>

        <!-- 页脚 -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from '../components/Navbar.vue'
import MemberCard from '../components/MemberCard.vue'
import BackgroundLayer from '../components/BackgroundLayer.vue'
import Footer from '../components/Footer.vue'

const viewMode = ref<'list' | 'grid'>('grid')

const members = ref([
  { id: 1, name: '艾可为', description: '物理竞赛组', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=张三' },
  { id: 2, name: '曾浚源', description: '数学竞赛组', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=李四' },
  { id: 3, name: '', description: '', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王五' },
  { id: 4, name: '陈彰沛', description: '', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=赵六' },
  { id: 5, name: '邓一滔', description: '数学竞赛组', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=钱七' },
  { id: 6, name: '邓子轩', description: '数学竞赛组', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=孙八' },
  { id: 7, name: '董晋玮', description: '物理竞赛组', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=孙八' },
  { id: 8, name: '杜玘岳', description: '', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=孙八' },
  { id: 9, name: '范文熙', description: '物理竞赛组', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=孙八' },
  { id: 10, name: '范亦宸', description: '数学竞赛组', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=孙八' },
  { id: 11, name: '高铭森', description: '物理竞赛组', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=孙八' },
])

const memberRows = computed(() => {
  const rows = []
  for (let i = 0; i < members.value.length; i += 3) {
    rows.push(members.value.slice(i, i + 3))
  }
  return rows
})
</script>
