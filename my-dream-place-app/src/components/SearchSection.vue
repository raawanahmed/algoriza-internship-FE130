<template>
  <div class="fontStyle">
    <IconButton
      :textOnTheBtn="
        selectedDestinationName != null
          ? selectedDestinationName
          : 'Where are you going?'
      "
      :btnClass="'p-3 rounded h-11 w-52 flex items-center font-normal gap-1.5 relative'"
      :bgOfBtn="'#F2F2F2'"
      :iconPath="require('@/assets/Icons/location.svg')"
      :arrowDir="require(`@/assets/Icons/arrow-${arrowDir}.svg`)"
      @click="toggleDropdown"
    />
    <div
      v-if="isDropdownOpen"
      class="absolute mt-1 w-52 bg-white shadow-md rounded-md text-xs"
      style="background: #f2f2f2"
    >
      <div v-for="destination in destinations" :key="destination.dest_id">
        <button
          @click="selectDestination(destination)"
          class="block w-full p-2 border-b-2"
        >
          {{ destination.label }}
        </button>
      </div>
    </div>
  </div>

  <div
    class="flex items-center rounded"
    style="width: 147px; height: 43px; color: #4f4f4f; background: #f2f2f2"
  >
    <img
      src="@/assets/Icons/calendarIcon.svg"
      alt=""
      class="w-5 h-5 ml-3 mr-1.5"
    />
    <VueDatePicker
      v-model="checkInDate"
      :placeholder="checkInDate != null ? checkInDate.value : 'Check in date'"
      class="rounded flex items-center font-normal"
      @update:model-value="setCheckIn"
      hide-input-icon
      :enable-time-picker="false"
      model-type="dd.MM.yyyy"
    />
  </div>
  <div
    class="flex items-center rounded"
    style="width: 147px; height: 43px; color: #4f4f4f; background: #f2f2f2"
  >
    <img
      src="@/assets/Icons/calendarIcon.svg"
      alt=""
      class="w-5 h-5 ml-3 mr-1.5"
    />
    <VueDatePicker
      v-model="checkOutDate"
      :placeholder="
        checkOutDate != null ? checkOutDate.value : 'Check out date'
      "
      class="rounded flex items-center font-normal"
      @update:model-value="setCheckOut"
      hide-input-icon
      :enable-time-picker="false"
      model-type="dd.MM.yyyy"
    />
  </div>
  <div class="relative rounded h-11 w-36 flex items-center font-normal">
    <span class="absolute ml-3">
      <img src="@/assets/Icons/user-square.svg" alt="icon" class="icon" />
    </span>
    <input
      v-model="guests"
      type="number"
      class="w-full rounded p-3 pl-10 input-field outline-none"
      style="background: #f2f2f2; height: 44px; font-size: 13px"
      :placeholder="guests != null ? guests : 'Guests'"
      @input="setGuests"
    />
  </div>

  <div class="relative rounded h-11 w-36 flex items-center font-normal">
    <span class="absolute ml-3">
      <img src="@/assets/Icons/single_bed.svg" alt="icon" />
    </span>
    <input
      v-model="rooms"
      type="number"
      class="w-full rounded p-3 pl-10 input-field outline-none"
      style="background: #f2f2f2; height: 44px; font-size: 13px"
      :placeholder="rooms != null ? rooms : 'Rooms'"
      @input="setRooms"
    />
  </div>
  <button
    class="inline-flex px-10 py-2 justify-center items-center gap-2 rounded border border-blue-500 bg-blue-500 text-white w-36 h-11 font-medium text-sm"
    @click="goSearch"
  >
    Search
  </button>
</template>

<script setup>
import { ref } from "vue";
import IconButton from "./IconButton.vue";
import axios from "axios";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import router from "@/router";
import { useSearchStore } from "@/stores/SearchStore";
const searchStore = useSearchStore();
const { heightFromTop } = defineProps(["heightFromTop"]);
const isDropdownOpen = ref(false);
const arrowDir = ref("down");
const destinations = ref([]);

const selectedDestinationName = ref(searchStore.getSelectedDist);
const checkInDate = ref(searchStore.getSelectedDates.checkInDate);
const checkOutDate = ref(searchStore.getSelectedDates.checkOutDate);
const guests = ref(searchStore.getSelectedGuests);
const rooms = ref(searchStore.getSelectedRooms);

const fetchDestinations = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
    params: { query: "Egypt" },
    headers: {
      "X-RapidAPI-Key": "5207885cbdmshf5ef7933079e239p1299b7jsn81996ac3e431",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    destinations.value = response.data.data;
    // console.log(destinations.value);
  } catch (error) {
    console.error(error);
  }
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  arrowDir.value == "down"
    ? (arrowDir.value = "up")
    : (arrowDir.value = "down");
  // console.log(isDropdownOpen.value);
};
const selectDestination = (destination) => {
  searchStore.setDistination(destination);
  isDropdownOpen.value = false;
};
const setCheckIn = (date) => {
  searchStore.setCheckInDate(date);
};
const setCheckOut = (date) => {
  searchStore.setCheckOutDate(date);
};
const setGuests = (guests) => {
  searchStore.setGuests(guests.data);
};
const setRooms = (rooms) => {
  searchStore.setRooms(rooms.data);
};
const goSearch = () => {
  router.push("/searchResults");
};
//fetchDestinations();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Work+Sans:wght@100;400&display=swap");
.fontStyle {
  font-family: "Work Sans", sans-serif;
}

.dp__pointer.dp__input_readonly.dp__input.dp__input_reg {
  border: 0px;
  background: #f2f2f2;
  font-size: 13px;
  padding: 0px;
  color: #4f4f4f;
  font-family: "Work Sans", sans-serif;
}
.dp__pointer.dp__input_readonly.dp__input.dp__input_reg::placeholder {
  color: #4f4f4f;
  opacity: 1;
  font-family: "Work Sans", sans-serif;
}
.input-field::placeholder {
  font-family: "Work Sans", sans-serif;
  color: #4f4f4f;
  opacity: 1;
}
</style>
