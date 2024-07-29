<template>
  <div class="absolute bottom-0 left-0 w-full flex flex-col gap-3 -z-1 opacity-50">
    <div class="w-full h-[1.24px] footer-bg-gradient"></div>
    <div class="w-full h-[2.47px] footer-bg-gradient"></div>
    <div class="w-full h-[3.71px] footer-bg-gradient"></div>
    <div class="w-full h-[4.99px] footer-bg-gradient"></div>
    <div class="w-full h-[6.19px] footer-bg-gradient"></div>
    <div class="w-full h-[7.42px] footer-bg-gradient"></div>
    <div class="w-full h-[8.66px] footer-bg-gradient"></div>
    <div class="w-full h-[9.90px] footer-bg-gradient"></div>
    <div class="w-full h-[13px] footer-bg-gradient"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  position: "absolute",
});
</script>

<style lang="scss" scoped>
.footer-bg-gradient {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(255, 255, 255, 0.1)),
    to(rgba(255, 255, 255, 0))
  );
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
