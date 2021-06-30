<template>
  <div class="layout-css" :class="{ blank_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div class="blank-main">
      <section id="games">
        <div class="container">
          <div class="row">
            <iframe src="https://instage.solidgaming.net/api/launch/VERAJOHN-QA/GHG_HAWAIIAN_DREAM" />
            <!-- <p class="now-loading">Now Loading... Please wait</p> -->
          </div>
        </div>
      </section>

      <section id="sticky-footer">
        <div class="container">
          <footer class="row">
            <div class="item">
              <button class="icon home-icon" />
              <button>Home</button>
            </div>
            <div class="item">
              <button class="icon info-icon" />
              <button>Info</button>
            </div>
            <div class="item">
              <button class="icon fullscreen-icon" />
              <button @click="openFullscreen()">Fullscreen</button>
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
  },
  beforeDestroy () {
    this.$root.$off('game-data') // Change to actual page name
  }
}
</script>
<!--
<style scoped lang="scss">
  #games .row{
    position: relative;
    height: calc(100vh - 50px);
    width: 100%;
    border: 0;
    background: #000;
    align-items: center;
    justify-content: center;

    .now-loading{
      color: #fff;
      font-size: 150%;
    }

    iframe{
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style> -->
