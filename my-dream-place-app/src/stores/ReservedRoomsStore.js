import { defineStore } from "pinia";
export const useHotelsOfreservedRoomsStore = defineStore(
  "hotelsOfreservedRoomsStore",
  {
    state: () => ({
      hotelsOfreservedRooms: [],
      hotelsOfreservedRoomsFromStorage: JSON.parse(
        localStorage.getItem("hotelsOfreservedRooms")
      ),
      isTripsLoading: true,
    }),

    actions: {
      addHotelOfReservedRoom(room) {
        this.isTripsLoading = true;
        this.hotelsOfreservedRooms = [...this.hotelsOfreservedRooms, room];
        console.log("Reserved rooms: ", this.hotelsOfreservedRooms);
        localStorage.setItem(
          "hotelsOfreservedRooms",
          JSON.stringify(this.hotelsOfreservedRooms)
        );
        this.isTripsLoading = false;
      },
    },

    getters: {
      gethotelsOfreservedRooms: (state) => {
        return state.hotelsOfreservedRoomsFromStorage
          ? state.hotelsOfreservedRoomsFromStorage
          : [];
      },
      getIsTripsLoading: (state) => state.isTripsLoading,
    },
  }
);
