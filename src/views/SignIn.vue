<template>
  <div class="SignIn_container color-white relative">
    <section class="relative z-10 pt-30 lg:pt-35 xl:pt-40 pb-18">
      <lineBg />
      <div class="text-center px-4">
        <h1 class="font-extrabold text-heading-2 text-4xl text-white mb-5.5">Sign in</h1>
      </div>
    </section>
    <section class="pt-20 lg:pt-25 pb-17.5 lg:pb-22.5 xl:pb-27.5">
      <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div class="wow fadeInUp rounded-3xl bg-white/[0.05]">
          <div class="flex">
            <div class="hidden lg:block w-full lg:w-1/2">
              <div class="relative py-20 pl-17.5 pr-22">
                <div
                  class="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0"
                ></div>
                <h2
                  class="max-w-[292px] font-bold text-white text-heading-4 mb-10 text-2xl"
                >
                  Become a member of CAPIX platform
                </h2>
                <img src="@/assets/svg/sigin.svg" alt="signin" />
              </div>
            </div>
            <div class="w-full lg:w-1/2 flex flex-col justify-center">
              <div class="py-8 sm:py-20 pl-8 sm:pl-21 pr-8 sm:pr-20">
                <form @submit.prevent="handleSubmit" class="color-grayText">
                  <div class="mb-4 relative">
                    <span class="absolute top-1/2 -translate-y-1/2 left-6">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9998 0.399994H1.9998C1.1498 0.399994 0.424805 1.09999 0.424805 1.97499V10.075C0.424805 10.925 1.1248 11.65 1.9998 11.65H13.9998C14.8498 11.65 15.5748 10.95 15.5748 10.075V1.94999C15.5748 1.09999 14.8498 0.399994 13.9998 0.399994ZM13.9998 1.52499C14.0248 1.52499 14.0498 1.52499 14.0748 1.52499L7.9998 5.42499L1.9248 1.52499C1.9498 1.52499 1.9748 1.52499 1.9998 1.52499H13.9998ZM13.9998 10.475H1.9998C1.7498 10.475 1.5498 10.275 1.5498 10.025V2.62499L7.3998 6.37499C7.5748 6.49999 7.7748 6.54999 7.9748 6.54999C8.1748 6.54999 8.3748 6.49999 8.5498 6.37499L14.3998 2.62499V10.05C14.4498 10.3 14.2498 10.475 13.9998 10.475Z"
                          fill="#918EA0"
                        ></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      v-model="username"
                      placeholder="Enter your username"
                      name="username"
                      class="text-white w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14.5 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none"
                    />
                  </div>
                  <div class="mb-5 relative">
                    <span class="absolute top-1/2 -translate-y-1/2 left-6">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_368_6544)">
                          <path
                            d="M14.0752 1.92501C13.1252 0.975012 11.8502 0.450012 10.5002 0.450012C9.1502 0.450012 7.8502 0.975012 6.9002 1.92501C5.6252 3.20001 5.1252 5.00001 5.5752 6.75001L0.725195 11.575C0.550195 11.75 0.450195 12 0.450195 12.275V14.6C0.450195 15.125 0.875195 15.575 1.4252 15.575H3.7502C4.0002 15.575 4.2502 15.475 4.4502 15.3L5.0252 14.725C5.2252 14.525 5.3502 14.225 5.3002 13.925V13.875L5.6002 13.85C6.0752 13.8 6.4252 13.45 6.4752 12.975L6.5002 12.675H6.5502C6.8252 12.7 7.1002 12.625 7.3252 12.425C7.5252 12.25 7.6502 11.975 7.6502 11.7V11.5H7.8252C8.0752 11.5 8.3252 11.4 8.5002 11.225L9.3252 10.425C11.0502 10.85 12.8502 10.375 14.1002 9.12501C16.0502 7.12501 16.0502 3.90001 14.0752 1.92501ZM13.2752 8.30001C12.2502 9.32501 10.7252 9.70001 9.3002 9.22501C9.1002 9.15001 8.8752 9.20001 8.7252 9.35001L7.7252 10.35H7.0502C6.7502 10.35 6.4752 10.6 6.4752 10.925V11.525L6.0252 11.475C5.8752 11.45 5.7252 11.5 5.6002 11.6C5.4752 11.7 5.4002 11.825 5.4002 11.975L5.3252 12.725L4.5752 12.8C4.4252 12.825 4.2752 12.9 4.2002 13C4.1002 13.125 4.0502 13.275 4.0752 13.425L4.1502 13.975L3.6752 14.45H1.5752V12.35L6.6002 7.32501C6.7502 7.17501 6.8002 6.95001 6.7252 6.75001C6.2752 5.32501 6.6252 3.80001 7.6752 2.75001C8.4252 2.00001 9.4002 1.60001 10.4752 1.60001C11.5252 1.60001 12.5252 2.00001 13.2752 2.75001C14.8252 4.25001 14.8252 6.75001 13.2752 8.30001Z"
                            fill="#918EA0"
                          ></path>
                          <path
                            d="M11.3498 2.875C10.8748 2.875 10.4248 3.05 10.0748 3.4C9.3748 4.1 9.3748 5.225 10.0748 5.925C10.4248 6.275 10.8748 6.45 11.3498 6.45C11.8248 6.45 12.2748 6.275 12.6248 5.925C12.9748 5.575 13.1498 5.125 13.1498 4.65C13.1498 4.175 12.9748 3.725 12.6248 3.375C12.2748 3.05 11.8248 2.875 11.3498 2.875ZM11.8248 5.125C11.5748 5.375 11.1248 5.375 10.8748 5.125C10.6248 4.875 10.6248 4.45 10.8748 4.175C10.9998 4.05 11.1748 3.975 11.3498 3.975C11.5248 3.975 11.6998 4.05 11.8248 4.175C11.9498 4.3 12.0248 4.475 12.0248 4.65C12.0248 4.825 11.9498 5 11.8248 5.125Z"
                            fill="#918EA0"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_368_6544">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <input
                      type="password"
                      v-model="password"
                      placeholder="Password"
                      name="password"
                      class="text-white w-full border border-white/[0.12] color-grayText bg-transparent rounded-lg focus:border-purple pl-14.5 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none"
                    />
                  </div>
                  <div class="flex items-center justify-between mb-7.5">
                    <div class="color-grayText">
                      <label
                        for="checkboxLabelTwo"
                        class="flex cursor-pointer select-none items-center font-medium text-sm"
                      >
                        <div class="relative">
                          <input
                            v-model="rememberMe"
                            type="checkbox"
                            id="checkboxLabelTwo"
                            class="sr-only"
                            @change="checkboxToggle = !checkboxToggle"
                          />
                          <div
                            :class="
                              checkboxToggle ? 'border-purple bg-purple' : 'bg-purple1'
                            "
                            class="mr-2 flex h-5 w-5 items-center justify-center rounded-md border border-white/[0.12]"
                          >
                            <span
                              :class="checkboxToggle ? '!opacity-100' : ''"
                              class="opacity-0"
                            >
                              <svg
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#FFF"
                                  stroke="#FF"
                                  stroke-width="0.4"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        Remember me
                      </label>
                    </div>
                    <a href="/#" class="font-medium text-sm text-purple"
                      >Forgot Password?</a
                    >
                  </div>

                  <button
                    type="submit"
                    class="hero-button-gradient flex justify-center w-full rounded-lg py-3 px-7 text-base text-white font-medium ease-in duration-300 hover:opacity-80"
                  >
                    Sign in
                  </button>
                  <p class="text-center text-base font-medium text-white mt-5">
                    Don't have an account?
                    <a href="/signup/" class="text-purple">Sign Up for Free</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <commonFooter></commonFooter>
  </div>
