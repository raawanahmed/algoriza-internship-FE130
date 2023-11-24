import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import RegisterView from "@/views/RegisterView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import SearchResultsView from "@/views/SearchResultsView.vue";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignInView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/searchResults",
    name: "searchResults",
    component: SearchResultsView,
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
