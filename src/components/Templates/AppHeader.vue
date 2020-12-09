<template>
  <v-app-bar app hide-on-scroll dark>
    <v-toolbar-title>
      Vue MeetUp
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-btn text>
        <v-icon left>
          calendar_today
        </v-icon>
        Eventos
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
