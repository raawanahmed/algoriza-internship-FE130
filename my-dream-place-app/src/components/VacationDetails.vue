<template>
  <div class="mx-auto relative" style="max-width: 1440px">
    <img
      src="../assets/Imgs/view.png"
      alt="view of the sea"
      style="margin-left: 100px; margin-right: 100px"
      class="mt-3"
    />
    <p
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-sans text-3xl font-bold"
      style="top: 202px; width: 610px; height: 38px"
    >
      Enjoy Your Dream Vacation
    </p>
    <p
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-sans text-xl mt-5 font-normal"
      style="top: 260px; width: 650px; height: 56px"
    >
      Plan and book our perfect trip with expert advice, travel tips,
      destination information and inspiration from us
    </p>
    <SearchSection />
    <CovidAlert />
  </div>
</template>

<script setup>
import SearchSection from "./SearchSection.vue";
import CovidAlert from "./CovidAlert.vue";
</script>

<style></style>
