<template>
  <v-navigation-drawer
    v-model="drawer"
    v-bind="$attrs"
    dark
    :src="require('@/assets/sidebar.jpg')"
    app
  >
    <!-- #img === v-slot:img -->
    <template
      #img="props"
    >
      <v-img
        :gradient="gredient"
        v-bind="props"
      />
    </template>

    <default-drawer-header />

    <v-spacer />

    <default-list :items="items" />
  </v-navigation-drawer>
</template>

<script>
import { mapState }from 'vuex';
  export default {
    name: 'DefaultDrawer',
    components: {
      DefaultDrawerHeader: () => import('./DrawerHeader'),
      DefaultList: () => import('./List'),
    },
    computed: {
      ...mapState('app', ['gredient', 'items']),
      // ...mapState('app', {
      //   gradient: 'gradient',
      //   items: 'items'
      // })
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
