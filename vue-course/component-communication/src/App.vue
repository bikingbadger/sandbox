<template>
  <div
    id="app"
    class="container mx-auto min-h-screen bg-orange-200 text-blue-900 text-lg"
  >
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

<style></style>
