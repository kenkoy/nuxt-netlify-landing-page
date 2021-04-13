<template>
  <section id="filter">
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
</template>

<script>
export default {
  data () {
    return {
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
  methods: {
    gameDataEmit (gameCat) {
      this.$emit('game-data-emit', gameCat)
    }
  }
}
</script>
