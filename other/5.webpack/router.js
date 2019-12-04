import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    name: "首页",
    path: "/index",
    component: res => require(["./views/index.vue"], res)
  },
  {
    name: "关于",
    path: "/about",
    component: res => require(["./views/about.vue"], res)
  },
  {
    name: "用户",
    path: "/user/:id",
    component: res => require(["./views/user.vue"], res)
  },
  {
    path: "*",
    redirect: "/index"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.name;
  next();
});
export default router;
