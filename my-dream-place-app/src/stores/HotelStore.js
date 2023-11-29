import { defineStore } from "pinia";
import axios from "axios";
export const useHotelStore = defineStore("hotelStore", {
  state: () => ({
    selectedHotelData: null,
    hotelDetails: null,
    selectedHotelDataFromStorage: JSON.parse(
      localStorage.getItem("currentHotel")
    ),
    hotelDetailsFromStorage: JSON.parse(localStorage.getItem("hotelDetails")),
  }),
  actions: {
    setselectedHotelData(selectedHotelData) {
      this.selectedHotelData = selectedHotelData;
      localStorage.setItem("currentHotel", JSON.stringify(selectedHotelData));
      console.log(selectedHotelData);
    },
    async fetchHotelDetails() {
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
          "X-RapidAPI-Key":
            "aa6815ec37mshb30415e70af8a7ap17f7dbjsnc00c26bcbbd6",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        this.hotelDetails = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    getSelectedHotel() {
      const hotel = localStorage.getItem("selectedHotel");
      return hotel ? JSON.parse(hotel) : this.fetchHotelDetails();
    },

    removeSlectedHotel() {
      localStorage.removeItem("selectedHotel");
    },
  },
  getters: {
    // getselectedHotelData: (state) => state.selectedHotelData,
    // getHotelDetails: (state) => state.hotelDetails,
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
  },
});
