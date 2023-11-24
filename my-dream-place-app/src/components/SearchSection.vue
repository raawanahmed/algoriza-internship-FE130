<template>
  <section
    class="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 bg-white rounded-lg shadow-md p-3 mt-8 gap-3.5 flex fontStyle"
    style="width: 1030px; height: 64px; top: 480px"
  >
    <div>
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

    <IconButton
      :textOnTheBtn="'Check in date'"
      :btnClass="'p-3 rounded h-11 w-36 flex items-center font-normal gap-1.5'"
      :bgOfBtn="'#F2F2F2'"
      :iconPath="require('@/assets/Icons/calendarIcon.svg')"
    />
    <IconButton
      :textOnTheBtn="'Check out date'"
      :btnClass="'p-3 rounded h-11 w-36 flex items-center font-normal gap-1.5'"
      :bgOfBtn="'#F2F2F2'"
      :iconPath="require('@/assets/Icons/calendarIcon.svg')"
    />
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
    >
      Search
    </button>
  </section>
</template>

<script setup>
import { ref } from "vue";
import IconButton from "./IconButton.vue";
import axios from "axios";

const isDropdownOpen = ref(false);
const arrowDir = ref("down");
const selectedDestinationName = ref("Where are you going?");
const destinations = ref([]);

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
    console.log(destinations.value);
  } catch (error) {
    console.error(error);
  }
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  arrowDir.value == "down"
    ? (arrowDir.value = "up")
    : (arrowDir.value = "down");
  console.log(isDropdownOpen.value);
};

const selectDestination = (destination) => {
  selectedDestinationName.value = destination.label;
  isDropdownOpen.value = false;
};

fetchDestinations();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
.fontStyle {
  font-family: "Poppins", sans-serif;
}
</style>
