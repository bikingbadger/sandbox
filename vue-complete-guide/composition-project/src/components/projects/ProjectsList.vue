<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { computed, ref, watch, toRefs } from 'vue';
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem
  },
  props: ['user'],
  setup(props) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const hasProjects = computed(() => {
      return props.user.projects && availableProjects.value.length > 0;
    });

    const availableProjects = computed(() => {
      if (activeSearchTerm.value) {
        return props.user.projects.filter(prj =>
          prj.title.includes(activeSearchTerm.value)
        );
      }
      return props.user.projects;
    });

    const updateSearch = val => {
      enteredSearchTerm.value = val;
    };

    watch(enteredSearchTerm, val => {
      setTimeout(() => {
        if (val === enteredSearchTerm.value) {
          activeSearchTerm.value = val;
        }
      }, 300);
    });

    watch(user, () => {
      enteredSearchTerm.value = '';
    });

    const {user} = toRefs(props);

    return {
      enteredSearchTerm,
      activeSearchTerm,
      updateSearch,
      hasProjects,
      availableProjects
    };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
