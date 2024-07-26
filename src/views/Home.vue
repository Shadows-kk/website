<template>
  <div class="home_container color-white relative pt-250px">
    <section>
      <div
        class="part1 relative flex flex-col items-center text-center mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
        <starBtn context="Your Ultimate Creative Companion"></starBtn>
        <h1 class="w-900px text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1">
          Unleashing the Potential of Capix API Integration Platform
        </h1>
        <span class="max-w-[500px] mx-auto mb-9 font-medium md:text-lg color-grayText">
          Effortlessly integrate applications, streamline workflows, and enhance
          collaboration. Seamlessly bridge diverse systems for real-time data exchange.
        </span>
        <div
          class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 text-lg cursor-pointer">
          Start Your Free Trial
        </div>
        <img class="relative mt-17" src="@/assets/img/home_card1.png" alt="" />
      </div>
    </section>
    <section>
      <div
        class="part2 flex flex-col items-center text-center mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1 xl:pt-27.5">
        <starBtn context="Some of Main Features"></starBtn>
        <div class="text-center">
          <h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            Key Features of Our Platform
          </h2>
          <p class="max-w-[714px] mx-auto mb-5 font-medium md:text-lg color-grayText">
            Unlock the potential of effortless data exchange, empowering your ecosystem with
            unparalleled integration capabilities for a more connected and productive
            future.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="part3 relative max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        <div
          class="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block">
        </div>
        <div
          class="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block">
        </div>
        <div class="flex flex-wrap justify-center">
          <template v-for="(item, index) in featuresArr" :key="index">
            <div class="w-full sm:w-1/2 lg:w-1/3">
              <div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span
                  class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span
                  class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img :src="getImageSrc(item.src)" alt="icon" />
                </span>
                <h4 class="font-semibold text-lg text-white mb-4">
                  {{ item.title }}
                </h4>
                <p class="font-medium color-grayText md:text-lg">
                  {{ item.context }}
                </p>
              </div>
            </div>
          </template>
          <!-- <div class="features-row-border w-full h-[1px]"></div> -->
        </div>
      </div>
    </section>
    <section>
      <div class="pt-12.5">
        <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div class="grid sm:grid-cols-12 gap-7.5">
            <div class="sm:col-span-12">
              <div class="relative rounded-3xl features-box-border">
                <div class="relative overflow-hidden rounded-3xl p-10 xl:p-15 box-hover">
                  <div class="flex items-center justify-between relative z-20">
                    <div class="max-w-[477px] w-full">
                      <starBtn context=" Some of Main Features"></starBtn>
                      <h3 class="font-bold text-heading-4 font-semibold text-2xl text-white mb-4">
                        API Integration Platform
                      </h3>
                      <p class="max-w-[714px] mx-auto mb-5 font-medium md:text-lg color-grayText">
                        Our platform is designed to empower your project capabilities,
                        making it ...
                      </p>
                      <a href="#"
                        class="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full py-3 px-6 text-white text-sm ease-in duration-300 hover:shadow-button no-underline">
                        Learn more
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z"
                            fill="white"></path>
                        </svg>
                      </a>
                    </div>
                    <div class="max-w-[428px] hidden sm:block"></div>
                  </div>
                  <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="pt-12.5">

        <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">

          <div class="relative rounded-3xl features-box-border ">

            <div class="relative overflow-hidden rounded-3xl p-10 xl:p-15 box-hover !pb-4">
              <div class="flex flex-col items-center justify-center relative z-20">
                <div class="max-w-[477px] w-full text-center">
                  <starBtn class="inline-block" context="Need Any Help?"></starBtn>
                  <h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
                    Contact With Us
                  </h2>
                </div>
                <div
                  class=" w-full form-box-gradient relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15">
                  <form class="relative z-10 text-lg" method="POST">
                    <div class='-mx-4 xl:-mx-10 flex flex-wrap'>
                      <div class='w-full px-4 xl:px-5 md:w-1/2'>
                        <div class='mb-9.5'>
                          <label for='name' class='text-white mb-2.5 block font-medium'>Name</label>
                          <input id='name' type='text' name='name' placeholder='Enter your Name'
                            class='rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none'></input>
                        </div>
                      </div>
                      <div class='w-full px-4 xl:px-5 md:w-1/2'>
                        <div class='mb-9.5'>
                          <label for='email' class='text-white mb-2.5 block font-medium'>Name</label>
                          <input id='email' type='text' name='email' placeholder='Enter your Email'
                            class='rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none'></input>
                        </div>
                      </div>
                      <div class='w-full px-4 xl:px-5'>
                        <div class='mb-10'>
                          <label for='message' class='text-white mb-2.5 block font-medium'>Name</label>
                          <textarea id='message' name='message' placeholder='Type your message' rows="6"
                            class='rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none'></textarea>
                        </div>
                      </div>
                      <div class='w-full px-4 xl:px-5'>
                        <div class='text-center'>
                          <button type=''
                            class="hero-button-gradient inline-flex items-center gap-1.5  py-3 px-6 text-white ease-in duration-3 rounded-lg text-lg ">
                            Send Message </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
          <starAnimation/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="mt-12.5 max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 relative rounded-3xl features-box-border">
        <div class="cta-box-gradient bg-dark rounded-[30px] relative overflow-hidden px-4 py-20 lg:py-25 z-999">
          <span class="absolute bottom-0 left-0 -z-1">
            <img src="@/assets/svg/grid.svg" alt="">
          </span>
          <div class="wow fadeInUp text-center">
            <starBtn class="inline-block" context="Try our platform for Free"/>
            <h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2"> What are you waiting
              for?
            </h2>
            <p class="max-w-[714px] mx-auto font-medium mb-9 md:text-lg color-grayText"> Unlock the potential of effortless data exchange,
              empowering
              your ecosystem with unparalleled integration capabilities for a more connected and productive future. </p>
            <a href="#"
              class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80  no-underline text-lg">
              Get Started for Free </a>
          </div>
          <starAnimation class="!top-60 "/>
        </div>
      </div>
    </section>
    <commonFooter></commonFooter>
    <scrollBtn />
  </div>
