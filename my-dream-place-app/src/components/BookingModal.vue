<template>
  <div
    class="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center z-[1000]"
    style="background-color: rgba(0, 0, 0, 0.5) font-family: SF Pro Display, sans-serif"
    v-if="showModal"
  >
    <div
      class="bg-white p-5 rounded-[8px]"
      style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)"
    >
      <BookingSuccessfulCard />
    </div>
  </div>
</template>
<script setup>
import BookingSuccessfulCard from "./BookingSuccessfulCard.vue";
import { ref } from "vue";

const showModal = ref(true);
</script>

<style></style>
