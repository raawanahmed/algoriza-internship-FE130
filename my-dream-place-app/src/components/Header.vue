<template>
  <header
    class="flex w-full mx-auto max-w-[1440px]"
    :style="{ color: textColor }"
    style="font-family: SF Pro Display, sans-serif"
  >
    <nav
      class="flex justify-between items-center w-full mx-auto h-[68px] ml-[100px] mr-[100px]"
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

      <div class="flex items-center gap-8" v-if="showNavBar">
        <router-link
          to="/"
          class="text-gray-1 font-sans text-base font-normal cursor-pointer"
          >Home</router-link
        >
        <a class="text-gray-1 font-sans text-base font-normal cursor-pointer"
          >Discover</a
        >
        <a class="text-gray-1 font-sans text-base font-normal cursor-pointer"
          >Activities</a
        >
        <a class="text-gray-1 font-sans text-base font-normal cursor-pointer"
          >About</a
        >
        <a
          to="/contact"
          class="text-gray-1 font-sans text-base font-normal cursor-pointer"
          >Contact</a
        >
      </div>
      <router-link to="/register" v-if="!curUser">
        <button
          class="register-button inline-flex px-10 py-2 justify-center items-center gap-2 rounded border border-blue-500 bg-blue-500 text-white w-[92px] h-[40px]"
        >
          Register
        </button>
      </router-link>
      <div class="flex" v-if="curUser">
        <img
          :src="getNotificationIconPath()"
          alt="notification"
          class="mr-[22px]"
        />
        <img
          src="../assets/Icons/user.svg"
          alt="user"
          @click="toggleDropdown"
        />
        <div v-if="isDropdownOpen" class="relative">
          <div
            class="absolute top-0 right-0 bg-white shadow-md rounded-md items-start mt-[50px] w-[200px] z-[1]"
          >
            <ul class="text-[#4f4f4f] p-0 list-none">
              <li class="border-b pb-2 pt-2">
                <div class="flex items-center gap-2 m-1">
                  <img src="../assets/Icons/user-square.svg" alt="user" />
                  <a href="#" @click="goToHome" class="text-[#4f4f4f]"
                    >Manage account</a
                  >
                </div>
              </li>
              <li class="border-b pb-2 pt-2">
                <div class="flex items-center gap-2 m-1">
                  <img src="../assets/Icons/trips.svg" alt="trips" />
                  <a href="#" @click="goToTrips" class="text-[#4f4f4f]"
                    >My trips</a
                  >
                </div>
              </li>
              <li class="border-b pb-2 pt-2">
                <div class="flex items-center gap-2 m-1">
                  <img src="../assets/Icons/wallet.svg" alt="wallet" />
                  <a href="#" @click="goToCheckout" class="text-[#4f4f4f]"
                    >Reward and Wallet</a
                  >
                </div>
              </li>
              <li class="border-b pb-2 pt-2 rounded-md">
                <div class="flex items-center gap-2 m-1">
                  <img src="../assets/Icons/logout.svg" alt="sign out" />
                  <a href="#" @click="signOut" class="text-[#4f4f4f]"
                    >Sign out</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
</template>

<script setup>
import router from "@/router";
import { useAuthStore } from "@/stores/AuthStore";
import { ref } from "vue";
const authStore = useAuthStore();
const curUser = authStore.getCurrentUser();
const isDropdownOpen = ref(false);
const { textColor, notificationColor, showNavBar } = defineProps([
  "textColor",
  "notificationColor",
  "showNavBar",
]);
const getNotificationIconPath = () => {
  return require(`@/assets/Icons/${notificationColor}.svg`);
};
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  // console.log(isDropdownOpen.value);
};
const signOut = () => {
  authStore.signOut();
  router.push("/");
};
const goToTrips = () => {
  router.push("/myTrips");
};
const goToHome = () => {
  router.push("/home");
};
const goToCheckout = () => {
  router.push("/checkout");
};

// clean css .. done
</script>

<style></style>
