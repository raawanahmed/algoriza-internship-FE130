<template>
  <div
    style="
      background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
      height: 200px;
    "
  >
    <Header :textColor="'white'" :notificationColor="'notification-white'" :showNavBar="true" />
    <section
      class="flex absolute left-1/2 transform -translate-x-1/2 translate-y-20 bg-white rounded-lg shadow-md p-3 mt-8 gap-3.5"
      style="width: 1030px; height: 64px"
    >
      <SearchSection />
    </section>
  </div>
  <CovidAlert />
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import SearchSection from "@/components/SearchSection.vue";
import CovidAlert from "@/components/CovidAlert.vue";
import Footer from "@/components/Footer.vue";
</script>

<style></style>
