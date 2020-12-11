<template>
  <v-container>
    <!-- Carousel -->
    <Carousel />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Molecules/Carousel/Carousel'

export default {
  name: 'Home',
  title: 'Vue MeetUp | Home',
  components: { Carousel }
}
</script>
