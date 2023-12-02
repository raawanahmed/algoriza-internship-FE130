<template>
  <div
    class="w-[810px] bg-white rounded-md mt-[30px]"
    style="font-family: SF Pro Display, sans-serif"
  >
    <header
      class="py-4 px-5 flex bg-[#2F80ED] font-medium text-[#fff] items-center rounded-t-md"
    >
      <img
        src="../assets/Icons/card-tick.svg"
        alt="security user icon"
        class="mr-4"
      />
      <p class="mr-[18px] text-lg">Payment options</p>
    </header>
    <div
      class="text-base text-[#333] px-8 pt-[10px] mt-2 border-b-[1px] border-b-[#e0e0e0]"
    >
      <button
        class="p-[10px] pb-[7px] mr-[22px] border-b-[3px] border-b-[#2F80ED]"
      >
        Debit/Credit Card
      </button>
    </div>
    <section class="flex mb-[26px] pl-8 mt-8">
      <div class="w-[60px] h-10 rounded bg-[#F2F2F2] mr-[6px] flex">
        <img
          src="../assets/Icons/image 6.png"
          alt="card img"
          class="p-2 w-full"
        />
      </div>
      <div class="w-[60px] h-10 rounded bg-[#F2F2F2] mr-[6px] flex">
        <img src="../assets/Icons/image 7.png" alt="card img" class="p-2" />
      </div>
      <div class="w-[60px] h-10 rounded bg-[#F2F2F2] mr-[6px] flex">
        <img
          src="../assets/Icons/image 10.png"
          alt="card img"
          class="p-2 w-full"
        />
      </div>
      <div class="w-[60px] h-10 rounded bg-[#F2F2F2] mr-[6px] flex">
        <img
          src="../assets/Icons/image 8.png"
          alt="card img"
          class="p-2 w-full"
        />
      </div>
    </section>

    <div class="bg-white px-8 pb-8 rounded-md">
      <section class="mb-5">
        <div>
          <label for="cardName" class="font-medium">Name on card</label>
        </div>
        <div>
          <div class="flex">
            <input
              type="text"
              name="cardName"
              id="cardName"
              class="rounded bg-[#F2F2F2] w-[500px] h-[44px] p-3"
              v-model="cardName"
            />
            <img
              v-if="isCardNameValid"
              src="../assets/Icons/tick-circle 3.svg"
              alt="tick circle"
              class="ml-[18px]"
            />
          </div>
          <p v-if="!isCardNameValid" class="text-red-500">
            Card name should be at least 5 characters
          </p>
        </div>
      </section>

      <section class="mb-5">
        <div>
          <label for="cardNumber" class="font-medium"
            >Debit/Credit card number</label
          >
        </div>
        <div>
          <div class="flex">
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              class="rounded bg-[#F2F2F2] w-[500px] h-[44px] p-3"
              v-model="cardNumber"
            />
            <img
              v-if="isCardNumberValid"
              src="../assets/Icons/tick-circle 3.svg"
              alt="tick circle"
              class="ml-[18px]"
            />
          </div>
          <p v-if="!isCardNumberValid" class="text-red-500">
            Enter a valid card Number
          </p>
        </div>
      </section>

      <section>
        <div>
          <label for="expirationDate" class="font-medium"
            >Expiration Date</label
          >
        </div>
        <div class="flex mb-5">
          <select
            name="months"
            id="months"
            class="rounded bg-[#F2F2F2] w-[150px] h-[42px] px-3 py-[10px] mr-3"
          >
            <option
              v-for="(month, index) in months"
              :key="index"
              :value="index + 1"
            >
              {{ month }}
            </option>
          </select>
          <select
            name="years"
            id="years"
            class="rounded bg-[#F2F2F2] w-[150px] h-[42px] px-3 py-[10px]"
          >
            <option v-for="(year, index) in years" :key="index" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
      </section>
      <section class="flex relative">
        <section class="mr-5">
          <div>
            <label for="securityCode" class="font-medium">Security Code</label>
          </div>
          <div>
            <input
              type="text"
              name="securityCode"
              id="securityCode"
              class="rounded bg-[#F2F2F2] w-[240px] h-[44px] p-3"
              v-model="securityCode"
            />
            <p v-if="!isSecurityCodeValid" class="text-red-500">
              Security code should be 3 characters
            </p>
          </div>
        </section>
        <section>
          <div>
            <label for="billingZipCode" class="font-medium"
              >Billing Zip code</label
            >
          </div>
          <div>
            <input
              type="text"
              name="billingZipCode"
              id="billingZipCode"
              class="rounded bg-[#F2F2F2] w-[240px] h-[44px] p-3"
              v-model="billingCode"
            />
            <p v-if="!isBillingCodeValid" class="text-red-500">
              Billing code should be 6 characters
            </p>
          </div>
        </section>
        <img
          v-if="isSecurityCodeValid && isBillingCodeValid"
          src="../assets/Icons/tick-circle 3.svg"
          alt="tick circle"
          class="ml-[18px] bottom-[13px] right-[210px] absolute"
        />
      </section>
    </div>
  </div>
</template>

<script setup>
import { useHotelStore } from "@/stores/HotelStore";
import { ref, watchEffect, onMounted } from "vue";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

const hotelStore = useHotelStore();
const cardNumber = ref("");
const cardName = ref("");
const securityCode = ref("");
const billingCode = ref("");
const isCardNumberValid = ref("");
const isCardNameValid = ref("");
const isSecurityCodeValid = ref("");
const isBillingCodeValid = ref("");

watchEffect(() => {
  if (cardNumber.value.length == 16) isCardNumberValid.value = true;
  else isCardNumberValid.value = false;
  if (cardName.value.length > 4) isCardNameValid.value = true;
  else isCardNameValid.value = false;
  if (securityCode.value.length == 3) isSecurityCodeValid.value = true;
  else isSecurityCodeValid.value = false;
  if (billingCode.value.length == 6) isBillingCodeValid.value = true;
  else isBillingCodeValid.value = false;

  hotelStore.setIsPaymentsDetailsFilled(
    isCardNumberValid.value &&
      isCardNameValid.value &&
      isSecurityCodeValid.value &&
      isBillingCodeValid.value
  );
});
</script>

<style></style>
