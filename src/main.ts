import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';


AOS.init();
createApp(App).use(store).use(router).mount('#app')
