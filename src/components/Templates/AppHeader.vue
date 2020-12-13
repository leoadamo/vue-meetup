<template>
  <div class="header-wrapper">
    <v-navigation-drawer
      v-model="sideNav"
      absolute
      left
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item,
          index) in menuItems"
          :key="index"
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>

          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app hide-on-scroll>
      <v-app-bar-nav-icon
        @click.stop="sideNav = !sideNav"
        class="d-flex d-sm-none"
      />

      <v-toolbar-title>
        <router-link
          :to="{ name: 'Home' }"
          tag="span"
          class="u-has-cursor"
        >
          Vue MeetUp
        </router-link>
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items
        v-for="(item,
        index) in menuItems"
        :key="index"
        class="d-none d-sm-flex"
      >
        <v-btn text :to="item.link">
          <v-icon class="mr-2" small>
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data: () => ({
    sideNav: false,
    menuItems: [
      {
        icon: 'calendar_today',
        title: 'View MeetUps',
        link: '/meetups'
      },
      {
        icon: 'location_on',
        title: 'Organize MeetUp',
        link: '/organize'
      },
      {
        icon: 'face',
        title: 'Profile',
        link: '/profile'
      },
      {
        icon: 'how_to_reg',
        title: 'Sign Up',
        link: '/sign-up'
      },
      {
        icon: 'lock_open',
        title: 'Sign In',
        link: 'sign-in'
      }
    ]
  })
}
</script>
