<template>
  <div class="layout-css" :class="{ blank_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <img class="image1" src="" alt="asdasdas"/>
    <div class="blank-main">
      <section id="games">
        <div class="container">
          <div class="row">
            <iframe src="https://instage.solidgaming.net/api/launch/VERAJOHN-QA/GHG_HAWAIIAN_DREAM" />
          </div>
        </div>
      </section>

      <section id="sticky-footer">
        <div class="container">
          <footer class="row column-3">
            <div class="item">
              {{ mdData.slug_name }}
            </div>
            <div class="item">
              Info
            </div>
            <div class="item">
              Fullscreen
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
      htmlBody: ''
    }
  },
  head () {
    return {
      link: [
        { href: require('~/assets/sass/game-page/style.scss') }
      ]
    }
  },
  computed: {
    // USE THE CODE BELOW IF THE DESIGN / TEMPLATE HAVE BANNERS. ELSE, DELETE
    // cssBackground () {
    //   const images = this.mdData.promo_banner.promo_images
    //   return {
    //     '--bg-image': `url('${images.promo_bg_desktop}')`,
    //     '--bg-image-m': `url('${images.promo_bg_mobile}')`,
    //     '--bg-banner': `url('${images.promo_bg_banner}')`
    //   }
    // }
  },
  created () {
    this.$root.$once('game-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('game-data') // Change to actual page name
  }
}
</script>
