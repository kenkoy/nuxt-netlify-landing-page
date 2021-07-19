<template>
  <div class="layout-css">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="yglp1-main"
    >
      <section
        id="hero"
        :style="cssBackground"
      >
        <div id="login" class="animated">
          <div class="fadeIn animated">
            <a :href="mdData.promo_banner.promo_login_button_redirect_url">
              <i class="material-icons">exit_to_app</i>
              <span>{{ mdData.promo_banner.promo_login_button_text }}</span>
            </a>
          </div>
        </div>
        <div class="container">
          <div class="row column-2">
            <div id="hero-text-wrapper">
              <div>
                <img class="logo" src="@/assets/images/marketing/yglp1/logo-jp.png" alt="yuugado logo">
                <div>
                  <p>{{ mdData.promo_banner.promo_sub_title }}</p>
                  <h1>{{ mdData.promo_banner.promo_title_1 }}</h1>
                  <h2>{{ mdData.promo_banner.promo_title_2 }}</h2>
                </div>
                <button>
                  <a :href="mdData.promo_banner.promo_register_button_redirect_url">{{ mdData.promo_banner.promo_register_button_text }}</a>
                </button>
                <img class="game-logo" :src="mdData.promo_banner.promo_bg_mobile" alt="yuugado game">
                <small><a href="#terms">利用規約</a>に同意します。</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Steps
        :title1="mdData.steps.step_title_1"
        :description1="mdData.steps.step_description_1"
        :title2="mdData.steps.step_title_2"
        :description2="mdData.steps.step_description_2"
        :title3="mdData.steps.step_title_3"
        :description3="mdData.steps.step_description_3"
      />
      <section id="image-body">
        <div class="container">
          <div class="row">
            <div>
              <img :src="mdData.info_image.info_image_1">
              <img :src="mdData.info_image.info_image_2">
              <button>
                <a :href="mdData.promo_banner.promo_register_button_redirect_url">{{ mdData.promo_banner.promo_register_button_text }}</a>
              </button>
              <h3 class="text-center">
                {{ mdData.promo_banner.promo_text }}<a :href="mdData.promo_banner.promo_link_redirect">{{ mdData.promo_banner.promo_link_text }}</a>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section id="payment" class="separator">
        <div class="container">
          <div class="row">
            <svg />
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
        :landing-page-type="'yuugado'"
      />
    </div>
  </div>
</template>

<script>
import Steps from '@/components/Marketing/Steps.vue'
import Footer from '@/components/Marketing/TheFooter.vue'

export default {
  components: {
    Steps,
    Footer
  },
  data () {
    return {
      mdData: {},
      htmlBody: ''
    }
  },
  head () {
    return {
      link: [
        { href: require('~/assets/sass/marketing/yglp1/style.scss') }
      ]
    }
  },
  computed: {
    cssBackground () {
      const images = this.mdData.promo_banner
      return {
        '--bg-image-desktop': `url('${images.promo_bg_desktop}')`
      }
    }
  },
  created () {
    this.$root.$once('yglp1-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('yglp1-data') // Change to actual page name
  }
}
</script>
