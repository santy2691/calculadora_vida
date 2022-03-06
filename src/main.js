import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'v-calendar/dist/style.css';
import VueConfetti from 'vue-confetti';


import VCalendar from 'v-calendar';

const app = createApp(App);
// Use plugin with defaults
app.use(VCalendar, {});
app.use(VueConfetti);

app.mount('#app');
