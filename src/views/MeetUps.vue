<template>
  <v-container>
    <h1 class="my-8 text-center">
      Check out the next MeetUps
    </h1>

    <Cards :cards="cards" />
  </v-container>
</template>

<script>
export default {
  name: 'MeetUps',
  title: 'Vue MeetUp | View MeetUps'
}
</script>
