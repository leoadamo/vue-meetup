<template>
  <v-container
    class="d-flex align-center justify-center fill-height"
  >
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <Card
          :meetUp="singleMeetUp"
          media-height="500"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '@/components/Atoms/Card/Card'

export default {
  name: 'MeetUps',
  title: `Vue MeetUp | MeetUp Details`,
  components: {
    Card
  },
  props: ['id'],
  computed: {
    ...mapGetters(['meetUp']),
    singleMeetUp() {
      return this.meetUp(this.id)
    },
    getTitle() {
      return this.$route.params.title
    }
  }
}
</script>
