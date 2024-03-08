<template>
  <div class="grid grid-cols-12">
    <div class="col-span-1 bg-black" style="height: 200vh">
      <!-- 10% width -->
    </div>
    <div
      class="col-span-11 bg-gray-50"
      style="background-color: #f0f2f5; height: 200vh"
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
      <br />
      <div
        class="grid grid-cols-12 h-96 rounded-lg mx-8 mt-20 shadow-lg"
        style="background-color: #ffffff; position: relative"
      >
        <div
          class="col-12 w-11/12 flex justify-start items-center h-16 mx-16 rounded-lg shadow-lg ps-7 font-bold text-lg"
          style="
            background-color: #007c9d;
            color: white;
            position: absolute;
            top: 0%;
            transform: translateY(-50%);
            z-index: 10;
          "
        >
          SEO Spider
        </div>
      </div>

      <div
        class="grid grid-cols-12 h-48 rounded-lg mx-8 mt-20 shadow-lg"
        style="background-color: #ffffff; position: relative"
      >
        <div
          class="col-12 w-11/12 flex justify-start items-center h-16 mx-16 rounded-lg shadow-lg ps-7 font-bold text-lg"
          style="
            background-color: #007c9d;
            color: white;
            position: absolute;
            top: 0%;
            transform: translateY(-50%);
            z-index: 10;
          "
        >
          Saved Scans (0/0)
        </div>

        <div
          class="col-12 w-11/12 flex justify-center items-center h-16 mx-16 ps-7 font-bold text-2xl"
          style="
            color: #fb8c00;
            position: absolute;
            top: 40%;
            transform: translateY(-50%);
            z-index: 10;
          "
        >
          Upgrade your subscription to access the Save functionality.
        </div>

        <div
          class="col-12 w-11/12 flex justify-center items-center h-16 mx-16 ps-7 font-bold text-2xl"
          style="
            color: #344767;
            position: absolute;
            top: 70%;
            transform: translateY(-50%);
            z-index: 10;
          "
        >
          No Saved Scans.
        </div>
      </div>

      <div
        class="grid grid-cols-12 h-72 rounded-lg mx-8 mt-10 shadow-lg"
        style="background-color: #ffffff; position: relative"
      >





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
