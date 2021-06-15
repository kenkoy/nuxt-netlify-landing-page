<template>
  <div class="layout-css" :class="{ iclp1_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="iclp1-main"
    >
      <section id="hero" :style="cssBackground">
        <div class="container">
          <div class="row">
            <div class="loginbtn btn-login">
              <a rel="noopener" :href="mdData.promo_banner.promo_signup_button_redirect_url">
                <i class="material-icons">exit_to_app</i>
                <p class="login-text">{{ mdData.promo_banner.promo_login_button_text }}</p>
              </a>
            </div>
            <div id="header-text-wrapper">
              <img class="animated fadeIn" alt="alt img" src="@/assets/images/marketing/iclp2v2/logo.png">
              <h2>{{ mdData.promo_banner.promo_subtitle_1 }}</h2>
              <h1>{{ mdData.promo_banner.promo_main_heading }}</h1>
              <h2>{{ mdData.promo_banner.promo_subtitle_2 }}</h2>
              <button class="btn-login" onclick="location.href='#'" type="button">
                <a rel="noopener" :href="mdData.promo_banner.promo_login_button_redirect_url">{{ mdData.promo_banner.promo_signup_button }}</a>
              </button>
              <p>
                <a rel="noopener" :href="mdData.promo_banner.promo_smallterm_redirect_url">{{ mdData.promo_banner.promo_smallterm_text_link }}</a>
                {{ mdData.promo_banner.promo_smallterm_text }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="steps">
        <div class="container">
          <div class="animated fadeIn delay-halfs">
            <span>1</span>
            <div>
              <h2>{{ mdData.promo_steps.promo_step_1_title }}</h2>
              <p>{{ mdData.promo_steps.promo_step_1_desc }}</p>
            </div>
          </div>

          <div class="animated fadeIn delay-1s">
            <span>2</span>
            <div>
              <h2>{{ mdData.promo_steps.promo_step_2_title }}</h2>
              <p>{{ mdData.promo_steps.promo_step_2_desc }}</p>
            </div>
          </div>

          <div class="animated fadeIn delay-1-and-halfs">
            <span>3</span>
            <div>
              <h2>{{ mdData.promo_steps.promo_step_3_title }}</h2>
              <p>{{ mdData.promo_steps.promo_step_3_desc }}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="payment">
        <div class="container">
          <div class="row">
            <img alt="alt img" class="desktop" src="@/assets/images/marketing/ic-global-paymentprovider/payment_large_jp.svg">
            <img alt="alt img" class="mobile" src="@/assets/images/marketing/ic-global-paymentprovider/payment_jp.svg">
          </div>
        </div>
      </section>
      <section id="terms">
        <div class="container">
          <div class="row">
            <div>
              <div v-html="htmlBody" />
              <ul>
                <li>
                  通常の
                  <a href="https://intercasino.com/about/terms-and-conditions">利用規約</a>と
                  <a href="https://intercasino.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer
        :promo-language-code="mdData.promo_locale.promo_language_code"
        :promo-country-code="mdData.promo_locale.promo_country_code"
        :landing-page-type="'intercasino'"
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
      htmlBody: '',
      desktopWidthBanner: false,
      mobileWidthBanner: false
    }
  },
  computed: {
    cssBackground () {
      const images = this.mdData.promo_banner.promo_images
      return {
        '--bg-image': `url('${images.promo_bg_desktop}')`,
        '--bg-image-m': `url('${images.promo_bg_mobile}')`,
        '--bg-banner': `url('${images.promo_bg_banner}')`,
        '--desktop-width-banner': this.desktopWidthBanner ? 'cover' : 'contain',
        '--mobile-width-banner': this.mobileWidthBanner ? 'cover' : 'contain'
      }
    }
  },
  created () {
    this.$root.$once('iclp1-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = this.getMDContent(data.yamlData)
    })
  },
  beforeDestroy () {
    this.$root.$off('iclp1-data')
  },
  methods: {
    getMDContent (emitData) {
      const mdData = emitData

      this.desktopWidthBanner = mdData.promo_banner.desktop_full
      this.mobileWidthBanner = mdData.promo_banner.mobile_full

      return mdData
    }
  }
}
</script>

<style lang="scss">
  .iclp1_wrapper {
    @import '@/assets/sass/marketing/iclp1v2/style.scss';
  }
</style>
