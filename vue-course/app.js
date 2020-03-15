new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
  methods: {
    increase: function(step, event) {
      this.counter += step; 
    },
  },
});
