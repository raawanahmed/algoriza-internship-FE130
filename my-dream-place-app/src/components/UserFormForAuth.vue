<template>
  <main style="font-family: SF Pro Display, sans-serif">
    <header class="flex w-full mx-auto max-w-[1440px]">
      <nav class="flex justify-between items-center w-full mx-[100px] h-[68px]">
        <div class="flex items-center gap-1">
          <img
            src="../assets/Icons/plane.svg"
            alt="Plane Icon"
            class="w-6 h-6"
          />
          <p class="text-lg font-semibold text-gray-900 tracking-wide">
            my Dream Place
          </p>
        </div>
      </nav>
    </header>

    <div>
      <h1
        class="mb-10 font-semibold mt-24 text-center text-[28px] text-[#181818]"
      >
        {{ textBasedOnTheView }}
      </h1>
      <div class="flex flex-col items-center">
        <form action="" class="flex flex-col">
          <label for="email" class="mb-1 font-medium text-sm text-left">
            Email address</label
          >
          <input
            type="text"
            name="email"
            class="h-11 p-3 mb-5 rounded w-[400px] bg-[#f2f2f2]"
            v-model="email"
          />
          <label for="password" class="mb-1 font-medium text-sm"
            >Password</label
          >
          <div class="relative w-[400px] bg-[#f2f2f2]">
            <input
              name="password"
              class="h-11 p-3 pr-10 rounded w-[400px] bg-[#f2f2f2]"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
            />
            <img
              src="../assets/Icons/eye.svg"
              alt="see pass icon"
              class="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3"
              @click="showPassword = !showPassword"
            />
          </div>
          <div class="mt-5" v-if="!isSignIn">
            <label for="confirmPassword" class="mb-1 font-medium text-sm"
              >Confirm password</label
            >
            <div class="relative w-[400px] bg-[#f2f2f2]">
              <input
                name="confirmPassword"
                class="h-11 p-3 pr-10 rounded w-[400px] bg-[#f2f2f2]"
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="confirmPassword"
              />
              <img
                src="../assets/Icons/eye.svg"
                alt="see pass icon"
                class="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3"
                @click="showConfirmPassword = !showConfirmPassword"
              />
            </div>
          </div>
          <button
            class="font-medium justify-center items-center rounded border border-blue-500 bg-blue-500 text-white mt-8 mb-5 w-[400px] h-[43px]"
            @click="onBtnClick"
          >
            {{ textBasedOnTheView }}
          </button>
        </form>
      </div>
      <div class="flex gap-1 text-base justify-center" v-if="isSignIn">
        <p class="text-[#4f4f4f]">Don’t have an account?</p>
        <router-link
          to="/register"
          class="text-blue-500 hover:underline text-center"
          >Register</router-link
        >
      </div>
      <div class="flex gap-1 text-base justify-center" v-if="!isSignIn">
        <p class="text-[#4f4f4f]">Already have an account?</p>
        <router-link
          to="/signin"
          class="text-blue-500 hover:underline text-center"
          >Sign in</router-link
        >
      </div>
      <router-view />
    </div>
  </main>
</template>

<script setup>
import { ref, watch, defineProps, computed, onMounted } from "vue";
import { useAuthStore } from "@/stores/AuthStore";
import { useRouter } from "vue-router";
const { isSignIn } = defineProps(["isSignIn"]);
const textBasedOnTheView = computed(() => (isSignIn ? "Sign in" : "Register"));

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  authStore.init();
});
const onBtnClick = () => {
  // Simple form validation
  if (!email.value || !password.value) {
    alert("Please fill in all required fields.");
    return;
  }

  if (isSignIn) {
    const success = authStore.signIn({
      email: email.value,
      password: password.value,
    });
    success ? router.push("/home") : alert("Invalid email or password.");
  } else {
    if (password.value !== confirmPassword.value) {
      // console.log(password.value, confirmPassword.value);
      alert("Passwords do not match.");
      return;
    }
    const success = authStore.register({
      email: email.value,
      password: password.value,
    });
    success ? router.push("/home") : alert("Invalid email or password.");
  }
};
</script>
<style></style>
