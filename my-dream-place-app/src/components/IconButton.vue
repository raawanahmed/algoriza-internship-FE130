<template>
  <button :style="{ background: bgOfBtn }" :class="btnClass" style="font-family: SF Pro Display, sans-serif">
    <img v-if="iconPath != undefined" :src="iconPath" alt="icon" />
    <span
      class="overflow-hidden text-gray-2 mt-2 mb-2 font-normal text-[#4f4f4f] text-[13px]"
      >{{ textOnTheBtn }}</span
    >
    <img
      v-if="arrowDir != undefined"
      :src="arrowDir"
      alt="arrow"
      class="w-4 h-4 absolute right-[8px]"
    />
  </button>
</template>

<script setup>
const { textOnTheBtn, bgOfBtn, btnClass, iconPath, arrowDir } = defineProps([
  "textOnTheBtn",
  "bgOfBtn",
  "iconPath",
  "btnClass",
  "arrowDir",
]);
</script>

<style></style>
