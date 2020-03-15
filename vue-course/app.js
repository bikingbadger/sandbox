new Vue({
  el: '#app',
  data: {
    counter: 0,
    name: 'Hilton',
  },
  methods: {
    increase: function(step, event) {
      this.counter += step;
    },
  },
});
