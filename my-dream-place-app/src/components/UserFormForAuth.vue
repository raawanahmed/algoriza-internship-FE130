<template>
  <header class="flex w-full mx-auto" style="max-width: 1440px">
    <nav
      class="flex justify-between items-center w-full mx-auto"
      style="height: 68px; margin-left: 100px; margin-right: 100px"
    >
      <div class="flex items-center gap-1">
        <img src="../assets/Icons/plane.svg" alt="Plane Icon" class="w-6 h-6" />
        <p class="text-lg font-semibold text-gray-900 tracking-wide">
          my Dream Place
        </p>
      </div>
    </nav>
  </header>

  <main>
    <h1
      class="mb-10 font-semibold mt-24 text-center"
      style="color: #181818; font-size: 28px"
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
          style="width: 400px; background: var(--Gray-6, #f2f2f2)"
          class="h-11 p-3 mb-5 rounded"
          v-model="email"
        />
        <label for="password" class="mb-1 font-medium text-sm">Password</label>
        <div
          class="relative"
          style="width: 400px; background: var(--Gray-6, #f2f2f2)"
        >
          <input
            name="password"
            style="width: 400px; background: var(--Gray-6, #f2f2f2)"
            class="h-11 p-3 pr-10 rounded"
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
          <div
            class="relative"
            style="width: 400px; background: var(--Gray-6, #f2f2f2)"
          >
            <input
              name="confirmPassword"
              style="width: 400px; background: var(--Gray-6, #f2f2f2)"
              class="h-11 p-3 pr-10 rounded"
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
          class="font-medium justify-center items-center rounded border border-blue-500 bg-blue-500 text-white mt-8 mb-5"
          style="width: 400px; height: 43px"
          @click="onBtnClick"
        >
          {{ textBasedOnTheView }}
        </button>
      </form>
    </div>
    <div class="flex gap-1 text-base justify-center" v-if="isSignIn">
      <p style="color: var(--Gray-2, #4f4f4f)">Don’t have an account?</p>
      <router-link
        to="/register"
        class="text-blue-500 hover:underline text-center"
        >Register</router-link
      >
    </div>
    <div class="flex gap-1 text-base justify-center" v-if="!isSignIn">
      <p style="color: var(--Gray-2, #4f4f4f)">Already have an account?</p>
      <router-link
        to="/signin"
        class="text-blue-500 hover:underline text-center"
        >Sign in</router-link
      >
    </div>
    <router-view />
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
  console.log("onMounteed");
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
      console.log(password.value, confirmPassword.value);
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
