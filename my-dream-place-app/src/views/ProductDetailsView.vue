<template>
  <Header
    :textColor="'black'"
    :notificationColor="'notification-black'"
    :showNavBar="true"
  />
  <div v-if="isLoading" class="loading-spinner">Loading...</div>
  <div v-else>
    <div style="width: 1440px; height: 500px" class="mx-auto">
      <section
        class="mt-6 flex"
        style="margin-left: 100px; margin-right: 100px"
      >
        <img
          src="../assets/Imgs/japan.png"
          alt=""
          style="width: 820px; height: 452px"
          class="mr-5"
        />
        <div>
          <img
            src="../assets/Imgs/greece.png"
            alt=""
            style="width: 400px; height: 218px"
          />
          <img
            src="../assets/Imgs/greece.png"
            alt=""
            style="width: 400px; height: 218px"
            class="mt-4"
          />
        </div>
      </section>
    </div>
    <section style="background: #f4f4f4">
      <div style="width: 1440px" class="mx-auto">
        <section class="mt-6 flex" style="margin-left: 100px; margin-right: 100px">
          <div>
            <p class="font-medium text-3xl pt-10" style="color: #1a1a1a">
              <!-- {{ selectedHotel.property.name }} -->
            </p>
            <section style="margin-top: 12px; margin-bottom: 12px" class="flex">
              <!-- <Reviews
              :reviewScore="selectedHotel.property.reviewScore"
              :reviewsCount="selectedHotel.property.reviewCount"
            /> -->
            </section>
            <section class="mb-8 flex">
              <img
                src="../assets/Icons/locationblue.svg"
                alt=""
                style="margin-right: 6px"
              />
              <p class="text-sm" style="color: #333">
                <!-- {{ hotelDetails.data.address }} -->
              </p>
            </section>
            <OverviewOfHotel />
          </div>
          <ExploreArea />
        </section>
        

        
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
import { useHotelStore } from "@/stores/HotelStore";
import { ref, onMounted, onUnmounted } from "vue";

const hotelStore = useHotelStore();
const selectedHotel = ref(hotelStore.getselectedHotelData);
const hotelDetails = ref(hotelStore.getHotelDetails);
const isLoading = ref(false); // Introduce loading state

const fetchHotel = async () => {
  try {
    await hotelStore.fetchHotelDetails();
    hotelDetails.value = hotelStore.getHotelDetails;
    localStorage.setItem(
      "hotelDetails",
      JSON.stringify(hotelStore.getHotelDetails)
    );
    console.log(hotelDetails.value.data);
  } catch (error) {
    console.error("Error fetching hotel data:", error);
  } finally {
    isLoading.value = false; // Set loading state to false
  }
};

onMounted(() => {
  // fetchHotel();
});

onUnmounted(() => {
  localStorage.removeItem("getHotelDetails");
});

console.log(selectedHotel.value);
console.log(hotelDetails.value);
</script>

<style>
.loading-spinner {
  /* Add styling for the loading spinner or indicator */
  text-align: center;
  padding: 20px;
  font-size: 18px;
}
</style>
