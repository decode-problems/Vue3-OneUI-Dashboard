import router from "./router";
import {createApp} from 'vue';

import App from './components/App.vue'

require('./bootstrap');

createApp(App)
    .use(router)
    .mount("#app")
