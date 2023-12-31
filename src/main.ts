import { createApp } from 'vue'
import App from './App.vue'
import './theme/theme.css'
import pinia from './store'
import router from './router'

createApp(App).use(pinia).use(router).mount('#app')
