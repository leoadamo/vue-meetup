<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <Card
          :card="card"
          media-height="600"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/Atoms/Card/Card'

export default {
  name: 'MeetUps',
  title: `Vue MeetUp | MeetUp Details`,
  components: {
    Card
  },
  data() {
    return {
      card: {
        id: 1,
        media:
          'https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg',
        title: 'MeetUp Brazil',
        subtitle: '17th, March 2020',
        intro:
          'A nice Vue.js MeeUp at Brazil.'
      }
    }
  },
  computed: {
    getTitle() {
      return this.$route.params.title
    }
  }
}
</script>
