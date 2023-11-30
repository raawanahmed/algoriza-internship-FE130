<template>
  <Header
    :textColor="'black'"
    :notificationColor="'notification-black'"
    :showNavBar="false"
  />
  <main class="bg-[#f4f4f4] h-[1820px]">
    <div class="w-full flex mx-auto font-semibold max-w-[1440px]">
      <p class="mx-[100px] text-[32px] mt-[60px]">
        Secure your reservation
      </p>
    </div>
    <CovidAlert class="mt-[30px]" />
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import CovidAlert from "@/components/CovidAlert.vue";
</script>

<style></style>
