<template>
  <div class="flex mb-[10px] justify-between">
    <div class="flex">
      <img :src="iconPath" alt="icon" class="mr-3" />
      <p class="text-[#4f4f4f] text-[15px]">{{ iconText }}</p>
    </div>
    <p v-if="iconText2 != null" class="text-[#4f4f4f] text-[15px]">
      {{ iconText2 }}
    </p>
  </div>
</template>

<script setup>
const { iconPath, iconText, styles, iconText2 } = defineProps([
  "iconPath",
  "iconText",
  "styles",
  "iconText2",
]);
</script>

<style></style>
