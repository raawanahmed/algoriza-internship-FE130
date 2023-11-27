<template>
  <div v-for="index in generateRange(reviewScore)" :key="index" class="flex">
    <img src="../assets/Icons/star.svg" alt="" />
  </div>
  <p style="color: #4f4f4f" class="text-sm ml-2">
    {{ numberOfStars }} ({{ reviewsCount }} Reviews)
  </p>
</template>

<script setup>
const { reviewsCount, reviewScore } = defineProps([
  "reviewsCount",
  "reviewScore",
]);
const generateRange = (num) =>
  Array.from({ length: Math.ceil(num / 2) }, (_, index) => index + 1);
const numberOfStars = generateRange(reviewScore).length;
</script>

<style></style>
