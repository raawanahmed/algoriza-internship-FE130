<template>
  <div class="w-[810px] h-[576px] bg-white rounded-md mt-[30px]">
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

    <div class="bg-white px-8 pb-8">
      <section class="mb-5">
        <div>
          <label for="cardNumber" class="font-medium">Name on card</label>
        </div>
        <div>
          <input
            type="number"
            name="cardNumber"
            id="cardNumber"
            class="rounded bg-[#F2F2F2] w-[500px] h-[44px] p-3"
          />
        </div>
      </section>

      <section class="mb-5">
        <div>
          <label for="cardNumber" class="font-medium"
            >Debit/Credit card number</label
          >
        </div>
        <div>
          <input
            type="number"
            name="cardNumber"
            id="cardNumber"
            class="rounded bg-[#F2F2F2] w-[500px] h-[44px] p-3"
          />
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
            <!-- todo loop over the months -->
          </select>
          <select
            name="years"
            id="years"
            class="rounded bg-[#F2F2F2] w-[150px] h-[42px] px-3 py-[10px]"
          >
            <!-- todo loop over the years -->
          </select>
        </div>
      </section>
      <section class="flex">
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
            />
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
            />
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
