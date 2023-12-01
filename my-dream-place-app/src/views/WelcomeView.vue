<template>
  <div class="flex justify-center items-center">
    <section style="width: 352px; height: 44px">
      <section
        class="flex justify-center items-center"
        style="margin-top: 50px"
      >
        <div
          class=""
          style="
            width: 240px;
            height: 200px;
            border-radius: 100px;
            background: rgba(47, 128, 237, 0.3);
          "
        >
          <div class="flex justify-center items-center h-full relative">
            <img
              src="../assets/Icons/boy.svg"
              alt="boy"
              class="h-full absolute"
              style="
                left: 47px;
                z-index: 1;
                width: 81px;
                bottom: 0px;
                height: 187px;
              "
            />
            <img
              src="../assets/Icons/girl.svg"
              alt="girl"
              class="h-full absolute"
              style="right: 28px; width: 112px; bottom: 0px; height: 192px"
            />
          </div>
        </div>
      </section>
      <section class="text-center">
        <p class="mt-11 font-semibold text-xl">Welcome to My Dream Place</p>
        <p class="mt-3 text-base" style="color: var(--Gray-2, #4f4f4f)">
          You can now enjoy your travel experience with easy access to resources
          and more
        </p>
      </section>
      <router-link to="/home">
        <button
          class="gap-2 rounded border border-blue-500 bg-blue-500 text-white mt-11"
          style="width: 352px; height: 44px"
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

onMounted(() => {
  localStorage.clear();
});
</script>

<style></style>
