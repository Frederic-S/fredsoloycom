import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

createApp(App)
  .use(router)
  .mount("#app");

Vue.use(VueGtag, {
  config: { id: "UA-91636249-3" },
});
