<template>
  <div class="api_container color-white relative">
    <section
      class="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 scroll-mt-17"
    >
      <div class="mx-auto px-4 sm:px-8 xl:px-0">
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
                <img src="@/asstes/svg/pricing-icon-01.svg" alt="" />
              </span>
            </div>
          </template>
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
}
</style>
