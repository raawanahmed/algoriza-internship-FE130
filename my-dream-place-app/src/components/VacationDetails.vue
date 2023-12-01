<template>
  <div
    class="mx-auto relative max-w-[1440px]"
    style="font-family: SF Pro Display, sans-serif"
  >
    <img
      src="../assets/Imgs/view.png"
      alt="view of the sea"
      class="mt-3 mx-[100px]"
    />
    <p
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-sans text-3xl font-bold top-[202px] w-[610px] h-[38px]"
    >
      Enjoy Your Dream Vacation
    </p>
    <p
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-sans text-xl mt-5 font-normal top-[260px] w-[650px] h-[56px]"
    >
      Plan and book our perfect trip with expert advice, travel tips,
      destination information and inspiration from us
    </p>
    <section
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 bg-white rounded-lg shadow-md p-3 mt-8 gap-3.5 flex w-[1030px] h-[64px]"
    >
      <SearchSection />
    </section>

    <CovidAlert class="mt-[75px]" />
  </div>
</template>

<script setup>
import SearchSection from "./SearchSection.vue";
import CovidAlert from "./CovidAlert.vue";
</script>

<style></style>
