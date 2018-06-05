<template lang="pug">
  v-navigation-drawer(:value="sideNav" fixed app )
    v-toolbar
      v-list
        v-list-tile
          v-list-tile-content
            v-list-tile-title
              h2 Menu
    v-divider
    v-list
      v-list-tile(v-for="link in navLinks" :key="link.title")
        v-list-tile-title
          h2 {{link.title}}
</template>
<script>
export default {
  props: {
    sideNav: {
      type: Boolean,
      default: false
    },
    navLinks: {
      type: Array,
      default: () => []
    }
  }
};
</script>
