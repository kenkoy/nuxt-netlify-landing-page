<template>
  <div class="layout-css" :class="{ lobby_pages_wrapper: true }">
    <nuxt />
    <div v-if="Object.keys(mdData).length > 0" class="lobby-pages-main">
      <SideMenu v-if="menuToggle" @page-slide-off="pageSlideOff" />
      <main :class="pageSlide">
        <!-- Display when Sidemenu is visible -->
        <div v-if="menuToggle" id="overlay" />
        <Header :class="menuToggle && headerScrollHeight ? 'nav-slide-up' : 'nav-slide-down'" @page-slide-on="pageSlideOn" />

        <!-- PAGES -->
        <Lobbylayout v-if="mdData.template === 'lobby'" />
        <Tournamentlayout v-if="mdData.template === 'tournament'" />
      </main>
      <FooterFixButtons :class="menuToggle ? 'footer-slide-down' : 'footer-slide-up'" /> <!-- add 'scrollBottom' to slide down when the page reach the bottom -->
    </div>
  </div>
</template>

<script>
import Lobbylayout from './lobby.vue'
import Tournamentlayout from './tournament.vue'
import Header from '~/components/Lobby-Page/Header.vue'
import SideMenu from '~/components/Lobby-Page/SideMenu.vue'
import FooterFixButtons from '~/components/Lobby-Page/FooterFixButtons.vue'
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
      menuToggle: false, // If true, SideMenu, FooterFixButtons and Main content will animate/slide
      headerScrollHeight: false, // If true (scroll more than 54px), the header-menu will disappear when SideMenu is open
      pageSlide: '',
      scrollBottom: false // If true (scroll to the bottom page), footer buttons will disappear
    }
  },
  created () {
    this.$root.$once('lobby-page-data', (data) => {
      if (Object.keys(data).length > 0) {
        this.mdData = data
      }
    })
  },
  beforeDestroy () {
    this.$root.$off('lobby-page-data')
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
    },
    handleScroll (event) {
      if (document.getElementById('header-menu').offsetHeight > 54) {
        this.headerScrollHeight = true
      }
      if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.scrollHeight) {
        this.scrollBottom = true
      } else if (document.documentElement.scrollTop + window.innerHeight < document.documentElement.scrollHeight - document.getElementById('footer-icon-wrapper').offsetHeight) {
        this.scrollBottom = false
      }
    }
  }
}
</script>
<style lang="scss">
  .lobby_pages_wrapper {
    @import '@/assets/sass/lobby-page/style.scss';
  }
</style>
