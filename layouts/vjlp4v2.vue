<template>
  <div :class="{ vjlp4_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="vjlp4-main"
      :class="mdData.styles"
    >
      <section id="hero" :style="cssBackground">
        <div class="container">
          <div>
            <div id="login">
              <div>
                <a rel="noopener" :href="mdData.promo_banner.promo_login_button_redirect_url">
                  <i class="material-icons">exit_to_app</i>
                  <span>{{ mdData.promo_banner.promo_login_button }}</span>
                </a>
              </div>
            </div>

            <img alt="alt img" class="logo" src="@/assets/images/vjlp4v2/logo.png">
            <div class="banner">
              <img alt="alt img" class="bounce animated delay-1s" :src="mdData.promo_banner.promo_images.promo_game_logo">
              <img alt="alt img" :src="mdData.promo_banner.promo_images.promo_game_image">

              <h1>{{ mdData.promo_banner.promo_large_subtitle }}</h1>
              <p v-if="mdData.promo_banner.promo_small_subtitle" v-html="bannerDesc" />
            </div>

            <div id="banner-terms">
              <button :class="mdData.styles === 'version2' ? 'animated pulse infinite' : ''">
                <a :href="mdData.promo_banner.promo_join_button_redirect_url">
                  {{ mdData.promo_banner.promo_join_button }}
                </a>
              </button>
              <small v-html="bannerTerms" />
            </div>
          </div>
        </div>
      </section>

      <section v-for="(sections, sections_index) in mdData.section" id="details" :key="sections_index" class="separator">
        <div class="container">
          <div>
            <h2>{{ sections.title }}</h2>
            <img alt="alt img" :src="sections.image">
            <button>
              <a rel="noopener" :href="sections.join_button_redirect_url">
                {{ sections.join_button }}
              </a>
            </button>
          </div>
        </div>
      </section>

      <section id="payment" class="separator">
        <div class="container">
          <img class="desktop" src="@/assets/images/vjlp4v2/payment_large_jp.svg" alt="payment verajohn desktop">
          <img class="mobile" src="@/assets/images/vjlp4v2/payment_jp.svg" alt="payment verajohn mobile">
        </div>
      </section>

      <section id="testi" class="separator">
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
    cssBackground () {
      const images = this.mdData.promo_banner.promo_images
      return {
        '--bg-image': `url('${images.promo_bg_desktop}')`,
        '--bg-image-m': `url('${images.promo_bg_mobile}')`,
        '--bg-banner': `url('${images.promo_bg_banner}')`
      }
    },
    bannerDesc () {
      const bannerTitle = this.mdData.promo_banner.promo_small_subtitle.split(/\r?\n/)
        .map(title => this.mdData.promo_banner.promo_small_subtitle.slice(-1) === '\\'
          ? this.mdData.promo_banner.promo_small_subtitle.substring(0, this.mdData.promo_banner.promo_small_subtitle.length - 1)
          : title
        )

      let idx = 0
      this.mdData.promo_banner.promo_small_subtitle_highlighted.filter(phrase => phrase)
        .forEach((phrase) => {
          while (bannerTitle.length > idx) {
            if (bannerTitle[idx].includes(phrase)) {
              bannerTitle[idx] = bannerTitle[idx].replace(phrase, `<span class="highlight"><b>${phrase}</b></span>`)
              break
            } else {
              idx++
            }
          }
        })

      return bannerTitle.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    },
    bannerTerms () {
      let termsText = this.mdData.promo_banner.promo_terms
      this.mdData.promo_banner.promo_link_terms.filter(linkText => linkText)
        .forEach((linkText) => {
          if (this.mdData.promo_banner.promo_terms.includes(linkText)) {
            termsText = this.mdData.promo_banner.promo_terms.replace(linkText, `<a rel="noopener" href="#terms">${linkText}</a>`)
          }
        })
      return termsText
    }
  },
  created () {
    this.$root.$once('vjlp4-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('vjlp4-data')
  }
}
</script>

<style lang="scss">
  .vjlp4_wrapper {
    @import '@/assets/sass/vjlp4v2/style.scss';
    @import '@/assets/sass/base/style.scss';
  }
</style>
