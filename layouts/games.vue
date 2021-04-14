<template>
  <div class="core-wrapper" :class="{ game_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      :class="mdData.slug_name"
      class="game-main"
    >
      <section id="list-games">
        <div class="container main-content">
          <div>
            <div id="filter-bar"> <!-- Container for the filter menu -->
              <FilterSearch class="overlay" v-if="modal && filterOverlay === true" @game-data-emit="getGameCaregoryEmit" /> <!-- Filter components that overlay -->
              <div id="find-button">
                <button class="btn-primary find desktop" :class="modal ? 'active' : ''" @click="modalFilterFn()">
                  Find game you'll love
                </button>
              </div>

              <div id="description">
                <p>NOW SHOWING</p><span class="highlight">Promoted</span> from <span class="highlight">All providers</span> sorted by <span class="highlight">Our recommendation</span>
              </div>

              <div id="search">
                <button class="btn-primary find mobile" :class="modal ? 'active' : ''" @click="modalFilterFn()" />
                <a @click="gameCat = 'all_games'">Reset filters</a>
                <input v-model="search" placeholder="Search" type="text">
              </div>
            </div>

            <div> <!-- Container for the list of games -->
              <div v-if="modal && filterOverlay !== true" id="game-filter" class="slideFadeDown"> <!-- Filter components that is NOT overlay -->
                <FilterSearch @game-data-emit="getGameCaregoryEmit" />
              </div>

              <div v-for="(game, gameIndex) in filteredGames" :key="gameIndex" class="game">
                <div v-if="game.tags.includes(gameCat)">
                  <div v-if="gameIndex < limit">
                    <img :src="game.image">
                    <p>{{ game.title }}</p>
                  </div>
                </div>
              </div>
              <div v-if="filteredGames.length === 0" class="no-available-games">
                <h4>No Results</h4>
              </div>
            </div>

            <div v-if="filteredGames.length >= limit" id="pagination-wrapper"> <!-- Pagination -->
              <p v-if="filteredGames.length !== 0" class="pagination-text">
                Showing {{ (filteredGames.length + limit) - filteredGames.length }} of {{ mdData.games.length }} games
              </p>
              <a v-if="filteredGames.length !== 0 && (filteredGames.length + limit) - filteredGames.length < mdData.games.length" class="load-more" @click="showMore">
                Load more
              </a>
              <h3 v-if="(filteredGames.length + limit) - filteredGames.length === mdData.games.length">
                All games shown
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import FilterSearch from '@/components/Views/FilterSearch.vue'

export default {
  components: {
    FilterSearch
  },
  data () {
    return {
      filterOverlay: false,
      modal: false,
      mdData: {},
      htmlBody: '',
      search: '',
      limit: 18,
      showMoreAddItems: 6,
      gameCat: 'all_games'
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
  },
  methods: {
    showMore () {
      this.limit += this.showMoreAddItems
    },
    modalFilterFn () {
      this.modal = !this.modal
    },
    getGameCaregoryEmit (gameDataEmit) {
      this.gameCat = gameDataEmit
    }
  }
}
</script>

<style lang="scss">
  .game_wrapper {
    @import '@/assets/sass/brand/style.scss';
  }
</style>
