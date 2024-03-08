<template>
  <div class="grid grid-cols-12">
    <div class="h-screen col-span-1 bg-black"><!-- 10% width --></div>
    <div
      class="h-screen col-span-11 bg-gray-50  "
      style="background-color: #f0f2f5"
    >
      <div class="grid grid-cols-12 h-14 border-b shadow-lg">
        <div
          class="col-span-1 flex justify-center items-center h-full"
          style="background-color: #007c9d"
        >
          <img
            class="max-w-full max-h-full"
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/FFFFFF/menu--v1.png"
            alt="menu--v1"
          />
        </div>
        <div
          class="col-span-10 flex justify-start items-center h-full ps-5 font-bold text-lg custom-font"
          style="color: #344767"
        >
          SpiderNow.com
        </div>
        <div
          class="col-span-1 flex justify-center items-center h-full"
          style="color: black"
        >
          Dark Mode
        </div>
      </div>

      <div
        class="col-span-12 h-16 mt-10 mx-16 rounded-lg shadow-lg ps-7 flex justify-start items-center font-bold text-lg custom-font"
        style="background-color: #007c9d; color: white"
      >
        SEO Spider
      </div>


    </div>
  </div>
</template>

<script></script>

<style scoped>
.custom-font {
  font-family: "Roboto", sans-serif;
}
</style>
