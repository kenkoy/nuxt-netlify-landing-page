<template>
  <div class="layout-css">
    <!-- Change class name to actual page name -->
    <Nuxt />
    <div v-if="Object.keys(mdData).length > 0" class="game">
      <section id="game-frame">
        <div class="container">
          <div class="row">
            <iframe :src="mdData.page_section.iframe_url" title="game-iframe" />
          </div>
        </div>
      </section>
      <section v-if="mdData.page_section.popup_toggle" id="description">
        <div class="container">
          <div class="row">
            <div class="info-layer description-data" :class="{active: isActive}" v-html="htmlBody" />
          </div>
        </div>
      </section>
      <section v-if="!mdData.page_section.popup_toggle" id="description">
        <div class="container">
          <div class="row">
            <div class="description-data" v-html="htmlBody" />
          </div>
        </div>
      </section>
      <section id="sticky-footer">
        <div class="container">
          <footer class="row">
            <div class="item">
              <button class="home" @click="exitFullscreen()">
                <span>Home</span>
              </button>
            </div>
            <div v-if="mdData.page_section.popup_toggle" class="item" :class="{active: isActive}">
              <button class="info" @click="popUp()">
                <span>Info</span>
              </button>
            </div>
            <div v-if="!mdData.page_section.popup_toggle" class="item">
              <a v-if="!isScrollDown" href="#description">
                <button :class="isScrollDown ? 'scroll-down' : 'scroll-up'" @click="isScroll()">
                  <span>Scroll up</span>
                </button>
              </a>
              <a v-if="isScrollDown" href="#game-frame">
                <button :class="isScrollDown ? 'scroll-down' : 'scroll-up'" @click="isScroll()">
                  <span>Scroll down</span>
                </button>
              </a>
            </div>
            <div class="item">
              <button class="fullscreen" @click="!fullscreenState ? openFullscreen() : exitFullscreen()">
                <span v-if="!fullscreenState">Fullscreen</span>
                <span v-if="fullscreenState">Exit Fullscreen</span>
              </button>
            </div>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mdData: [],
      htmlBody: '',
      fullscreen: '',
      fullscreenState: false,
      isActive: false,
      isScrollDown: true
    }
  },
  head () {
    return {
      link: [
        { href: require('~/assets/sass/game-page/style.scss') },
        { href: require('~/assets/sass/global/externalBrandCss/verajohn_jp_main.min.css') }
      ]
    }
  },
  created () {
    this.$root.$once('game-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  mounted () {
    this.fullscreen = document.documentElement
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    this.$root.$off('game-data') // Change to actual page name
  },
  methods: {
    handleScroll (event) {
      if ((window.innerHeight + window.scrollY) === document.body.offsetHeight) {
        this.isScrollDown = false
      } else if ((window.innerHeight + window.scrollY) === window.innerHeight) {
        this.isScrollDown = true
      }
    },
    openFullscreen () {
      this.fullscreenState = true
      if (this.fullscreen.requestFullscreen) {
        this.fullscreen.requestFullscreen()
      } else if (this.fullscreen.webkitRequestFullscreen) { /* Safari */
        this.fullscreen.webkitRequestFullscreen()
      } else if (this.fullscreen.msRequestFullscreen) { /* IE11 */
        this.fullscreen.msRequestFullscreen()
      }
    },
    exitFullscreen () {
      this.fullscreenState = false
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen()
      }
    },
    popUp () {
      this.isActive = !this.isActive
    },
    isScroll () {
      this.isScrollDown = !this.isScrollDown
    }
  }
}
</script>
