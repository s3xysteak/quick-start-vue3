import { createApp } from 'vue'
import App from './App.vue'
import pinia from '@/stores'
import router from '@/router'

import '@/styles/main.css'
import 'virtual:uno.css'

import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(pinia).use(router)

Object.defineProperty(globalThis, 'CESIUM_BASE_URL', {
  value: '/libs/cesium'
})

router.isReady().then(() => {
  app.mount('#app')
})
