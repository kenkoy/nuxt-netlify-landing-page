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
              <img class="logo" src="@/assets/images/vjlp1v2/logo.png" alt="verajohn logo" />
              <div v-if="mdData.promo_banner.promo_render_title_first">
                <h1 v-if="mdData.promo_banner.promo_title" v-html="bannerTitle" />
                <h2 v-if="mdData.promo_banner.promo_subtitle" v-html="bannerSubtitle" />
              </div>
              <div v-else>
                <h2 v-if="mdData.promo_banner.promo_subtitle" v-html="bannerSubtitle" />
                <h1 v-if="mdData.promo_banner.promo_title" v-html="bannerTitle" />
              </div>

              <button>ご登録はこちら</button>
              <div>
                <small>に同意します。</small>
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

      <section id="payment">
        <div class="container">
          <img class="desktop" src="@/assets/images/vjlp1v2/payment_large_jp.svg">
          <img class="mobile" src="@/assets/images/vjlp1v2/payment_jp.svg">
        </div>
      </section>

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

      return bannerSubTitle.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
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
    @import '@/assets/sass/base/fonts.css';
    @import '@/assets/sass/vjlp1v2/style.scss';
    @import '@/assets/sass/base/style.scss';
  }
</style>
