<template>
  <Header
    :textColor="'black'"
    :notificationColor="'notification-black'"
    :showNavBar="true"
  />
  <div v-if="isLoading" class="flex justify-center items-center h-[100vh]">
    <div class="spinner"></div>
  </div>
  <div v-else>
    <div class="mx-auto w-[1440px] h-[500px]">
      <section class="mt-6 flex ml-[100px] mr-[100px]">
        <img
          src="../assets/Imgs/kitchen.png"
          alt="kitchen image"
          class="mr-5 w-[820px] h-[452px]"
        />
        <div>
          <img
            src="../assets/Imgs/garden1.png"
            alt="garden image"
            class="w-[400px] h-[218px]"
          />
          <img
            src="../assets/Imgs/garden2.png"
            alt="garden image"
            class="mt-4 w-[400px] h-[218px]"
          />
        </div>
      </section>
      <div class="text-base ml-[100px] mr-[100px] mt-[30px] text-[#333]">
        <button
          @click="setActiveTab('overview')"
          :class="{
            'border-b-[3px] border-b-[#2F80ED]': activeTab === 'overview',
          }"
          class="p-[10px] pb-[7px] mr-[22px]"
        >
          Overview
        </button>
        <button
          @click="goToAvailableRooms"
          :class="{
            'border-b-[3px] border-b-[#2F80ED]': activeTab === 'rooms',
          }"
          class="p-[10px] pb-[7px]"
        >
          Rooms
        </button>
      </div>
    </div>
    <section class="bg-[#f4f4f4]">
      <div class="mx-auto w-[1440px]">
        <section class="mt-6 flex ml-[100px] mr-[100px] ">
          <div>
            <p class="font-medium text-3xl pt-10 text-[#1a1a1a]">
              {{ selectedHotel.property.name }}
            </p>
            <section class="flex mt-3 mb-3">
              <Reviews
                :reviewScore="selectedHotel.property.reviewScore"
                :reviewsCount="selectedHotel.property.reviewCount"
              />
            </section>
            <section class="mb-8 flex">
              <img
                src="../assets/Icons/locationblue.svg"
                alt=" location icon"
                class="mr-[6px]"
              />
              <p class="text-sm text-[#333]">
                {{ hotelDetails.data.address }}
              </p>
            </section>
            <OverviewOfHotel />
          </div>
          <ExploreArea
            :latitude="hotelDetails.data.latitude"
            :longitude="hotelDetails.data.longitude"
          />
        </section>
        <div class="ml-[100px] mr-[100px]" id="available-rooms">
          <p class="text-2xl font-semibold mt-[40px] mb-[32px]">
            Available rooms
          </p>
          <section class="flex flex-wrap">
            <Ad class="mr-[15px]" />
            <div
              class="flex w-[400px] mr-[12px] mb-[15px]"
              v-for="block in blocksOfHotel"
              :key="block.room_id"
            >
              <!-- hotelDetails.data.rooms[block.room_id].bed_configuration[0].bed_types[0] -->
              <RoomDetails
                :imgPath="getImageOfHotel(block.room_id)"
                :roomDescription="'test'"
                :roomData="getBedTypes(block.room_id)"
              />
            </div>
          </section>
        </div>
      </div>
      <CovidAlert class="mt-[75px]" />
      <Footer />
    </section>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import CovidAlert from "@/components/CovidAlert.vue";
import Footer from "@/components/Footer.vue";
import OverviewOfHotel from "@/components/OverviewOfHotel.vue";
import Reviews from "@/components/Reviews.vue";
import ExploreArea from "@/components/ExploreArea.vue";
import Ad from "@/components/Ad.vue";
import RoomDetails from "@/components/RoomDetails.vue";
import { useHotelStore } from "@/stores/HotelStore";
import { ref, onMounted } from "vue";
const activeTab = ref("overview");

const hotelStore = useHotelStore();
const selectedHotel = ref(hotelStore.getselectedHotelData);
const hotelDetails = ref(hotelStore.getHotelDetails);
const isLoading = ref(true);
const blocksOfHotel = ref([]);

const fetchHotel = async () => {
  try {
    hotelStore.setIsHotelLoading(true);
    await hotelStore.fetchHotelDetails();
    hotelDetails.value = hotelStore.getHotelDetails;
    blocksOfHotel.value = hotelDetails.value.data.block;
    localStorage.setItem(
      "hotelDetails",
      JSON.stringify(hotelStore.getHotelDetails)
    );
  } catch (error) {
    console.error("Error fetching hotel data:", error);
  } finally {
    isLoading.value = false;
    hotelStore.setIsHotelLoading(false);
  }
};
onMounted(() => {
  fetchHotel();
});
const getBedTypes = (roomId) => {
  const room = hotelDetails.value.data.rooms[roomId];
  if (
    room &&
    room.bed_configurations &&
    room.bed_configurations[0] &&
    room.bed_configurations[0].bed_types
  ) {
    // console.log(room.bed_configurations[0].bed_types[0]);
    return room.bed_configurations[0].bed_types[0];
  } else {
    return null;
  }
};

const getImageOfHotel = (roomId) => {
  const room = hotelDetails.value.data.rooms[roomId];
  if (room && room.photos && room.photos[0]) {
    // console.log(room.photos[0].url_original);
    return room.photos[0].url_original;
  } else {
    return null;
  }
};

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const goToAvailableRooms = () => {
  setActiveTab("rooms");
  const availableRoomsSection = document.getElementById("available-rooms");
  if (availableRoomsSection) {
    availableRoomsSection.scrollIntoView({ behavior: "smooth" });
  }
};

/*
todos 
1- change statics images -- couldn't find them from api 
2- add the room component .. done
3- add the overview and rooms taps .. done 
4- go to available rooms when click on rooms .. done
4- clean the code and the styles  .. done
*/
</script>

<style></style>
