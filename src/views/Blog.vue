<template>
  <div class="blog_container color-white relative">
    <section class="relative z-10 pt-30 lg:pt-35 xl:pt-40 pb-18">
      <lineBg />
      <div class="text-center px-4">
        <h1 class="font-extrabold text-heading-2 text-4xl text-white mb-5.5">Blog</h1>
      </div>
    </section>
    <section class="pt-20 lg:pt-25 pb-17.5 lg:pb-22.5 xl:pb-27.5">
      <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12.5 gap-x-7.5"
        ></div>
      </div>
    </section>
    <commonFooter></commonFooter>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.blog_container {
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
