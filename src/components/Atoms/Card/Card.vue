<template>
  <v-card
    class="d-flex flex-column justify-space-between"
    :max-width="maxWidth"
    height="100%"
  >
    <v-container fluid pa-0>
      <v-img
        :src="card.media"
        :alt="card.title"
        :height="mediaHeight"
      >
        <v-card-title>
          {{ card.title }}
        </v-card-title>
      </v-img>

      <v-card-subtitle>
        {{ card.subtitle }}
      </v-card-subtitle>

      <v-card-text>
        {{ card.intro }}
      </v-card-text>
    </v-container>

    <v-card-actions>
      <v-btn
        :to="{
          name: 'MeetUp',
          params: {
            id: card.id,
            title: card.title
          }
        }"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
      default: null
    },
    maxWidth: {
      type: String
    },
    mediaHeight: {
      type: String
    }
  }
}
</script>
