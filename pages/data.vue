<template>
  <div>
    hi there
    {{ kop2 }}
    <UButton>Button</UButton>

    <UButton label="Button" />

    <UButton color="red" variant="ghost">Button</UButton>



    <div>
      <UTable :rows="people" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const kop = await axios.get("http://localhost:3000/api/test");

const kop2 = kop.data;
</script>

<style lang="scss" scoped></style>


