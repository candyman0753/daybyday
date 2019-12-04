import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";

new Vue({
  el: "#app",
  router,
  store,
  render: h => {
    return h(App);
  }
});
