<template>
  <div v-if="isLoading" class="flex justify-center items-center h-[100vh]">
    <div class="spinner"></div>
  </div>
  <div v-else class="mx-auto">
    <Header
      :textColor="'black'"
      :notificationColor="'notification-black'"
      :showNavBar="true"
    />
    <VacationDetails />
    <DreamVacation />
    <Inspiration />
    <PopularHotels />
    <DownloadApp />
    <Explore />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import VacationDetails from "@/components/VacationDetails.vue";
import DreamVacation from "@/components/DreamVacation.vue";
import Inspiration from "@/components/Inspiration.vue";
import PopularHotels from "@/components/PopularHotels.vue";
import DownloadApp from "@/components/DownloadApp.vue";
import Explore from "@/components/Explore.vue";
import Footer from "@/components/Footer.vue";
import { useSearchDetailsStore } from "@/stores/SearchDetailsStore";
import { ref, watchEffect, onMounted } from "vue";
const searchDetailsStore = useSearchDetailsStore();
const isLoading = ref(true);
onMounted(async () => {
  await searchDetailsStore.getDestinations();
  isLoading.value = false;
});
</script>

<style scoped>

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
