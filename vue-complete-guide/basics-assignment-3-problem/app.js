const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(value) {
      this.counter += value;
      console.log(this.counter);
    },
  },
  computed: {
    result() {
      if (this.counter === 37) {
        return 'Spot on!!!';
      }
      if (this.counter > 37) {
        return `Hold your horse, that's to much`;
      }
      return 'Not there yet';
    },
  },
  watch: {
    counter(value) {
      console.log(value, this.counter);
      if (value > 37) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 1000);
      }
    },
  },
});

app.mount('#assignment');
