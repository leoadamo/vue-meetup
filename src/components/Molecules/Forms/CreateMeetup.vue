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
            label="Date"
            placeholder="Insert here when the MeetUp will occurs.."
            filled
            clearable
            color="accent"
            required
            v-model="form.date"
            :rules="rules.date"
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
            v-model="form.location"
            :rules="rules.location"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="4">
          <v-text-field
            label="Banner"
            placeholder="Set a nice image banner for your MeetUp..."
            filled
            clearable
            color="accent"
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
        date: '',
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
        date: [
          val =>
            (val || '').length > 0 ||
            'This field is Required'
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
    }
  },
  methods: {
    ...mapActions(['createMeetUp']),
    onCreateMeetUp() {
      if (!this.formIsValid) return

      this.createMeetUp(this.form)
      this.$router.push('/meetUps')
    }
  }
}
</script>
