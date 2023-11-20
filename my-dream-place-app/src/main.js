// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import {createPinia} from 'pinia' // Import your Pinia store instance

const app = createApp(App);
app.use(createPinia()) // Use Pinia

app.use(router);
app.mount('#app');
