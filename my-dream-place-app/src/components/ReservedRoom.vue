<template>
  <main :class="classOfTag" class="bg-white" style="font-family: SF Pro Display, sans-serif">
    <img src="../assets/Imgs/aust.png" alt="room image" />
    <div>
      <div class="ml-6 mb-[25px]">
        <p class="font-medium text-lg pt-10 text-[#1a1a1a]">
          {{ selectedHotel.property.name }}
        </p>
        <section class="flex mt-3 mb-3">
          <Reviews
            :reviewScore="selectedHotel.property.reviewScore"
            :reviewsCount="selectedHotel.property.reviewCount"
          />
        </section>
      </div>
      <div class="ml-6 mb-5">
        <p class="mb-2">Non refundable</p>
        <p class="mb-2">Check in: Sunday, March 18, 2022</p>
        <p class="mb-2">Check in: Sunday, March 18, 2022</p>
        <p class="mb-2">Check out: Tuesday, March 20, 2022</p>
        <p>2 night stay</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useHotelStore } from "@/stores/HotelStore";
import Reviews from "./Reviews.vue";

const { classOfTag, hotelData, roomData } = defineProps([
  "classOfTag",
  "hotelData",
  "roomData",
]);

const hotelStore = useHotelStore();
const selectedHotel = ref(hotelStore.getselectedHotelData);
const isLoading = ref(false);
</script>

<style></style>
