import { defineStore } from "pinia";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    selectedDist: null,
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
      this.selectedDist = dist;
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
      console.log("search type: ",searchType)
    },
    getFormattedCheckinDate() {
      if (this.selectedDates.checkInDate != null) {
        const dateArray = this.selectedDates.checkInDate.split(".");

        const month = dateArray[0] ? dateArray[0].padStart(2, "0") : "01";
        const day = dateArray[1] ? dateArray[1].padStart(2, "0") : "01";

        const formattedCheckinDate = dateArray[2] + "-" + month + "-" + day;
        // console.log(formattedCheckinDate);
        return formattedCheckinDate;
      }
    },
    getFormattedCheckoutDate() {
      if (this.selectedDates.checkOutDate != null) {
        const dateArray = this.selectedDates.checkOutDate.split(".");

        const month = dateArray[0] ? dateArray[0].padStart(2, "0") : "01";
        const day = dateArray[1] ? dateArray[1].padStart(2, "0") : "01";

        const formattedCheckoutDate = dateArray[2] + "-" + month + "-" + day;
        // console.log(formattedCheckoutDate);
        return formattedCheckoutDate;
      }
    },
  },
  getters: {
    getSelectedDist: (state) => state.selectedDist,
    getSelectedDates: (state) => state.selectedDates,
    getSelectedGuests: (state) => state.selectedGuests,
    getSelectedRooms: (state) => state.selectedRooms,
    getResults: (state) => state.results,
    getSearchType: (state) => state.searchType,
  },
});
