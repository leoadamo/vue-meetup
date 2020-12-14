<template>
  <v-app>
    <Header />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/Templates/AppHeader'

export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    this.loadMeetUps()
  },
  methods: {
    ...mapActions(['loadMeetUps'])
  }
}
</script>
