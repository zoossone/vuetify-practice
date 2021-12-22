<template>
  <v-list
    expand
    dense
    nav
  >
    <template
      v-for="(item, index) in items"
    >
      <default-list-group
        v-if="item.items"
        :key="`group-${index}`"
        :item="item"
      />
      <default-list-item
        v-else
        :key="`item-${index}`"
        :item="item"
      />
    </template>
  </v-list>
</template>

<script>
  export default {
    name: 'DefaultList',
    components: {
      DefaultListItem: () => import('./ListItem'),
      DefaultListGroup: () => import('./ListGroup')
    },
    props: {
      items: {
        type: Array,
        default: () => ([]),
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
