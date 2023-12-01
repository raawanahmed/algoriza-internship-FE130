<template>
  <main style="font-family: SF Pro Display, sans-serif">
    <div v-for="index in generateRange(reviewScore)" :key="index" class="flex">
      <img src="../assets/Icons/star.svg" alt="star icon" />
    </div>
    <p class="text-sm ml-2 text-[#4f4f4f]">
      {{ numberOfStars }} ({{ reviewsCount }} Reviews)
    </p>
  </main>
</template>

<script setup>
const { reviewsCount, reviewScore } = defineProps([
  "reviewsCount",
  "reviewScore",
]);
const generateRange = (num) =>
  Array.from({ length: Math.ceil(num / 2) }, (_, index) => index + 1);
const numberOfStars = generateRange(reviewScore).length;

// clean css .. done
</script>

<style></style>
