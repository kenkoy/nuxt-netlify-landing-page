<template>
  <div :class="{ iclp3_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="iclp3-main"
    >
      <header>
        <div class="container">
          <img src="@/assets/images/iclp3V2/logo_inter_pc.png" alt="inter casino logo" data-not-lazy>
        </div>
      </header>

      <section id="hero">
        <div class="container">
          <div>
            <img src="@/assets/images/iclp3V2/touch.png" alt="alt img">
          </div>

          <div class="firstview__counter" id="firstview__counter">
            <img src="@/assets/images/iclp3V2/counter_touch.png" alt="alt img">
            <div class="number main push">
              <span class="back">0</span>
              <div class="number lower"></div>
              <div class="number flipbottom" style="animation: 0.5s linear 0s 1 normal forwards running flipb;">0</div>
              <div class="number fliptop" style="animation: 0.5s linear 0s 1 normal forwards running flipt;"></div>
            </div>

            <div class="number main push">
              <span class="back">0</span>
              <div class="number lower"></div>
              <div class="number flipbottom" style="animation: 0.5s linear 0s 1 normal forwards running flipb;">0</div>
              <div class="number fliptop" style="animation: 0.5s linear 0s 1 normal forwards running flipt;"></div>
            </div>

            <div class="number main push">
              <span class="back">0</span>
              <div class="number lower"></div>
              <div class="number flipbottom" style="animation: 0.5s linear 0s 1 normal forwards running flipb;">0</div>
              <div class="number fliptop" style="animation: 0.5s linear 0s 1 normal forwards running flipt;"></div>
            </div>

            <div class="number main push">
              <span class="back">0</span>
              <div class="number lower"></div>
              <div class="number flipbottom" style="animation: 0.5s linear 0s 1 normal forwards running flipb;">0</div>
              <div class="number fliptop" style="animation: 0.5s linear 0s 1 normal forwards running flipt;"></div>
            </div>
          </div>

          <div>
            <img src="@/assets/images/iclp3V2/logo_oiran.png" alt="alt img">
          </div>
        </div>
      </section>

      <!--<div v-html="htmlBody" />-->

      <Footer
        :promo_language_code="mdData.promo_locale.promo_language_code"
        :promo_country_code="mdData.promo_locale.promo_country_code"
        :landing_page_type="'verajohn'"
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
  created () {
    this.$root.$once('iclp3-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('iclp3-data')
  }
}
</script>

<style lang="scss"> //Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .iclp3_wrapper {
    @import '@/assets/sass/base/fonts.css';
    @import '@/assets/sass/iclp3V2/style.scss';
    @import '@/assets/sass/base/style.scss';
  }
</style>
