import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

import "@/assets/css/main.css";
import "boxicons/css/boxicons.min.css";
import "swiper/css";
import "swiper/css/pagination";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
