<template>
  <div class="mx-auto">
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

</script>
