<template>
  <div class="carousel">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-carousel
          cycle
          interval="3000"
        >
          <v-carousel-item
            v-for="(meetup,
            index) in featuredMeetUps"
            :key="index"
            :src="meetup.imageUrl"
            :to="{
              name: 'MeetUp',
              params: {
                id: meetup.id,
                title: meetup.title
              }
            }"
            reverse-transition="fade-transition"
            transition="fade-transition"
            class="u-has-cursor"
          >
            <h2 class="carousel__title">
              {{ meetup.title }}
            </h2>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row no-gutters class="my-4">
      <v-col
        cols="12"
        class="text-center"
      >
        <h1
          class="carousel__description"
        >
          Enjoy our amazing MeetUps!
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="6"
        class="text-center text-md-right"
      >
        <v-btn
          center
          rounded
          router
          to="/meetups"
          color="accent"
        >
          Explore MeetUps
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class=" text-center text-md-left"
      >
        <v-btn
          center
          rounded
          router
          to="/organize"
          color="accent"
        >
          Organize MeetUps
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Carousel',
  computed: {
    ...mapGetters(['featuredMeetUps'])
  }
}
</script>
