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
      <Topbar />
      <Boxone />
      <Boxtwo />
      <Boxthree />
    </div>
  </div>
</template>

<script>

import Topbar from "~/components/Topbar.vue";
import Boxone from "~/components/Boxone.vue";
import Boxtwo from "~/components/Boxtwo.vue";
import Boxthree from "~/components/Boxthree.vue";

export default {
  components: {
    Topbar,
    Boxone,
    Boxtwo,
    Boxthree
  },
};
</script>

<style scoped>
.custom-font {
  font-family: "Roboto", sans-serif;
}
</style>
