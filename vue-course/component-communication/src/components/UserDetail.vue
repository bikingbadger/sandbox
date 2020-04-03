<template>
  <div class="rounded shadow-lg bg-orange-100">
    <h2 class="pt-4 text-2xl text-center font-bold">View</h2>
    <h3 class="text-xl text-center italic">
      You may view the User Details here
    </h3>
    <p class="p-2">Username: {{ username }}</p>
  </div>
</template>

<script>
export default {
  props: {
    username: { type: String },
  },
};
</script>

<style scoped></style>
