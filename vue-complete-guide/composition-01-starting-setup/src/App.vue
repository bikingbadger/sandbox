<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>

    <div>{{ task.description }}</div>
    <div>{{ task.complete }}</div>
  </section>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup() {
    const user = ref({
      name: 'Hilton',
      age: 39,
    });

    const task = reactive({
      description: 'Learn Vue',
      complete: false,
    });

    setTimeout(() => {
      user.value.name = 'George';
      user.value.age = 21;

      task.complete = true;
    }, 2000);

    return { user, task };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
