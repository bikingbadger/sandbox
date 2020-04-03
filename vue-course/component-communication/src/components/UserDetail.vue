<template>
  <div class="rounded shadow-lg bg-orange-100">
    <h2 class="pt-4 text-2xl text-center font-bold">View</h2>
    <h3 class="text-xl text-center italic">
      You may view the User Details here
    </h3>
    <p class="p-2">Username: {{ username }}</p>
    <p class="p-2">Age: {{userAge}}</p>
    <button @click="resetName">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    username: { type: String },
    userAge: {
      type: Number,
    },
  },
  methods: {
    resetName() {
      this.username = 'Noname';
      this.$emit('nameWasReset', this.username);
    },
  },
};
</script>

<style scoped></style>
