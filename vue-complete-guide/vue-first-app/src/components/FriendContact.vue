<template>
  <li>
    <h2>{{ name }} <span :class="isStarred" @click="toggleFavorite"></span></h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: {
    'toggle-favorite': function(id) {
      if (id) {
        return true;
      } else {
        console.log('ID is missing');
        return false;
      }
    },
  },
  data() {
    return {
      detailsVisible: true,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      //   this.favorite = !this.favorite;
      this.$emit('toggle-favorite', this.id);
    },
  },
  computed: {
    isStarred() {
      return this.isFavorite ? 'fa fa-star checked' : 'fa fa-star';
    },
  },
};
</script>

<style>
.checked {
  color: orange;
}
</style>
