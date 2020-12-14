<template>
  <v-container>
    <h1 class="my-8 text-center">
      Create an account
    </h1>

    <SignUpForm />
  </v-container>
</template>

<script>
import SignUpForm from '@/components/Molecules/Forms/SignUp'

export default {
  name: 'MeetUps',
  title: 'Vue MeetUp | Sign Up',
  components: {
    SignUpForm
  }
}
</script>
