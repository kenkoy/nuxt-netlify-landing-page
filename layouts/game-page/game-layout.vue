<template>
  <div class="layout-css" :class="{ blank_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div class="game">
      <section id="game-frame">
        <div class="container">
          <div class="row">
            <iframe src="https://instage.solidgaming.net/api/launch/VERAJOHN-QA/GHG_HAWAIIAN_DREAM" />
          </div>
        </div>
      </section>
      <section id="description">
        <div class="container">
          <div class="row">
            <div class="info-layer" :class="{active: isActive}">
              <h2>Lorem Ipsum Dolor</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque ante et pellentesque porta. Pellentesque lacinia neque non augue cursus, at egestas velit pellentesque. Quisque tempor, nibh id aliquam luctus, erat ante tincidunt erat, eu sollicitudin leo purus at erat. Pellentesque elementum diam ut semper rutrum. Sed at pulvinar velit. Proin libero nunc, ultricies vel suscipit a, mollis sed orci. Aliquam eget gravida mi. In pellentesque auctor ex id lobortis. Praesent non augue vehicula, auctor nibh eu, malesuada lectus. Pellentesque porttitor orci vel nunc convallis, quis posuere massa semper. Quisque tempor leo nec nunc euismod, id pretium eros ullamcorper.</p>
              <p>Aliquam aliquet iaculis justo quis scelerisque. Phasellus quis porta nunc. Duis mollis consectetur risus, ac imperdiet nulla egestas eu. Aliquam quis nisi maximus, interdum risus non, tincidunt dui. Morbi sed dapibus urna. Fusce at nisi feugiat, aliquet nibh a, rutrum mi. Nulla nibh tortor, hendrerit ac feugiat vel, ullamcorper nec massa. Phasellus sed elit ultricies justo bibendum aliquam. Sed nunc risus, accumsan a odio eu, laoreet ullamcorper lectus. Proin efficitur porttitor neque, ut condimentum ante blandit a. Etiam sed eros ut eros vehicula pellentesque. Duis vel est ut libero maximus ullamcorper et et sapien. Quisque euismod odio at magna euismod porta. Nullam eu lectus quis turpis interdum tempus nec et lorem. Praesent sagittis, ipsum sit amet rhoncus congue, nunc odio aliquet urna, vitae sagittis eros massa nec odio.</p>
            </div>
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
            <div class="item">
              <button class="info" @click="popUp()">
                <span>Info</span>
              </button>
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
      mdData: {},
      htmlBody: '',
      fullscreen: '',
      fullscreenState: false,
      isActive: false
    }
  },
  head () {
    return {
      link: [
        { href: require('~/assets/sass/game-page/style.scss') }
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
  },
  beforeDestroy () {
    this.$root.$off('game-data') // Change to actual page name
  },
  methods: {
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
    }
  }
}
</script>
