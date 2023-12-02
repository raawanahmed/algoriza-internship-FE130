<template>
  <main style="font-family: SF Pro Display, sans-serif">
    <div v-if="isHotelsLoading" class="loading-indicator">
      <div class="spinner"></div>
    </div>
    <div v-if="isHotelsLoading == false">
      <div class="col-span-3 bg-white">
        <div class="flex relative">
          <p class="font-semibold text-2xl">
            {{ destName }} : {{ destCount }} search results found
          </p>
          <select
            class="absolute right-0 w-[190px] h-[48px] py-2 px-3 border-[1px] border-[#BDBDBD] rounded-md pr-3 flex mr-[10px]"
            v-model="selectedSortOption"
            @change="serachHotelsBySortOption"
          >
            <option disabled selected hidden class="text-[#828282]">
              Sort by
            </option>
            <option
              v-for="option in sortByOptions"
              :key="option.title"
              :value="option.title"
            >
              {{ option.title }}
            </option>
          </select>
        </div>
      </div>
      <p
        v-if="filteredHotels.length === 0"
        class="text-[#ff3636] text-center mt-[50px] text-2xl"
      >
        {{ msgToDisplay }}
      </p>
    </div>

    <div v-for="hotel in filteredHotels" :key="hotel.hotel_id">
      <div v-if="isHotelsLoading == false">
        <section
          class="mt-6 rounded border-[1px] border-[#e0e0e0] w-[915px] h-[240px]"
        >
          <div class="p-5 flex">
            <img
              :src="hotel.property.photoUrls[0]"
              alt="hotel photo"
              class="mr-6 w-[285px] h-[200px]"
            />
            <section style="max-height: 200px">
              <p class="font-medium text-xl text-[#1a1a1a]">
                {{ hotel.property.name }}
              </p>
              <section class="flex mt-[10px] mb-[17px]">
                <Reviews
                  :reviewScore="hotel.property.reviewScore"
                  :reviewsCount="hotel.property.reviewCount"
                />
              </section>
              <p
                class="max-h-[58px] h-[58px] overflow-hidden max-w-[400px] text-[13px] text-ellipsis"
              >
                {{ hotel.accessibilityLabel }}
              </p>
              <button
                class="justify-center items-center rounded border border-blue-500 bg-blue-500 text-white w-[137px] h-[40px] mt-[18px] mb-[24px]"
                @click="seeAvailabilityOfHotel(hotel)"
              >
                See availability
              </button>
            </section>
            <section
              class="text-end relative max-h-[200px] flex-grow-[1]"
              style="flex-grow: 1; max-height: 200px"
            >
              <section class="absolute bottom-6 right-0 flex items-center">
                <p class="mr-2 text-[#EB5757] line-through">${{ 170 }}</p>
                <p class="font-semibold text-xl">
                  ${{ hotel.property.priceBreakdown.grossPrice.value }}
                </p>
              </section>
              <p
                class="font-light text-sm absolute bottom-0 w-[140px] right-0 text-[#333]"
              >
                Includes taxes and fees
              </p>
            </section>
          </div>
        </section>
      </div>
    </div>
    <section class="flex justify-center mt-[56px]">
      <div class="flex w-[297px] h-[40px]">
        <img
          src="../assets/Icons/leftarrow.png"
          alt="left arrow icon"
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
          style="filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1))"
          class="rounded-md mr-2 w-[40px] h-[40px]"
        />
        <template v-for="page in paginationButtons" :key="page">
          <button
            @click="changePage(page)"
            :class="{
              active: currentPage === page,
              notActive: currentPage !== page,
            }"
            class="rounded-md w-[40px] h-[40px]"
          >
            {{ page }}
          </button>
        </template>

        <img
          src="../assets/Icons/rightarrow.png"
          alt="right arrow icon"
          :disabled="currentPage === 1"
          @click="changePage(currentPage + 1)"
          style="filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1))"
          class="rounded-md ml-2 w-[40px] h-[40px]"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import Reviews from "./Reviews.vue";
import { useSearchDetailsStore } from "@/stores/SearchDetailsStore";
import { ref, computed, onMounted, watch, watchEffect } from "vue";
import { useHotelStore } from "@/stores/HotelStore";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const searchDetailsStore = useSearchDetailsStore();
const destName = ref(searchDetailsStore.getSelectedDestinationName);
const destCount = ref(searchDetailsStore.getHotelsCountOfDist);
const hotelStore = useHotelStore();
const currentPage = ref(1);
const hotels = ref(searchDetailsStore.getHotels);
const isHotelsLoading = ref(searchDetailsStore.getIsHotelsLoading);
const totalProperties = ref(-1);
const returnedHotels = ref(null);
const totalPages = ref(20);
const selectedSortOption = ref("Sort by");
const sortByOptions = ref(searchDetailsStore.getSortByOptions());
const rangePrice = ref(searchDetailsStore.getSelectedRangePrice);
const selectedRating = ref(searchDetailsStore.getSelectedRating);
const enteredName = ref(searchDetailsStore.getEnteredName);
const msgToDisplay = ref("");

const fetchHotels = async () => {
  isHotelsLoading.value = true;
  returnedHotels.value = await searchDetailsStore.fetchHotels();
  hotels.value = searchDetailsStore.getHotels;
  destName.value = searchDetailsStore.getSelectedDestinationName;
  destCount.value = searchDetailsStore.getHotelsCountOfDist;
  isHotelsLoading.value = false;
  totalPages.value = Math.ceil(+destCount.value / 20);
};

watchEffect(async () => {
  sortByOptions.value = await searchDetailsStore.getSortByOptions();
});

const serachHotelsBySortOption = async () => {
  isHotelsLoading.value = true;
  await fetchHotels();
  isHotelsLoading.value = false;
};

watch(
  () => JSON.parse(route.params.searchData),
  async (newSearchData) => {
    totalProperties.value = -1;
    // console.log("New Search Data: ", newSearchData);
    isHotelsLoading.value = true;
    await fetchHotels();
    isHotelsLoading.value = false;
  }
);

// watch(() => rangePrice, async () => {
//   console.log(rangePrice.value);
//   isHotelsLoading.value = true;
//   await fetchHotels();
//   isHotelsLoading.value = false;
// });

watchEffect(async () => {
  console.log(rangePrice.value);
  isHotelsLoading.value = true;
  await fetchHotels();
  isHotelsLoading.value = false;
});

watch(
  () => searchDetailsStore.getSelectedRating,
  (newRating) => {
    selectedRating.value = newRating;
    console.log("Selected Rating Changed:", newRating);
  }
);

watch(
  () => searchDetailsStore.getEnteredName,
  (newName) => {
    enteredName.value = newName;
    console.log("Entered Name:", newName);
  }
);
const generateRange = (num) =>
  Array.from({ length: Math.ceil(num / 2) }, (_, index) => index + 1);

const filteredHotels = computed(() => {
  if (selectedRating.value) {
    msgToDisplay.value = "There are no hotels in this page with this rating";
    return hotels.value.filter(
      (hotel) =>
        generateRange(hotel.property.reviewScore).length ===
        selectedRating.value
    );
  } else if (enteredName.value) {
    msgToDisplay.value = "There are no hotels contains this name";
    return hotels.value.filter((hotel) =>
      hotel.property.name
        .toLowerCase()
        .includes(enteredName.value.toLowerCase())
    );
  } else return hotels.value;
});
const changePage = async (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
  searchDetailsStore.setCurrenPage(page);
  isHotelsLoading.value = true;
  await fetchHotels();
  isHotelsLoading.value = false;
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

<style scoped>
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
