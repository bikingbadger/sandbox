const app = Vue.createApp({
  data() {
    return {
        output1: 'OUTPUT',
        output2: 'OUTPUT',
    };
  },
  methods: {
    showAlert() {
      alert('Welcome to Vue');
    },
    userInput1(event){
        this.output1 = event.target.value;
    },
    userInput2(event){
        this.output2 = event.target.value;
    }
  },
});

app.mount('#assignment');
