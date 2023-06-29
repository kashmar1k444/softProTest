import { createApp } from 'vue'
import './assets/css/main.scss'
import App from './App.vue'
import store from '../store';

const app = createApp(App);

app.use(store).mount('#app')    
