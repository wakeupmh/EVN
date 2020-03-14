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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/List.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
