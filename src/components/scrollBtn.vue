<template>
  <button v-show="isVisible" @click="scrollToTop" class="scroll-to-top-btn">Top</button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(true);

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 20;
  // console.log("window.scrollY:", window.screenTop); // 调试信息
};

const scrollToTop = () => {
  window.scrollTo({
    top: 100,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", useDebounceFn(toggleVisibility, 500), true);
  toggleVisibility();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", toggleVisibility);
});
</script>

<style scoped>
.scroll-to-top-btn {
  display: block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
  font-size: 18px;
}

.scroll-to-top-btn:hover {
  background-color: #0056b3;
}
</style>
