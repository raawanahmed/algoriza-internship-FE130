<template>
  <div class="relative">
    <img :src="imgPath" alt="Image of a place" />
    <div>
      <p
        class="absolute font-semibold text-xl text-white mx-5 "
        style="bottom: 74px;  width: 360px"
      >
        {{ imgName }}
      </p>
      <p
        class="absolute text-sm text-white mx-5"
        style="top: 216px; width: 360px"
      >
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
