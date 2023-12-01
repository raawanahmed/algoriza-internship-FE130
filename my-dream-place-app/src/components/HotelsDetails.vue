<template>
  <div v-if="isLoading" class="loading-indicator">Loading...</div>
  <div v-for="hotel in hotels" :key="hotel.hotel_id">
    <div v-if="isLoading == false">
      <section
        class="mt-6 rounded"
        style="
          width: 915px;
          height: 240px;
          border: 1px solid var(--Gray-5, #e0e0e0);
        "
      >
        <div class="p-5 flex">
          <img
            :src="hotel.property.photoUrls[0]"
            alt=""
            style="width: 285px; height: 200px"
            class="mr-6"
          />
          <section style="max-height: 200px">
            <p class="font-medium text-xl" style="color: #1a1a1a">
              {{ hotel.property.name }}
            </p>
            <section style="margin-top: 10px; margin-bottom: 17px" class="flex">
              <Reviews
                :reviewScore="hotel.property.reviewScore"
                :reviewsCount="hotel.property.reviewCount"
              />
            </section>
            <p
              class=""
              style="
                max-height: 58px;
                height: 58px;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 400px;
                font-size: 13px;
              "
            >
              {{ hotel.accessibilityLabel }}
            </p>
            <button
              class="justify-center items-center rounded border border-blue-500 bg-blue-500 text-white"
              style="
                width: 137px;
                height: 40px;
                margin-top: 18px;
                margin-bottom: 24px;
              "
              @click="seeAvailabilityOfHotel(hotel)"
            >
              See availability
            </button>
          </section>
          <section
            class="text-end relative"
            style="flex-grow: 1; max-height: 200px"
          >
            <section class="absolute bottom-6 right-0 flex items-center">
              <p class="mr-2 text-[#EB5757] line-through">${{ 170 }}</p>
              <p class="font-semibold text-xl">
                ${{ hotel.property.priceBreakdown.grossPrice.value }}
              </p>
            </section>
            <p
              class="font-light text-sm absolute"
              style="color: #333; bottom: 0; width: 140px; right: 0"
            >
              Includes taxes and fees
            </p>
          </section>
        </div>
      </section>
    </div>
  </div>
  <section style="margin-top: 56px" class="flex justify-center">
    <div style="width: 297px; height: 40px" class="flex">
      <img
        src="../assets/Icons/leftarrow.png"
        alt=""
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
        style="
          margin-right: 8px;
          filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1));
          width: 40px;
          height: 40px;
        "
        class="rounded-md"
      />
      <template v-for="page in paginationButtons" :key="page">
        <button
          @click="changePage(page)"
          style="width: 40px; height: 40px"
          :class="{
            active: currentPage === page,
            notActive: currentPage !== page,
          }"
          class="rounded-md"
        >
          {{ page }}
        </button>
      </template>

      <img
        src="../assets/Icons/rightarrow.png"
        alt=""
        :disabled="currentPage === 1"
        @click="changePage(currentPage + 1)"
        style="
          margin-left: 8px;
          filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1));
          width: 40px;
          height: 40px;
        "
        class="rounded-md"
      />
    </div>
  </section>
</template>

<script setup>
import { useSearchDetailsStore } from "@/stores/SearchDetailsStore";

import { ref, computed, onMounted, watch } from "vue";
import { useHotelStore } from "@/stores/HotelStore";
import Reviews from "./Reviews.vue";

import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const searchDetailsStore = useSearchDetailsStore();
const hotelStore = useHotelStore();
const currentPage = ref(1);
const totalPages = ref(20);
const hotels = ref(searchDetailsStore.getHotels);
const isLoading = ref(searchDetailsStore.getLoadingStatus);

const fetchHotels = async () => {
  isLoading.value = true;
  await searchDetailsStore.fetchHotels();
  hotels.value = searchDetailsStore.getHotels;
  isLoading.value = false;
};

// console.log(JSON.parse(route.params.searchData));

watch(
  () => JSON.parse(route.params.searchData),
  async (newSearchData) => {
    // console.log("New Search Data: ", newSearchData);
    isLoading.value = true;
    await fetchHotels();
    isLoading.value = false;
  }
);
fetchHotels();
const changePage = async (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
  searchDetailsStore.setCurrenPage(page);
  isLoading.value = true;
  await fetchHotels();
  isLoading.value = false;
};

const paginationButtons = computed(() => {
  const buttons = [];
  const totalButtons = 3;

  if (totalPages.value <= totalButtons) {
    for (let i = 1; i <= totalPages.value; i++) {
      buttons.push(i);
    }
  } else {
    const start = Math.max(1, currentPage.value - 1);
    const end = Math.min(totalPages.value, start + totalButtons - 1);

    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }

    if (end < totalPages.value - 1) {
      buttons.push("...");
    }
    if (end != totalPages.value) buttons.push(totalPages.value);
  }
  // console.log(buttons);
  return buttons;
});

const seeAvailabilityOfHotel = (hotel) => {
  hotelStore.setselectedHotelData(hotel);

  router.push("/productDetails");
};

/*
todos 
1- add the discount section
2- add the offer style if exist 
*/
</script>

<style>
button.active {
  background-color: #2f80ed;
  color: #ffffff;
}
.notActive {
  color: #9e9e9e;
}
.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
