Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
  },
}).mount('#app');

// const addButton = document.querySelector('button');
// const goalInput = document.querySelector('#goal');
// const goalList = document.querySelector('ul');

// const addGoal = () => {
//   console.log('Adding Goal');
//   const goalInput = document.querySelector('#goal');
//   console.log(goalInput.value);
//   const listElement = document.createElement('li');
//   listElement.textContent = goalInput.value;
//   goalList.appendChild(listElement);
//   goalInput.value = '';
// };

// addButton.addEventListener('click', addGoal);
