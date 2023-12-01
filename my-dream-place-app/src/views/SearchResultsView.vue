<template>
  <div
    style="
      background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
      height: 200px;
    "
  >
    <Header
      :textColor="'white'"
      :notificationColor="'notification-white'"
      :showNavBar="true"
    />
    <section
      class="flex absolute left-1/2 transform -translate-x-1/2 translate-y-20 bg-white rounded-lg shadow-md p-3 mt-8 gap-3.5 width-[1030px] h-[64px]"
    >
      <SearchSection />
    </section>
  </div>
  <section class="w-full mx-auto max-w-[1440px]">
    <div class="grid grid-cols-4 m-[100px] gap-[30px]">
      <div>
        <SearchByName />
        <FilterBy />
        <Rating />
      </div>
      <div class="col-span-3 bg-white">
        <HotelsDetails />
      </div>
    </div>
  </section>
  <CovidAlert class="mt-[75px]"/>
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import SearchSection from "@/components/SearchSection.vue";
import CovidAlert from "@/components/CovidAlert.vue";
import Footer from "@/components/Footer.vue";
import SearchByName from "@/components/SearchByName.vue";
import FilterBy from "@/components/FilterBy.vue";
import Rating from "@/components/Rating.vue";
import HotelsDetails from "@/components/HotelsDetails.vue";
import { useSearchDetailsStore } from "@/stores/SearchDetailsStore";
import { ref } from "vue";
const searchDetailsStore = useSearchDetailsStore();
const selectedSortOption = ref("Sort by");

/*
toods 
1- add sort by component
2- handle the logic of sort by using api
*/
</script>

<style></style>
