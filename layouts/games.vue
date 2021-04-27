<template>
  <div class="core-wrapper" :class="{ game_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(gameData).length > 0"
      :class="`${gameData.skin}-theme`"
      class="game-main"
    >
      <nav v-if="mobile === true" id="filter-bar-mobile">
        <div class="container">
          <button class="btn-primary find" :class="modal ? 'active' : ''" @click="modalFilterFn()">
            Search games
          </button>
          <input v-model="search" placeholder="Search" type="text">
        </div>
      </nav>

      <section id="list-games">
        <div class="container main-content">
          <div>
            <FilterSearch v-if="modal && filterOverlay === true" class="overlay" @game-data-emit="getGameCaregoryEmit" /> <!-- Filter components that overlay -->

            <!-- Container for the filter menu -->
            <div v-if="desktop === true" id="filter-bar">
              <div id="find-button">
                <button class="btn-primary find" :class="modal ? 'active' : ''" @click="modalFilterFn()">
                  Find game you'll love
                </button>
              </div>

              <div id="description">
                <p>NOW SHOWING</p><span class="highlight">Promoted</span> from <span class="highlight">All providers</span> sorted by <span class="highlight">Our recommendation</span>
              </div>

              <div id="search">
                <button class="btn-primary find mobile" :class="modal ? 'active' : ''" @click="modalFilterFn()" />
                <p>Reset filters</p>
                <input v-model="search" placeholder="Search" type="text">
              </div>
            </div>

            <div v-if="modal && filterOverlay !== true" id="game-filter" class="slideFadeDown">
              <!-- Filter components that is NOT overlay -->
              <FilterSearch @game-data-emit="getGameCaregoryEmit" />
            </div>

            <!-- Container for the list of games -->
            <div id="game-wrapper" class="gutter">
              <div v-for="(game, gameIndex) in filteredGames" :key="gameIndex" class="game">
                <div v-if="gameIndex < limit">
                  <a rel="noopener" :href="`https://casino.verajohn.com/game/${game.game_name_url}`" target="_blank">
                    <img :src="game.game_image" :alt="game.game_title">
                    <p>{{ game.game_title }}</p>
                  </a>
                </div>
              </div>
              <div v-if="filteredGames.length === 0" class="no-available-games">
                <h4>No Results</h4>
              </div>
            </div>

            <aside v-if="filteredGames.length >= limit" id="pagination-wrapper">
              <!-- Pagination -->
              <p v-if="filteredGames.length !== 0" class="pagination-text">
                Showing {{ (filteredGames.length + limit) - filteredGames.length }} of {{ filteredGames.length }} games
              </p>
              <a v-if="filteredGames.length !== 0 && (filteredGames.length + limit) - filteredGames.length < games.length" class="load-more" @click="showMore">
                Load more
              </a>
              <h3 v-if="(filteredGames.length + limit) - filteredGames.length === games.length">
                All games shown
              </h3>
            </aside>
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
      desktop: true,
      mobile: false,
      filterOverlay: false,
      modal: false,
      gameData: {},
      games: [],
      htmlBody: '',
      search: '',
      limit: 18,
      showMoreAddItems: 6,
      gameCat: 'all_games'
    }
  },
  computed: {
    filteredGames () {
      return this.games.filter((game) => {
        return game.game_title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created () {
    this.$root.$once('game-data', (data) => {
      this.gameData = data
      this.games = data.feed
    })
  },
  beforeDestroy () {
    this.$root.$off('game-data')
    window.removeEventListener('resize', this.myEventHandler)
  },
  mounted () {
    this.myEventHandler()
    window.addEventListener('resize', this.myEventHandler)
  },
  methods: {
    myEventHandler () {
      // your code for handling resize...
      if (window.innerWidth <= 768) {
        this.desktop = false
        this.mobile = true
      } else {
        this.desktop = true
        this.mobile = false
      }
    },
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
    @import '@/assets/sass/gameFilter/style.scss';
  }
</style>
