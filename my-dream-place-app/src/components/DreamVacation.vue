<template>
  <div class="mx-auto max-w-[1440px]"  style="font-family: SF Pro Display, sans-serif">
    <section class="mx-[100px]">
      <p class="font-semibold text-3xl mb-4">Enjoy your dream vacation</p>
      <p class="font-normal text-base mb-8 w-[610px] text-[#333]">
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
