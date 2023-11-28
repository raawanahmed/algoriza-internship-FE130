import { defineStore } from "pinia";
import axios from "axios";
export const useSearchDetailsStore = defineStore("searchDetailsStore", {
  state: () => ({
    selectedDestinationData: {
      selectedDestinationId: null,
      selectedDestinationName: null,
      selectedCheckinDate: null,
      selectedCheckoutDate: null,
      selectedGuests: null,
      selectedRooms: null,
    },
    hotelsCount: null,
    searchType: null,
    currentPage: 1,
    destinations: [],
    hotels: [],
    selectedDestinationFromStorage: JSON.parse(
      localStorage.getItem("searchData")
    ),
  }),
  actions: {
    getDateFormatted(date) {
      if (date != null) {
        const dateArray = date.split(".");

        const day = dateArray[0] ? dateArray[0].padStart(2, "0") : "01";
        const month = dateArray[1] ? dateArray[1].padStart(2, "0") : "01";

        const formattedDate = dateArray[2] + "-" + month + "-" + day;
        return formattedDate;
      }
    },
    setDestinationId(dest) {
      this.selectedDestinationData.selectedDestinationId = dest;
    },
    setDestinationName(name) {
      this.selectedDestinationData.selectedDestinationName = name;
    },
    setCheckinDate(checkinDate) {
      this.selectedDestinationData.selectedCheckinDate =
        this.getDateFormatted(checkinDate);
    },
    setCheckoutDate(checkoutDate) {
      this.selectedDestinationData.selectedCheckoutDate =
        this.getDateFormatted(checkoutDate);
    },
    setGuests(guests) {
      this.selectedDestinationData.selectedGuests = guests;
    },
    setRooms(rooms) {
      this.selectedDestinationData.selectedRooms = rooms;
    },
    setSeachDataToStorage(searchData) {
      localStorage.setItem("searchData", JSON.stringify(searchData));
    },
    setSearchType(searchType) {
      this.searchType = searchType;
    },
    setHotelsCount(hotelsCount) {
      this.hotelsCount = hotelsCount;
    },
    setCurrenPage(page) {
      this.currentPage = page;
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

    async fetchHotels() {
      console.log(this.getSelectedCheckinDate, this.getSelectedCheckoutDate);
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
        params: {
          dest_id: this.getSelectedDestinationId,
          search_type: "city",
          arrival_date: this.getSelectedCheckinDate,
          departure_date: this.getSelectedCheckoutDate,
          adults: this.getSelectedGuests,
          children_age: "0,17",
          room_qty: this.getSelectedRooms,
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
        this.hotels = response.data.data.hotels;
        return this.hotels;
        // totalPages.value = Math.ceil(totalHotels.value / 20);
        // console.log(response.data.data.meta.total, totalPages)
      } catch (error) {
        console.error(error);
      }
    },
    getDestinations() {
      const dests = localStorage.getItem("destinations");
      console.log("local: ", this.selectedDestinationFromStorage);
      return dests ? JSON.parse(dests) : this.fetchDestinations();
    },
  },
  getters: {
    getSelectedDestinationId: (state) => {
      return state.selectedDestinationData.selectedDestinationId;
    },
    getSelectedDestinationName: (state) => {
      return state.selectedDestinationData.selectedDestinationName;
    },
    getSelectedCheckinDate: (state) => {
      return state.selectedDestinationData.selectedCheckinDate;
    },
    getSelectedCheckoutDate: (state) => {
      return state.selectedDestinationData.selectedCheckoutDate;
    },
    getSelectedGuests: (state) => {
      return state.selectedDestinationData.selectedGuests;
    },
    getSelectedRooms: (state) => {
      return state.selectedDestinationData.selectedRooms;
    },
    getStorage: (state) => state.selectedDestinationFromStorage,
    getHotelsCount: (state) => state.hotelsCount,
    getSearchType: (state) => state.searchType,

    getHotels: (state) => state.hotels,
  },
});
