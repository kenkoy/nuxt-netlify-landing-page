<template>
  <div :class="{ vjlp1_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="vjlp1-main"
    >
      <section id="hero" :style="cssBackground">
        <div class="container">
          <div id="hero-text-wrapper">
            <div>
              <div id="login" class="animated">
                <div class="fadeIn animated">
                  <a rel="noopener" :href="mdData.promo_banner.promo_login_button_redirect_url">
                    <i class="material-icons">exit_to_app</i>
                    <span>{{ mdData.promo_banner.promo_login_button }}</span>
                  </a>
                </div>
              </div>
              <img class="logo" src="@/assets/images/vjlp1v2/logo.png" alt="verajohn logo">
              <div v-if="mdData.promo_banner.promo_render_title_first">
                <h1 v-if="mdData.promo_banner.promo_title" v-html="bannerTitle" />
                <h2 v-if="mdData.promo_banner.promo_subtitle" v-html="bannerSubtitle" />
              </div>
              <div v-else>
                <h2 v-if="mdData.promo_banner.promo_subtitle" v-html="bannerSubtitle" />
                <h1 v-if="mdData.promo_banner.promo_title" v-html="bannerTitle" />
              </div>

              <button class="animated infinite pulse">
                <a rel="noopener" :href="mdData.promo_banner.promo_join_button_redirect_url">{{ mdData.promo_banner.promo_join_button }}</a>
              </button>
              <div>
                <small v-html="bannerTerms" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="steps">
        <div class="container">
          <div class="animated fadeIn delay-halfs">
            <span class="num">1</span>
            <div>
              <h3>{{ mdData.promo_steps.promo_step_1_title }}</h3>
              <p>{{ mdData.promo_steps.promo_step_1_desc }}</p>
            </div>
          </div>

          <div class="animated fadeIn delay-1s">
            <span class="num">2</span>
            <div>
              <h3>{{ mdData.promo_steps.promo_step_2_title }}</h3>
              <p>{{ mdData.promo_steps.promo_step_2_desc }}</p>
            </div>
          </div>

          <div class="animated fadeIn delay-1-and-halfs">
            <span class="num">3</span>
            <div>
              <h3>{{ mdData.promo_steps.promo_step_3_title }}</h3>
              <p>{{ mdData.promo_steps.promo_step_3_desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="payment" class="separator">
        <div class="container">
          <img class="desktop" src="@/assets/images/vjlp1v2/payment_large_jp.svg" alt="payment verajohn desktop">
          <img class="mobile" src="@/assets/images/vjlp1v2/payment_jp.svg" alt="payment verajohn mobile">
        </div>
      </section>

      <section id="terms" class="separator">
        <div class="container">
          <div>
            <div v-html="htmlBody" />
            <ul>
              <li>
                通常の
                <a rel="noopener" href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と
                <a rel="noopener" href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。
              </li>
            </ul>
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
    cssBackground () {
      const images = this.mdData.promo_banner.promo_images
      return {
        '--bg-image': `url('${images.promo_bg_desktop}')`,
        '--bg-image-m': `url('${images.promo_bg_mobile}')`,
        '--bg-banner': `url('${images.promo_bg_banner}')`
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
            termsText = this.mdData.promo_banner.promo_terms_text.replace(linkText, `<a rel="noopener" href="#terms" class="link-terms-conditions ctac">${linkText}</a>`)
          }
        })
      return termsText
    }
  },
  created () {
    this.$root.$once('vjlp1-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('vjlp1-data')
  }
}
</script>

<style lang="scss">
  .vjlp1_wrapper {
    @import '@/assets/sass/vjlp1v2/style.scss';
    @import '@/assets/sass/base/style.scss';
  }
</style>
