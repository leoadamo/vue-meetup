<template>
  <v-form @submit.prevent>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="4">
          <v-text-field
            label="Title"
            placeholder="Insert here a MeetUp Title..."
            filled
            clearable
            color="accent"
            autofocus
            autocomplete="off"
            required
            v-model="form.title"
            :rules="rules.title"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="4">
          <v-textarea
            label="Description"
            placeholder="Enter a brief description for the MeetUp..."
            filled
            clearable
            color="accent"
            no-resize
            v-model="form.intro"
            :rules="rules.intro"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="4">
          <v-text-field
            label="Location"
            placeholder="Define the location of the Event..."
            filled
            clearable
            color="accent"
            required
            autocomplete="off"
            v-model="form.location"
            :rules="rules.location"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="4">
          <h3 class="mb-4">
            Select when the event will
            occurs:
          </h3>

          <v-date-picker
            width="100%"
            v-model="form.date"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col
          cols="12"
          md="8"
          lg="4"
          class="d-flex flex-column align-md-center"
        >
          <h3
            class="mb-4 align-self-md-start"
          >
            Select the period of the
            event:
          </h3>

          <v-time-picker
            format="24hr"
            v-model="form.time"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="4">
          <v-text-field
            label="Banner"
            placeholder="Set a nice image banner for your MeetUp..."
            hint="For now, enter with a String as path of the image"
            filled
            clearable
            autocomplete="off"
            color="accent"
            required
            v-model="form.imageUrl"
            :rules="rules.imageUrl"
          />

          <v-img
            v-if="form.imageUrl"
            :src="form.imageUrl"
            :alt="form.title"
            height="150"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col
          cols="12"
          md="8"
          lg="4"
          class="d-flex justify-end"
        >
          <v-btn
            type="submit"
            hover
            color="accent"
            :disabled="!formIsValid"
            @click="onCreateMeetUp"
          >
            Create MeetUp
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CreateMeetup',
  data() {
    return {
      form: {
        title: '',
        intro: '',
        location: '',
        date: null,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        imageUrl: ''
      },
      rules: {
        title: [
          val =>
            (val || '').length > 0 ||
            'This field is Required'
        ],
        intro: [
          val =>
            (val || '').length > 0 ||
            'This field is Required',
          val =>
            (val || '').length < 140 ||
            'This field allows a maximum caracters of 140'
        ],
        location: [
          val =>
            (val || '').length > 0 ||
            'This field is Required'
        ],
        imageUrl: [
          val =>
            (val || '').length > 0 ||
            'This field is Required'
        ]
      }
    }
  },
  computed: {
    formIsValid() {
      return (
        this.form.title &&
        this.form.intro &&
        this.form.location &&
        this.form.date &&
        this.form.imageUrl
      )
    },
    convertedDate() {
      const date = new Date(
        `${this.form.date}GMT-0300`
      )

      if (
        typeof this.form.time ===
        'string'
      ) {
        let hours = this.form.time.match(
          /^(\d+)/
        )[1]
        const minutes = this.form.time.match(
          /:(\d+)/
        )[1]

        date.setHours(hours)
        date.setMinutes(minutes)
      } else {
        date.setHours(
          this.form.time.getHours()
        )

        date.setMinutes(
          this.form.time.getMinutes()
        )
      }

      return date
    }
  },
  mounted() {
    this.localISOTime()
  },
  methods: {
    ...mapActions(['createMeetUp']),
    onCreateMeetUp() {
      if (!this.formIsValid) return

      const meetUpData = {
        title: this.form.title,
        intro: this.form.intro,
        location: this.form.location,
        date: this.convertedDate,
        imageUrl: this.form.imageUrl
      }

      this.createMeetUp(meetUpData)
      this.$router.push('/meetUps')
    },
    localISOTime() {
      const tzOffset =
        new Date().getTimezoneOffset() *
        60000

      const localISOTime = new Date(
        Date.now() - tzOffset
      )
        .toISOString()
        .substr(0, 10)

      this.form.date = localISOTime
    }
  }
}
</script>
