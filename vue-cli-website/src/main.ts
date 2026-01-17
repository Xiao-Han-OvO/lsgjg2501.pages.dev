import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// 根据系统偏好设置深色模式
const initTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (prefersDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// 监听系统主题变化
const setupThemeListener = () => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
}

// 初始化主题
initTheme()
setupThemeListener()

// FontAwesome配置
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faList, faTable } from '@fortawesome/free-solid-svg-icons'

library.add(faList, faTable)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
