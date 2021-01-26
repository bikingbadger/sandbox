const app = Vue.createApp({
  data() {
    return {
      goalA: 'Master Vue!!!',
      goalB: 'Complete Course!!!',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.goalA;
      } else {
        return this.goalB;
      }
    },
  },
});

app.mount('#user-goal');
