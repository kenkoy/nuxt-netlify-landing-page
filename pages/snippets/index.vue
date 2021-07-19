<template>
  <div class="layout-css">
    <nav>
      <button @click="page = 'navigation'">Navigation overlaying logo</button>
      <button @click="page = 'banner'">Banner 2 columns</button>
      <button @click="page = 'game-list-swipe'">Game list swipe</button>
    </nav>

    <Navigation v-if="page === 'navigation'" />
    <Banner v-if="page === 'banner'" />
    <GameListSwipe v-if="page === 'game-list-swipe'" />
  </div>
</template>

<script>
import Navigation from '~/components/Snippets/Navigation'
import Banner from '~/components/Snippets/Banner'
import GameListSwipe from '~/components/Snippets/GameListSwipe'
export default {
  layout: 'snippets',
  components: {
    Navigation,
    Banner,
    GameListSwipe
  },
  data () {
    return {
      page: 'navigation'
    }
  }
}
</script>

<style lang='scss'>
#codes {
  padding: 50px 0;
  background: #f5b53b;
}
</style>
