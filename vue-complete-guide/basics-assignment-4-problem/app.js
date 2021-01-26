const app = Vue.createApp({
    data() {
        return {
            userInput: ''
        }
    },
    methods: {
        setStyle(event){
            this.userInput = event.target.value;
            console.log(this.userInput);
        }
    },
    computed: {
        userStyle() {
            if (this.userInput === 'user1'){
                console.log('user1');
                return {user1: true}
            }
            if (this.userInput === 'user2'){
                console.log('user2');
                return {user2: true}
            }
        }
    }
}).mount('#assignment');
