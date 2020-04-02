<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <button @click="changeStatus">Update Status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>

<style></style>
