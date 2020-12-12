<template>
  <v-container>
    <Cards :cards="cards" />
  </v-container>
</template>

<script>
import Cards from '@/components/Molecules/Cards/Cards'

export default {
  name: 'MeetUps',
  title: 'Vue MeetUp | View MeetUps',
  components: {
    Cards
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          media:
            'https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg',
          title: 'MeetUp Brazil',
          subtitle: '17th, March 2020',
          intro:
            'A nice Vue.js MeeUp at Brazil.'
        },
        {
          id: 2,
          media:
            'https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz',
          title: 'MeetUp London',
          subtitle: '21st, April 2021',
          intro:
            'A nice React.js MeeUp at London.'
        },
        {
          id: 3,
          media:
            'https://i.pinimg.com/originals/4e/c2/df/4ec2dfe9b156423bfa5014b62fa6ef98.jpg',
          title: 'MeetUp Buenos Aires',
          subtitle:
            '18th, November 2021',
          intro:
            'A nice Javascript MeeUp at Buenos Aires.'
        }
      ]
    }
  }
}
</script>
