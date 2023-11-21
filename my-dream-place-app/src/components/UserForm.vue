<template>
  <header class="flex w-full mx-auto" style="max-width: 1440px">
    <nav
      class="flex justify-between items-center w-full mx-auto"
      style="height: 68px; margin-left: 100px; margin-right: 100px"
    >
      <div class="flex items-center gap-1">
        <img src="../assets/Icons/plane.svg" alt="Plane Icon" class="w-6 h-6" />
        <p class="text-lg font-semibold text-gray-900 tracking-wide">
          my Dream Place
        </p>
      </div>
    </nav>
  </header>

  <main>
    <h1
      class="mb-10 font-semibold mt-24 text-center"
      style="color: #181818; font-size: 28px"
    >
      {{ textBasedOnTheView }}
    </h1>
    <div class="flex flex-col items-center">
      <form action="" class="flex flex-col">
        <label for="email" class="mb-1 font-medium text-sm text-left">
          Email address</label
        >
        <input
          type="text"
          name="email"
          style="width: 400px; background: var(--Gray-6, #f2f2f2)"
          class="h-11 p-3 mb-5 rounded"
        />
        <label for="password" class="mb-1 font-medium text-sm">Password</label>
        <div
          class="relative"
          style="width: 400px; background: var(--Gray-6, #f2f2f2)"
        >
          <input
            type="password"
            name="password"
            style="width: 400px; background: var(--Gray-6, #f2f2f2)"
            class="h-11 p-3 pr-10 rounded"
          />
          <img
            src="../assets/Icons/eye.svg"
            alt="see pass icon"
            class="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3"
          />
        </div>
        <div class="mt-5" v-if="!isSignIn">
          <label for="password" class="mb-1 font-medium text-sm"
            >Confirm password</label
          >
          <div
            class="relative"
            style="width: 400px; background: var(--Gray-6, #f2f2f2)"
          >
            <input
              type="password"
              name="password"
              style="width: 400px; background: var(--Gray-6, #f2f2f2)"
              class="h-11 p-3 pr-10 rounded"
            />
            <img
              src="../assets/Icons/eye.svg"
              alt="see pass icon"
              class="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3"
            />
          </div>
        </div>
        <button
          class="font-medium justify-center items-center rounded border border-blue-500 bg-blue-500 text-white mt-8 mb-5"
          style="width: 400px; height: 43px"
          @click="onBtnClick"
        >
          {{ textBasedOnTheView }}
        </button>
      </form>
    </div>
    <div class="flex gap-1 text-base justify-center" v-if="isSignIn">
      <p style="color: var(--Gray-2, #4f4f4f)">Don’t have an account?</p>
      <router-link
        to="/register"
        class="text-blue-500 hover:underline text-center"
        >Register</router-link
      >
    </div>
    <div class="flex gap-1 text-base justify-center" v-if="!isSignIn">
      <p style="color: var(--Gray-2, #4f4f4f)">Already have an account?</p>
      <router-link
        to="/signin"
        class="text-blue-500 hover:underline text-center"
        >Sign in</router-link
      >
    </div>
    <router-view />
  </main>
</template>

<script setup>
import { ref, watch, defineProps, computed } from "vue";

const { isSignIn } = defineProps(["isSignIn"]);
const textBasedOnTheView = computed(() => (isSignIn ? "Sign in" : "Register"));

const onBtnClick = () => {
  if (isSignIn) {
    // Handle sign-in logic
  } else {
    // Handle register logic
  }
};
</script>
<style></style>
