<template>
  <header>
    <nav
      class="flex justify-between items-center w-full max-w-screen-xl mx-auto"
      style="height: 68px; margin-left: 100px; margin-right: 100px"
    >
      <!-- Left Section -->
      <div class="flex items-center gap-4">
        <img
          src="../assets/Icons/planeIcon.png"
          alt="Plane Icon"
          class="w-5 h-5"
        />
        <p class="text-lg font-semibold text-gray-900 tracking-wide">
          my Dream Place
        </p>
      </div>

      <!-- Middle Section -->
      <div class="flex items-center gap-8">
        <router-link
          to="/"
          class="text-gray-1 font-sans text-base font-normal leading-normal tracking-tight"
          >Home</router-link
        >
        <router-link
          to="/discover"
          class="text-gray-1 font-sans text-base font-normal leading-normal tracking-tight"
          >Discover</router-link
        >
        <router-link
          to="/activities"
          class="text-gray-1 font-sans text-base font-normal leading-normal tracking-tight"
          >Activities</router-link
        >
        <router-link
          to="/about"
          class="text-gray-1 font-sans text-base font-normal leading-normal tracking-tight"
          >About</router-link
        >
        <router-link
          to="/contact"
          class="text-gray-1 font-sans text-base font-normal leading-normal tracking-tight"
          >Contact</router-link
        >
      </div>

      <!-- Right Section -->
      <button
        class="register-button inline-flex px-10 py-2 justify-center items-center gap-2 rounded border border-blue-500 bg-blue-500 text-white"
        style="width: 92px; height: 40px"
      >
        Register
      </button>
    </nav>
  </header>
  <router-view />
</template>

<script setup></script>

<style>
.marginStyle {
  margin-left: 100px;
}
</style>
