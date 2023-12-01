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
    hotelsCountOfDist: null,
    currentPage: 1,
    destinations: [],
    hotels: [],
    selectedDestinationFromStorage: JSON.parse(
      localStorage.getItem("searchData")
    ),
    destinationIdFromStorage: JSON.parse(localStorage.getItem("destinationId")),
    hotelsCountOfDistFromStorage: JSON.parse(
      localStorage.getItem("hotelsCount")
    ),
    currentPageFromStorage: JSON.parse(localStorage.getItem("currentPage")),
    isDestinationsLoading: true,
    isHotelsLoading: true,
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
    setDestinationId(destinationId) {
      this.selectedDestinationData.selectedDestinationId = destinationId;
    },
    setDestinationName(name) {
      this.selectedDestinationData.selectedDestinationName = name;
    },
    setCheckinDate(checkinDate) {
      this.selectedDestinationData.selectedCheckinDate = checkinDate;
    },
    setCheckoutDate(checkoutDate) {
      this.selectedDestinationData.selectedCheckoutDate = checkoutDate;
    },
    setGuests(guests) {
      this.selectedDestinationData.selectedGuests = guests;
    },
    setRooms(rooms) {
      this.selectedDestinationData.selectedRooms = rooms;
    },
    setSeachDataToStorage(searchData) {
      console.log("SearchData", searchData);
      localStorage.setItem("searchData", JSON.stringify(searchData));
      console.log("local: ", this.selectedDestinationFromStorage);
    },
    setHotelsCount(hotelsCount) {
      this.hotelsCountOfDist = hotelsCount;
    },
    setCurrenPage(page) {
      this.currentPage = page;
      localStorage.setItem("currentPage", JSON.stringify(page));
    },
    setIsHotelsLoading(isLoading) {
      this.isHotelsLoading = isLoading;
    },
    async fetchDestinations() {
      this.isDestinationsLoading = true;
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
        params: { query: "egypt" },
        headers: {
          "X-RapidAPI-Key":
            "2a99baf621msh04c1651a83dfe2cp13bfa6jsnd533ded3fd81",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        this.destinations = response.data.data;
        // console.log(this.destinations);
        localStorage.setItem("destinations", JSON.stringify(this.destinations));
        return this.destinations;
      } catch (error) {
        console.error(error);
      } finally {
        this.isDestinationsLoading = false;
        console.log(this.isDestinationsLoading);
      }
    },

    async fetchHotels() {
      this.isHotelsLoading = true;
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
        params: {
          dest_id: this.getSelectedDestinationId,
          search_type: "city",
          arrival_date: this.getDateFormatted(this.getSelectedCheckinDate),
          departure_date: this.getDateFormatted(this.getSelectedCheckoutDate),
          adults: this.getSelectedGuests,
          children_age: "0,17",
          room_qty: this.getSelectedRooms,
          page_number: this.getCurrentPage,
          languagecode: "en-us",
          currency_code: "usd",
        },
        headers: {
          "X-RapidAPI-Key":
            "2a99baf621msh04c1651a83dfe2cp13bfa6jsnd533ded3fd81",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response);
        this.hotels = response.data.data.hotels;
        return this.hotels;
      } catch (error) {
        console.error(error);
      } finally {
        this.isHotelsLoading = false;
        console.log(this.isHotelsLoading);
      }
    },
    getNumberOfTotalPagesTotalPages(title) {
      console.log(title);
      const properties = title.match(/\d+/);

      if (properties) {
        const number = properties[0];
        console.log(number);
      } else {
        console.log("No number found in the title");
      }
      return Math.ceil(properties / 20);
    },
    async getDestinations() {
      const dests = localStorage.getItem("destinations");
      //console.log(dests);
      return dests ? JSON.parse(dests) : await this.fetchDestinations();
    },
    getDifferenceInDays() {
      console.log(this.selectedDestinationFromStorage);
      const checkinDateParts =
        this.selectedDestinationFromStorage.selectedCheckinDate.split(".");
      const checkoutDateParts =
        this.selectedDestinationFromStorage.selectedCheckoutDate.split(".");

      if (checkinDateParts.length !== 3 || checkoutDateParts.length !== 3) {
        console.error("Invalid date format");
        return 0;
      }

      const checkinDate = new Date(
        parseInt(checkinDateParts[2], 10),
        parseInt(checkinDateParts[1], 10) - 1,
        parseInt(checkinDateParts[0], 10)
      );

      const checkoutDate = new Date(
        parseInt(checkoutDateParts[2], 10),
        parseInt(checkoutDateParts[1], 10) - 1,
        parseInt(checkoutDateParts[0], 10)
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
  },

  getters: {
    getSelectedDestinationId: (state) => {
      return (
        state.selectedDestinationData.selectedDestinationId ||
        (state.destinationIdFromStorage ? state.destinationIdFromStorage : null)
      );
    },
    getSelectedDestinationName: (state) => {
      return (
        state.selectedDestinationData.selectedDestinationName ||
        (state.selectedDestinationFromStorage
          ? state.selectedDestinationFromStorage.selectedDestinationName
          : null)
      );
    },
    getSelectedCheckinDate: (state) => {
      return (
        state.selectedDestinationData.selectedCheckinDate ||
        (state.selectedDestinationFromStorage
          ? state.selectedDestinationFromStorage.selectedCheckinDate
          : null)
      );
    },
    getSelectedCheckoutDate: (state) => {
      return (
        state.selectedDestinationData.selectedCheckoutDate ||
        (state.selectedDestinationFromStorage
          ? state.selectedDestinationFromStorage.selectedCheckoutDate
          : null)
      );
    },
    getSelectedGuests: (state) => {
      return (
        state.selectedDestinationData.selectedGuests ||
        (state.selectedDestinationFromStorage
          ? state.selectedDestinationFromStorage.selectedGuests
          : null)
      );
    },
    getSelectedRooms: (state) => {
      return (
        state.selectedDestinationData.selectedRooms ||
        (state.selectedDestinationFromStorage
          ? state.selectedDestinationFromStorage.selectedRooms
          : null)
      );
    },
    getHotelsCountOfDist: (state) => {
      return (
        state.hotelsCountOfDist ||
        (state.hotelsCountOfDistFromStorage
          ? state.hotelsCountOfDistFromStorage
          : null)
      );
    },
    getCurrentPage: (state) => {
      return (
        state.currentPage ||
        (state.currentPageFromStorage ? state.currentPageFromStorage : null)
      );
    },
    getHotels: (state) => state.hotels,
    getIsisDestinationsLoading: (state) => state.isDestinationsLoading,
    getIsHotelLoading: (state) => state.isHotelsLoading,
  },
});
