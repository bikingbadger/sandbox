<template>
  <teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section><slot></slot></section>
      <menu
        ><slot name="actions">
          <base-button @click="$emit('close')"></base-button> </slot
      ></menu>
    </dialog>
  </teleport>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  components: { BaseButton },
  props: {
    title: {
      type: String,
      required: false
    }
  },
  emits: ['close']
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 1rem;
  border: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
