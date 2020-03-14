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
      import(/* webpackChunkName: "Drawer" */ "@/views/Drawer.vue")
  },
  {
    path: "/simple",
    name: "Simple",
    component: () =>
      import(/* webpackChunkName: "Simple" */ "@/views/Simple.vue")
  },
  {
    path: "/stagger",
    name: "Stagger",
    component: () =>
      import(/* webpackChunkName: "Stagger" */ "@/views/Stagger.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
