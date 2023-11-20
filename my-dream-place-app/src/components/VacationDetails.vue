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
    <section
      class="flex rounded-lg h-16 items-center p-4 gap-4"
      style="
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 75px;
        margin-bottom: 50px;
        max-width: 1440px;
        background: #fcefca;
        width: 1240px;
      "
    >
      <img src="../assets/Icons/danger.svg" alt="danger icon" />
      <div class="flex gap-1">
        <p>Check the latest COVID-19 restrictions before you travel.</p>
        <a href="#learnmore" class="text-blue-500 hover:underline"
          >Learn more</a
        >
      </div>
    </section>
  </div>
</template>

<script setup>
import SearchSection from "./SearchSection.vue";
</script>

<style></style>
