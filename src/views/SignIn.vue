<template>
  <v-container>
    <h1 class="my-8 text-center">
      Sign In into your account
    </h1>

    <SignInForm />
  </v-container>
</template>

<script>
import SignInForm from '@/components/Molecules/Forms/SignIn'

export default {
  name: 'MeetUps',
  title: 'Vue MeetUp | Sign In',
  components: {
    SignInForm
  }
}
</script>
