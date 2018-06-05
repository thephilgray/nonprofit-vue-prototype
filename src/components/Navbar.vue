<template lang="pug">
v-toolbar(app,height="100px" color="secondary")
    v-toolbar-side-icon(@click="onClickNavDrawerToggler")
    v-toolbar-title
        img.site__headerLogo(src="@/assets/navbar__logo.svg")
    v-spacer.hidden-sm-and-down
    v-toolbar-items.hidden-sm-and-down
        v-btn(flat) About
        v-btn(flat) Issues
        v-btn(flat) News
        v-btn(raised, dark) Act
</template>

<script>
import { EventBus } from "@/bus";
export default {
  methods: {
    onClickNavDrawerToggler() {
      EventBus.$emit("toggled");
    }
  }
};
</script>


<style lang="scss" scoped>
.site__headerLogo {
  max-width: 200px;
}
.toolbar__items {
  height: 3em;
}
</style>
