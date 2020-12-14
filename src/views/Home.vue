<template>
  <v-container
    class="d-flex align-center justify-center fill-height"
  >
    <div
      v-if="loading"
      class="text-center"
    >
      <!-- Loader -->
      <v-progress-circular
        indeterminate
        color="accent"
        size="60"
      />
    </div>

    <!-- Carousel -->
    <Carousel v-else />
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import Carousel from '@/components/Molecules/Carousel/Carousel'

export default {
  name: 'Home',
  title: 'Vue MeetUp | Home',
  components: { Carousel },
  computed: {
    ...mapGetters(['loading'])
  }
}
</script>
