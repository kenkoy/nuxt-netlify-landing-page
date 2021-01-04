<template>
  <div :class="{ iclp1_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="iclp1-main"
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

      <div v-html="htmlBody" />

      <Footer
        :promo-language-code="mdData.promo_locale.promo_language_code"
        :promo-country-code="mdData.promo_locale.promo_country_code"
        :landing-page-type="'intercasino'"
      />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Base/TheFooter.vue'

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
    this.$root.$once('iclp1-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('iclp1-data') // Change to actual page name
  }
}
</script>

<style lang="scss"> // Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .vjlp5_wrapper {
    @import '@/assets/sass/base/fonts.css';
    @import '@/assets/sass/iclp1v2/style.scss';
    @import '@/assets/sass/base/style.scss';
  }
</style>
