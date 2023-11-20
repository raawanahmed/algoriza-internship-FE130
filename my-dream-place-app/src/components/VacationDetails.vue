<template>
  <div class="mx-auto relative" style="max-width: 1440px">
    <img
      src="../assets/Imgs/view.png"
      alt="view of the sea"
      style="margin-left: 100px; margin-right: 100px"
      class="mt-3"
    />
    <p
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-sans text-3xl font-bold"
      style="top: 202px; width: 610px; height: 38px"
    >
      Enjoy Your Dream Vacation
    </p>
    <p
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-sans text-xl mt-5 font-normal"
      style="top: 260px; width: 650px; height: 56px"
    >
      Plan and book our perfect trip with expert advice, travel tips,
      destination information and inspiration from us
    </p>
    <section
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 bg-white rounded-lg shadow-md p-3 mt-8 gap-3.5 flex fontStyle"
      style="width: 1030px; height: 64px; top: 480px"
    >
      <IconButton
        :textOnTheBtn="'Where are you going?'"
        :btnClass="'p-3 rounded h-11 w-52 flex items-center font-normal gap-1.5'"
        :bgOfBtn="'#F2F2F2'"
        :iconPath="require('@/assets/Icons/location.svg')"
      />
      <IconButton
        :textOnTheBtn="'Check in date'"
        :btnClass="'p-3 rounded h-11 w-36 flex items-center font-normal gap-1.5'"
        :bgOfBtn="'#F2F2F2'"
        :iconPath="require('@/assets/Icons/calendarIcon.svg')"
      />
      <IconButton
        :textOnTheBtn="'Check out date'"
        :btnClass="'p-3 rounded h-11 w-36 flex items-center font-normal gap-1.5'"
        :bgOfBtn="'#F2F2F2'"
        :iconPath="require('@/assets/Icons/calendarIcon.svg')"
      />
      <IconButton
        :textOnTheBtn="'Guests'"
        :btnClass="'p-3 rounded h-11 w-36 flex items-center font-normal gap-1.5'"
        :bgOfBtn="'#F2F2F2'"
        :iconPath="require('@/assets/Icons/user-square.svg')"
      />
      <IconButton
        :textOnTheBtn="'Rooms'"
        :btnClass="'p-3 rounded h-11 w-36 flex items-center font-normal gap-1.5'"
        :bgOfBtn="'#F2F2F2'"
        :iconPath="require('@/assets/Icons/single_bed.svg')"
      />
      <button
        class="inline-flex px-10 py-2 justify-center items-center gap-2 rounded border border-blue-500 bg-blue-500 text-white w-36 h-11 font-medium text-sm"
      >
        Search
      </button>
    </section>
  </div>
</template>

<script setup>
import IconButton from "./IconButton.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
.fontStyle {
  font-family: "Poppins", sans-serif;
}
</style>
