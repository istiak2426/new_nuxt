<template>
  <div>
    <UContainer class="mt-10 w-full h-96">
      <UCard class="h-full">
        <div
          class="mt-[-45px] bg-[#007c9d] p-5 m-6 rounded-lg shadow-xl text-xl text-white font-bold"
        >
          <slot name="header">SEO Spider</slot>
        </div>

        <div class="p-4 m-5  text-xl text-white flex justify-center">
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


        <div class="p-4 m-5  text-xl text-white flex justify-center">
          <div class="flex items-center rounded-lg w-[500px] h-12 p-3 bg-orange-500 ">
            

          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<script></script>

<style scoped></style>
