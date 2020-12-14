<template>
  <v-card
    class="d-flex flex-column justify-space-between"
    :max-width="maxWidth"
    height="100%"
  >
    <v-container fluid pa-0>
      <v-img
        :src="meetUp.imageUrl"
        :alt="meetUp.title"
        :height="mediaHeight"
      >
        <v-card-title>
          {{ meetUp.title }}
        </v-card-title>
      </v-img>

      <v-card-subtitle>
        {{ meetUp.date | date }}
      </v-card-subtitle>

      <v-card-text>
        {{ meetUp.intro }}
      </v-card-text>
    </v-container>

    <v-card-actions>
      <v-btn
        :to="{
          name: 'MeetUp',
          params: {
            id: meetUp.id,
            title: meetUp.title
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
    meetUp: {
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
