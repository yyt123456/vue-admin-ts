import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: '/login',
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: import("../views/register/index.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
