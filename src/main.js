import { createApp } from 'vue'
import App from './App.vue'
import pinia from '@/stores'
import router from '@/router'

import '@/styles/main.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(pinia).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
