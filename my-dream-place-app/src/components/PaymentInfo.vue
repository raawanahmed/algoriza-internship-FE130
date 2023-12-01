<template>
  <div class="w-[810px] h-[423px] bg-white rounded-md mt-[30px]" style="font-family: SF Pro Display, sans-serif">
    <header
      class="py-[18px] px-6 flex bg-[#F2C94C] font-medium items-center rounded-t-md"
    >
      <p class="mr-[18px] text-lg">Important information about your booking</p>
    </header>
    <section class="bg-white px-6">
      <div class="py-8 text-[#333] text-[15px]">
        <p>
          1. This rate is non-refundable. If you change or cancel your booking
          you will not get a refund or credit to use for a future stay.
        </p>
        <p>2. Stay extensions will require a new reservation.</p>
        <p>3. Front desk staff will greet guests on arrival</p>
        <p>
          4. No refunds will be issued for late check-in or early check-out.
        </p>
      </div>
      <p class="text-[#4F4F4F]">
        By clicking the button below, I acknowledge that I have reviewed the
        Privacy Statement and have reviewd and accept the Rules and Restrictions
        and Terms of Use.
      </p>
      <button
        class="inline-flex px-[18px] py-3 justify-center items-center text-[15px] rounded border border-blue-500 bg-blue-500 text-white w-[160px] h-[44px] my-[20px]"
        @click="completePayment"
      >
        Complete Booking
      </button>
      <div class="flex">
        <img
          src="../assets/Icons/lock-circle.svg"
          alt="lock circle icon"
          class="mr-2"
        />
        <p class="text-[#4F4F4F]">
          We use secure transmission and encrypted storage to protect your
          personal information
        </p>
      </div>
    </section>
    <section v-if="paymentCompleted">
      <BookingModal />
    </section>
  </div>
</template>

<script setup>
import BookingModal from "./BookingModal.vue";
import { useHotelStore } from "@/stores/HotelStore";
import { useHotelsOfreservedRoomsStore } from "@/stores/ReservedRoomsStore";
import { ref } from "vue";

const hotelStore = useHotelStore();
const hotelsOfreservedRoomsStore = useHotelsOfreservedRoomsStore();

const paymentCompleted = ref(false);
const completePayment = () => {
  const hotel = hotelStore.getselectedHotelData;
  hotelsOfreservedRoomsStore.addHotelOfReservedRoom(hotel);
  paymentCompleted.value = true;
};
// todo highlight texts and adjust the spacing
</script>

<style></style>
