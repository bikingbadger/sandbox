<template>
  <div class="grid grid-cols-2 gap-4 p-4">
    <header class="col-span-2">
      <h1 class="text-3xl text-center">The User Component</h1>
      <p class="p-2">I'm an awesome User!</p>
      <button @click="changeName">Set</button>
    </header>
    <app-user-detail
      :username="username"
      @nameWasReset="username = $event"
      :userAge="age"
    ></app-user-detail>
    <app-user-edit :userAge="age" @updateAge="age = $event"></app-user-edit>

    <div class="row">
      <div class="col-xs-12">
        <br />
        <button
          class="btn btn-primary"
          @click="selectedSuperhero = 'captain-america'"
        >
          Captain America
        </button>
        <button class="btn btn-success" @click="selectedSuperhero = 'thor'">
          Thor
        </button>
        <button class="btn btn-danger" @click="selectedSuperhero = 'spiderman'">
          Spiderman
        </button>
        <hr />
        <component :is="selectedSuperhero">
          <h1>{{ heroName }}</h1>
          <img src="'@/assets/thor.png'" :alt="heroName" />
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

import Blue from './Blue.vue';
import Green from './Green.vue';
import Red from './Red.vue';

export default {
  data: function() {
    return {
      username: 'Hilton',
      age: 38,

      selectedSuperhero: 'captain-america',
      superheros: [
        {
          id: 'captain-america',
          name: 'Captain America',
          icon: '@/assets/captain-america.png',
        },
        { id: 'thor', name: 'Thor', icon: '@/assets/thor.png' },
        { id: 'spiderman', name: 'Spiderman', icon: '@/assets/spiderman.png' },
      ],
    };
  },
  methods: {
    changeName: function() {
      this.username = 'Sue';
    },
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
    'captain-america': Blue,
    thor: Green,
    spiderman: Red,
  },
  computed: {
    heroName: function() {
      const selected = this.superheros.find((superhero) => {
        console.log(this.selectedSuperhero);
        console.log(superhero);
        return superhero.id === this.selectedSuperhero;
      });
      return selected.name;
    },
    heroImage: function() {
      const selected = this.superheros.find((superhero) => {
        return superhero.id === this.selectedSuperhero;
      });
      return selected.icon;
    },
  },
};
</script>

<style scoped></style>
