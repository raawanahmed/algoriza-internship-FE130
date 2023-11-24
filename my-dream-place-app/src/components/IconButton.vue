<template>
  <button :style="{ background: bgOfBtn }" :class="btnClass">
    <img v-if="iconPath != undefined" :src="iconPath" alt="icon" />
    <span
      class="overflow-hidden text-xs text-gray-2 mt-2 mb-2 font-normal"
      style="color: #4f4f4f"
      >{{ textOnTheBtn }}</span
    >
    <img
      v-if="arrowDir != undefined"
      :src="arrowDir"
      alt="arrow"
      class="w-4 h-4 absolute"
      style="right: 8px"
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
