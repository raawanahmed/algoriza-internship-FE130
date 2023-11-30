<template >
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

      <PaymentDetails />
    </div>
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import CovidAlert from "@/components/CovidAlert.vue";
import PaymentDetails from "@/components/PaymentDetails.vue";
</script>

<style></style>
