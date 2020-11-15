<template>
  <div :class="{ vjlp6_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="vjlp6-main"
    >
      <section id="hero" :style="cssBackground">
        <a id="login-btn" :href="mdData.promo_banner.promo_login_button_redirect_url" class="login hvr-pulse">
          <div class="animated fadeIn">
            <i class="material-icons">exit_to_app</i>
            <div class="login-txt">
              <p>{{ mdData.promo_banner.promo_login_button }}</p>
            </div>
          </div>
        </a>
        <div class="container">
          <div class="strip">
            <img src="@/assets/images/vjlp6/vj-logo.png" data-not-lazy alt="logo">
            <div>
              <div v-if="titleFirst">
                <h1
                  v-if="mdData.promo_banner.promo_title"
                  v-html="bannerTitle(
                    mdData.promo_banner.promo_title,
                    mdData.promo_banner.promo_title_highlighted)"
                />
                <h2
                  v-if="mdData.promo_banner.promo_subtitle"
                  v-html="bannerSubtitle(
                    mdData.promo_banner.promo_subtitle,
                    mdData.promo_banner.promo_promo_subtitle_highlighted)"
                />
              </div>
              <div v-else>
                <h2
                  v-if="mdData.promo_banner.promo_subtitle"
                  v-html="bannerSubtitle(
                    mdData.promo_banner.promo_subtitle,
                    mdData.promo_banner.promo_promo_subtitle_highlighted)"
                />
                <h1
                  v-if="mdData.promo_banner.promo_title"
                  v-html="bannerTitle(
                    mdData.promo_banner.promo_title,
                    mdData.promo_banner.promo_title_highlighted)"
                />
              </div>
              <button class="animated pulse infinite">
                <a :href="mdData.promo_banner.promo_join_button_redirect_url">{{ mdData.promo_banner.promo_join_button }}</a>
              </button>
              <div class="small-terms banner-terms" data-v-835fbe4a="">
                <a
                  href="#terms"
                  class="link-terms-conditions ctac"
                >{{ mdData.promo_banner.promo_terms_link_text }}</a>{{ mdData.promo_banner.promo_terms_text }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="steps">
        <div class="container column-3">
          <div class="animated fadeIn delay-halfs">
            <span class="num">1</span>
            <div>
              <h2>{{ mdData.promo_steps.promo_step_1_title }}</h2>
              <p>{{ mdData.promo_steps.promo_step_1_desc }}</p>
            </div>
          </div>

          <div class="animated fadeIn delay-1s">
            <span class="num">2</span>
            <div>
              <h2>{{ mdData.promo_steps.promo_step_2_title }}</h2>
              <p>{{ mdData.promo_steps.promo_step_2_desc }}</p>
            </div>
          </div>

          <div class="animated fadeIn delay-1-and-halfs">
            <span class="num">3</span>
            <div>
              <h2>{{ mdData.promo_steps.promo_step_3_title }}</h2>
              <p>{{ mdData.promo_steps.promo_step_3_desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div class="container">
          <div class="separator" />
        </div>
      </section>

      <div v-html="htmlBody" />

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
      titleFirst: true,
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
    }
  },

  bannerTerms () {
    let termsText = this.termsText
    this.termsLinkText
      .filter(linkText => linkText)
      .forEach((linkText) => {
        if (this.termsText.includes(linkText)) {
          termsText = termsText.replace(
            linkText,
            `<a href="#terms" class="link-terms-conditions ctac">${linkText}</a>`
          )
        }
      })
    return termsText
  },
  created () {
    this.$root.$once('vjlp6-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('vjlp6-data')
  },
  methods: {
    bannerTitle (title, titleHighlighted) {
      const bannerTitle = title
        .split(/\r?\n/)
      // .filter(title => title)
        .map(title =>
          title.slice(-1) === '\\' ? title.substring(0, title.length - 1) : title
        )

      let idx = 0
      titleHighlighted
        .filter(phrase => phrase)
        .forEach((phrase) => {
          while (bannerTitle.length > idx) {
            if (bannerTitle[idx].includes(phrase)) {
              bannerTitle[idx] = bannerTitle[idx].replace(
                phrase,
              `<font color="#ffd966"><b>${phrase}</b></font>`
              )
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
    bannerSubtitle (subtitle, subtitleHighlighted) {
      const bannerSubTitle = subtitle
        .split(/\r?\n/)
      // .filter(title => title)
        .map(title =>
          title.slice(-1) === '\\' ? title.substring(0, title.length - 1) : title
        )

      let idx = 0
      subtitleHighlighted
        .filter(phrase => phrase)
        .forEach((phrase) => {
          while (bannerSubTitle.length > idx) {
            if (bannerSubTitle[idx].includes(phrase)) {
              bannerSubTitle[idx] = bannerSubTitle[idx].replace(
                phrase,
              `<span class="color-alt-two">${phrase}</span>`
              )
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
  }
}
</script>

<style lang="scss">
.vjlp6_wrapper {
  @import "@/assets/sass/base/fonts.css";
  @import "@/assets/sass/vjlp6/style.scss";
  @import "@/assets/sass/base/style.scss";
}
</style>
