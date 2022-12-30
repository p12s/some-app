import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {LoggerPlugin} from "./plugins/logger.plugin";

createApp(App).use(LoggerPlugin).mount('#app')
