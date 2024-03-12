<template>
  <!-- full layout  -->

  <div class="grid grid-cols-12">
    <!-- Menu bar -->

    <div class="col-span-1 bg-black" style="height: 200vh"></div>

    <!-- Rest part -->

    <div
      class="col-span-11 bg-gray-50"
      style="background-color: #f0f2f5; height: 200vh"
    >
      <!-- Topbar -->

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

      <!-- Box-1 -->

      <UContainer class="mt-10 w-full h-56">
        <UCard class="h-full">
          <div
            class="mt-[-45px] bg-[#007c9d] p-5 m-6 rounded-lg shadow-xl text-xl text-white font-bold"
          >
            <slot name="header">SEO Spider</slot>
          </div>

          <div class="p-4 m-5 width text-xl text-white flex justify-center">
            <div class="flex items-center">
              <input
                type="text"
                placeholder="Enter full URL (e.g. https://www.example.com)"
                class="form-input rounded-l-lg w-[400px] p-3"
              />
              <button
                type="submit"
                class="rounded-r-lg text-white text-base font-bold p-[14px] rounded focus:outline-none focus:shadow-outline"
                style="background-color: #409db6"
              >
                ANALYZE
              </button>
            </div>
          </div>
        </UCard>
      </UContainer>

      <!-- Box-2 -->

      <UContainer class="mt-10 w-full h-56">
        <UCard class="h-full">
          <div
            class="mt-[-45px] bg-[#007c9d] p-5 m-6 rounded-lg shadow-xl text-xl text-white font-bold"
          >
            <slot name="header">Saved Scans (0/0)</slot>
          </div>
          <div
            class="mt-4 font-bold w-11/12 flex justify-center items-center text-2xl text-[#fb8c00]"
          >
            <slot name="main-1"
              >Upgrade your subscription to access the Save functionality.</slot
            >
          </div>

          <div
            class="mt-4 font-bold w-11/12 flex justify-center items-center text-2xl text-[#344767]"
          >
            <slot name="main-1">No Saved Scans.</slot>
          </div>
        </UCard>
      </UContainer>

      <!-- Box-3 -->


      <UContainer class="mt-10 w-full h-56">
        <UCard class="h-full">

        </UCard>
      </UContainer>


    </div>
  </div>
</template>

<script></script>

<style scoped>
.custom-font {
  font-family: "Roboto", sans-serif;
}
</style>
