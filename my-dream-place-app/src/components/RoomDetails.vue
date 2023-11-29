<template>
  <div class="w-[400px] h-[432px] bg-white rounded-md mr-5">
    <img :src="imgPath" alt="room image" class="w-[400px] h-[200px]" />
    <section class="p-5">
      <p class="text-lg text-[#1A1A1A] mb-[10px] font-medium">
        {{ roomData.name }}
      </p>
      <div class="mb-6">
        <IconWithText
          :iconText="roomData.description"
          :iconPath="require('../assets/Icons/bag-tick-2.svg')"
        />
        <IconWithText
          :iconText="`Sleeps ${roomData.count}`"
          :iconPath="require('../assets/Icons/lifebuoy-grey.svg')"
        />
        <IconWithText
          :iconText="roomData.name_with_count"
          :iconPath="require('../assets/Icons/like-grey.svg')"
        />
      </div>
      <button
        class="px-[18px] py-3 justify-center items-center inline-flex rounded border border-blue-500 bg-blue-500 text-white w-[360px] h-[44px] font-medium"
        @click="reserveSuite(roomData)"
      >
        Reserve suite
      </button>
    </section>
  </div>
</template>

<script setup>
import IconWithText from "./IconWithText.vue";
const { imgPath, roomDescription, roomData } = defineProps([
  "imgPath",
  "roomDescription",
  "roomData",
]);

console.log(roomData);

const reserveSuite = () => {};
</script>

<style></style>
