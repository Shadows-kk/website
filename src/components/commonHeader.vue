<template>
  <div
    class="absolute z-1000 top-0 left-0 right-2 flex flex-justify-around flex-items-center color-white h-60px pr-36 pl-36 text-base bg-headbg"
  >
    <div><img src="@/assets/img/logo.png" width="120" height="60" alt="" /></div>
    <div class="flex flex-justify-around flex-items-center">
      <template v-for="(item, index) in itemsArr" :key="index">
        <div
          :class="currentActive == index ? 'activeBtn' : 'defaultBtn'"
          class="flex flex-justify-around flex-items-center cursor-pointer pl-20px pr-20px"
          @click="pageClick(index)"
        >
          {{ item }}
        </div>
      </template>
    </div>
    <div class="flex flex-justify-between flex-items-center">
      <template v-for="(item, index) in loginArr" :key="index">
        <div
          :class="currentLoginStatus == index ? 'currentloginActive' : 'defaultlogin'"
          class="flex flex-justify-around flex-items-center cursor-pointer pl-20px pr-20px"
          @click="currentLoginStatus = index"
        >
          {{ item }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const currentActive = ref(0);
const currentLoginStatus = ref(1);
const itemsArr = ["Home", "APIs&Pricing", "Blog"]; // 导航栏
const loginArr = ["Sign In", "Sign Up"];
const pageClick = (index) => {
  currentActive.value = index;
  router.push(itemsArr[index]);
};
const init = () => {
  const path = route.path.replace(/^\//, "");
  console.log("🚀 ~ init ~ route.path:", route.path);
  console.log("🚀 ~ init ~ path:", path);
  const index = itemsArr.indexOf(path);
  if (index > 0) {
    currentActive.value = index;
  } else {
    currentActive.value = 0;
  }
};
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.defaultBtn {
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 5px 20px;
}
.activeBtn {
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.09) 10.51%,
    rgba(255, 255, 255, 0) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 50px;
  padding: 5px 20px;
}
.defaultlogin {
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 5px 20px;
}
.currentloginActive {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset 0px -6px 15px rgba(156, 178, 255, 0.25),
    inset 0px 6px 15px rgba(229, 156, 255, 0.25);
  box-shadow: 0 0 #000 0 0 #0000, 0 0 #000 0 0 #0000,
    inset 0px -6px 15px rgba(156, 178, 255, 0.25),
    inset 0px 6px 15px rgba(229, 156, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 10px;
  padding: 5px 20px;
}
</style>
