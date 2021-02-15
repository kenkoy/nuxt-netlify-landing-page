<template>
  <section id="filter" class="overlay">
    <div class="container">
      <form>
        <h3>Choose your favourite categories to find more games you'll love!</h3>

        <label v-for="(cats, cats_index) in categories" :key="cats_index" class="switch">
          <input type="radio" name="cat">
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
        }
      ]
    }
  }
}
</script>
