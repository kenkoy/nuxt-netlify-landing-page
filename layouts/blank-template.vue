<template>
  <div class="layout-css" :class="{ blank_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="blank-main"
    >
      <!-- Change class name to actual page name -->

      <!--
        TEMPLATE LAYOUT, HTML, CSS STARTS HERE
        - Use <header> tag for header
        - use <section> tag for every row, add relevant ID name for each section
        - add <div class="container"> inside <section> tag
        - add alt tags for every <img/>
      -->

      <!-- USE THE CODE BELOW IF THE DESIGN / TEMPLATE HAVE BANNERS. ELSE, DELETE
        <section id="hero" :style="cssBackground">
          <div class="container">
            <div class="banner" />
          </div>
        </section>
      -->

      <section id="terms">
        <div class="container">
          <div v-html="htmlBody" />
        </div>
      </section>

      <Footer
        :promo-language-code="mdData.promo_locale.promo_language_code"
        :promo-country-code="mdData.promo_locale.promo_country_code"
        :landing-page-type="'verajohn'"
      />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Marketing/TheFooter.vue'

export default {
  components: {
    Footer
  },
  data () {
    return {
      mdData: {},
      htmlBody: ''
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
    this.$root.$once('blank-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('blank-data') // Change to actual page name
  }
}
</script>

<style lang="scss"> // Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .blank_wrapper {
    // @import '@/assets/sass/blank/style.scss';
  }
</style>
