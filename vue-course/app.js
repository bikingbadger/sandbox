new Vue({
  el: '#app',
  data: {
    counter: 0,
    secondCounter: 0,
    randomNumber: 0,
    redSelected: false,
  },
  computed: {
    output: function() {
      console.log('Computed Call');
      return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
    },
    divClasses: function() {
      return {
        red: this.redSelected,
        blue: !this.redSelected
      }
    }
  },
  methods: {
    result: function() {
      console.log('Method Call');
      return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
    },
    anotherResult: function() {
      console.log('Another Method Call');
      return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
    },
  },
});
