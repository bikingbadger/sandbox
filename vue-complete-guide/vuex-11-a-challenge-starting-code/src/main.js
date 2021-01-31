import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);

// Vue Router
import router from './router.js';
app.use(router);

// Vuex store
import store from './store/index.js'
app.use(store);

app.component('base-badge', BaseBadge);

app.mount('#app');
