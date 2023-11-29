<template>
  <Header
    :textColor="'black'"
    :notificationColor="'notification-black'"
    :showNavBar="true"
  />
  <div v-if="isLoading" class="text-lg p-5 text-center">Loading...</div>
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
        <section class="mt-6 flex ml-[100px] mr-[100px]">
          <div>
            <p class="font-medium text-3xl pt-10 text-[#1a1a1a]">
              <!-- {{ selectedHotel.property.name }} -->
            </p>
            <section class="flex mt-3 mb-3">
              <!-- <Reviews
                :reviewScore="selectedHotel.property.reviewScore"
                :reviewsCount="selectedHotel.property.reviewCount"
              /> -->
            </section>
            <section class="mb-8 flex">
              <img
                src="../assets/Icons/locationblue.svg"
                alt=" location icon"
                class="mr-[6px]"
              />
              <p class="text-sm text-[#333]">
                <!-- {{ hotelDetails.data.address }} -->
              </p>
            </section>
            <OverviewOfHotel />
          </div>
          <ExploreArea />
        </section>
        <div class="ml-[100px] mr-[100px]" id="available-rooms">
          <p class="text-2xl font-semibold mt-[40px] mb-[32px]">
            Available rooms
          </p>
          <Ad />
        </div>
      </div>
      <CovidAlert />
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
import { useHotelStore } from "@/stores/HotelStore";
import { ref } from "vue";
const activeTab = ref("overview"); // Initialize with 'overview'

const hotelStore = useHotelStore();
const selectedHotel = ref(hotelStore.getselectedHotelData);
const hotelDetails = ref(hotelStore.getHotelDetails);
const isLoading = ref(false);

const fetchHotel = async () => {
  try {
    await hotelStore.fetchHotelDetails();
    hotelDetails.value = hotelStore.getHotelDetails;
    localStorage.setItem(
      "hotelDetails",
      JSON.stringify(hotelStore.getHotelDetails)
    );
  } catch (error) {
    console.error("Error fetching hotel data:", error);
  } finally {
    isLoading.value = false;
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
//fetchHotel();

/*
todos 
1- change statics images -- couldn't find them from api 
2- add the room component
3- add the overview and rooms taps .. done 
4- go to available rooms when click on rooms .. done
4- clean the code and the styles  .. done
*/
</script>

<style></style>
