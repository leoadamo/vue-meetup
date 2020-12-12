<template>
  <div class="carousel">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-carousel>
          <v-carousel-item
            v-for="(meetup,
            index) in meetups"
            :key="index"
            :src="meetup.cover"
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
            <h1 class="carousel__title">
              {{ meetup.title }}
            </h1>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row no-gutters class="my-4">
      <v-col
        cols="12"
        class="text-center"
      >
        <h2
          class="carousel__description"
        >
          Enjoy our amazing MeetUps!
        </h2>
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
export default {
  name: 'Carousel',
  data: () => ({
    meetups: [
      {
        id: 1,
        title: 'MeetUp Brazil',
        cover:
          'https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg'
      },
      {
        id: 2,
        title: 'MeetUp London',
        cover:
          'https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz'
      },
      {
        id: 3,
        title: 'MeetUp Buenos Aires',
        cover:
          'https://i.pinimg.com/originals/4e/c2/df/4ec2dfe9b156423bfa5014b62fa6ef98.jpg'
      }
    ]
  })
}
</script>
