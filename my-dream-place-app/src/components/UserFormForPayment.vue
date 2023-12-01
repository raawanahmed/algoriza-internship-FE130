<template>
  <div class="w-[810px] h-[328px] bg-white rounded-md" style="font-family: SF Pro Display, sans-serif">
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
          <select
            name="months"
            id="months"
            class="rounded bg-[#F2F2F2] w-[150px] h-[42px] px-3 py-[10px] mr-4"
          >
            <!-- todo loop over the months -->
          </select>
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
</template>

<script setup></script>

<style></style>
