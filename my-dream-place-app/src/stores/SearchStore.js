import { defineStore } from "pinia";

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
    results: null,
    searchType: null,
  }),
  actions: {
    setDistination(dist) {
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
    setResults(results) {
      this.results = results;
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
  },
  getters: {
    getselectedDistID: (state) => state.selectedDistID,
    getSelectedDates: (state) => state.selectedDates,
    getSelectedGuests: (state) => state.selectedGuests,
    getSelectedRooms: (state) => state.selectedRooms,
    getResults: (state) => state.results,
    getSearchType: (state) => state.searchType,
    getselectedDistName: (state) => state.selectedDistName,
  },
});
