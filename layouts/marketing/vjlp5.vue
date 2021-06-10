<template>
  <div class="layout-css" :class="{ vjlp5_wrapper: true }">
    <div class="vjlp5-main">
      <!-- PAGE HANDLING DATA -->
      <Vjlp5Data @emit-md-content="getMDcontent" />

      <div v-for="(data_items, data_index) in md_data" :key="data_index" :class="data_items.attributes.variation">
        <header id="header">
          <div class="container">
            <div class="row">
              <div class="logo">
                <img alt="alt logo" src="@/assets/images/marketing/vjlp5/vj-logo.png" data-not-lazy>
              </div>

              <div class="nav-links">
                <button class="warning">
                  <a :href="data_items.attributes.promo_banner.promo_join_button_redirect_url">
                    {{ data_items.attributes.promo_banner.promo_login_button }}
                  </a>
                </button>
                <button class="error animated pulse infinite">
                  <a :href="data_items.attributes.promo_banner.promo_login_button_redirect_url"><strong>{{ data_items.attributes.promo_banner.promo_join_button }}</strong></a>
                </button>
              </div>
            </div>
          </div>
        </header>

        <section id="hero" :style="cssBackground">
          <div class="container">
            <div class="row">
              <div class="banner-wrapper">
                <div class="banner" :class="data_items.attributes.promo_banner.promo_banner_position">
                  <div>
                    <h1 v-if="firstTitle" :class="data_items.attributes.promo_banner.promo_banner_font_size" v-html="bannerTitle" />
                    <h1 v-if="secondTitle" :class="data_items.attributes.promo_banner.promo_banner_font_size">
                      {{ data_items.attributes.promo_banner.second_title }}
                    </h1>
                  </div>
                </div>
                <div
                  v-if="data_items.attributes.promo_banner.promo_join_button_option"
                  id="banner-button"
                >
                  <button class="error">
                    <a :href="data_items.attributes.promo_banner.promo_login_button_redirect_url">
                      <strong>{{ data_items.attributes.promo_banner.promo_join_button }}</strong>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Steps
          v-if="data_items.attributes.steps_gameslider === 'steps'"
          :title1="data_items.attributes.steps.step_title_1"
          :description1="data_items.attributes.steps.step_description_1"
          :title2="data_items.attributes.steps.step_title_2"
          :description2="data_items.attributes.steps.step_description_2"
          :title3="data_items.attributes.steps.step_title_3"
          :description3="data_items.attributes.steps.step_description_3"
        />
        <GameSlider
          v-if="data_items.attributes.steps_gameslider === 'game_slider'"
          :game-data="data_items.attributes.game_images"
        />

        <section id="section1">
          <div class="container">
            <div class="row">
              <div>
                <div v-for="(first_section, first_index) in data_items.attributes.first_section" :key="first_index">
                  <h2>{{ first_section.first_section_title }}</h2>
                  <p v-html="nextlineToBr(first_section.first_section_description)" />
                  <p v-if="additionalLinks" v-html="textLink.toString()" />
                </div>

                <div class="separator" />
              </div>
            </div>
          </div>
        </section>

        <section id="section2">
          <div class="container">
            <div class="row column-2">
              <div>
                <div v-for="(usp_left, second_left_index) in data_items.attributes.usp_left" :key="second_left_index">
                  <h2>{{ usp_left.usp_title }}</h2>
                  <p v-html="nextlineToBr(usp_left.usp_content)" />
                </div>
              </div>

              <div>
                <div v-for="(usp_right, second_right_index) in data_items.attributes.usp_right" :key="second_right_index">
                  <h2>{{ usp_right.usp_title }}</h2>
                  <p v-html="nextlineToBr(usp_right.usp_content)" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="payment">
          <div class="container">
            <div class="row">
              <div>
                <img class="desktop" src="@/assets/images/marketing/vj-global-paymentprovider/payment_large_jp.svg" alt="payment verajohn desktop">
                <img class="mobile" src="@/assets/images/marketing/vj-global-paymentprovider/payment_jp.svg" alt="payment verajohn mobile">
                <div class="separator" />
              </div>
            </div>
          </div>
        </section>

        <div class="container">
          <div class="row">
            <div id="terms">
              <div v-html="html" />
              <p>通常の<a href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と<a href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。</p>
              <div class="separator" />
            </div>
          </div>
        </div>

        <Footer
          :promo-language-code="language"
          :promo-country-code="country_code"
          :landing-page-type="'verajohn'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vjlp5Data from '~/pages/marketing/vjlp5/_slug/index.vue'
