<template>
  <div class="api_container color-white relative">
    <section
      class="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 scroll-mt-17"
    >
      <div class="mx-auto px-4 sm:px-8 xl:px-0" style="width: 80%">
        <div class="relative top-18">
          <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden -my-55">
            <template v-for="(item, index) in svgArr" :key="index">
              <div class="absolute left-1/2 -translate-x-1/2 top-0">
                <img :src="getImageSrc(item.src)" alt="icon" />
              </div>
            </template>
          </div>
          <div
            class="max-w-[830px] w-full h-[830px] rounded-full bg-dark absolute left-1/2 -translate-x-1/2 top-0 pricing-circle"
          ></div>
          <starAnimation />
        </div>
        <div class="flex justify-center gap-7.5 relative -z-1">
          <template v-for="item in 8" :key="item">
            <div
              class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"
            ></div>
          </template>
        </div>
        <div class="wow fadeInUp mb-17.5 -mt-24 text-center z-10 relative">
          <starBtn class="inline-block" context="  Get access "></starBtn>
          <h2
            class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2"
          >
            Our Pricing Plan
          </h2>
          <p class="max-w-[714px] mx-auto font-medium md:text-lg color-grayText">
            Effortlessly integrate applications, streamline workflows, and enhance
            collaboration. Seamlessly bridge diverse systems for real-time data exchange.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7.5">
          <template v-for="(item, index) in priceArr" :key="index">
            <div
              class="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border"
            >
              <span class="absolute right-9 top-9">
                <img src="@/assets/svg/pricing-icon-01.svg" alt="" />
              </span>
              <h3 class="font-semibold text-heading-6 text-white mb-5.5">
                {{ item.type }}
              </h3>
              <div class="flex items-center gap-3.5">
                <h2 class="font-bold text-custom-1 pricing-gradient-text">
                  {{ item.price + index * 15 }}
                </h2>
                <p class="font-medium color-grayText">/month <br /></p>
              </div>
              <div class="my-10 w-full h-[1px] pricing-gradient-divider"></div>
              <ul class="flex flex-col gap-4">
                <li class="flex items-center gap-5">
                  <img src="@/assets/svg/pricing-icon-04.svg" alt="icon" />
                  <span class="font-medium color-grayText">Toonme API</span>
                </li>
                <li class="flex items-center gap-5">
                  <img src="@/assets/svg/pricing-icon-04.svg" alt="icon" />
                  <span class="font-medium color-grayText">100 requests / month</span>
                </li>
                <li class="flex items-center gap-5">
                  <img src="@/assets/svg/pricing-icon-04.svg" alt="icon" />
                  <span class="font-medium color-grayText">25 requests / minute</span>
                </li>
              </ul>
              <a
                href="/"
                class="mt-11 flex items-center justify-center gap-1.5 font-medium text-white p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button"
              >
                Get the plan
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <p class="mt-4 text-sm text-center">
                <a
                  href="/"
                  target="_blank"
                  class="color-grayText"
                  style="text-decoration: underline"
                  >Documentation</a
                >
              </p>
              <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span class="absolute left-0 bottom-0 -z-1">
                  <img src="@/assets/svg/blur-16.svg" alt="blur" class="max-w-none" />
                </span>
                <span class="absolute left-0 top-0 -z-1">
                  <img src="@/assets/svg/blur-17.svg" alt="blur" class="max-w-none" />
                </span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
    <section
      class="relative overflow-hidden pb-17.5 lg:pb-22.5 xl:pb-27.5 pt-20 lg:pt-25"
    >
      <div
        class="about-divider-gradient max-w-[1170px] w-full h-[1px] absolute top-0 left-1/2 -translate-x-1/2"
      ></div>
      <div class="max-w-[770px] mx-auto px-4 sm:px-8 xl:px-0">
        <div class="wow fadeInUp mb-20 text-center" style="visibility: visible">
          <starBtn
            context="
           Questions About our platform?
           "
            class="inline-block"
          ></starBtn>
          <h2
            class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2"
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div class="wow fadeInUp" style="visibility: visible">
          <div class="text-xl">
            <div class="flex flex-col border-b border-white/[0.15]">
              <h4
                @click="selected !== 0 ? (selected = 0) : (selected = null)"
                class="cursor-pointer flex justify-between items-center font-semibold leading-[28px] py-5 lg:py-7 text-white"
                :class="selected == 0 ? 'text-white' : 'color-grayText'"
              >
                When CAPIX is complete released ?
                <span :class="selected == 0 ? 'hidden' : 'block'">
                  <svg
                    class="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 11.1752H12.8625V1.5002C12.8625 1.0502 12.4875 0.637695 12 0.637695C11.55 0.637695 11.1375 1.0127 11.1375 1.5002V11.1752H1.50001C1.05001 11.1752 0.637512 11.5502 0.637512 12.0377C0.637512 12.4877 1.01251 12.9002 1.50001 12.9002H11.175V22.5002C11.175 22.9502 11.55 23.3627 12.0375 23.3627C12.4875 23.3627 12.9 22.9877 12.9 22.5002V12.8627H22.5C22.95 12.8627 23.3625 12.4877 23.3625 12.0002C23.3625 11.5502 22.95 11.1752 22.5 11.1752Z"
                      fill=""
                    ></path>
                  </svg>
                </span>
                <span :class="selected == 0 ? 'block' : 'hidden'" class="block">
                  <svg
                    width="22"
                    height="2"
                    viewBox="0 0 22 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.125 1.86263H0.875012C0.425012 1.86263 0.0125122 1.48763 0.0125122 1.00013C0.0125122 0.550134 0.387512 0.137634 0.875012 0.137634H21.125C21.575 0.137634 21.9875 0.512634 21.9875 1.00013C21.9875 1.45013 21.575 1.86263 21.125 1.86263Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
              </h4>
              <p v-if="selected == 0" class="font-medium pb-7 color-grayText">
                CAPIX will be released from April 1, 2024. You will be able to use all
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <commonFooter></commonFooter>
  </div>
