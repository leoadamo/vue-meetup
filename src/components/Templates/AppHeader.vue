<template>
  <div class="header-wrapper">
    <v-navigation-drawer
      v-model="sideNav"
      absolute
      left
      temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>
              calendar_today
            </v-icon>
          </v-list-item-action>

          <v-list-item-content>
            Events
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app hide-on-scroll dark>
      <v-app-bar-nav-icon
        @click.native.stop="
          sideNav = !sideNav
        "
        class="d-flex d-sm-none"
      />

      <v-toolbar-title>
        Vue MeetUp
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items
        class="d-none d-sm-flex"
      >
        <v-btn text>
          <v-icon left>
            calendar_today
          </v-icon>
          Events
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data: () => ({
    sideNav: false
  })
}
</script>
