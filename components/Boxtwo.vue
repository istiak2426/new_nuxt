<template>
  <div>
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
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
