<template>
  <div class="core-wrapper" :class="{ game_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      :class="mdData.slug_name"
      class="brands-main"
    >
      <section id="list-games">
        <div class="container main-content">
          <div>
            <div id="filter-bar">
              <div>
                <FilterSearch v-if="modal" @brands-data-emit="getGameCaregoryEmit" />
                <button class="btn-primary find" @click="modalFilterFn()">
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
                <div>
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

            <div v-if="filteredGames.length >= limit" id="pagination-wrapper">
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
import FilterSearch from '@/components/Brands/FilterSearch.vue'

export default {
  components: {
    FilterSearch
  },
  data () {
    return {
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
    this.$root.$once('brands-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('brands-data')
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
    @import '@/assets/sass/brands/style.scss';
  }
</style>
