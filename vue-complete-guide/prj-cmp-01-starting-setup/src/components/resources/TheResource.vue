<template>
  <div class="tab-bar">
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesMode"
      >View</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addResourceMode"
      >Add</base-button
    >
  </div>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'Official Vue JS documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to search for the answers',
          link: 'https://google.com'
        },
        {
          id: 'slack',
          title: 'Slack',
          description: 'Community',
          link: 'https://slack.com'
        }
      ]
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
    };
  },
  computed: {
    storedResourcesMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResourceMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(id) {
      const index = this.storedResources.findIndex(resource => {
        return resource.id === id;
      });
      this.storedResources.shift(index,1);
    }
  }
};
</script>

<style scoped>
.tab-bar {
  text-align: center;
}

button {
  margin: 0.3rem 3rem;
  width: 10rem;
}
</style>
