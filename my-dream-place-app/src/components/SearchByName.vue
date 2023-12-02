<template>
  <div
    class="rounded-md w-[295px] h-[119px] bg-[#f2f2f2]"
    style="font-family: SF Pro Display, sans-serif"
  >
    <p class="font-semibold text-base ml-5 mr-5 pt-3 text-[#181818]">
      Search by property name
    </p>
    <div class="flex items-center font-normal">
      <span class="absolute ml-4 w-5 h-5">
        <img src="@/assets/Icons/search.svg" alt="icon" class="ml-3" />
      </span>
      <input
        type="text"
        class="mb-5 mt-4 rounded pl-9 h-[44px] w-[259px] mx-[18px]"
        placeholder="eg. Beach westpalm"
        v-model="enteredName"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useSearchDetailsStore } from "@/stores/SearchDetailsStore";
const searchDetailsStore = useSearchDetailsStore();

const enteredName = ref("");

watchEffect(() => {
  console.log(enteredName.value);
  searchDetailsStore.setEnteredName(enteredName.value);
});
/*
todos
1- handle functionality here when searching
*/
</script>

<style></style>
