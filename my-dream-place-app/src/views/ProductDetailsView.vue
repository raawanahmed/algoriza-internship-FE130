<template>
  <Header
    :textColor="'black'"
    :notificationColor="'notification-black'"
    :showNavBar="true"
  />
  <div
    style="
      width: 1440px;
      height: 500px;
      background: linear-gradient(180deg, rgba(244, 244, 244, 0) 0%, #fff 100%);
    "
    class="mx-auto"
  >
    <section class="mt-6 flex" style="margin-left: 100px; margin-right: 100px">
      <img
        src="../assets/Imgs/japan.png"
        alt=""
        style="width: 820px; height: 452px"
        class="mr-5"
      />
      <div>
        <img
          src="../assets/Imgs/greece.png"
          alt=""
          style="width: 400px; height: 218px"
        />
        <img
          src="../assets/Imgs/greece.png"
          alt=""
          style="width: 400px; height: 218px"
          class="mt-4"
        />
      </div>
    </section>
  </div>
  <div style="background: #f4f4f4"></div>
  <CovidAlert />
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import CovidAlert from "@/components/CovidAlert.vue";
import Footer from "@/components/Footer.vue";
</script>

<style></style>
