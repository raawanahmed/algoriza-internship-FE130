<template>
  <div v-for="index in generateRange(reviewScore)" :key="index" class="flex">
    <img src="../assets/Icons/star.svg" alt="star icon" />
  </div>
  <p class="text-sm ml-2 text-[#4f4f4f]" style="font-family: SF Pro Display, sans-serif">
    {{ numberOfStars }} ({{ reviewsCount }} Reviews)
  </p>
</template>

<script setup>
const { reviewsCount, reviewScore } = defineProps([
  "reviewsCount",
  "reviewScore",
]);
// I generate range because I want to iterate over the number of rating to display stars = the rating

const generateRange = (num) =>
  Array.from({ length: Math.ceil(num / 2) }, (_, index) => index + 1);
const numberOfStars = generateRange(reviewScore).length;

// clean css .. done
</script>

<style></style>
