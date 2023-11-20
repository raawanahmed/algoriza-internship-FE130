<template>
  <button :style="{ background: bgOfBtn }" :class="btnClass">
    <img v-if="iconPath != -undefined" :src="iconPath" alt="icon" />
    <span
      class="overflow-hidden  text-xs text-gray-2 mt-2 mb-2 font-normal"
      style="color: #4f4f4f"
      >{{ textOnTheBtn }}</span
    >
  </button>
</template>

<script setup>
const { textOnTheBtn, bgOfBtn, btnClass, iconPath } = defineProps([
  "textOnTheBtn",
  "bgOfBtn",
  "iconPath",
  "btnClass",
]);
</script>

<style></style>
