<template>
  <main class="mt-10 ml-[30px]" style="font-family: SF Pro Display, sans-serif">
    <iframe
      :src="
        '//maps.google.com/maps?q=' +
        { latitude } +
        ',' +
        { longitude } +
        '&z=15&output=embed'
      "
    ></iframe>
    <!-- <img src="../assets/Imgs/map.png" alt="map image" /> -->
    <p class="font-semibold text-lg mt-[35px] mb-[22px]">Explore the area</p>
    <IconWithText
      :iconText="'Hotel Penselvenyia'"
      :iconPath="require('../assets/Icons/bxs-plane.svg')"
      :iconText2="'2 min drive'"
    />
    <IconWithText
      :iconText="'Travis Bakery store house'"
      :iconPath="require('../assets/Icons/bxs-map.svg')"
      :iconText2="'10 min drive'"
    />
    <IconWithText
      :iconText="'Olivia Johnson Garden'"
      :iconPath="require('../assets/Icons/bxs-map.svg')"
      :iconText2="'15 min drive'"
    />
    <IconWithText
      :iconText="'Norman Opera Circus'"
      :iconPath="require('../assets/Icons/bxs-map.svg')"
      :iconText2="'18 min drive'"
    />
    <IconWithText
      :iconText="'Rockdeset hotel'"
      :iconPath="require('../assets/Icons/bxs-map.svg')"
      :iconText2="'32 min drive'"
    />
  </main>
</template>

<script setup>
import IconWithText from "./IconWithText.vue";
const { longitude, latitude } = defineProps(["latitude", "longitude"]);

// is the map doesn't appear because of the api uncomment the static image and comment the iframe
// clean code and css .. done
</script>

<style></style>
