<template>
  <div>
    <app-header></app-header>
    <hr />
    <app-server-status v-for="server in 5"> </app-server-status>
    <app-server-details></app-server-details>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import ServerStatus from "./server/ServerStatus";
import ServerDetails from "./server/ServerDetails";
export default {
  components: {
    "app-header": Header,
    "app-server-status": ServerStatus,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style></style>
