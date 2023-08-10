import { createApp } from 'vue'
import { store } from './store'

import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/styles/main.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(elementPlus)
// app.use(draggable)

app.mount('#app')