</template>

<script setup>
const svgIcons = useAllSvgs();
const featuresArr = [
  {
    src: "icon-01",
    title: "Flexibility and Scalability",
    context:
      "Supports the growth of integration needs as the organization expands,accommodating an increasing number of applications and users.",
  },
  {
    src: "icon-02",
    title: " Monitoring and Analytics ",
    context:
      " Provides visualizations and analytics tools to monitor the performance and health of integrations. ",
  },
  {
    src: "icon-03",
    title: " Ease of Use ",
    context:
      " A user-friendly interface simplifies the process of creating, managing, and monitoring integrations. ",
  },
  {
    src: "icon-04",
    title: " Connectivity ",
    context:
      " Provides connectors for popular applications, databases, and services to ensure compatibility with a wide range of systems. ",
  },
  {
    src: "icon-05",
    title: "Support",
    context:
      " Responsive customer support and regular updates from the platform vendor. ",
  },
  {
    src: "icon-06",
    title: " Security ",
    context:
      " Implements robust security measures to ensure that only authorized users and applications can access and modify data. ",
  },
];
const getImageSrc = (filename) => {
  return svgIcons[filename] ? svgIcons[filename].name : "";
};

</script>

<style lang="scss" scoped>
.home_container {
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background: radial-gradient(circle at top, #2e115d 15%, #160930 50%, #070114);
}

.hero-button-gradient {
  -webkit-box-shadow: 0 -3px 10px 0 #00000040 inset;
  box-shadow: 0 -3px 10px 0 #00000040 inset;
  background: -webkit-gradient(linear,
      left top,
      left bottom,
      color-stop(-11.11%, #a073ee),
      to(#6e25ed));
  background: linear-gradient(180deg, #a073ee -11.11%, #6e25ed 100%);
}

.part3 {
  .features-row-border {
    background: linear-gradient(270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.12) 49.48%,
        rgba(255, 255, 255, 0) 100%);
  }

  .features-bg {
    background: -webkit-gradient(linear,
        left top,
        left bottom,
        from(rgba(255, 255, 255, 0)),
        to(rgba(255, 255, 255, 0.05)));
    background: linear-gradient(180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.05) 100%);
    -webkit-transition: 0.45s cubic-bezier(0.6, 0.6, 0, 1) opacity;
    transition: 0.45s cubic-bezier(0.6, 0.6, 0, 1) opacity;
  }

  .icon-border {
    background: -webkit-gradient(linear,
        left top,
        left bottom,
        from(rgba(255, 255, 255, 0.0288)),
        color-stop(50%, rgba(255, 255, 255, 0.06)),
        to(rgba(255, 255, 255, 0)));
    background: linear-gradient(180deg,
        rgba(255, 255, 255, 0.0288) 0%,
        rgba(255, 255, 255, 0.06) 50%,
        rgba(255, 255, 255, 0) 100%);

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      -webkit-mask: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff)) content-box,
        -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      z-index: -1;
      background: -webkit-gradient(linear,
          left top,
          left bottom,
          from(rgba(255, 255, 255, 0.06)),
          color-stop(50.52%, rgba(255, 255, 255, 0.15)),
          to(rgba(255, 255, 255, 0)));
      background: linear-gradient(180deg,
          rgba(255, 255, 255, 0.06) 0%,
          rgba(255, 255, 255, 0.15) 50.52%,
          rgba(255, 255, 255, 0) 100%);
    }
  }
}

