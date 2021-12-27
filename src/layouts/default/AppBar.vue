<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </div>

    <v-spacer />
  </v-app-bar>
</template>

<script>
  export default {
    name: 'DefaultBar',
    computed: {
      drawer: {
        get () {
          return this.$store.getters['app/getDrawer'];
        },
        set (value) {
          return this.$store.dispatch('app/toogleDrawer', value);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
