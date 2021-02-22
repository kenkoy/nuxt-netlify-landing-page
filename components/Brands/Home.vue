<template>
  <div id="home">
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
      <div class="container column-3">
        <div class="jackpot">
          <div class="items">
            <h4>Jackpot</h4>
            <p>Sisters of Oz Jackpot</p>
            <p class="price">12,845.61</p>
          </div>
        </div>

        <div>
          <div class="items">
            <h4>I'm on the wild side</h4>

            <div class="feat-img">
              <img src="https://cdn.plaingaming.net/files/repository/105/1/10003/all/all/image/generic.png?qopuiq&601b&6012">
            </div>

            <button class="btn-primary">Play random game</button>
          </div>
        </div>

        <div>
          <div class="items usp-loyalty">
            <div>
              <h3>The Loyalty Program</h3>
              <p>Play games.<br/>
              Level up.<br/>
              Buy stuff!
              </p>

              <p class="price">Our Loyalty Program</p>
            </div>
            <div>
              <img src="https://casino.verajohn.com/fragment/loyalty/assets/images/f2797b32eae32f95baa859b510df8a45.png">
            </div>
          </div>
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
