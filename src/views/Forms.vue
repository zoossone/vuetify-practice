<template>
  <v-container>
    <v-card>
      <v-card-title>
        Form Validation
      </v-card-title>
      <v-card-text>
        <validation-observer>
          <v-form>
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="max:10"
            >
              <v-text-field
                v-model="name"
                label="Name"
                :counter="10"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider>
              <v-text-field
                label="PhoneNumber"
              />
            </validation-provider>
            <validation-provider>
              <v-text-field
                label="E-mail"
              />
            </validation-provider>
            <validation-provider>
              <v-select
                label="select"
                :items="item"
              />
            </validation-provider>
            <validation-provider>
              <v-checkbox
                label="Checkbox"
                value="1"
              />
            </validation-provider>
            <v-btn
              class="mr-4"
              type="submit"
              color="primary"
            >
              submit
            </v-btn>
            <v-btn>
              clear
            </v-btn>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { max } from 'vee-validate/dist/rules';
extend('max', {
  ...max,
  message: '{_field_}필드는 {length}자를 초과할 수 없습니다.'
});
export default {
  name: 'Forms',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    name: null,
    item : [
      { text: '아이템1', value: 1},
      { text: '아이템2', value: 2},
      { text: '아이템3', value: 3},
    ],
  })
}
</script>

<style scoped>

</style>
