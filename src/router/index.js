import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/page/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../page/Login.vue"),
  },
  {
    path: "/tuijian",
    name: "Recommend",
    component: () =>
      import(/* webpackChunkName: "about" */ "../page/Recommend.vue"),
  },
  {
    path: "/buy",
    name: "Buy",
    component: () => import(/* webpackChunkName: "about" */ "../page/Buy.vue"),
  },
  {
    path: "/vehicle",
    name: "Car",
    component: () => import(/* webpackChunkName: "about" */ "../page/Car.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../page/Admin.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
