<template>
  <div class="font-family: SF Pro Display, sans-serif">
    <img :src="imgPath" alt="Image of a place" />
    <div>
      <p class="font-semibold text-xl">{{ imgName }}</p>
      <p class="text-sm">{{ imgProperties }}</p>
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
