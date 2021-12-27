<template>
  <v-app>
    <default-bar />

    <default-drawer />

    <default-view />
  </v-app>
</template>

<script>
import DefaultBar from './AppBar.vue';
import DefaultDrawer from './Drawer.vue';
import DefaultView from './View.vue';
  export default {
    name: 'DefaultLayout',
    components: {
      DefaultBar,
      DefaultDrawer,
      DefaultView
    },
  }
</script>

<style lang="scss" scoped>

</style>
