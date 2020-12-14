import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetUps: [
      {
        id: 1,
        title: 'MeetUp Brazil',
        intro:
          'A nice Vue.js MeeUp at Brazil.',
        date: new Date(),
        imageUrl:
          'https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg'
      },
      {
        id: 2,
        title: 'MeetUp London',
        intro:
          'A nice React.js MeeUp at London.',
        date: new Date(),
        imageUrl:
          'https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz'
      },
      {
        id: 3,
        title: 'MeetUp Buenos Aires',
        intro:
          'A nice Javascript MeeUp at Buenos Aires.',
        date: new Date(),
        imageUrl:
          'https://i.pinimg.com/originals/4e/c2/df/4ec2dfe9b156423bfa5014b62fa6ef98.jpg'
      }
    ],
    user: null,
    isLoading: false,
    hasError: null
  },
  mutations: {
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
    createMeetUp: (
      { commit },
      payload
    ) => {
      const meetUp = {
        id: 5,
        title: payload.title,
        intro: payload.intro,
        location: payload.location,
        date: payload.date,
        imageUrl: payload.imageUrl
      }

      commit('createMeetUp', meetUp)
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
