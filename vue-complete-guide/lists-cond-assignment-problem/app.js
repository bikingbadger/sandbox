const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      showList: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = '';
    },
    removeTask(index) {
        this.tasks.splice(index,1);
    }
  },
});

app.mount('#assignment');
