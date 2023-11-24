<template>
  <div class="fontStyle">
    <IconButton
      :textOnTheBtn="selectedDestinationName"
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
    <img src="@/assets/Icons/calendarIcon.svg" alt="" class="w-5 h-5 ml-3" />
    <VueDatePicker
      v-model="checkInDate"
      :placeholder="checkInDate != null ? checkInDate.value : 'Check in date'"
      class="p-2 rounded flex items-center font-normal gap-1.5"
      @click="getCheckIn"
      hide-input-icon
      :enable-time-picker="false"
    />
  </div>
  <div
    class="flex items-center rounded"
    style="width: 147px; height: 43px; color: #4f4f4f; background: #f2f2f2"
  >
    <img src="@/assets/Icons/calendarIcon.svg" alt="" class="w-5 h-5 ml-3" />
    <VueDatePicker
      v-model="checkOutDate"
      :placeholder="
        checkOutDate != null ? checkOutDate.value : 'Check out date'
      "
      class="p-2 rounded flex items-center font-normal gap-1.5"
      @click="getCheckOut"
      hide-input-icon
      :enable-time-picker="false"
    />
  </div>
  <IconButton
    :textOnTheBtn="'Guests'"
    :btnClass="'p-3 rounded h-11 w-36 flex items-center font-normal gap-1.5'"
    :bgOfBtn="'#F2F2F2'"
    :iconPath="require('@/assets/Icons/user-square.svg')"
  />
  <IconButton
    :textOnTheBtn="'Rooms'"
    :btnClass="'p-3 rounded h-11 w-36 flex items-center font-normal gap-1.5'"
    :bgOfBtn="'#F2F2F2'"
    :iconPath="require('@/assets/Icons/single_bed.svg')"
  />
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

const { heightFromTop } = defineProps(["heightFromTop"]);
const isDropdownOpen = ref(false);
const arrowDir = ref("down");
const selectedDestinationName = ref("Where are you going?");
const destinations = ref([]);
const checkInDate = ref(null);
const checkOutDate = ref(null);

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
  selectedDestinationName.value = destination.label;
  isDropdownOpen.value = false;
};
const getCheckIn = () => {
  console.log(checkInDate.value);
  return checkInDate.value;
};
const getCheckOut = () => {
  console.log(checkOutDate.value);
  return checkOutDate.value;
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
  font-size: 12px;
  padding: 0px;
  color: #4f4f4f;
  font-family: "Work Sans", sans-serif;
}
.dp__pointer.dp__input_readonly.dp__input.dp__input_reg::placeholder {
  color: #4f4f4f;
  opacity: 1;
  font-family: "Work Sans", sans-serif;
}
</style>
