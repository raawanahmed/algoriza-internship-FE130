<template>
  <main
    :class="classOfCard"
    class="bg-white"
    style="font-family: SF Pro Display, sans-serif"
  >
    <img
      :src="selectedHotel.property.photoUrls[0]"
      alt="room image"
      :class="classOfImg"
    />
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
        <p class="mb-2">
          Check in: {{ formatDateToText(selectedHotel.property.checkinDate) }}
        </p>
        <p class="mb-2">
          Check out: {{ formatDateToText(selectedHotel.property.checkoutDate) }}
        </p>
        <p>{{ noOfDays }} night stay</p>
      </div>
    </div>
    <section
      v-if="showPriceAndDetilsBtn === true"
      class="text-end relative mr-6 max-h-[200px] flex-grow-[1]"
    >
      <section class="absolute bottom-[80px] right-0 flex items-center">
        <p class="mr-2 text-[#EB5757] line-through">
          ${{ selectedHotel.property.priceBreakdown.excludedPrice.value }}
        </p>
        <p class="font-semibold text-xl">
          ${{ selectedHotel.property.priceBreakdown.grossPrice.value }}
        </p>
      </section>
      <p
        class="font-light text-sm absolute text-[#333] bottom-[60px] w-[140px] right-0"
      >
        Includes taxes and fees
      </p>
      <button
        class="absolute right-0 font-medium text-[15px] text-white rounded-md bg-[#2F80ED] px-[18px] py-[10px] bottom-0"
      >
        View trip details
      </button>
    </section>
  </main>
</template>

<script setup>
import Reviews from "./Reviews.vue";
import { ref } from "vue";
import { useSearchDetailsStore } from "@/stores/SearchDetailsStore";
import { useHotelStore } from "@/stores/HotelStore";

const { classOfCard, classOfImg, showPriceAndDetilsBtn, hotel } = defineProps([
  "classOfCard",
  "classOfImg",
  "showPriceAndDetilsBtn",
  "hotel",
]);

const searchstore = useSearchDetailsStore();
const hotelStore = useHotelStore();
const selectedHotel = ref(hotel);
console.log(selectedHotel.value);
const days = hotelStore.calcDifferenceInDays(
  selectedHotel.value.property.checkinDate,
  selectedHotel.value.property.checkoutDate
);
const noOfDays = ref(days);

function formatDateToText(inputDate) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(inputDate).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
}
</script>

<style></style>
