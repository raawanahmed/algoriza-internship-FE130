<template>
  <main class="ml-[100px]" style="font-family: SF Pro Display, sans-serif">
    <div class="w-[810px] h-[328px] bg-white rounded-md">
      <header
        class="py-4 px-5 flex bg-[#2F80ED] font-medium text-[#fff] items-center rounded-t-md"
      >
        <img
          src="../assets/Icons/security-user.svg"
          alt="security user icon"
          class="mr-4"
        />
        <p class="mr-[18px] text-2xl">Rooms</p>
        <p class="text-xs">Rooms</p>
      </header>
      <div class="bg-white p-8">
        <section class="flex">
          <section class="mr-5">
            <div><label for="fname" class="font-medium">First name</label></div>
            <div>
              <input
                type="text"
                name="fname"
                id="fname"
                class="rounded bg-[#F2F2F2] w-[240px] h-[44px] p-3"
              />
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
              />
            </div>
          </section>
        </section>
        <section class="mt-5">
          <div>
            <label for="phonenumber" class="font-medium">Mobile number</label>
          </div>
          <div>
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              class="rounded bg-[#F2F2F2] w-[338px] h-[44px] p-3"
            />
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
    <PaymentsOption />
    <div class="w-[810px] h-[423px] bg-white rounded-md mt-[30px]">
      <header
        class="py-[18px] px-6 flex bg-[#F2C94C] font-medium items-center rounded-t-md"
      >
        <p class="mr-[18px] text-lg">
          Important information about your booking
        </p>
      </header>
      <section class="bg-white px-6">
        <div class="py-8 text-[#333] text-[15px]">
          <p>
            1. This rate is non-refundable. If you change or cancel your booking
            you will not get a refund or credit to use for a future stay.
          </p>
          <p>2. Stay extensions will require a new reservation.</p>
          <p>3. Front desk staff will greet guests on arrival</p>
          <p>
            4. No refunds will be issued for late check-in or early check-out.
          </p>
        </div>
        <p class="text-[#4F4F4F]">
          By clicking the button below, I acknowledge that I have reviewed the
          Privacy Statement and have reviewd and accept the Rules and
          Restrictions and Terms of Use.
        </p>
        <button
          class="inline-flex px-[18px] py-3 justify-center items-center text-[15px] rounded border border-blue-500 bg-blue-500 text-white w-[160px] h-[44px] my-[20px]"
        >
          Complete Booking
        </button>
        <div class="flex">
          <img
            src="../assets/Icons/lock-circle.svg"
            alt="lock circle icon"
            class="mr-2"
          />
          <p class="text-[#4F4F4F]">
            We use secure transmission and encrypted storage to protect your
            personal information
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import PaymentsOption from './PaymentsOption.vue';
// todo highlight texts and adjust the spacing
</script>

<style></style>
