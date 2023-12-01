<template>
  <main class="w-[400px] h-[500px] rounded-[10px] bg-white" style="font-family: SF Pro Display, sans-serif">
    <div class="px-[80px] py-[50px]">
      <div
        class="w-[240px] h-[200px] rounded-[10px] px-10 py-5"
        style="background: rgba(111, 207, 151, 0.2)"
      >
        <img
          src="../assets/Imgs/success.png"
          alt="success image"
          class="w-[160px] h-[160px]"
        />
      </div>
    </div>
    <div class="px-6 text-center">
      <p class="text-xl font-semibold">Booking Successful</p>
      <p class="text-[#4F4F4F] mt-3 text-base">
        Congratulations your reservation has been made. You will be notified 2
        days prior the date.
      </p>
      <button
        class="inline-flex px-[18px] py-3 justify-center items-center text-[15px] rounded-md border-blue-500 bg-blue-500 text-white w-[352px] h-[44px] mt-[45px] mb-5"
        @click="viewTrip"
      >
        View Trip
      </button>
    </div>
  </main>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const viewTrip = () => {
  router.push("/myTrips");
};
</script>

<style></style>
