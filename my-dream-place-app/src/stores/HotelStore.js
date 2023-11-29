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
          'X-RapidAPI-Key': '924823883dmsh16ad1bacff7225cp1eb10bjsn257e95885f2b',
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
  },
});
