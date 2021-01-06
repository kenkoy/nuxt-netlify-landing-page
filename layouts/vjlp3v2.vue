<template>
  <div :class="{ vjlp3v2_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="vjlp3v2-main"
    >
      <header id="header">
        <div class="container">
          <div class="logo">
            <img alt="alt logo" src="@/assets/images/vjlp3v2/vj-logo.png" data-not-lazy>
          </div>

          <div class="nav-links">
            <button class="warning">
              <a :href="mdData.promo_banner.promo_join_button_redirect_url">
                {{ mdData.promo_banner.promo_login_button }}
              </a>
            </button>
            <button class="error animated pulse infinite">
              <a :href="mdData.promo_banner.promo_login_button_redirect_url">
                <strong>{{ mdData.promo_banner.promo_join_button }}</strong>
              </a>
            </button>
          </div>
        </div>
      </header>
      <section id="hero" :style="bannerImages">
        <div class="container">
          <div class="banner">
            <h1 v-if="mdData.promo_banner.promo_title_display">
              {{ mdData.promo_banner.promo_title }}
            </h1>
            <h2>{{ mdData.promo_banner.promo_subtitle }}</h2>
          </div>
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
    bannerImages () {
      const images = this.mdData.promo_banner.promo_images
      return {
        '--bg-image': `url('${images.promo_bg_desktop}')`,
        '--bg-image-m': `url('${images.promo_bg_mobile}')`,
        '--bg-banner': `url('${images.promo_bg_banner}')`
      }
    }
  },
  created () {
    this.$root.$once('vjlp3-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('vjlp3-data')
  }
}
</script>

<style lang="scss">
.vjlp3v2_wrapper {
  @import '@/assets/sass/vjlp3v2/style.scss';
  @import '@/assets/sass/base/style.scss';
}
</style>
