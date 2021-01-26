<template>
  <ul>
    <resource-item
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></resource-item>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem';
export default {
  components: {
    ResourceItem
  },
  inject: ['resources']
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: grid;
  gap: 1rem;
}
</style>
