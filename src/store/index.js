import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetUps: [],
    user: null,
    isLoading: false,
    hasError: null
  },
  mutations: {
    loadMeetUps: (state, payload) =>
      (state.meetUps = payload),

    createMeetUp: (state, payload) =>
      state.meetUps.push(payload),

    createUser: (state, payload) =>
      (state.user = payload),

    setLoading: (state, payload) =>
      (state.isLoading = payload),

    setError: (state, payload) =>
      (state.hasError = payload),

    clearError: state =>
      (state.hasError = null)
  },
  actions: {
    loadMeetUps: ({ commit }) => {
      commit('setLoading', true)
      firebase
        .database()
        .ref('meetUps')
        .once('value')
        .then(data => {
          commit('setLoading', false)
          const meetUps = []
          const response = data.val()

          for (let key in response) {
            meetUps.push({
              id: key,
              title:
                response[key].title,
              intro:
                response[key].intro,
              imageUrl:
                response[key].imageUrl,
              location:
                response[key].location,
              date: response[key].date
            })
          }

          commit('loadMeetUps', meetUps)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
        })
    },
    createMeetUp: (
      { commit },
      payload
    ) => {
      const meetUp = {
        title: payload.title,
        intro: payload.intro,
        location: payload.location,
        date: payload.date.toISOString(),
        imageUrl: payload.imageUrl
      }
      commit('setLoading', true)
      firebase
        .database()
        .ref('meetUps')
        .push(meetUp)
        .then(data => {
          const key = data.key
          commit('createMeetup', {
            ...meetUp,
            id: key
          })
          commit('setLoading', false)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
        })
    },
    createUser: (
      { commit },
      payload
    ) => {
      commit('setLoading', true)
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          payload.email,
          payload.password
        )
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.user.uid,
            registeredMeetups: []
          }

          commit('createUser', newUser)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
        })
    },
    signUserIn: (
      { commit },
      payload
    ) => {
      commit('setLoading', true)
      firebase
        .auth()
        .signInWithEmailAndPassword(
          payload.email,
          payload.password
        )
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.user.uid,
            registeredMeetups: []
          }

          commit('createUser', newUser)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
        })
    },
    clearError: ({ commit }) =>
      commit('clearError')
  },
  getters: {
    meetUps: state =>
      state.meetUps.sort(
        (meetUpA, meetUpB) =>
          meetUpA.date > meetUpB.date
      ),
    meetUp: state => id =>
      state.meetUps.find(
        meetUp => meetUp.id === id
      ),
    featuredMeetUps: state =>
      state.meetUps.slice(0, 5),
    getUser: state => state.user,
    loading: state => state.isLoading,
    error: state => state.hasError
  }
})
