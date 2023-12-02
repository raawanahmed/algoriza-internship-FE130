<template>
  <div
    style="font-family: SF Pro Display, sans-serif"
    class="rounded-md mt-5 w-[295px] h-[170px] bg-white border-[1px] border-[#e0e0e0]"
  >
    <p
      class="font-semibold text-base bg-[#f2f2f2] p-[18px] border-b-[1px] border-b-[#e0e0e0]"
    >
      Rating
    </p>
    <div style="margin-left: 18px; color: #333; margin-right: 23px">
      <p class="text-sm mt-5">Show only ratings more than</p>
      <div class="mt-2 flex">
        <button
          style="
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-right: none;
          "
          class="p-3 flex items-center gap-1.5 relative border-[1px] border-[#e0e0e0] w-[50px] h-[46px]"
          @click="searchDetailsStore.setSelectedRating(1)"
        >
          1
          <img src="../assets/Icons/star.svg" alt="star icon" />
        </button>
        <button
          style="border-right: none"
          class="p-3 flex items-center gap-1.5 relative border-[1px] border-[#e0e0e0] w-[50px] h-[46px]"
          @click="searchDetailsStore.setSelectedRating(2)"
        >
          2
          <img src="../assets/Icons/star.svg" alt="star icon" />
        </button>
        <button
          style="border-right: none"
          class="p-3 flex items-center gap-1.5 relative border-[1px] border-[#e0e0e0] w-[50px] h-[46px]"
          @click="searchDetailsStore.setSelectedRating(3)"
        >
          3
          <img src="../assets/Icons/star.svg" alt="star icon" />
        </button>
        <button
          style="border-right: none"
          class="p-3 flex items-center gap-1.5 relative border-[1px] border-[#e0e0e0] w-[50px] h-[46px]"
          @click="searchDetailsStore.setSelectedRating(4)"
        >
          4
          <img src="../assets/Icons/star.svg" alt="star icon" />
        </button>
        <button
          style="border-top-right-radius: 5px; border-bottom-right-radius: 5px"
          class="p-3 flex items-center gap-1.5 relative border-[1px] border-[#e0e0e0] w-[50px] h-[46px]"
          @click="searchDetailsStore.setSelectedRating(5)"
        >
          5
          <img src="../assets/Icons/star.svg" alt="star icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSearchDetailsStore } from "@/stores/SearchDetailsStore";
const searchDetailsStore = useSearchDetailsStore();
/*
todos 
1- filter the list based on the selected number of stars .. done
*/
</script>

<style></style>
