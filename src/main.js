import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VueEasyLightbox from "vue-easy-lightbox";

const Vue = createApp(App);
Vue.use(store);
Vue.use(VueEasyLightbox);
Vue.mount("#app");
