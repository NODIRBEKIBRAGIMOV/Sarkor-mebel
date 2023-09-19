import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './style.css';

const app = createApp(App)

app.use(router)

app.mount('#app')

