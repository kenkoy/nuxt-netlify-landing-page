<template>
  <div />
</template>

<script>
// import Game from '@/models/Game'

export default {
  layout: 'games',
  // async asyncData ({ params, error }) {
  //   try {
  //     const game = await import('~/assets/content/games.json')
  //     const gameData = game.data
  //     return {
  //       gameFilterData: {
  //         filter: gameData.available_filters.GAME_FINDER.map(f => ({
  //           id: f.filterid,
  //           name: f.filtername,
  //           code: f.filtercode,
  //           description: f.description
  //         })),
  //         sort: gameData.available_sort,
  //         provider: [],
  //         games: gameData.feed.map((f) => {
  //           return new Game(f.game_title, f.game_name_url, f.game_image)
  //         })
  //       },
  //       skin: params.slug
  //     }
  //   } catch (e) {
  //     error(e)
  //   }
  // },
  mounted () {
    this.emitData(this.gameFilterData, this.skin)
  },
  methods: {
    emitData (data, skin) {
      this.$root.$emit('game-data', { ...data, skin })
    }
  }
}
</script>
