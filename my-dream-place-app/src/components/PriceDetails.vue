<template>
  <div
    class="w-[400px] h-[217px] rounded-md mt-[30px] border-[1px] border-[#e0e0e0] bg-white" style="font-family: SF Pro Display, sans-serif"
  >
    <header class="p-[18px] font-medium text-base bg-[#85E0AB] rounded-t-md">
      <p>Price Details</p>
    </header>

    <section
      class="py-4 px-[18px] text-[#4F4F4F] text-sm border-b-[1px] border-b-[#e0e0e0]"
    >
      <div class="flex justify-between mb-3">
        <p>{{ noOfRooms }} room X {{ noOfDays }} nights</p>
        <p>${{ selectedHotel.property.priceBreakdown.excludedPrice.value }}</p>
      </div>
      <div class="flex justify-between">
        <p>Tax and service fees</p>
        <p>$ 0</p>
      </div>
    </section>
    <div class="flex justify-between py-6 px-[18px] font-medium text-lg">
      <p>Total</p>
      <p>${{ selectedHotel.property.priceBreakdown.excludedPrice.value }}</p>
    </div>
  </div>
</template>

<script setup>
import { useHotelStore } from "@/stores/HotelStore";
import { useSearchDetailsStore } from "@/stores/SearchDetailsStore";
import { ref } from "vue";
const hotelStore = useHotelStore();
const searchstore = useSearchDetailsStore();
const selectedHotel = ref(hotelStore.getselectedHotelData);
const noOfRooms = ref(searchstore.getSelectedRooms);
const noOfDays = ref(
  hotelStore.calcDifferenceInDays(
    selectedHotel.value.property.checkinDate,
    selectedHotel.value.property.checkoutDate
  )
);

// todo get the number of rooms and the dayes .. done

// Note I couldn't find tax and service fees in the api so I set it to 0
</script>

<style></style>
