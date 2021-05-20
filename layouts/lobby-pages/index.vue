<template>
  <div class="layout-css" :class="{ lobby_pages_wrapper: true }">
    <nuxt />
    <div v-if="Object.keys(mdData).length > 0" class="lobby-pages-main">
      <SideMenu v-if="menuToggle" @page-slide-off="pageSlideOff" />
      <main :class="pageSlide">
        <!-- Display when Sidemenu is visible -->
        <div v-if="menuToggle" id="overlay" />
        <Header :class="menuToggle ? 'nav-slide-up' : 'nav-slide-down'" @page-slide-on="pageSlideOn" />

        <!-- PAGES -->
        <Lobbylayout v-if="mdData.template === 'lobby'" />
        <Tournamentlayout v-if="mdData.template === 'tournament'" />
      </main>
      <FooterFixButtons :class="menuToggle ? 'footer-slide-down' : 'footer-slide-up'" />
    </div>
  </div>
</template>

<script>
import Lobbylayout from './lobby.vue'
import Tournamentlayout from './tournament.vue'
import Header from '~/components/Lobby-Pages/Header.vue'
import SideMenu from '~/components/Lobby-Pages/SideMenu.vue'
import FooterFixButtons from '~/components/Lobby-Pages/FooterFixButtons.vue'
export default {
  components: {
    Header,
    SideMenu,
    Lobbylayout,
    Tournamentlayout,
    FooterFixButtons
  },
  data () {
    return {
      mdData: {},
      htmlBody: '',
      menuToggle: false,
      pageSlide: ''
    }
  },
  created () {
    this.$root.$once('lobby-pages-data', (data) => {
      this.mdData = data
    })
  },
  beforeDestroy () {
    this.$root.$off('lobby-pages-data')
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    pageSlideOn () {
      this.pageSlide = 'page-slide'
      this.menuToggle = true
      document.body.classList.add('noScroll')
    },
    pageSlideOff () {
      this.pageSlide = ''
      document.body.classList.remove('noScroll')
      setTimeout(() => {
        this.menuToggle = false
      }, 300)
    }
    // handleScroll (event) {
    //   if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.scrollHeight) {
    //     this.scrollBottom = true
    //   } else if (document.documentElement.scrollTop + window.innerHeight < document.documentElement.scrollHeight - document.getElementById('footer-icon-wrapper').offsetHeight) {
    //     this.scrollBottom = false
    //   }
    // }
  }
}
</script>
<style lang="scss">
  .lobby_pages_wrapper {
    @import '@/assets/sass/lobby-pages/style.scss';
  }
</style>
