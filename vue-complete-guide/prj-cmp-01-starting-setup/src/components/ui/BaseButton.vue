<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    mode: String
  }
};
</script>

<style scoped>
button {
  font-family: inherit;

  border: none;
  padding: 1rem;
  
  border-radius: 1rem;
  background: #e0e5eb;
  box-shadow: 20px 20px 60px #bec3c8, -20px -20px 60px #ffffff;
  /* min-width: 10rem; */

  text-align: center;
  font-size: inherit;
  font-weight: 700;
  color: #bec3c8;
  text-shadow: 8px 8px 12px rgba(255, 255, 255, 0.4),
    -8px -8px 12px rgba(0, 0, 0, 0.08);
}

button:hover {
  color: rgba(255, 255, 255, 0.4)
}

.flat {
  /* border-radius: 1rem; */
  /* background: #e0e5eb; */
  box-shadow: none;
  /* color: #bec3c8; */
  /* text-shadow: -8px -8px 12px rgba(255, 255, 255, 0.4),
    8px 8px 12px rgba(0, 0, 0, 0.08); */
}
</style>
