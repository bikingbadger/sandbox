new Vue({
  el: '#app',
  data: {
    counter: 0,
    secondCounter: 0,
    randomNumber: 0
  },
  computed: {
    output: function() {
      console.log('Computed Call');
      return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
    },
  },
  methods: {
    result: function() {
      console.log('Method Call');
      return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
    },
    anotherResult: function() {
      console.log('Another Method Call');
      return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
    }
  },
});
