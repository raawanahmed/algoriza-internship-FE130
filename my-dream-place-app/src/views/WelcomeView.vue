<template>
  <div class="flex justify-center items-center">
    <section class="w-[352px] h-[44px]">
      <section class="flex justify-center items-center mt-[50px]">
        <div
          class="w-[240px] h-[200px] rounded-[100px]"
          style="background: rgba(47, 128, 237, 0.3)"
        >
          <div class="flex justify-center items-center h-full relative">
            <img
              src="../assets/Icons/boy.svg"
              alt="boy"
              class="absolute left-[47px] w-[81px] b-[0px] h-[187px]"
            />
            <img
              src="../assets/Icons/girl.svg"
              alt="girl"
              class="absolute right-[28px] w-[112px] b-[0px] h-[192px]"
            />
          </div>
        </div>
      </section>
      <section class="text-center">
        <p class="mt-11 font-semibold text-xl">Welcome to My Dream Place</p>
        <p class="mt-3 text-base text-[#4f4f4f]">
          You can now enjoy your travel experience with easy access to resources
          and more
        </p>
      </section>
      <router-link to="/home">
        <button
          class="gap-2 rounded border border-blue-500 bg-blue-500 text-white mt-11 w-[352px] h-[44px]"
        >
          Get Started
        </button></router-link
      >
    </section>
  </div>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";

// onMounted(() => {
//   localStorage.clear();
// });
</script>

<style></style>
