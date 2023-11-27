<template>
  <div
    style="width: 810px; height: 508px; padding-left: 30px"
    class="rounded-md bg-white pt-6"
  >
    <p class="font-semibold text-lg mb-3">Overview</p>
  </div>
</template>

<script setup>
import { useHotelStore } from "@/stores/HotelStore";
import { ref } from "vue";
const hotelStore = useHotelStore();
const hotel = ref(hotelStore.getselectedHotelData);
</script>

<style></style>
