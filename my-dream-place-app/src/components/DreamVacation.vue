<template>
  <div class="mx-auto" style="max-width: 1440px">
    <section style="margin-left: 100px; margin-right: 100px">
      <p class="font-semibold text-3xl mb-4">Enjoy your dream vacation</p>
      <p
        class="font-normal text-base mb-8"
        style="width: 610px; line-height: 22.4px; color: var(--Gray-1, #333)"
      >
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
      <section class="flex gap-4">
        <ImgDetails
          :imgPath="require('@/assets/Imgs/aust.png')"
          :imgName="'Australia'"
          :imgProperties="'2246 properties'"
        />
        <ImgDetails
          :imgPath="require('@/assets/Imgs/japan.png')"
          :imgName="'Japan'"
          :imgProperties="'1278 properties'"
        />
        <ImgDetails
          :imgPath="require('@/assets/Imgs/newzealand.png')"
          :imgName="'Newzealand'"
          :imgProperties="'480 properties'"
        />
        <ImgDetails
          :imgPath="require('@/assets/Imgs/greece.png')"
          :imgName="'Greece'"
          :imgProperties="'320 properties'"
        />
      </section>
    </section>
  </div>
</template>

<script setup>
import ImgDetails from "./ImgDetails.vue";
</script>

<style></style>
