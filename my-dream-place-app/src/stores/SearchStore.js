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
    setCurrenPage(page) {
      this.currentPage = page;
    },
    getFormattedCheckinDate() {
      if (this.selectedDates.checkInDate != null) {
        const dateArray = this.selectedDates.checkInDate.split(".");

        const day = dateArray[0] ? dateArray[0].padStart(2, "0") : "01";
        const month = dateArray[1] ? dateArray[1].padStart(2, "0") : "01";

        const formattedCheckinDate = dateArray[2] + "-" + month + "-" + day;
        // console.log(formattedCheckinDate);
        return formattedCheckinDate;
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
      console.log(
        this.selectedDistID,
        this.searchType,
        this.selectedDates,
        this.selectedGuests,
        this.selectedRooms,
        this.currentPage,
        this.getFormattedCheckinDate(),
        this.getFormattedCheckoutDate()
      );
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
        params: {
          dest_id: this.selectedDistID,
          search_type: this.searchType,
          arrival_date: this.getFormattedCheckinDate(),
          departure_date: this.getFormattedCheckoutDate(),
          adults: this.selectedGuests,
          children_age: "0,17",
          room_qty: this.selectedRooms,
          page_number: this.currentPage,
          languagecode: "en-us",
          currency_code: "usd",
        },
        headers: {
          "X-RapidAPI-Key":
            "aa6815ec37mshb30415e70af8a7ap17f7dbjsnc00c26bcbbd6",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response);
        // console.log(response.data.data.hotels);
        this.hotels = response.data.data.hotels;
        return this.hotels;
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
        params: { query: "egypt" },
        headers: {
          "X-RapidAPI-Key":
            "aa6815ec37mshb30415e70af8a7ap17f7dbjsnc00c26bcbbd6",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        this.destinations = response.data.data;
        console.log(this.destinations);
        localStorage.setItem("destinations", JSON.stringify(this.destinations));
        return this.destinations;
      } catch (error) {
        console.error(error);
      }
    },
    getDestinations() {
      const dists = localStorage.getItem("destinations");
      console.log(dists);
      return dists ? JSON.parse(dists) : this.fetchDestinations();
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
  },
});
