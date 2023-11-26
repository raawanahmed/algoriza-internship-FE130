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
      <div class="p-4 flex">
        <img
          :src="hotel.property.photoUrls[0]"
          alt=""
          style="width: 285px; height: 200px"
          class="mr-6"
        />
        <section>
          <p class="font-medium text-xl" style="color: #1a1a1a">
            {{ hotel.property.name }}
          </p>
          <p class="" style="">
            {{ hotel.accessibilityLabel }}
          </p>
          <button
            class="justify-center items-center rounded border border-blue-500 bg-blue-500 text-white"
            style="width: 137px; height: 40px; margin-top: 18px"
          >
            See availability
          </button>
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
const hotels = ref([
  {
    hotel_id: 11025265,
    accessibilityLabel:
      "Great pyramids & sphinx hotel.\n3 out of 5 stars.\n8.6 Excellent 28 reviews.\n‎Giza‬ • ‎12 km from center‬\n‎Travel Sustainable‬.\n2 beds.\nOriginal price 7282 AED. Current price 3568 AED..\n+535 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
    property: {
      checkout: {
        fromTime: "12:00",
        untilTime: "14:00",
      },
      isPreferred: true,
      currency: "USD",
      id: 11025265,
      name: "Great pyramids & sphinx hotel",
      propertyClass: 3,
      photoUrls: [
        "https://cf.bstatic.com/xdata/images/hotel/square60/506126867.jpg?k=79fee23a8d75252a467ffea705b92aa9c2fbed2030ba1644a4be1ca3b473c86a&o=",
      ],
      reviewCount: 28,
      longitude: 31.1422334768338,
      checkinDate: "2023-11-29",
      isFirstPage: true,
      isPreferredPlus: true,
      checkin: {
        fromTime: "12:00",
        untilTime: "00:00",
      },
      reviewScore: 8.6,
      rankingPosition: 0,
      ufi: -290692,
      accuratePropertyClass: 3,
      wishlistName: "Cairo",
      latitude: 29.9741232632297,
      checkoutDate: "2024-01-04",
      mainPhotoId: 506126867,
      priceBreakdown: {
        taxExceptions: [],
        benefitBadges: [],
        excludedPrice: {
          currency: "AED",
          value: 535.257515844084,
        },
        grossPrice: {
          value: 3568.38343896056,
          currency: "AED",
        },
        strikethroughPrice: {
          value: 7282.424175797,
          currency: "AED",
        },
      },
      blockIds: ["1102526505_383038387_0_2_0"],
      optOutFromGalleryChanges: 0,
      countryCode: "eg",
      qualityClass: 0,
      reviewScoreWord: "Excellent",
      position: 0,
    },
  },
  {
    hotel_id: 6974545,
    accessibilityLabel:
      "Jewel Maadi Cabins and Club.\n4 out of 5 stars.\n6.7 Pleasant 385 reviews.\n‎8 km from center‬.\n Hotel room : 2 beds.\nOriginal price 7933 AED. Current price 6346 AED..\n+1714 AED taxes and charges.",
    property: {
      optOutFromGalleryChanges: 0,
      countryCode: "eg",
      position: 1,
      reviewScoreWord: "Pleasant",
      qualityClass: 0,
      checkoutDate: "2024-01-04",
      mainPhotoId: 283063123,
      priceBreakdown: {
        taxExceptions: [],
        benefitBadges: [
          {
            variant: "constructive",
            explanation: "Late Escape Deal",
            text: "Late Escape Deal",
            identifier: "Late Escape Campaign",
          },
        ],
        excludedPrice: {
          currency: "AED",
          value: 1713.51157077576,
        },
        grossPrice: {
          currency: "AED",
          value: 6346.33915102135,
        },
        strikethroughPrice: {
          currency: "AED",
          value: 7932.92393877668,
        },
      },
      blockIds: ["697454502_295318462_0_41_0"],
      checkin: {
        untilTime: "23:30",
        fromTime: "13:00",
      },
      reviewScore: 6.7,
      rankingPosition: 1,
      ufi: -290692,
      accuratePropertyClass: 4,
      latitude: 29.9724511787105,
      wishlistName: "Cairo",
      name: "Jewel Maadi Cabins and Club",
      currency: "USD",
      id: 6974545,
      checkout: {
        fromTime: "11:30",
        untilTime: "12:00",
      },
      propertyClass: 4,
      reviewCount: 385,
      photoUrls: [
        "https://cf.bstatic.com/xdata/images/hotel/square60/283063123.jpg?k=4b591b61ce65a12174897ee1377c0e55bd3eaccff20b84e42ac4c37d156d4221&o=",
      ],
      longitude: 31.2348639335212,
      isFirstPage: true,
      checkinDate: "2023-11-29",
    },
  },
  {
    hotel_id: 3792670,
    accessibilityLabel:
      "Pension Roma.\n8.3 Very Good 285 reviews.\n‎1.2 km from center‬.\n Room with shared bathroom : 1 bed.\n3160 AED.\n+915 AED taxes and charges.",
    property: {
      isFirstPage: true,
      longitude: 31.24457,
      checkinDate: "2023-11-29",
      reviewCount: 285,
      photoUrls: [
        "https://cf.bstatic.com/xdata/images/hotel/square60/152824065.jpg?k=03df12d1d826b1b8a2b3cd9320bd6c8bcc8bd443c37e014ce5477c027c7282df&o=",
      ],
      propertyClass: 0,
      id: 3792670,
      currency: "USD",
      name: "Pension Roma",
      checkout: {
        untilTime: "12:00",
        fromTime: "00:00",
      },
      isPreferred: true,
      latitude: 30.052073,
      wishlistName: "Cairo",
      ufi: -290692,
      rankingPosition: 2,
      accuratePropertyClass: 0,
      reviewScore: 8.3,
      checkin: {
        fromTime: "12:00",
        untilTime: "00:00",
      },
      blockIds: ["379267010_120707732_2_1_0"],
      priceBreakdown: {
        taxExceptions: [],
        benefitBadges: [],
        excludedPrice: {
          currency: "AED",
          value: 915.019832776302,
        },
        grossPrice: {
          currency: "AED",
          value: 3159.94803561271,
        },
      },
      mainPhotoId: 152824065,
      checkoutDate: "2024-01-04",
      position: 2,
      qualityClass: 0,
      reviewScoreWord: "Very Good",
      countryCode: "eg",
      optOutFromGalleryChanges: 0,
    },
  },
]);

const fetchHotels = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: destinationID,
      search_type: "CITY",
      arrival_date: checkinDate,
      departure_date: checkoutDate,
      adults: adults,
      children_age: "0,17",
      room_qty: rooms,
      page_number: "1",
      languagecode: "en-us",
      currency_code: "AED",
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
