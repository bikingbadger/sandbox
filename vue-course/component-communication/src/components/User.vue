<template>
  <div class="grid grid-cols-2 gap-4 p-4">
    <header class="col-span-2">
      <h1 class="text-3xl text-center">The User Component</h1>
      <p class="p-2">I'm an awesome User!</p>
      <button @click="changeName">Set</button>
    </header>
    <app-user-detail :username="username"></app-user-detail>
    <app-user-edit></app-user-edit>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  data: function() {
    return {
      username: 'Hilton',
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
  },
};
</script>

<style scoped></style>
