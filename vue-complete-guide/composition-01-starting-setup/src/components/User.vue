<template>
  <h2>{{ userName }}</h2>
  <h3>{{ user.age }}</h3>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['firstName', 'lastName', 'user'],
  //   computed: {
  //     userName() {
  //       return this.firstName + ' ' + this.lastName;
  //     }
  //   }
  setup(props,context) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    console.log(context);

    return { userName };
  }
};
</script>
