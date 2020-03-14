import Vue from "vue";
import VueRouter from "vue-router";
import Modal from "@/views/Modal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Modal",
    component: Modal
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "List" */ "@/views/List.vue")
  },
  {
    path: "/drawer",
    name: "Drawer",
    component: () =>
      import(/* webpackChunkName: "List" */ "@/views/Drawer.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
