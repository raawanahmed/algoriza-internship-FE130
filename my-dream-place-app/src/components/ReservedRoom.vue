<template>
  <main
    :class="classOfCard"
    class="bg-white"
    style="font-family: SF Pro Display, sans-serif"
  >
    <img src="../assets/Imgs/aust.png" alt="room image" :class="classOfImg" />
    <div>
      <div class="ml-6 mb-[15px]">
        <p class="font-medium text-lg text-[#1a1a1a]">
          {{ selectedHotel.property.name }}
        </p>
        <section class="flex">
          <Reviews
            :reviewScore="selectedHotel.property.reviewScore"
            :reviewsCount="selectedHotel.property.reviewCount"
          />
        </section>
      </div>
      <div class="ml-6 text-[14px] text-[#4F4F4F]">
        <p class="mb-2 text-[#EB5757]">Non refundable</p>
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

const { classOfCard, classOfImg } = defineProps(["classOfCard", "classOfImg"]);

const hotelStore = useHotelStore();
const selectedHotel = ref(hotelStore.getselectedHotelData);
const isLoading = ref(false);
</script>

<style></style>
