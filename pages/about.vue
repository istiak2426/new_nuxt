<template>
  <div>
    This is about page.

    <nuxt-link to="/">Home</nuxt-link>

    <nuxt-link to="/about">about</nuxt-link>

    <<nuxt-link to="/data">Data</nuxt-link>

    <UTabs :items="items" />

    <UAvatar
    size="lg"
    src="https://avatars.githubusercontent.com/u/739984?v=4"
    alt="Avatar"
  />
    
  </div>
</template>

<script setup>

const items = [{
  label: 'Tab1',
  content: 'This is the content shown for Tab1'
}, {
  label: 'Tab2',
  disabled: true,
  content: 'And, this is the content for Tab2'
}, {
  label: 'Tab3',
  content: 'Finally, this is the content for Tab3'
}]



</script>








<style lang="scss" scoped></style>
