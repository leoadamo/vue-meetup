import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: colors.grey.darken4, // #212121
        secondary: colors.grey.darken3, // #424242
        tertiary: colors.grey.lighten3, // #EEEEEE
        accent: colors.green.accent3, // #00E676
        white: colors.white // #FFFFFF
      }
    }
  }
})
