// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import {createPinia} from 'pinia' 
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);
app.component('VueDatePicker', VueDatePicker);
app.use(createPinia()) // Use Pinia

app.use(router);
app.mount('#app');
