<template>
  <div>
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
            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>

            <div class="game">
              <div>
                <img src="@/assets/images/brands/1.png">
                <p>Game 1</p>
              </div>
            </div>
          </div>

          <aside id="pagination-wrapper">
            <p class="pagination-text">
              Showing 18 of 1976 games
            </p>
            <a class="load-more">
              Load more
            </a>
          </aside>
        </div>
      </div>
    </section>
    <section id="loyalty">
      <div class="container">
        <div>
          <h3>Jackpot</h3>
        </div>

        <div>
          <h3>I'm on the wild side</h3>
        </div>

        <div>
          <h3>The Loyalty Program</h3>
        </div>
      </div>
    </section>
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
      modal: false
    }
  },
  methods: {
    modalFilterFn () {
      this.modal = !this.modal
    }
  }
}
</script>
