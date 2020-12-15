import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import titleMixin from './mixins/titleMixin'
import dateFilter from './filters/date'
import Alert from './components/Atoms/Alerts/Alert'

// Styles
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/scss/main.scss'

// Global Alert component
Vue.component('app-alert', Alert)

// Mixin for handle page titles
Vue.mixin(titleMixin)

// Filter to format date into templates
Vue.filter('date', dateFilter)

// Default configuration
Vue.config.productionTip = false

// Firebase config
const firebaseConfig = {
  apiKey:
    'AIzaSyDuEyt0WM2UJYPPx4dE8j-Q9mEov3trGjs',
  authDomain:
    'vue-meetup-4fa9e.firebaseapp.com',
  databaseURL:
    'https://vue-meetup-4fa9e-default-rtdb.firebaseio.com',
  projectId: 'vue-meetup-4fa9e',
  storageBucket:
    'vue-meetup-4fa9e.appspot.com',
  messagingSenderId: '492856373279',
  appId:
    '1:492856373279:web:aa7ee6fb886cbd27b4652a'
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp(
      firebaseConfig
    )

    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          this.$store.dispatch(
            'autoSignIn',
            user
          )
        }
      })
  }
}).$mount('#app')