import Footer from '~/components/Marketing/TheFooter.vue'
import Steps from '~/components/Marketing/Steps.vue'
import GameSlider from '~/components/Marketing/GameSlider.vue'

export default {
  components: {
    Vjlp5Data,
    Footer,
    Steps,
    GameSlider
  },
  data () {
    return {
      layout: false,
      md_data: { },
      language: '',
      country_code: '',
      html: '',

      desktop: '',
      tablet: '',
      mobile: '',
      desktopWidthBanner: '',
      mobileWidthBanner: '',

      firstTitle: '',
      secondTitle: '',
      phrase: ''
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.language
      },
      link: [
        { rel: 'shortcut icon', href: '/marketing/vj-favicon.ico', type: 'image/x-icon' }
      ]
    }
  },
  computed: {
    cssBackground () {
      return {
        '--bg-image': `url('${this.desktop}')`,
        '--bg-image-m': `url('${this.mobile}')`,
        '--bg-banner': `url('${this.tablet}')`,
        '--desktop-width-banner': this.desktopWidthBanner ? 'cover' : 'contain',
        '--mobile-width-banner': this.mobileWidthBanner ? 'cover' : 'contain'
      }
    },
    bannerTitle () {
      if (this.phrase) {
        const position = this.firstTitle.indexOf(this.phrase)
        const text = `<span class='highlight'>${this.phrase}</span>`
        const output = [this.firstTitle.slice(0, position), text, this.firstTitle.slice(position, 0)].join('')
        return output
      }
      return this.firstTitle
    },
    textLink () {
      return this.additionalLinks.map((item) => {
        if (item.text_link) {
          const position = item.text.indexOf(item.text_link)
          const text = `<a href=${item.link}>${item.text_link}</a>`
          const output = [item.text.slice(0, position), text, item.text.slice(position, 0)].join(' ')
          return `<p style="margin: 0">${output}</p>`
        }
        return item.text
      }).join(' ')
    }
  },
  methods: {
    /* data from 'PAGE' store to 'md_data' local variable */
    getMDcontent (emitData) {
      this.md_data = [emitData]

      this.md_data.forEach((item) => {
        this.language = item.attributes.promo_locale.promo_language_code
        this.country_code = item.attributes.promo_locale.promo_country_code
        this.html = item.html

        this.desktop = item.attributes.promo_banner.promo_images.promo_bg_desktop
        this.tablet = item.attributes.promo_banner.promo_images.promo_bg_banner
        this.mobile = item.attributes.promo_banner.promo_images.promo_bg_mobile
        this.desktopWidthBanner = item.attributes.promo_banner.desktop_full
        this.mobileWidthBanner = item.attributes.promo_banner.mobile_full

        this.firstTitle = item.attributes.promo_banner.first_title
        this.secondTitle = item.attributes.promo_banner.second_title
        this.phrase = item.attributes.promo_banner.phrase
        this.additionalLinks = item.attributes.additional_links
      })
    },
    nextlineToBr (paragraphs = '') {
      return paragraphs.split(/\r?\n/).map((sentence) => {
        return paragraphs.slice(-1) === '\\'
          ? paragraphs.substring(0, paragraphs.length - 1)
          : sentence
      }).reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    }
  }
}
</script>

<style lang="scss">
  .vjlp5_wrapper {
    // Brand
    @import '@/assets/sass/marketing/brand/vj_brand_variables.scss';

    // Template style
    @import '@/assets/sass/marketing/vjlp5/style.scss';
  }
</style>
