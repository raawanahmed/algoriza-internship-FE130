<template>
  <div v-for="hotel in hotels" :key="hotel.hotel_id">
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
            <div
              v-for="index in generateRange(hotel.property.reviewScore)"
              :key="index"
              class="flex"
            >
              <img src="../assets/Icons/star.svg" alt="" />
            </div>
            <p style="color: #4f4f4f" class="text-sm">
              ({{ hotel.property.reviewCount }} Reviews)
            </p>
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
          >
            See availability
          </button>
        </section>
        <section
          class="text-end relative"
          style="flex-grow: 1; max-height: 200px"
        >
          <section class="absolute bottom-6 right-0">
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

      <!-- Display pagination buttons -->
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
import axios from "axios";
import { useSearchStore } from "@/stores/SearchStore";
import { ref, computed, onMounted } from "vue";

const searchStore = useSearchStore();
const checkinDate = ref(searchStore.getFormattedCheckinDate());
const checkoutDate = ref(searchStore.getFormattedCheckoutDate());
const destinationID = ref(searchStore.getselectedDistID);
const adults = ref(searchStore.getSelectedGuests);
const rooms = ref(searchStore.getSelectedRooms);
const searchType = ref(searchStore.getSearchType);
const currentPage = ref(1);
const totalPages = ref(20);
const generateRange = (num) =>
  Array.from({ length: Math.ceil(num / 2) }, (_, index) => index + 1);
const hotels = ref([]);

const fetchHotels = async () => {
  console.log(
    destinationID.value,
    searchType.value,
    checkinDate.value,
    checkoutDate.value,
    adults.value,
    rooms.value,
    currentPage.value
  );
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: destinationID.value,
      search_type: searchType.value,
      arrival_date: "2023-12-01",
      departure_date: "2023-12-09",
      adults: adults.value,
      children_age: "0,17",
      room_qty: rooms.value,
      page_number: currentPage.value,
      languagecode: "en-us",
      currency_code: "usd",
    },
    headers: {
      "X-RapidAPI-Key": "c6f8dbff25mshb0322cd8edf15ffp1d087bjsnc1c70576c0f0",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.data.hotels);
    hotels.value = response.data.data.hotels;
    console.log(hotels.value);
    // totalPages.value = Math.ceil(
    //   response.data.meta.total / hotelsPerPage.value
    // );
  } catch (error) {
    console.error(error);
  }
};

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
  fetchHotels();
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

onMounted(() => {
  fetchHotels();
});
</script>

<style>
button.active {
  background-color: #2f80ed;
  color: #ffffff;
}
.notActive {
  color: #9e9e9e;
}
</style>
