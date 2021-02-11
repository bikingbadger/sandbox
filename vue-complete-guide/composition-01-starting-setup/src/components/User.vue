<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
  </div>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  props: ['firstName', 'lastName'],
  //   computed: {
  //     userName() {
  //       return this.firstName + ' ' + this.lastName;
  //     }
  //   }
  setup(props, context) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    const user = inject('user');

    const userAge = computed(() => {
      return user.value.age;
    });

    console.log(context);

    return { userName, userAge };
  }
};
</script>
