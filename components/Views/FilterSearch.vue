<template>
  <div>
    <section v-if="desktop === true" id="filter">
      <div class="container">
        <form>
          <h3>Choose your favourite categories to find more games you'll love!</h3>

          <label v-for="(cats, cats_index) in categories" :key="cats_index" class="switch">
            <input
              type="radio"
              name="cat"
              :value="cats.tags"
              @click="gameDataEmit(cats.tags)"
            >
            <a class="slider noselect">{{ cats.name }}</a>
          </label>
        </form>
      </div>

      <hr>

      <div class="container">
        <form>
          <h3>Game provider</h3>

          <label v-for="(cats, cats_index) in categories" :key="cats_index" class="switch">
            <input
              type="radio"
              name="cat"
              :value="cats.tags"
              @click="gameDataEmit(cats.tags)"
            >
            <a class="slider noselect">{{ cats.name }}</a>
          </label>
        </form>
      </div>
    </section>

    <section v-if="mobile === true" id="filter">
      <div class="container">
        <form>
          <aside>
            <select>
              <option v-for="(cats, cats_index) in categories" :key="cats_index">
                {{ cats.name }}
              </option>
            </select>
          </aside>

          <aside>
            <select>
              <option v-for="(cats, cats_index) in categories" :key="cats_index">
                {{ cats.name }}
              </option>
            </select>
          </aside>

          <aside>
            <select>
              <option v-for="(cats, cats_index) in categories" :key="cats_index">
                {{ cats.name }}
              </option>
            </select>
          </aside>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      desktop: true,
      mobile: false,
      categories: [
        {
          name: 'Promoted',
          tags: 'promoted'
        },
        {
          name: 'All games',
          tags: 'all_games'
        },
        {
          name: 'Slots',
          tags: 'slots'
        },
        {
          name: 'Provider of the Month',
          tags: 'provider_of_the_month'
        },
        {
          name: 'Promoted',
          tags: 'promoted'
        },
        {
          name: 'All games',
          tags: 'all_games'
        },
        {
          name: 'Slots',
          tags: 'slots'
        },
        {
          name: 'Provider of the Month',
          tags: 'provider_of_the_month'
        },
        {
          name: 'Promoted',
          tags: 'promoted'
        },
        {
          name: 'All games',
          tags: 'all_games'
        },
        {
          name: 'Slots',
          tags: 'slots'
        },
        {
          name: 'Provider of the Month',
          tags: 'provider_of_the_month'
        },
        {
          name: 'Promoted',
          tags: 'promoted'
        },
        {
          name: 'All games',
          tags: 'all_games'
        },
        {
          name: 'Slots',
          tags: 'slots'
        },
        {
          name: 'Provider of the Month',
          tags: 'provider_of_the_month'
        },
        {
          name: 'Promoted',
          tags: 'promoted'
        },
        {
          name: 'All games',
          tags: 'all_games'
        },
        {
          name: 'Slots',
          tags: 'slots'
        },
        {
          name: 'Provider of the Month',
          tags: 'provider_of_the_month'
        },
        {
          name: 'Promoted',
          tags: 'promoted'
        },
        {
          name: 'All games',
          tags: 'all_games'
        },
        {
          name: 'Slots',
          tags: 'slots'
        },
        {
          name: 'Provider of the Month',
          tags: 'provider_of_the_month'
        },
        {
          name: 'Promoted',
          tags: 'promoted'
        },
        {
          name: 'All games',
          tags: 'all_games'
        },
        {
          name: 'Slots',
          tags: 'slots'
        },
        {
          name: 'Provider of the Month',
          tags: 'provider_of_the_month'
        },
        {
          name: 'Promoted',
          tags: 'promoted'
        },
        {
          name: 'All games',
          tags: 'all_games'
        },
        {
          name: 'Slots',
          tags: 'slots'
        },
        {
          name: 'Provider of the Month',
          tags: 'provider_of_the_month'
        },
        {
          name: 'Promoted',
          tags: 'promoted'
        },
        {
          name: 'All games',
          tags: 'all_games'
        },
        {
          name: 'Slots',
          tags: 'slots'
        },
        {
          name: 'Provider of the Month',
          tags: 'provider_of_the_month'
        }
      ]
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.myEventHandler)
  },
  mounted () {
    this.myEventHandler()
    window.addEventListener('resize', this.myEventHandler)
  },
  methods: {
    myEventHandler () {
      // your code for handling resize...
      if (window.innerWidth <= 992) {
        this.desktop = false
        this.mobile = true
      } else {
        this.desktop = true
        this.mobile = false
      }
    },
    gameDataEmit (gameCat) {
      this.$emit('game-data-emit', gameCat)
    }
  }
}
</script>
