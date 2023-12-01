<template>
  <div class="mx-auto max-w-[1440px]"  style="font-family: SF Pro Display, sans-serif">
    <section class="mx-[100px]">
      <p class="font-semibold text-3xl mb-4 mt-[60px]">Popular Hotels</p>
      <section class="flex gap-4">
        <ImgDetails
          :imgPath="require('@/assets/Imgs/lakeside.png')"
          :imgName="'Lakeside Motel Warefront'"
          :imgProperties="'2246 properties'"
        />
        <ImgDetails
          :imgPath="require('@/assets/Imgs/recce.png')"
          :imgName="'Recce Graham resort'"
          :imgProperties="'1278 properties'"
        />
        <ImgDetails
          :imgPath="require('@/assets/Imgs/fireside.png')"
          :imgName="'Fireside Dinners'"
          :imgProperties="'480 properties'"
        />
        <ImgDetails
          :imgPath="require('@/assets/Imgs/oculous.png')"
          :imgName="'Oculous Inn Stay'"
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
