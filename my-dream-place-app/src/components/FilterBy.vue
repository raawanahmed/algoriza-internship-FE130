<template>
  <div style="font-family: SF Pro Display, sans-serif">
    <p class="font-semibold text-lg mt-5 mb-5 text-[#333] ml-[18px]">
      Filter by
    </p>
    <div class="rounded-md w-[295px] bg-white border-[1px] border-[#e0e0e0]">
      <p
        class="font-semibold text-base bg-[#f2f2f2] p-[18px] border-b-[1px] border-b-[#e0e0e0]"
      >
        Your budget per day
      </p>
      <div class="px-[18px] pt-[18px]">
        <div
          v-for="option in Object.values(budgetOptions)"
          :key="option.id"
          class="mb-[14px] flex items-center text-[#333]"
        >
          <input
            type="checkbox"
            :id="option.id"
            name="budgetCheckbox"
            :value="option.value"
            class="mr-2 w-5 h-5 rounded border border-[#e0e0e0]"
            :checked="selectedBudget === option.value"
            @change="updateSelectedBudget(option)"
          />
          <label :for="option.id">{{ option.label }}</label>
        </div>

        <div class="flex relative">
          <p class="text-[#4F4F4F]">Set your own budget</p>
          <img
            v-show="!isToggled"
            src="../assets/Icons/Group.svg"
            alt="check icon"
            class="absolute right-0 w-[32px] h-[32px]"
            @click="toggleTheToggle"
          />
          <img
            v-show="isToggled"
            src="../assets/Icons/toggled.png"
            alt="check icon"
            class="absolute right-0 w-[32px] h-[32px]"
            @click="toggleTheToggle"
          />
        </div>
        <div class="flex justify-between mt-[15px] mb-[2px]">
          <input
            type="text"
            placeholder="Min budget"
            class="w-[112px] h-[43px] p-3 rounded border border-[#e0e0e0]"
            :disabled="!isToggled"
            @keyup.enter="handleEnterPress"
            v-model="minBudgetInput"
          />
          <input
            type="text"
            placeholder="Max budget"
            class="w-[112px] h-[43px] p-3 rounded border border-[#e0e0e0]"
            :disabled="!isToggled"
            @keyup.enter="handleEnterPress"
            v-model="maxBudgetInput"
          />
        </div>
        <p class="mb-[18px] text-[#4F4F4F] text-[12px]">
          Press Enter to filter
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSearchDetailsStore } from "@/stores/SearchDetailsStore";

const isToggled = ref(false);
const selectedBudget = ref(null);
const searchDetailsStore = useSearchDetailsStore();
const minBudgetInput = ref("");
const maxBudgetInput = ref("");
const BudgetOptions = {
  ZERO_TO_200: {
    id: "1",
    value: "0-200",
    minPrice: "0",
    maxPrice: "200",
    label: "$0 - $200",
  },
  TWO_HUNDRED_TO_500: {
    id: "2",
    value: "200-500",
    minPrice: "200",
    maxPrice: "500",
    label: "$200 - $500",
  },
  FIVE_HUNDRED_TO_1000: {
    id: "3",
    value: "500-1000",
    minPrice: "500",
    maxPrice: "1000",
    label: "$500 - $1000",
  },
  ONE_THOUSAND_TO_2000: {
    id: "4",
    value: "1000-2000",
    minPrice: "1000",
    maxPrice: "2000",
    label: "$1000 - $2000",
  },
  TWO_THOUSAND_TO_5000: {
    id: "5",
    value: "2000-5000",
    minPrice: "2000",
    maxPrice: "5000",
    label: "$2000 - $5000",
  },
};

const budgetOptions = ref(BudgetOptions);
const isSelectedBudget = ref(false);

const toggleTheToggle = () => {
  isToggled.value = !isToggled.value;
  selectedBudget.value = null;
};

const updateSelectedBudget = (option) => {
  isSelectedBudget.value = !isSelectedBudget.value; 
  if (!isSelectedBudget.value) {
    searchDetailsStore.setSelectedRangePrice("", ""); // because when the user unselect the checkbox I want the hotels to be fetched again without any condition on the prices
  }
  else if (!isToggled.value) {
    selectedBudget.value =
      selectedBudget.value === option.value ? null : option.value;
    console.log(option.value);
    searchDetailsStore.setSelectedRangePrice(option.minPrice, option.maxPrice);
  }
};

const handleEnterPress = () => {
  const minPrice = parseFloat(minBudgetInput.value);
  const maxPrice = parseFloat(maxBudgetInput.value);

  if (!isNaN(minPrice) && !isNaN(maxPrice)) {
    searchDetailsStore.setSelectedRangePrice(minPrice, maxPrice);
  }
};
/*
todos 
1- add the design .. done
2- handle the logic from api with static data .. done 
*/
</script>

<style></style>
