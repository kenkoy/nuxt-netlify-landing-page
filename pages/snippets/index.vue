<template>
  <div class="layout-css">
    <nav id="snippets-nav" :class="navActive ? 'active' : ''">
      <button @click="page = 'nav-floating-logo'">Nav floating logo</button>
      <button @click="page = 'banner'">Banner 2 columns</button>
      <button @click="page = 'game-list-swipe'">Game list swipe</button>
    </nav>

    <main>
      <div class="container">
        <div class="row">
          <div id="menu-btn">
            <button @click="navActive =! navActive">Menu</button>
          </div>
          <div>
            <h2>{{ page }}</h2>
          </div>
        </div>
      </div>

      <NavFloatingLogo v-if="page === 'nav-floating-logo'" />
      <Banner v-if="page === 'banner'" />
      <GameListSwipe v-if="page === 'game-list-swipe'" />
    </main>
  </div>
</template>

<script>
import NavFloatingLogo from '~/components/Snippets/NavFloatingLogo'
import Banner from '~/components/Snippets/Banner'
import GameListSwipe from '~/components/Snippets/GameListSwipe'
export default {
  layout: 'snippets',
  components: {
    NavFloatingLogo,
    Banner,
    GameListSwipe
  },
  data () {
    return {
      page: 'nav-floating-logo',
      navActive: false
    }
  }
}
</script>
