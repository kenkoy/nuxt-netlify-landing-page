<template>
  <div :class="{ iclp2_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="iclp2-main"
    >
      <section id="payment">
        <div class="container">
          <img class="desktop" src="@/assets/images/iclp3v2/payment_large_jp.svg">
          <img class="mobile" src="@/assets/images/iclp3v2/payment_jp.svg">
        </div>
      </section>
      <section id="terms">
        <div class="container">
          <div v-html="htmlBody" />
        </div>
      </section>
      <Footer
        :promoLanguageCode="mdData.promo_locale.promo_language_code"
        :promoCountryCode="mdData.promo_locale.promo_country_code"
        :landingPageType="'intercasino'"
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
    this.$root.$once('iclp2-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('iclp2-data') // Change to actual page name
  }
}
</script>

<style lang="scss"> // Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .iclp2_wrapper {
    @import '@/assets/sass/base/fonts.css';
    @import '@/assets/sass/iclp2v2/style.scss';
    @import '@/assets/sass/base/style.scss';
  }
</style>
