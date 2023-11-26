<template>
  <div v-for="hotel in hotels" :key="hotel.hotel_id">
    <section
      class="mt-6 rounded"
      style="
        width: 915px;
        height: 240px;
        border: 1px solid var(--Gray-5, #e0e0e0);
      "
    >
      <div class="p-5 flex">
        <img
          :src="hotel.property.photoUrls[0]"
          alt=""
          style="width: 285px; height: 200px"
          class="mr-6"
        />
        <section style="max-height: 200px">
          <p class="font-medium text-xl" style="color: #1a1a1a">
            {{ hotel.property.name }}
          </p>
          <section style="margin-top: 10px; margin-bottom: 17px" class="flex">
            <div
              v-for="index in generateRange(hotel.property.reviewScore)"
              :key="index"
              class="flex"
            >
              <img src="../assets/Icons/star.svg" alt="" />
            </div>
            <p style="color: #4f4f4f" class="text-sm">
              ({{ hotel.property.reviewCount }} Reviews)
            </p>
          </section>
          <p
            class=""
            style="
              max-height: 58px;
              height: 58px;
              overflow: hidden;
              text-overflow: ellipsis;
              max-width: 400px;
              font-size: 13px;
            "
          >
            {{ hotel.accessibilityLabel }}
          </p>
          <button
            class="justify-center items-center rounded border border-blue-500 bg-blue-500 text-white"
            style="
              width: 137px;
              height: 40px;
              margin-top: 18px;
              margin-bottom: 24px;
            "
          >
            See availability
          </button>
        </section>
        <section
          class="text-end relative"
          style="flex-grow: 1; max-height: 200px"
        >
          <section class="absolute bottom-6 right-0">
            <p class="font-semibold text-xl">
              ${{ hotel.property.priceBreakdown.grossPrice.value }}
            </p>
          </section>
          <p
            class="font-light text-sm absolute"
            style="color: #333; bottom: 0; width: 140px; right: 0"
          >
            Includes taxes and fees
          </p>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import axios from "axios";
import { useSearchStore } from "@/stores/SearchStore";
import { ref } from "vue";
const searchStore = useSearchStore();
const checkinDate = searchStore.getFormattedCheckinDate();
const checkoutDate = searchStore.getFormattedCheckoutDate();
const destinationID = searchStore.getSelectedDist;
const adults = searchStore.getSelectedGuests;
const rooms = searchStore.getSelectedRooms;
const searchType = searchStore.getSearchType;
const generateRange = (num) =>
  Array.from({ length: Math.ceil(num / 2) }, (_, index) => index + 1);
const hotels = ref([
  {
    hotel_id: 10683504,
    accessibilityLabel:
      "Egypt.\n‎Dokki‬ • ‎3.6 km from center‬.\n3 beds • 1 bedroom • 2 bathrooms.\n850 USD.\n+128 USD taxes and charges.\nFree cancellation.",
    property: {
      qualityClass: 0,
      checkin: {
        fromTime: "15:00",
        untilTime: "18:00",
      },
      longitude: 31.198272195154,
      optOutFromGalleryChanges: 0,
      wishlistName: "Cairo",
      name: "Egypt",
      blockIds: ["1068350401_379308991_4_0_0"],
      position: 0,
      propertyClass: 0,
      accuratePropertyClass: 0,
      rankingPosition: 0,
      isHighlightedHotel: true,
      latitude: 30.045661165253,
      priceBreakdown: {
        excludedPrice: {
          value: 127.5,
          currency: "USD",
        },
        taxExceptions: [],
        grossPrice: {
          value: 850,
          currency: "USD",
        },
        benefitBadges: [],
      },
      ufi: -290692,
      reviewCount: 0,
      reviewScore: 0,
      photoUrls: [
        "https://cf.bstatic.com/xdata/images/hotel/square60/488296521.jpg?k=e65611889e6f855b39b8348a06cec8cbdb1a99b3a16a3d0482c1ada0b2eaaea2&o=",
      ],
      mainPhotoId: 488296521,
      reviewScoreWord: "",
      isFirstPage: true,
      checkout: {
        fromTime: "08:00",
        untilTime: "11:00",
      },
      checkinDate: "2023-12-01",
      currency: "USD",
      id: 10683504,
      countryCode: "eg",
      checkoutDate: "2023-12-09",
    },
  },
  {
    hotel_id: 11032522,
    accessibilityLabel:
      "New pyramid stars.\n3 out of 5 stars.\n8.4 Very Good 5 reviews.\n‎Giza‬ • ‎12 km from center‬\n‎Travel Sustainable‬.\n Hotel room : 2 beds.\nOriginal price 480 USD. Current price 216 USD..\n+32 USD taxes and charges.\nFree cancellation.\nNo prepayment needed.",
    property: {
      ufi: -290692,
      priceBreakdown: {
        taxExceptions: [],
        grossPrice: {
          value: 216,
          currency: "USD",
        },
        benefitBadges: [
          {
            text: "Black Friday Deal",
            identifier: "Black Friday",
            explanation: "Black Friday Deal",
          },
        ],
        strikethroughPrice: {
          value: 480,
          currency: "USD",
        },
        excludedPrice: {
          value: 32.4,
          currency: "USD",
        },
      },
      latitude: 29.974620567016,
      photoUrls: [
        "https://cf.bstatic.com/xdata/images/hotel/square60/504415373.jpg?k=628af71964c8f6bcaae4a5197ab5c2a6b585619452cfb47acc416dc1a04fe1b7&o=",
      ],
      reviewScore: 8.4,
      reviewCount: 5,
      checkinDate: "2023-12-01",
      checkout: {
        fromTime: "00:00",
        untilTime: "10:00",
      },
      isFirstPage: true,
      reviewScoreWord: "Very Good",
      mainPhotoId: 504415373,
      checkoutDate: "2023-12-09",
      countryCode: "eg",
      isPreferred: true,
      id: 11032522,
      currency: "USD",
      isPreferredPlus: true,
      qualityClass: 0,
      checkin: {
        fromTime: "12:00",
        untilTime: "12:00",
      },
      blockIds: ["1103252204_383083384_0_41_0"],
      name: "New pyramid stars",
      wishlistName: "Cairo",
      optOutFromGalleryChanges: 0,
      longitude: 31.14471678354,
      rankingPosition: 1,
      propertyClass: 3,
      accuratePropertyClass: 3,
      position: 1,
    },
  },
  {
    hotel_id: 4436693,
    accessibilityLabel:
      "Violet 133.\n3 out of 5 for property rating.\n8.9 Excellent 21 reviews.\n‎New Cairo City‬ • ‎22 km from center‬.\n Entire apartment – 100 m² : 3 beds • 2 bedrooms • 1 living room • 1 bathroom.\nOriginal price 640 USD. Current price 524 USD..\n+76 USD taxes and charges.\nFree cancellation.",
    property: {
      checkout: {
        untilTime: "12:00",
        fromTime: "11:00",
      },
      checkinDate: "2023-12-01",
      reviewScoreWord: "Excellent",
      isFirstPage: true,
      mainPhotoId: 180384236,
      countryCode: "eg",
      checkoutDate: "2023-12-09",
      id: 4436693,
      isPreferred: true,
      currency: "USD",
      priceBreakdown: {
        excludedPrice: {
          value: 75.7894736842105,
          currency: "USD",
        },
        strikethroughPrice: {
          value: 640,
          currency: "USD",
        },
        taxExceptions: [],
        grossPrice: {
          currency: "USD",
          value: 524.16,
        },
        benefitBadges: [
          {
            text: "Mobile-only price",
            identifier: "Mobile Rate",
            explanation: "Mobile-only price",
            variant: "constructive",
          },
        ],
      },
      ufi: -290692,
      latitude: 30.0460016763402,
      photoUrls: [
        "https://cf.bstatic.com/xdata/images/hotel/square60/180384236.jpg?k=942fe5d3e2116584f21acf74f7465ec672d128d2db6419f28f22694884d7676b&o=",
      ],
      reviewScore: 8.9,
      reviewCount: 21,
      blockIds: ["443669303_132910801_0_0_0"],
      optOutFromGalleryChanges: 0,
      name: "Violet 133",
      wishlistName: "Cairo",
      longitude: 31.4634886256562,
      propertyClass: 0,
      accuratePropertyClass: 0,
      rankingPosition: 2,
      position: 2,
      qualityClass: 3,
      isPreferredPlus: true,
      checkin: {
        fromTime: "14:00",
        untilTime: "00:00",
      },
    },
  },
]);

const fetchHotels = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: destinationID,
      search_type: searchType,
      arrival_date: checkinDate,
      departure_date: checkoutDate,
      adults: adults,
      children_age: "0,17",
      room_qty: rooms,
      page_number: "1",
      languagecode: "en-us",
      currency_code: "usd",
    },
    headers: {
      "X-RapidAPI-Key": "c6f8dbff25mshb0322cd8edf15ffp1d087bjsnc1c70576c0f0",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    //   const response = await axios.request(options);
    //   console.log(response.data.hotels);
    hotels.value = response.data.hotels;
  } catch (error) {
    console.error(error);
  }
};
</script>

<style></style>
