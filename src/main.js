import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import titleMixin from './mixins/titleMixin'

// Styles
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/scss/main.scss'

Vue.mixin(titleMixin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
