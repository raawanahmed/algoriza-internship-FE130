import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config";
export const useHotelStore = defineStore("hotelStore", {
  state: () => ({
    selectedHotelData: null,
    hotelDetails: null,
    selectedHotelDataFromStorage: JSON.parse(
      localStorage.getItem("currentHotel")
    ),
    hotelDetailsFromStorage: JSON.parse(localStorage.getItem("hotelDetails")),
    isHotelLoading: false,
  }),
  actions: {
    setselectedHotelData(selectedHotelData) {
      this.selectedHotelData = selectedHotelData;
      localStorage.setItem("currentHotel", JSON.stringify(selectedHotelData));
      console.log(selectedHotelData);
    },
    setIsHotelLoading(isLoading) {
      this.isHotelLoading = isLoading;
    },
    calcDifferenceInDays(checkin, checkout) {
      console.log(checkin, checkout);
      const checkinDateParts = checkin.split("-");
      const checkoutDateParts = checkout.split("-");

      if (checkinDateParts.length !== 3 || checkoutDateParts.length !== 3) {
        console.error("Invalid date format");
        return 0;
      }

      const checkinDate = new Date(
        parseInt(checkinDateParts[0], 10),
        parseInt(checkinDateParts[1], 10) - 1,
        parseInt(checkinDateParts[2], 10)
      );

      const checkoutDate = new Date(
        parseInt(checkoutDateParts[0], 10),
        parseInt(checkoutDateParts[1], 10) - 1,
        parseInt(checkoutDateParts[2], 10)
      );

      if (isNaN(checkinDate) || isNaN(checkoutDate)) {
        console.error("Invalid date format");
        return 0;
      }

      const differenceInMilliseconds = checkoutDate - checkinDate;
      const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
      const roundedDifferenceInDays = Math.round(differenceInDays);

      console.log(`The difference is ${roundedDifferenceInDays} days.`);

      return roundedDifferenceInDays;
    },
    async fetchHotelDetails() {
      this.isHotelLoading = true;
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
        params: {
          hotel_id: this.getselectedHotelData.hotel_id,
          arrival_date: this.getselectedHotelData.property.checkinDate,
          departure_date: this.getselectedHotelData.property.checkoutDate,
          adults: "1",
          children_age: "1,17",
          room_qty: "1",
          languagecode: "en-us",
          currency_code: "USD",
        },
        headers: {
          "X-RapidAPI-Key": config.rapidApiKey,
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        this.hotelDetails = response.data;
        console.log(this.hotelDetails);
      } catch (error) {
        console.error(error);
      } finally {
        this.isHotelLoading = false;
        console.log(this.isHotelLoading);
      }
    },
  },
  getters: {
    getselectedHotelData: (state) => {
      return (
        state.selectedHotelData ||
        (state.selectedHotelDataFromStorage
          ? state.selectedHotelDataFromStorage
          : null)
      );
    },
    getHotelDetails: (state) => {
      return (
        state.hotelDetails ||
        (state.hotelDetailsFromStorage ? state.hotelDetailsFromStorage : null)
      );
    },
    getIsHotelLoading: (state) => state.isHotelLoading,
    getDifferenceInDays: (state) => state.differenceInDays,
  },
});