</template>

<script setup>
const checkboxToggle = ref(false);

const username = ref("");
const password = ref("");
const rememberMe = ref(false);
const handleSubmit = () => {
  if (!username.value || !password.value) {
    alert("Please enter both username and password");
    return;
  }

  if (username.value && password.value) {
    alert("Login successful!");

    if (rememberMe.value) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("rememberMe", rememberMe.value);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("rememberMe");
    }
  }
};
// 读取本地存储中的用户名和记住我状态
onMounted(() => {
  const savedUsername = localStorage.getItem("username");
  const savedRememberMe = localStorage.getItem("rememberMe") === "true";

  if (savedUsername && savedRememberMe) {
    username.value = savedUsername;
    rememberMe.value = savedRememberMe;
  }
});
</script>

<style lang="scss" scoped>
.SignIn_container {
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  .bg-purple {
    --tw-bg-opacity: 1;
    background-color: rgb(134 70 244 / var(--tw-bg-opacity));
  }
  .bg-unselected {
    border-color: rgb(134 70 244 / var(--tw-border-opacity));
  }
  .border-white\/\[0\.12\] {
    border-color: rgb(255 255 255 / 0.12);
  }
  .border-purple {
    --tw-border-opacity: 1;
    border-color: rgb(134 70 244 / var(--tw-border-opacity));
  }
  .hero-button-gradient {
    -webkit-box-shadow: 0 -3px 10px 0 #00000040 inset;
    box-shadow: 0 -3px 10px 0 #00000040 inset;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(-11.11%, #a073ee),
      to(#6e25ed)
    );
    background: linear-gradient(180deg, #a073ee -11.11%, #6e25ed 100%);
  }
}
</style>
