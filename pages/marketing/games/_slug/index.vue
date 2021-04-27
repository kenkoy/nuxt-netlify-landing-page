<template>
  <div />
</template>

<script>
export default {
  layout: 'games', // Change to actual layout
  async asyncData ({ params, error }) {
    try {
      const game = await import('~/assets/content/games.json')
      return {
        gameData: game.data,
        skin: params.slug
      }
    } catch (e) {
      error(e)
    }
  },
  mounted () {
    this.emitData(this.gameData, this.skin)
  },
  methods: {
    emitData (data, skin) {
      this.$root.$emit('game-data', {
        finder: data.available_filters.GAME_FINDER,
        sort: data.available_sort,
        provider: [],
        feed: data.feed,
        skin
      })
    }
  }
}
</script>
