<template>
  <Header
    :textColor="'black'"
    :notificationColor="'notification-black'"
    :showNavBar="true"
  />
  <section class="bg-[#F4F4F4]">
    <div class="mx-[205px]">
      <p class="pt-[75px] font-semibold text-[32px]">My trips</p>
      <div v-if="hotelsOfreservedRooms.length > 0">
        <div v-for="hotel in hotelsOfreservedRooms" :key="hotel.hotel_id">
          <ReservedRoom
            :classOfCard="'w-[1030px] h-[240px] flex py-5 pl-5 pl-[24px] rounded-[5px]'"
            :classOfImg="'w-[285px] h-[200px]'"
            class="mt-[28px]"
            :showPriceAndDetilsBtn="true"
            :hotel="hotel"
          />
        </div>
      </div>
      <div v-else class="pt-[75px] font-medium text-[24px] text-center">
        <p>There are no trips</p>
      </div>
    </div>
    <CovidAlert class="mt-[75px]" />
    <Footer />
  </section>
</template>

<script setup>
import Header from "@/components/Header.vue";
import CovidAlert from "@/components/CovidAlert.vue";
import Footer from "@/components/Footer.vue";
import ReservedRoom from "@/components/ReservedRoom.vue";
import { useHotelsOfreservedRoomsStore } from "@/stores/ReservedRoomsStore";
import { ref, watchEffect } from "vue";
const hotelsOfreservedRoomsStore = useHotelsOfreservedRoomsStore();
const hotelsOfreservedRooms = ref([]);
watchEffect(() => {
  hotelsOfreservedRooms.value =
    hotelsOfreservedRoomsStore.gethotelsOfreservedRooms;
});
</script>

<style></style>
