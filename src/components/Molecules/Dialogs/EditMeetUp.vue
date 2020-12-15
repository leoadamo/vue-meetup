<template>
  <v-row
    justify="end"
    class="mx-0 mb-1 mr-2"
  >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template
        v-slot:activator="{ on, attrs }"
      >
        <v-btn
          fab
          v-bind="attrs"
          v-on="on"
          small
        >
          <v-icon>edit</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">
            Edit Meetup
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Title"
                  placeholder="Enter the new title of the MeetUp"
                  type="text"
                  filled
                  clearable
                  color="accent"
                  autofocus
                  autocomplete="off"
                  required
                  v-model="
                    form.editedTitle
                  "
                  :rules="
                    rules.editedTitle
                  "
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-textarea
                  label="Description"
                  placeholder="Enter a brief description for the MeetUp..."
                  filled
                  clearable
                  color="accent"
                  no-resize
                  v-model="
                    form.editedIntro
                  "
                  :rules="
                    rules.editedIntro
                  "
                />
              </v-col>
            </v-row>
          </v-container>

          <small>
            *indicates required field
          </small>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            text
            :disabled="!formIsValid"
            @click="onUpdateMeetUp"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'EditMeetUp',
  props: {
    meetUp: {
      type: Object,
      reuired: true,
      default: null
    }
  },
  data() {
    return {
      dialog: false,
      form: {
        editedTitle: this.meetUp.title,
        editedIntro: this.meetUp.intro
      },
      rules: {
        editedTitle: [
          val =>
            (val || '').length > 0 ||
            'This field is Required'
        ],
        editedIntro: [
          val =>
            (val || '').length > 0 ||
            'This field is Required',
          val =>
            (val || '').length < 140 ||
            'This field allows a maximum caracters of 140'
        ]
      }
    }
  },
  computed: {
    formIsValid() {
      return (
        this.form.editedTitle &&
        this.form.editedIntro
      )
    }
  },
  methods: {
    ...mapActions([
      'updateMeetUp',
      'loadMeetUps'
    ]),
    onUpdateMeetUp() {
      this.dialog = false

      this.updateMeetUp({
        id: this.meetUp.id,
        title: this.form.editedTitle,
        intro: this.form.editedIntro
      })

      this.loadMeetUps()
    }
  }
}
</script>
