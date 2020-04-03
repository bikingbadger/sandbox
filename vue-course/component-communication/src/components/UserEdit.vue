<template>
  <div class="rounded shadow-lg bg-orange-100">
    <h2 class="pt-4 text-2xl text-center font-bold">Edit</h2>
    <h3 class="text-xl text-center italic">You may edit the User here</h3>
    <p class="p-2">Edit me!</p>
    <p class="p-2">Age: {{ userAge }}</p>
    <button @click="editAge">Age</button>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    userAge: {
      type: Number,
    },
  },
  methods: {
    editAge() {
      this.userAge = 30;
      eventBus.$emit('updateAge', this.userAge);
    },
  },
};
</script>

<style scoped></style>
