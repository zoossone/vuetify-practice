<template>
  <v-navigation-drawer
    v-bind="$attrs"
    dark
    app
    :src="require('@/assets/sidebar.jpg')"
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
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-spacer />

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        active-class="primary"
        class="py-1"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'DefaultDrawer',
    data: () => ({
      gredient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Grid System', icon: 'mdi-view-dashboard', to: '/grid-system' },
          { title: 'Grid List Page', icon: 'mdi-view-dashboard', to: '/grid-list-page' },
          { title: 'Breakpoints', icon: 'mdi-view-dashboard', to: '/breakpoints' },
          { title: 'Typography', icon: 'mdi-view-dashboard', to: '/typography' },
          { title: 'Tables', icon: 'mdi-view-dashboard', to: '/tables' },
          { title: 'Forms', icon: 'mdi-view-dashboard', to: '/forms' },
          { title: 'Buttons', icon: 'mdi-view-dashboard', to: '/buttons' },
          { title: 'Icons', icon: 'mdi-view-dashboard', to: '/icons' },
          { title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in' },
          { title: 'SignUp', icon: 'mdi-logout', to: '/authentication/sign-up' },
          { title: 'ProductList', icon: 'mdi-reproduction', to: '/page/product-list' },
        ],
    })
  }
</script>

<style lang="scss" scoped>

</style>
