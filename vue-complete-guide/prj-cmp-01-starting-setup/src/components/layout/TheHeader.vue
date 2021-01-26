<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 10rem;
  font-weight: 900;
  


   color: #e0e5eb;
   text-shadow: 
   -8px -8px 12px rgba(255,255,255,0.4),
   8px 8px 12px rgba(0,0,0,0.08);
   
}
</style>