</template>

<script setup>
const svgArr = [
  {
    src: "blur-13",
  },
  {
    src: "blur-14",
  },
  {
    src: "blur-15",
  },
];
const priceArr = [
  {
    type: "Basic",
    price: 0,
  },
  {
    type: "Pro",
    price: 0,
  },
  {
    type: "Ultra",
    price: 0,
  },
  {
    type: "Mega",
    price: 0,
  },
  {
    type: "Basic",
    price: 0,
  },
  {
    type: "Pro",
    price: 0,
  },
  {
    type: "Ultra",
    price: 0,
  },
  {
    type: "Mega",
    price: 0,
  },
  {
    type: "Basic",
    price: 0,
  },
  {
    type: "Pro",
    price: 0,
  },
  {
    type: "Ultra",
    price: 0,
  },
  {
    type: "Mega",
    price: 0,
  },
];
const selected = ref(null);
const svgIcons = useAllSvgs();
const getImageSrc = (filename) => {
  return svgIcons[filename] ? svgIcons[filename].name : "";
};
</script>

<style lang="scss" scoped>
.api_container {
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  .pricing-grid-border {
    border-left: 1px solid;
    border-right: 1px solid;
    border-image-source: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.075) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-image-slice: 1;
  }

  .pricing-grid {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0)),
      to(rgba(255, 255, 255, 0.06))
    );
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    opacity: 0.3;
  }
  .bg-dark {
    --tw-bg-opacity: 1;
    background-color: rgb(3 0 20 / var(--tw-bg-opacity));
  }
  .pricing-circle:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    -webkit-mask: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff))
        content-box,
      -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.3)),
      color-stop(28.19%, rgba(255, 255, 255, 0))
    );
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 28.19%
    );
  }
  .pricing-item-border:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    -webkit-mask: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff))
        content-box,
      -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    background: linear-gradient(
      47deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .pricing-gradient-text {
    background: -webkit-linear-gradient(0deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%),
      -webkit-linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-custom-1 {
    font-size: 45px;
    line-height: 55px;
  }
  .pricing-gradient-divider {
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from(rgba(255, 255, 255, 0)),
      color-stop(49.48%, rgba(255, 255, 255, 0.12)),
      to(rgba(255, 255, 255, 0))
    );
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.12) 49.48%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .pricing-button-gradient {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(255, 255, 255, 0))
    );
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .pricing-button-gradient:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    -webkit-mask: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff))
        content-box,
      -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0.01%, #e59cff),
      color-stop(50.01%, #ba9cff),
      to(#9cb2ff)
    );
    background-image: linear-gradient(90deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%);
  }
  .about-divider-gradient {
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from(rgba(255, 255, 255, 0)),
      color-stop(49.48%, rgba(255, 255, 255, 0.15)),
      to(rgba(255, 255, 255, 0))
    );
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.15) 49.48%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
</style>
