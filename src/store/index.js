import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetUps: [
      {
        id: 1,
        title: 'MeetUp Brazil',
        intro:
          'A nice Vue.js MeeUp at Brazil.',
        date: '2020-02-17',
        imageUrl:
          'https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg'
      },
      {
        id: 2,
        title: 'MeetUp London',
        intro:
          'A nice React.js MeeUp at London.',
        date: '2021-04-23',
        imageUrl:
          'https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz'
      },
      {
        id: 3,
        title: 'MeetUp Buenos Aires',
        intro:
          'A nice Javascript MeeUp at Buenos Aires.',
        date: '2021-11-12',
        imageUrl:
          'https://i.pinimg.com/originals/4e/c2/df/4ec2dfe9b156423bfa5014b62fa6ef98.jpg'
      }
    ],
    user: [
      {
        id: 1,
        registeredMeetups: [1, 3]
      }
    ]
  },
  mutations: {},
  actions: {},
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
      state.meetUps.slice(0, 5)
  }
})
