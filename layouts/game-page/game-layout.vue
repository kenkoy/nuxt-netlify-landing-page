<template>
  <div class="layout-css" :class="{ blank_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div class="blank-main">
      <section id="games">
        <div class="container">
          <div class="row">
            <iframe src="https://instage.solidgaming.net/api/launch/VERAJOHN-QA/GHG_HAWAIIAN_DREAM" />
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque ante et pellentesque porta. Pellentesque lacinia neque non augue cursus, at egestas velit pellentesque. Quisque tempor, nibh id aliquam luctus, erat ante tincidunt erat, eu sollicitudin leo purus at erat. Pellentesque elementum diam ut semper rutrum. Sed at pulvinar velit. Proin libero nunc, ultricies vel suscipit a, mollis sed orci. Aliquam eget gravida mi. In pellentesque auctor ex id lobortis. Praesent non augue vehicula, auctor nibh eu, malesuada lectus. Pellentesque porttitor orci vel nunc convallis, quis posuere massa semper. Quisque tempor leo nec nunc euismod, id pretium eros ullamcorper.
            </div>
          </div>
        </div>
      </section>
      <section id="sticky-footer">
        <div class="container">
          <footer class="row">
            <div class="item">
              <button class="home">
                Home
              </button>
            </div>
            <div class="item">
              <button class="info">
                Info
              </button>
            </div>
            <div class="item">
              <button class="fullscreen" @click="openFullscreen()">
                Fullscreen
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
      fullscreen: ''
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
      if (this.fullscreen.requestFullscreen) {
        this.fullscreen.requestFullscreen()
      } else if (this.fullscreen.webkitRequestFullscreen) { /* Safari */
        this.fullscreen.webkitRequestFullscreen()
      } else if (this.fullscreen.msRequestFullscreen) { /* IE11 */
        this.fullscreen.msRequestFullscreen()
      }
    }
  }
}
</script>
