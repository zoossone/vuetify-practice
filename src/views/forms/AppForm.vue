<template>
  <v-container>
    <v-card class="mt-5">
      <v-card-text class="mt-1">
        {{ customValue }}
        <app-text-field
          v-model="customValue"
          :counter="10"
          label="이름"
          placeholder="여기에 입력해주세요"
        />
        <app-text-field
          v-model="customValue"
          :counter="10"
          label="나이"
          placeholder="여기에 입력해주세요"
        />
        <app-text-field
          v-model="customValue"
          :counter="10"
          label="닉네임"
          placeholder="여기에 입력해주세요"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import AppTextField from '@/components/app/TextField'
export default {
  name: 'Forms',
  components: {
    AppTextField,
  },
  data: () => ({
    customValue: null,
  }),
}
</script>

<style scoped>

</style>
