import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from './components/teams/TeamMembers';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    { path: '/members/:teamId', component: TeamMembers, props: true },
    { path: '/:notFound(.*)', redirect: '/teams'}
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
