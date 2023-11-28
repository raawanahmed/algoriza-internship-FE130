<template>
  <div style="width: 810px; height: 508px" class="rounded-md bg-white">
    <section class="pt-6 pr-10 pb-10" style="padding-left: 30px">
      <p class="font-semibold text-lg mb-3">Overview</p>
      <p class="text-base" style="color: #4f4f4f">
        <!-- {{ hotel.accessibilityLabel }} -->
      </p>
    </section>
    <hr
      style="
        border: 1px solid #e0e0e0;
        width: 100%;
        margin-top: 44px;
        padding: 0;
      "
    />
    <section class="pr-10 pb-10" style="padding-left: 30px; padding-top: 26px">
      <div>
        <p class="font-semibold text-lg mb-3">Top facilities</p>
        <div class="grid grid-cols-3">
          <div>
            <IconWithText
              :iconText="'Free wifi'"
              :iconPath="require('../assets/Icons/wifi.svg')"
            />
            <IconWithText
              :iconText="'Air Conditioning'"
              :iconPath="require('../assets/Icons/wind.svg')"
            />
            <IconWithText
              :iconText="'Parking available'"
              :iconPath="require('../assets/Icons/car.svg')"
            />
          </div>
          <div>
            <IconWithText
              :iconText="'Business Services'"
              :iconPath="require('../assets/Icons/bag-tick.svg')"
            />
            <IconWithText
              :iconText="'Swimming pool'"
              :iconPath="require('../assets/Icons/lifebuoy.svg')"
            />
            <IconWithText
              :iconText="'Top rated in area'"
              :iconPath="require('../assets/Icons/like.svg')"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHotelStore } from "@/stores/HotelStore";
import { ref } from "vue";
import IconWithText from "./IconWithText.vue";
const hotelStore = useHotelStore();
const hotel = ref(hotelStore.getselectedHotelData);
</script>

<style></style>
