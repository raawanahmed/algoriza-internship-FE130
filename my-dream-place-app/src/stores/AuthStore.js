// useAuthStore.js
import router from "@/router";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    isAuthenticated: false,
    users: [],
  }),
  actions: {
    init() {
      const storedUsers = localStorage.getItem("users");
      // console.log(storedUsers);
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      }
    },
    signIn({ email, password }) {
      const user = this.users.find(
        (u) => u.email === email && u.password === password
      );
      //console.log(user);

      if (user) {
        this.user = user;
        this.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem(
          "isAuthenticated",
          JSON.stringify(this.isAuthenticated)
        );
        return true;
      } else {
        return false;
      }
    },
    getCurrentUser() {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : undefined;
    },
    register({ email, password }) {
      const newUser = {
        id: this.users.length + 1,
        email,
        password,
      };
      // console.log(newUser);
      this.users.push(newUser);
      this.user = newUser;
      this.isAuthenticated = true;
      localStorage.setItem("users", JSON.stringify(this.users));
      return true;
    },

    signOut() {
      this.user = null;
      this.isAuthenticated = false;
      router.push("/home");
      localStorage.clear();
    },
  },
});
