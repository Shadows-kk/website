import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import commonComponents from './config/components.js' // 公共组件
import 'uno.css' // 引入uno.css
import './assets/css/main.scss' // 引入界面样式


const app = createApp(App)
app.use(router).use(commonComponents)
app.mount('#app')
