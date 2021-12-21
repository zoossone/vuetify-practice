<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click="$emit('drawer')" />
    </div>

    <v-spacer />
  </v-app-bar>
</template>

<script>
  export default {
    name: 'DefaultBar'
  }
</script>

<style lang="scss" scoped>

</style>
