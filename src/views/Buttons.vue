<template>
  <v-container>
    <v-card class="pa-3">
      <v-row>
        <v-col cols="auto">
          <v-btn class="primary">
            Primary
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn class="secondary">
            secondary
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn class="success">
            success
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn class="error">
            error
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-card-title>
        Button Size
      </v-card-title>
      <v-row>
        <v-col cols="auto">
          <v-btn
            class="orange"
            x-small
          >
            x-small
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            class="orange"
            small
          >
            small
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn class="orange">
            default
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            class="orange"
            large
          >
            large
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            class="orange"
            x-large
          >
            x-large
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
