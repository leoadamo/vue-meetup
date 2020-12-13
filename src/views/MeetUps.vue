<template>
  <v-container>
    <h1 class="my-8 text-center">
      Check out the next MeetUps
    </h1>

    <Cards :meetUps="meetUps" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Cards from '@/components/Molecules/Cards/Cards'

export default {
  name: 'MeetUps',
  title: 'Vue MeetUp | View MeetUps',
  components: {
    Cards
  },
  computed: {
    ...mapGetters(['meetUps'])
  }
}
</script>
