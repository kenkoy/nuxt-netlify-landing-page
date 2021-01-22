<template>
  <div :class="{ game_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      :class="mdData.slug_name"
      class="game-main"
    >
      <section id="list-games">
        <div class="container main-content">
          <div>
            <div id="filter-bar">
              <div>
                <button class="btn-primary">
                  Find game you'll love
                </button>
              </div>

              <div id="description">
                <p>NOW SHOWING</p><span class="highlight">Promoted</span> from <span class="highlight">All providers</span> sorted by <span class="highlight">Our recommendation</span>
              </div>

              <div id="search">
                <p>Reset filters</p>
                <input v-model="search" placeholder="Search" type="text">
              </div>
            </div>

            <div>
              <div v-for="(game, gameIndex) in filteredGames" :key="gameIndex" class="game">
                <img :src="game.image">
                <p>{{ game.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      mdData: {},
      htmlBody: '',
      search: ''
    }
  },
  computed: {
    filteredGames () {
      return this.mdData.games.filter((game) => {
        return game.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created () {
    this.$root.$once('game-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('game-data')
  }
}
</script>

<style lang="scss">
  .game_wrapper {
    @import '@/assets/sass/games/style.scss';
    @import '@/assets/sass/base/style.scss';
  }
</style>
