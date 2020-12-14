<template>
  <v-alert
    dismissible
    type="error"
    @input="onDismiss"
  >
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    message: {
      type: String,
      required: true,
      default: null
    }
  },
  methods: {
    onDismiss() {
      this.$emit('dismissed')
    }
  }
}
</script>
