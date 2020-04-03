import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home";

// Include tailwind css
import "./assets/styles/tailwind.css";

Vue.component("app-servers", Home);

new Vue({
  el: "#app",
  render: h => h(App)
});
