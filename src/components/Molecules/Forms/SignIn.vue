<template>
  <v-form @submit.prevent>
    <v-container>
      <v-row
        v-if="error"
        justify="center"
      >
        <v-col cols="12" md="8" lg="4">
          <app-alert
            :message="error.message"
            @dismissed="closeAlert"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="4">
          <v-text-field
            label="E-mail"
            placeholder="Type your email..."
            type="email"
            filled
            clearable
            color="accent"
            autofocus
            autocomplete="off"
            required
            v-model="form.email"
            :rules="rules.email"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="4">
          <v-text-field
            label="Password"
            placeholder="Type your password..."
            type="password"
            filled
            clearable
            color="accent"
            required
            autocomplete="off"
            v-model="form.password"
            :rules="rules.password"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col
          cols="12"
          md="8"
          lg="4"
          class="d-flex justify-end"
        >
          <v-btn
            type="submit"
            hover
            color="accent"
            :disabled="
              !formIsValid || loading
            "
            @click="onSignIn"
            :loading="loading"
          >
            Sign In
            <template v-slot:loader>
              <span
                class="custom-loader"
              >
                <v-icon>
                  mdi-cached
                </v-icon>
              </span>
            </template>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          val =>
            (val || '').length > 0 ||
            'This field is Required',

          val => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return (
              pattern.test(val) ||
              'Invalid e-mail.'
            )
          }
        ],
        password: [
          val =>
            (val || '').length > 0 ||
            'This field is Required',
          val =>
            (val || '').length < 140 ||
            'This field allows a maximum caracters of 140'
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'loading',
      'error'
    ]),
    formIsValid() {
      return (
        this.form.email &&
        this.form.password
      )
    }
  },
  watch: {
    getUser(value) {
      if (
        value !== null &&
        value !== undefined
      )
        this.$router.push('/')
    }
  },
  methods: {
    ...mapActions([
      'signUserIn',
      'clearError'
    ]),
    onSignIn() {
      if (!this.formIsValid) return

      this.signUserIn({
        email: this.form.email,
        password: this.form.password
      })
    },
    closeAlert() {
      this.clearError()
    }
  }
}
</script>
