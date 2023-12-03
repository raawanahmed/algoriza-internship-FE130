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
    generateToken(token) {
      const encodedToken = btoa(JSON.stringify(token));
      // console.log(encodedToken);
      return encodedToken;
    },
    verifyToken(password, token) {
      const decodedToken = JSON.parse(atob(token));
      // console.log(decodedToken);
      return password === decodedToken.password;
    },
    signIn({ email, password }) {
      const user = this.users.find((u) => u.email === email);
      // console.log(user);

      if (user && this.verifyToken(password, user.token)) {
        this.isAuthenticated = true;
        localStorage.setItem(
          "isAuthenticated",
          JSON.stringify(this.isAuthenticated)
        );
        return true;
      } else {
        return false;
      }
    },
    register({ email, password }) {
      const token = this.generateToken({ email, password });
      console.log(token);
      const newUser = { email, token };
      this.users.push(newUser);
      this.isAuthenticated = true;
      localStorage.setItem("users", JSON.stringify(this.users));
      return true;
    },
    getCurrentUser() {
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      return isAuthenticated ? JSON.parse(isAuthenticated) : undefined;
    },

    signOut() {
      this.isAuthenticated = false;
      // Remove all items from local storage except "users"
      Object.keys(localStorage).forEach((key) => {
        if (key !== "users") {
          localStorage.removeItem(key);
        }
      });
      router.push("/home");
    },
  },
});
