<template>
  <div id="app" class="container mx-auto min-h-screen bg-orange-100 text-blue-900 text-lg">
    <User></User>
  </div>
</template>

<script>
import User from './components/User.vue';

export default {
  name: 'App',
  components: {
    User,
  },
};
</script>

<style>
@import url('https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css');
</style>
