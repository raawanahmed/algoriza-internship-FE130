<template>
  <div
    style="
      width: 295px;
      height: 170px;
      border: 1px solid var(--Gray-5, #e0e0e0);
      background: #fff;
    "
    class="rounded-md mt-5"
  >
    <p
      class="font-semibold text-base"
      style="
        background: #f2f2f2;
        padding: 18px;
        border-bottom: 1px solid var(--Gray-5, #e0e0e0);
      "
    >
      Rating
    </p>
    <div style="margin-left: 18px; color: #333; margin-right: 23px">
      <p class="text-sm mt-5">Show only ratings more than</p>
      <div class="mt-2 flex">
        <button
          style="
            border: 1px solid var(--Gray-5, #e0e0e0);
            width: 50px;
            height: 46px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-right: none;
          "
          class="p-3 flex items-center gap-1.5 relative"
        >
          1
          <img src="../assets/Icons/star.svg" alt="star icon" />
        </button>
        <button
          style="
            border: 1px solid var(--Gray-5, #e0e0e0);
            width: 50px;
            height: 46px;
            border-right: none;
          "
          class="p-3 flex items-center gap-1.5 relative"
        >
          2
          <img src="../assets/Icons/star.svg" alt="star icon" />
        </button>
        <button
          style="
            border: 1px solid var(--Gray-5, #e0e0e0);
            width: 50px;
            height: 46px;
            border-right: none;
          "
          class="p-3 flex items-center gap-1.5 relative"
        >
          3
          <img src="../assets/Icons/star.svg" alt="star icon" />
        </button>
        <button
          style="
            border: 1px solid var(--Gray-5, #e0e0e0);
            width: 50px;
            height: 46px;
            border-right: none;
          "
          class="p-3 flex items-center gap-1.5 relative"
        >
          4
          <img src="../assets/Icons/star.svg" alt="star icon" />
        </button>
        <button
          style="
            border: 1px solid var(--Gray-5, #e0e0e0);
            width: 50px;
            height: 46px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          "
          class="p-3 flex items-center gap-1.5 relative"
        >
          5
          <img src="../assets/Icons/star.svg" alt="star icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
