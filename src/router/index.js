import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Estimated from "@/views/Estimated/index.vue";
import ListExInformation from "@/views/ListExInformation/index.vue";
import SubmitExInformation from "@/views/SubmitExInformation/index.vue";
import Login from "@/views/Login/index.vue";
import Register from "@/views/Register/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/Estimated",
        name: "Estimated",
        component: Estimated,
      },
      {
        path: "/ListExInformation",
        name: "ListExInformation",
        component: ListExInformation,
      },
      {
        path: "/SubmitExInformation",
        name: "SubmitExInformation",
        component: SubmitExInformation,
      },
    ],
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    // 检查用户是否已登录
    !localStorage.getItem("token") &&
    to.name !== "Login"
  ) {
    // 将用户重定向到登录页面
    next("Login");
  } else {
    next();
  }
});
export default router;
