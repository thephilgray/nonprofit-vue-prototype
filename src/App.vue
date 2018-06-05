<template lang="pug">
v-app#app
  NavDrawer(:sideNav="sideNav" :navLinks="navLinks")
  HomeLayout
</template>

<script>
import NavDrawer from "@/components/NavDrawer";
import HomeLayout from "@/layouts/Home.vue";

import { EventBus } from "@/bus";

export default {
  name: "app",
  components: {
    NavDrawer,
    HomeLayout
  },
  mounted() {
    EventBus.$on("toggled", () => {
      this.sideNav = !this.sideNav;
    });
  },
  data() {
    return {
      sideNav: false,
      navLinks: [
        { title: "About" },
        { title: "Issues" },
        { title: "News" },
        { title: "Act" }
      ]
    };
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
