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
  },
  getters: {
    getSelectedDist: (state) => state.selectedDist,
    getSelectedDates: (state) => state.selectedDates,
    getSelectedGuests: (state) => state.selectedGuests,
    getSelectedRooms: (state) => state.selectedRooms,
  },
});
