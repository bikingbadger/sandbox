<template>
  <main>
    <the-header :title="title"></the-header>
    <the-resource></the-resource>
  </main>
</template>

<script>
import TheHeader from './components/layout/TheHeader';
import TheResource from './components/resources/TheResource';
export default {
  components: { TheHeader, TheResource },
  data() {
    return {
      title: 'Vue Resources'
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;900&display=swap');
* {
  padding: 0;
  margin: 0;
  outline: none;
}
body {
  background-color: #e0e5eb;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.25rem;
  width: 66vw;
  margin: 0 auto;
}
a {
  color: #bec3c8;
  text-decoration: none; /* no underline */
}

</style>
