<template>
  <div class="container mx-auto bg-gray-100 h-screen">
    <div class="text-center py-2">
      <router-link to="/" class="text-lg text-indigo-700 p-2">Home</router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="text-lg text-indigo-700 p-2"
        >Login</router-link
      >
      <router-link v-if="!isLoggedIn" to="/register" class="text-lg text-indigo-700 p-2"
        >Register</router-link
      >
      <a href="#"
        ><span v-if="isLoggedIn" class="text-lg text-indigo-700 p-2" @click="logout"
          >Logout</span
        ></a
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'app',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },
  created() {
    const user = firebase.auth().currentUser;
    if (user) {
      this.isLoggedIn = true;
      this.currentUser = user.email;
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.isLoggedIn = false;
          this.currentUser = '';
          this.$router.push('login');
        });
    },
  },
};
</script>

<style></style>
