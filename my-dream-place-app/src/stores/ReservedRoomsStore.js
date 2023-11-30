import { defineStore } from "pinia";
export const useHotelsOfreservedRoomsStore = defineStore(
  "hotelsOfreservedRoomsStore",
  {
    state: () => ({
      hotelsOfreservedRooms: [],
      hotelsOfreservedRoomsFromStorage: JSON.parse(
        localStorage.getItem("hotelsOfreservedRooms")
      ),
    }),

    actions: {
      addHotelOfReservedRoom(room) {
        this.hotelsOfreservedRooms = [...this.hotelsOfreservedRooms, room];
        console.log("Reserved rooms: ", this.hotelsOfreservedRooms);
        localStorage.setItem(
          "hotelsOfreservedRooms",
          JSON.stringify(this.hotelsOfreservedRooms)
        );
      },
    },

    getters: {
      gethotelsOfreservedRooms: (state) => {
        return state.hotelsOfreservedRoomsFromStorage
          ? state.hotelsOfreservedRoomsFromStorage
          : null;
      },
    },
  }
);
