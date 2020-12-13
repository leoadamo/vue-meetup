<template>
  <v-container>
    <h1 class="my-8 text-center">
      Organize a MeetUp
    </h1>

    <Form />
  </v-container>
</template>

<script>
import Form from '@/components/Molecules/Forms/CreateMeetup'

export default {
  name: 'MeetUps',
  title:
    'Vue MeetUp | Organize MeetUps',
  components: {
    Form
  }
}
</script>
