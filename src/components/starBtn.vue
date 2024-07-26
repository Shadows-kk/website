<template>
  <div class="activeBtn hero-subtitle-text w-370px text-base mb-5">
    <img src="@/assets/svg/icon-title.svg" alt="" />
    {{ context }}
  </div>
</template>

<script setup>
const props = defineProps({
  context: {
    default: "",
    retuired: true,
  },
});
</script>

<style lang="scss" scoped>
.hero-subtitle-text {
  background: -webkit-linear-gradient(90deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%),
    -webkit-linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
