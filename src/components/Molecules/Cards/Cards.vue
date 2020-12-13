<template>
  <v-row class="cards" wrap>
    <v-col
      v-for="(meetUp, index) in meetUps"
      :key="index"
      class="cards__item"
      cols="12"
      sm="6"
      md="4"
    >
      <Card
        :meetUp="meetUp"
        max-width="400"
        media-height="200"
      />
    </v-col>
  </v-row>
</template>

<script>
import Card from '@/components/Atoms/Card/Card'

export default {
  name: 'Cards',
  components: {
    Card
  },
  props: {
    meetUps: {
      type: Array,
      required: true,
      default: null
    }
  }
}
</script>
