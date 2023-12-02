import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import RegisterView from "@/views/RegisterView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import SearchResultsView from "@/views/SearchResultsView.vue";
import CheckoutView from "@/views/CheckoutView";
import MyTripsView from "@/views/MyTripsView";
import ProductDetailsView from "@/views/ProductDetailsView";
import { useAuthStore } from "@/stores/AuthStore";

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
    path: "/searchResults/:searchData",
    name: "searchResults",
    component: SearchResultsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
    meta: { requiresAuth: true },
  },
  {
    path: "/myTrips",
    name: "myTrips",
    component: MyTripsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/productDetails",
    name: "productDetails",
    component: ProductDetailsView,
    meta: { requiresAuth: true },
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
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (requiresAuth && !isAuthenticated) {
    next("/signin");
  } else {
    next();
  }
});

export default router;
