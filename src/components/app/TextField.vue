<template>
  <label>
    {{ label }}
    <v-text-field
      class="mt-1"
      :outlined="outlined"
      :dense="dense"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </label>
</template>

<script>
  export default {
    name: 'AppTextField',
    inheritAttrs: false,
    props: {
      outlined: {
        type: Boolean,
        default: true
      },
      dense: {
        type: Boolean,
        default: true
      },
      value: {
        type: String,
        default: null
      },
      label: {
        type: String,
        default: null
      }
    },
    created () {
      console.log('this.$attrs: ', this.$attrs);
      console.log('this.$listeners: ', this.$listeners);
    }
  }
</script>
