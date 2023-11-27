import { defineStore } from "pinia";
import axios from "axios";
export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    selectedDistID: null,
    selectedDistName: null,
    selectedDates: {
      checkInDate: null,
      checkOutDate: null,
    },
    selectedGuests: null,
    selectedRooms: null,
    hotelsCount: null,
    searchType: null,
    currentPage: 1,
    destinations: [],
    hotels: [],
  }),
  actions: {
    setDistinationID(dist) {
      this.selectedDistID = dist;
      console.log("dist: ", dist);
    },
    setCheckInDate(checkInDate) {
      this.selectedDates.checkInDate = checkInDate;
      console.log("checkin date: ", checkInDate);
    },
    setCheckOutDate(checkOutDate) {
      this.selectedDates.checkOutDate = checkOutDate;
      console.log("checkout date: ", checkOutDate);
    },
    setGuests(guests) {
      this.selectedGuests = guests;
      console.log("guests: ", guests);
    },
    setRooms(rooms) {
      this.selectedRooms = rooms;
      console.log("rooms: ", rooms);
    },
    setSearchType(searchType) {
      this.searchType = searchType;
      console.log("search type: ", searchType);
    },
    setDistinationName(name) {
      this.selectedDistName = name;
      console.log("dist name: ", name);
    },
    sethotelsCount(hotelsCount) {
      this.hotelsCount = hotelsCount;
    },
    getFormattedCheckinDate() {
      if (this.selectedDates.checkInDate != null) {
        const dateArray = this.selectedDates.checkInDate.split(".");

        const day = dateArray[0] ? dateArray[0].padStart(2, "0") : "01";
        const month = dateArray[1] ? dateArray[1].padStart(2, "0") : "01";

        const formattedCheckinDate = dateArray[2] + "-" + month + "-" + day;
        // console.log(formattedCheckinDate);
        return formattedCheckinDate.toString();
      }
    },
    getFormattedCheckoutDate() {
      if (this.selectedDates.checkOutDate != null) {
        const dateArray = this.selectedDates.checkOutDate.split(".");

        const day = dateArray[0] ? dateArray[0].padStart(2, "0") : "01";
        const month = dateArray[1] ? dateArray[1].padStart(2, "0") : "01";

        const formattedCheckoutDate = dateArray[2] + "-" + month + "-" + day;
        // console.log(formattedCheckoutDate);
        return formattedCheckoutDate;
      }
    },
    async fetchHotels() {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
        params: {
          dest_id: this.selectedDistID,
          search_type: this.searchType,
          arrival_date: this.selectedDates.checkInDate,
          departure_date: this.selectedDates.checkOutDate,
          adults: this.selectedGuests,
          children_age: "0,17",
          room_qty: this.selectedRooms,
          page_number: this.currentPage,
          languagecode: "en-us",
          currency_code: "usd",
        },
        headers: {
          "X-RapidAPI-Key":
            "c6f8dbff25mshb0322cd8edf15ffp1d087bjsnc1c70576c0f0",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.data.hotels);
        this.hotels = response.data.data.hotels;
        // totalPages.value = Math.ceil(totalHotels.value / 20);
        // console.log(response.data.data.meta.total, totalPages)
      } catch (error) {
        console.error(error);
      }
    },
    async fetchDestinations() {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
        params: { query: "Egypt" },
        headers: {
          "X-RapidAPI-Key":
            "c6f8dbff25mshb0322cd8edf15ffp1d087bjsnc1c70576c0f0",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        this.destinations = response.data.data;
        console.log(this.destinations);
        return this.destinations;
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getselectedDistID: (state) => state.selectedDistID,
    getSelectedDates: (state) => state.selectedDates,
    getSelectedGuests: (state) => state.selectedGuests,
    getSelectedRooms: (state) => state.selectedRooms,
    gethotelsCount: (state) => state.hotelsCount,
    getSearchType: (state) => state.searchType,
    getselectedDistName: (state) => state.selectedDistName,
    getHotels: (state) => state.hotels,
    getDestinations: (state) => state.destinations,
    getDestinations: async function () {
      await this.fetchDestinations(); 
      return this.destinations;
    },
  },
});
