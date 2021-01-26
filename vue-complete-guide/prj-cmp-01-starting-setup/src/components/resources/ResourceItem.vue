<template>
  <li>
    <base-card>
      <h2>
        <a :href="link">{{ title }}</a>
      </h2>
      <p>{{ description }}</p>
      <base-button @click="removeResource(id)">X</base-button>
    </base-card>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    description: String,
    link: String
  },
  inject: ['removeResource']
};
</script>

<style scoped>
div {
  position: relative;
}
button {
  width: 5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;

  background: linear-gradient(145deg, #caced4, #f0f5fb);
  box-shadow: 20px 20px 60px #bec3c8, -20px -20px 60px #ffffff;
}
</style>
