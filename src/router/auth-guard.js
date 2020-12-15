import store from '../store'

export default (to, from, next) => {
  store.getters.getUser
    ? next()
    : next('/sign-in')
}