.features-box-border {
  background: radial-gradient(circle at 50% 90%, #432c66 0%, #230e42 40%, #110425);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    -webkit-mask: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff)) content-box,
      -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    background: linear-gradient(106.24deg,
        rgba(255, 255, 255, 0.15) -0.68%,
        rgba(255, 255, 255, 0) 98.03%);
  }
}

.box-hover::before {
  pointer-events: none;
  position: absolute;
  top: -12rem;
  left: -12rem;
  z-index: 30;
  height: 24rem;
  width: 24rem;
  --tw-translate-x: var(--mouse-x);
  --tw-translate-y: var(--mouse-y);
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgb(134 70 244 / var(--tw-bg-opacity));
  opacity: 0;
  --tw-blur: blur(100px);
  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  content: var(--tw-content);
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}

.hero-subtitle-gradient {
  background: -webkit-gradient(linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.05)),
      to(rgba(255, 255, 255, 0)));
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0) 100%);
  -webkit-transition: 0.45s cubic-bezier(0.6, 0.6, 0, 1) -webkit-box-shadow;
  transition: 0.45s cubic-bezier(0.6, 0.6, 0, 1) -webkit-box-shadow;
  transition: 0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow;
  transition: 0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow,
    0.45s cubic-bezier(0.6, 0.6, 0, 1) -webkit-box-shadow;
}

.features-button-gradient {
  background: -webkit-gradient(linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(255, 255, 255, 0)));
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%);
}

.features-button-gradient:before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  -webkit-mask: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff)) content-box,
    -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
  background: -webkit-gradient(linear,
      left top,
      right top,
      color-stop(0.01%, rgba(229, 156, 255, 0.45)),
      color-stop(50.01%, rgba(186, 156, 255, 0.45)),
      to(rgba(156, 178, 255, 0.45)));
  background: linear-gradient(90deg,
      rgba(229, 156, 255, 0.45) 0.01%,
      rgba(186, 156, 255, 0.45) 50.01%,
      rgba(156, 178, 255, 0.45) 100%);
}

.form-box-gradient {
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.04)), to(rgba(255, 255, 255, 0)));
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%);
}
</style>
