<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Unfortunately, at least one value is invalid</p>
      <p>Each field requires an input</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">OK</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="">title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="">description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descriptionInput"
        />
      </div>
      <div class="form-control">
        <label for="">link</label>
        <input type="text" id="link" name="link" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import BaseDialog from '../ui/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    };
  },
  methods: {
    submit() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      // Validation
      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
label {
  display: block;
}

input,
textarea {
  width: 90%;
  font-size: inherit;
  font-family: inherit;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
}
</style>
