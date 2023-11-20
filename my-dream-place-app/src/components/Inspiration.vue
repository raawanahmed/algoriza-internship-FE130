<template>
  <div class="mx-auto" style="max-width: 1440px">
    <section style="margin-left: 100px; margin-right: 100px">
      <p
        class="font-semibold text-3xl"
        style="margin-top: 60px; margin-bottom: 24px"
      >
        Get inspiration for your next trip
      </p>
      <div class="flex gap-5">
        <ImageWithText
          :imgPath="require('@/assets/Imgs/sydeny.png')"
          :imgName="'Sydeny’s 10 most fashionable 5 star hotels'"
          :imgProperties="'Browse the fastest growing tourism sector in the heart of Australia tourism capital ....'"
        />
        <ImageWithText
          :imgPath="require('@/assets/Imgs/vegan.png')"
          :imgName="'Top cities for Vegan Travellers'"
          :imgProperties="'Top sites where you do not have to worry about being a vegan. Our tourist guide is here...'"
        />
        <ImageWithText
          :imgPath="require('@/assets/Imgs/top.png')"
          :imgName="'World’s top destinations during and post covid timeline'"
          :imgProperties="'Pandemic is still intact and will be here for a longer time. Here’s where your next destination...'"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import ImageWithText from "./ImageWithText.vue";
</script>

<style></style>
