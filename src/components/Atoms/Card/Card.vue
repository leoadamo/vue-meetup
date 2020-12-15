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
        {{ meetUp.date | date }} -
        {{ meetUp.location }}
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

      <template v-if="getUser">
        <Edit :meetUp="meetUp" />

        <v-btn
          fab
          small
          v-if="getUser"
          class="mb-1"
          @click="onRemoveMeetUp"
        >
          <v-icon>delete</v-icon>
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
import Edit from '@/components/Molecules/Dialogs/EditMeetUp'

export default {
  name: 'Card',
  components: {
    Edit
  },
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
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    ...mapActions([
      'removeMeetUp',
      'loadMeetUps'
    ]),
    onRemoveMeetUp() {
      this.removeMeetUp(this.meetUp.id)
      this.loadMeetUps(this.meetUp.id)
    }
  }
}
</script>
