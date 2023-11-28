<template>
  <div class="fontStyle">
    <IconButton
      :textOnTheBtn="
        searchData.selectedDestinationName != null
          ? searchData.selectedDestinationName
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
          v-if="destination.city_name != ''"
          @click="selectDestination(destination)"
          class="block w-full p-2 border-b-2"
        >
          {{ destination.city_name }}
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
      v-model="searchData.selectedCheckinDate"
      :placeholder="
        searchData.selectedCheckinDate != null
          ? searchData.selectedCheckinDate
          : 'Check in date'
      "
      class="rounded flex items-center font-normal"
      @update:model-value="setCheckin"
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
      v-model="searchData.selectedCheckoutDate"
      :placeholder="
        searchData.selectedCheckoutDate != null
          ? searchData.selectedCheckoutDate
          : 'Check out date'
      "
      class="rounded flex items-center font-normal"
      @update:model-value="setCheckout"
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
      v-model="searchData.selectedGuests"
      type="number"
      class="w-full rounded p-3 pl-10 input-field outline-none"
      style="background: #f2f2f2; height: 44px; font-size: 13px"
      :placeholder="
        searchData.selectedGuests != null ? searchData.selectedGuests : 'Guests'
      "
      @input="setGuests"
    />
  </div>

  <div class="relative rounded h-11 w-36 flex items-center font-normal">
    <span class="absolute ml-3">
      <img src="@/assets/Icons/single_bed.svg" alt="icon" />
    </span>
    <input
      v-model="searchData.selectedRooms"
      type="number"
      class="w-full rounded p-3 pl-10 input-field outline-none"
      style="background: #f2f2f2; height: 44px; font-size: 13px"
      :placeholder="
        searchData.selectedRooms != null ? searchData.selectedRooms : 'Rooms'
      "
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
import IconButton from "./IconButton.vue";
import router from "@/router";
import { ref, reactive } from "vue";
import { useSearchDetailsStore } from "@/stores/SearchDetailsStore";

const { heightFromTop } = defineProps(["heightFromTop"]);
const isDropdownOpen = ref(false);
const arrowDir = ref("down");

const searchDetailsStore = useSearchDetailsStore();
const destinations = ref(searchDetailsStore.getDestinations());
const searchData = reactive({
  selectedDestinationId: searchDetailsStore.getSelectedDestinationId,
  selectedDestinationName: searchDetailsStore.getSelectedDestinationName,
  selectedCheckinDate: searchDetailsStore.getSelectedCheckinDate,
  selectedCheckoutDate: searchDetailsStore.getSelectedCheckoutDate,
  selectedGuests: searchDetailsStore.getSelectedGuests,
  selectedRooms: searchDetailsStore.getSelectedRooms,
});

const selectDestination = (destination) => {
  searchDetailsStore.setDestinationId(destination.dest_id);
  searchDetailsStore.setDestinationName(destination.city_name);
  searchDetailsStore.setSearchType(destination.search_type);
  searchDetailsStore.setHotelsCount(destination.nr_hotels);
  searchData.selectedDestinationName = destination.city_name;
  isDropdownOpen.value = false;
};
const setCheckin = (date) => {
  searchDetailsStore.setCheckinDate(date);
};
const setCheckout = (date) => {
  searchDetailsStore.setCheckoutDate(date);
};
const setGuests = (guests) => {
  searchDetailsStore.setGuests(guests.data);
};
const setRooms = (rooms) => {
  searchDetailsStore.setRooms(rooms.data);
};
const goSearch = () => {
  if (
    !searchData.selectedCheckinDate ||
    !searchData.selectedCheckoutDate ||
    !searchData.selectedGuests ||
    !searchData.selectedRooms
  ) {
    alert("Please fill in all fields before searching.");
    return;
  }
  searchDetailsStore.setSeachDataToStorage(searchData);
  searchDetailsStore.fetchHotels();

  router.push("/searchResults");
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  arrowDir.value = arrowDir.value === "down" ? "up" : "down";
};
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
