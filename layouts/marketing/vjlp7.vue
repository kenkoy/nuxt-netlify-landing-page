<template>
  <div class="layout-css" :class="{ vjlp7_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="vjlp7-main"
      :class="mdData.variation"
    >
      <section id="hero" :style="cssBackground">
        <div class="container">
          <div class="row">
            <div id="hero-text-wrapper">
              <div>
                <div id="login" class="animated">
                  <div class="fadeIn animated">
                    <a :href="mdData.promo_banner.promo_login_button_redirect_url">
                      <i class="material-icons">exit_to_app</i>
                      <span>{{ mdData.promo_banner.promo_login_button }}</span>
                    </a>
                  </div>
                </div>
                <img class="logo" src="@/assets/images/marketing/vjlp7/logo.png" alt="verajohn logo">
                <div v-if="mdData.promo_banner.promo_render_title_first">
                  <h1 v-if="mdData.promo_banner.promo_title" v-html="bannerTitle" />
                  <h2 v-if="mdData.promo_banner.promo_subtitle" v-html="bannerSubtitle" />
                </div>
                <div v-else>
                  <h2 v-if="mdData.promo_banner.promo_subtitle" v-html="bannerSubtitle" />
                  <h1 v-if="mdData.promo_banner.promo_title" v-html="bannerTitle" />
                </div>

                <button class="animated infinite pulse">
                  <a :href="mdData.promo_banner.promo_join_button_redirect_url">{{ mdData.promo_banner.promo_join_button }}</a>
                </button>
                <div>
                  <small v-html="bannerTerms" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Steps
        v-if="mdData.steps_gameslider === 'steps'"
        :title1="mdData.steps.step_title_1"
        :description1="mdData.steps.step_description_1"
        :title2="mdData.steps.step_title_2"
        :description2="mdData.steps.step_description_2"
        :title3="mdData.steps.step_title_3"
        :description3="mdData.steps.step_description_3"
      />
      <GameSlider
        v-if="mdData.steps_gameslider === 'game_slider'"
        :game-data="mdData.game_images"
      />

      <section id="payment" class="separator">
        <div class="container">
          <div class="row">
            <img class="desktop" src="@/assets/images/marketing/vj-global-paymentprovider/payment_large_jp.svg" alt="payment verajohn desktop">
            <img class="mobile" src="@/assets/images/marketing/vj-global-paymentprovider/payment_jp.svg" alt="payment verajohn mobile">
          </div>
        </div>
      </section>

      <section id="terms" class="separator">
        <div class="container">
          <div class="row">
            <div>
              <div v-html="htmlBody" />
              <ul>
                <li>
                  通常の
                  <a href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と
                  <a href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。
                </li>
              </ul>
            </div>
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
import Steps from '@/components/Marketing/Steps.vue'
import GameSlider from '@/components/Marketing/GameSlider.vue'
import Footer from '@/components/Marketing/TheFooter.vue'

export default {
  components: {
    Steps,
    GameSlider,
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
      const desktopWidthBanner = this.mdData.promo_banner.desktop_full
      const mobileWidthBanner = this.mdData.promo_banner.mobile_full
      return {
        '--bg-image': `url('${images.promo_bg_desktop}')`,
        '--bg-image-m': `url('${images.promo_bg_mobile}')`,
        '--bg-banner': `url('${images.promo_bg_banner}')`,
        '--desktop-width-banner': desktopWidthBanner ? 'cover' : 'contain',
        '--mobile-width-banner': mobileWidthBanner ? 'cover' : 'contain'
      }
    },
    bannerTitle () {
      const bannerTitle = this.mdData.promo_banner.promo_title.split(/\r?\n/)
        .map(title => this.mdData.promo_banner.promo_title.slice(-1) === '\\'
          ? this.mdData.promo_banner.promo_title.substring(0, this.mdData.promo_banner.promo_title.length - 1)
          : title
        )

      let idx = 0
      this.mdData.promo_banner.promo_title_highlighted.filter(phrase => phrase)
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
    bannerSubtitle () {
      const bannerSubTitle = this.mdData.promo_banner.promo_subtitle.split(/\r?\n/)
        // .filter(title => title)
        .map(title => this.mdData.promo_banner.promo_title.slice(-1) === '\\'
          ? this.mdData.promo_banner.promo_title.substring(0, this.mdData.promo_banner.promo_title.length - 1)
          : title
        )

      let idx = 0

      if (this.mdData.promo_banner.promo_subtitle_highlighted) {
        this.mdData.promo_banner.promo_subtitle_highlighted.filter(phrase => phrase)
          .forEach((phrase) => {
            while (bannerSubTitle.length > idx) {
              if (bannerSubTitle[idx].includes(phrase)) {
                bannerSubTitle[idx] = bannerSubTitle[idx].replace(phrase, `<span class="color-alt-two">${phrase}</span>`)
                break
              } else {
                idx++
              }
            }
          })
      }
      return bannerSubTitle.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    },
    bannerTerms () {
      let termsText = this.mdData.promo_banner.promo_terms_text
      this.mdData.promo_banner.promo_terms_link_text.filter(linkText => linkText)
        .forEach((linkText) => {
          if (this.mdData.promo_banner.promo_terms_text.includes(linkText)) {
            termsText = this.mdData.promo_banner.promo_terms_text.replace(linkText, `<a href="#terms" class="link-terms-conditions ctac">${linkText}</a>`)
          }
        })
      return termsText
    }
  },
  created () {
    this.$root.$once('vjlp7-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('vjlp7-data')
  }
}
</script>

<style lang="scss">
  .vjlp7_wrapper {
    // Brand
    @import '@/assets/sass/marketing/brand/vj_brand_variables.scss';

    // Template style
    @import '@/assets/sass/marketing/vjlp7/style.scss';
  }
</style>
