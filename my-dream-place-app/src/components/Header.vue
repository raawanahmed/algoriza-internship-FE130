<template>
  <header
    class="flex w-full mx-auto"
    style="max-width: 1440px"
    :style="{ color: textColor }"
  >
    <nav
      class="flex justify-between items-center w-full mx-auto"
      style="height: 68px; margin-left: 100px; margin-right: 100px"
    >
      <div class="flex items-center gap-1">
        <img src="../assets/Icons/plane.svg" alt="Plane Icon" class="w-6 h-6" />
        <p
          class="text-lg font-semibold text-gray-900 tracking-wide"
          :style="{ color: textColor }"
        >
          my Dream Place
        </p>
      </div>

      <div class="flex items-center gap-8">
        <router-link
          to="/"
          class="text-gray-1 font-sans text-base font-normal leading-normal tracking-tight"
          >Home</router-link
        >
        <a
          class="text-gray-1 font-sans text-base font-normal leading-normal tracking-tight cursor-pointer"
          >Discover</a
        >
        <a
          class="text-gray-1 font-sans text-base font-normal leading-normal tracking-tight cursor-pointer"
          >Activities</a
        >
        <a
          class="text-gray-1 font-sans text-base font-normal leading-normal tracking-tight cursor-pointer"
          >About</a
        >
        <a
          to="/contact"
          class="text-gray-1 font-sans text-base font-normal leading-normal tracking-tight"
          >Contact</a
        >
      </div>
      <router-link to="/register" v-if="!curUser">
        <button
          class="register-button inline-flex px-10 py-2 justify-center items-center gap-2 rounded border border-blue-500 bg-blue-500 text-white"
          style="width: 92px; height: 40px"
        >
          Register
        </button>
      </router-link>
      <div class="flex" v-if="curUser">
        <img
          :src="getNotificationIconPath()"
          alt="notification"
          style="margin-right: 22px"
        />
        <img src="../assets/Icons/user.svg" alt="user" />
      </div>
    </nav>
  </header>
  <router-view />
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";
const authStore = useAuthStore();
const curUser = authStore.getCurrentUser();
const { textColor, notificationColor, showNavBar } = defineProps([
  "textColor",
  "notificationColor",
  "showNavBar",
]);
const getNotificationIconPath = () => {
  return require(`@/assets/Icons/${notificationColor}.svg`);
};
</script>

<style></style>
