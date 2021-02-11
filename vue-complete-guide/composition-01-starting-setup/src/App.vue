<template>
  <section class="container">
    <h2>{{ username }}</h2>
    <h3>{{ user.age }}</h3>

    <div>{{ task.description }}</div>
    <div>{{ task.complete }}</div>

    <button @click="birthday">Birthday</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Surname" @input="setLastName" />
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, watch } from 'vue';

export default {
  setup() {
    const user = ref({
      name: 'Hilton',
      age: 39
    });

    const task = reactive({
      description: 'Learn Vue',
      complete: false
    });

    const firstName = ref('');
    const lastName = ref('');

    watch(firstName, (newValue) => {
      //console.log(newValue, oldValue);
      user.value.name = newValue;
    });

    const username = computed(() => {
      return (firstName.value || user.value.name) + ' ' + lastName.value;
    });

    setTimeout(() => {
      user.value.name = 'George';
      user.value.age = 21;
    }, 2000);

    function setNewAge() {
      user.value.age++;
      task.description = 'Celebrate Birthday';
      task.complete = true;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    return {
      user,
      task,
      birthday: setNewAge,
      setFirstName,
      setLastName,
      username
    };
  }
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
