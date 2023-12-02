<template>
  <div
    class="w-[810px] bg-white rounded-md"
    style="font-family: SF Pro Display, sans-serif"
  >
    <header
      class="py-4 px-5 flex bg-[#2F80ED] font-medium text-[#fff] items-center rounded-t-md text-center"
    >
      <img
        src="../assets/Icons/security-user.svg"
        alt="security user icon"
        class="mr-4"
      />

      <p class="mr-[18px] text-2xl">Rooms</p>
      <p class="text-[16px]">
        2 adults, 1 double bed and 1 twin bed, Non-smoking
      </p>
    </header>
    <div class="bg-white p-8 rounded-md">
      <section class="flex">
        <section class="mr-5">
          <div><label for="fname" class="font-medium">First name</label></div>
          <div>
            <input
              type="text"
              name="fname"
              id="fname"
              class="rounded bg-[#F2F2F2] w-[240px] h-[44px] p-3"
              required
              v-model="firstName"
            />
            <p v-if="!isFirstNameValid" class="text-red-500">
              Your first name should be at least 5 characters
            </p>
          </div>
        </section>
        <section>
          <div><label for="lname" class="font-medium">Last name</label></div>
          <div>
            <input
              type="text"
              name="lname"
              id="lname"
              class="rounded bg-[#F2F2F2] w-[240px] h-[44px] p-3"
              required
              v-model="lastName"
            />
            <p v-if="!isLastNameValid" class="text-red-500">
              Your last name should be at least 5 characters
            </p>
          </div>
        </section>
      </section>
      <section class="mt-5">
        <div>
          <label for="phonenumber" class="font-medium">Mobile number</label>
        </div>
        <div>
          <select
            name="months"
            id="months"
            class="rounded bg-[#F2F2F2] w-[150px] h-[42px] px-3 py-[10px] mr-4"
          >
            <!-- todo loop over the months -->
          </select>
          <input
            type="text"
            name="phonenumber"
            id="phonenumber"
            class="rounded bg-[#F2F2F2] w-[338px] h-[44px] p-3"
            pattern="[0-9]{10}"
            required
            v-model="phoneNumber"
          />
          <p v-if="!isPhoneNumberValid" class="text-red-500">
            Please enter a valid phone number
          </p>
        </div>
      </section>
      <section class="mt-5 flex items-center">
        <input
          type="checkbox"
          name="budgetCheckbox"
          class="mr-2 w-5 h-5 rounded border border-[#e0e0e0]"
        />
        <p class="text-[#333]">Receive text alerts about this trip.</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useHotelStore } from "@/stores/HotelStore";
import { ref, watchEffect, onMounted } from "vue";

const hotelStore = useHotelStore();
const firstName = ref("");
const lastName = ref("");
const phoneNumber = ref("");
const isFirstNameValid = ref("");
const isLastNameValid = ref("");
const isPhoneNumberValid = ref("");

watchEffect(() => {
  if (firstName.value.length > 4) isFirstNameValid.value = true;
  else isFirstNameValid.value = false;
  if (lastName.value.length > 4) isLastNameValid.value = true;
  else isLastNameValid.value = false;
  if (phoneNumber.value.length == 11) isPhoneNumberValid.value = true;
  else isPhoneNumberValid.value = false;

  hotelStore.setIsUserDetailsFilled(
    isFirstNameValid.value && isLastNameValid.value && isPhoneNumberValid.value
  );
});
</script>

<style></style>
