<template>
  <v-row class="cards" wrap>
    <v-col
      v-for="(card, index) in cards"
      :key="index"
      class="cards__item"
      cols="12"
      sm="6"
      md="4"
    >
      <Card
        :card="card"
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
    cards: {
      type: Array,
      required: true,
      default: null
    }
  }
}
</script>
