<template>
  <div class="flex mb-3 justify-between">
    <div class="flex">
      <img :src="iconPath" alt="icon" class="mr-3" />
      <p style="color: #4f4f4f; font-size: 15px">{{ iconText }}</p>
    </div>
    <p
      v-if="iconText2 != null"
      style="color: #4f4f4f; font-size: 15px"
      class=""
    >
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
