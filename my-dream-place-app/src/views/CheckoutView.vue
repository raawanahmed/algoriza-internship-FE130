<template>
  <Header
    :textColor="'black'"
    :notificationColor="'notification-black'"
    :showNavBar="false"
  />
  <main style="background: #f4f4f4; height: 1820px">
    <div style="max-width: 1440px" class="w-full flex mx-auto font-semibold">
      <p style="margin-left: 100px; font-size: 32px; margin-top: 60px">
        Secure your reservation
      </p>
    </div>
    <CovidAlert />
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import CovidAlert from "@/components/CovidAlert.vue";
</script>

<style></style>
