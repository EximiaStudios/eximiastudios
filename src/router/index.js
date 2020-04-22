import Vue from "vue";
import VueRouter from "vue-router";
import Temporary from "@/views/Temporary.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Temporary",
    component: Temporary,
    meta: {
      title: "RENVMN"
    }
  },
  {
    path: "/404",
    name: "notfound",
    alias: "*",
    component: () => import("@/views/NotFound.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to.meta.title || "Eximia Studios";
  });
});

export default router;
