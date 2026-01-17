<template>
  <div class="min-h-screen w-[2160px] mx-auto relative">
    <!-- 背景层 -->
    <BackgroundLayer />
    
    <!-- 导航栏 -->
    <Navbar />
    
    <!-- 页面内容区域 -->
    <div class="relative">
      <!-- 页面标题区域 - 距离页面顶部210px，距离左边180px -->
      <div class="absolute left-[180px] top-[210px]">
        <!-- 标题和切换按键在同一行 -->
        <div class="flex items-end justify-between" style="width: calc(2160px - 180px - 120px);">
          <!-- 页面标题 -->
          <h1 class="text-[150px] font-bold bg-gradient-to-r from-[#00cd95] to-[#438bf1] bg-clip-text text-transparent leading-none h-[150px] flex items-end">
            成员列表
          </h1>
          
          <!-- 视图切换按钮 - 距离右边120px，在标题底部 -->
          <div class="flex items-center gap-[20px]">
            <button 
              @click="viewMode = 'list'"
              class="w-[90px] h-[90px] rounded-2xl flex items-center justify-center transition-all duration-300"
              :class="[
                viewMode === 'list' 
                  ? 'bg-gradient-to-r from-[#00cd95] to-[#438bf1] text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              ]"
            >
              <font-awesome-icon icon="list" class="text-3xl" />
            </button>
            
            <button 
              @click="viewMode = 'grid'"
              class="w-[90px] h-[90px] rounded-2xl flex items-center justify-center transition-all duration-300"
              :class="[
                viewMode === 'grid' 
                  ? 'bg-gradient-to-r from-[#00cd95] to-[#438bf1] text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              ]"
            >
              <font-awesome-icon icon="table" class="text-3xl" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- 主显示区域 - 在标题栏下面60px，左右各120px距离 -->
      <div class="absolute top-[420px] left-[120px] right-[120px] pb-[60px]">
        <!-- 网格视图 -->
        <div v-if="viewMode === 'grid'">
          <!-- 使用flex布局实现三列卡片 -->
          <div 
            v-for="(row, rowIndex) in memberRows" 
            :key="rowIndex"
            class="flex justify-between mb-[30px]"
          >
            <!-- 第一列卡片 -->
            <div v-if="row[0]" class="w-[600px]">
              <MemberCard :member="row[0]" mode="grid" />
            </div>
            
            <!-- 第二列卡片 -->
            <div v-if="row[1]" class="w-[600px]">
              <MemberCard :member="row[1]" mode="grid" />
            </div>
            
            <!-- 第三列卡片 -->
            <div v-if="row[2]" class="w-[600px]">
              <MemberCard :member="row[2]" mode="grid" />
            </div>
          </div>
        </div>
        
        <!-- 列表视图 -->
        <div v-else class="space-y-[30px]">
          <div 
            v-for="(member, index) in members" 
            :key="member.id"
            class="relative"
          >
            <!-- 分隔线 -->
            <div 
              v-if="index > 0"
              class="absolute -top-[15px] left-[90px] right-[90px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
            ></div>
            
            <MemberCard :member="member" mode="list" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from '../components/Navbar.vue'
import MemberCard from '../components/MemberCard.vue'
import BackgroundLayer from '../components/BackgroundLayer.vue'

// 视图模式
const viewMode = ref<'list' | 'grid'>('grid')

// 模拟数据
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

// 将成员按3个一组分组
const memberRows = computed(() => {
  const rows = []
  for (let i = 0; i < members.value.length; i += 3) {
    rows.push(members.value.slice(i, i + 3))
  }
  return rows
})
</script>
