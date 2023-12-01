<template>
  <Header
    :textColor="'black'"
    :notificationColor="'notification-black'"
    :showNavBar="false"
  />
  <main class="bg-[#f4f4f4] pb-[140px]">
    <div class="w-full mx-auto max-w-[1440px]">
      <p class="mx-[100px] text-[32px] font-semibold pt-[60px]">
        Secure your reservation
      </p>
      <CovidAlert class="mt-[30px]" />
      <div class="flex">
        <PaymentDetails class="mr-[30px]" />
        <section>
          <ReservedRoom
            :classOfCard="'w-[400px] h-[420px] rounded-md'"
            :classOfImg="'w-[400px] h-[180px] mb-5 rounded-t-md'"
            :showPriceAndDetilsBtn="false"
            :hotel="selectedHotel"
          />
          <PriceDetails />
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import CovidAlert from "@/components/CovidAlert.vue";
import PaymentDetails from "@/components/PaymentDetails.vue";
import ReservedRoom from "@/components/ReservedRoom.vue";
import PriceDetails from "@/components/PriceDetails.vue";
import { useHotelStore } from "@/stores/HotelStore";
import { ref } from "vue";
const hotelStore = useHotelStore();
const selectedHotel = ref(hotelStore.getselectedHotelData);
const isLoading = ref(true);
</script>

<style></style>
