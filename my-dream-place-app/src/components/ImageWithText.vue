<template>
  <div class="relative" style="font-family: SF Pro Display, sans-serif">
    <img :src="imgPath" alt="Image of a place" />
    <div>
      <p
        class="absolute font-semibold text-xl text-white mx-5 bottom-[74px] w-[360px]"
      >
        {{ imgName }}
      </p>
      <p class="absolute text-sm text-white mx-5 top-[216px] w-[360px]">
        {{ imgProperties }}
      </p>
    </div>
  </div>
</template>

<script setup>
const { imgName, imgProperties, imgPath } = defineProps([
  "imgName",
  "imgProperties",
  "imgPath",
]);
</script>

<style></style>
