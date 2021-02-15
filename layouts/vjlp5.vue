<template>
  <div class="core-wrapper" :class="{ vjlp5_wrapper: true }">
    <div class="vjlp5-main">
      <!-- PAGE HANDLING DATA -->
      <Vjlp5Data @emit-md-content="getMDcontent" />

      <div v-for="(data_items, data_index) in md_data" :key="data_index" :class="data_items.attributes.styles">
        <header id="header">
          <div class="container">
            <div class="logo">
              <img alt="alt logo" src="@/assets/images/vjlp5/vj-logo.png" data-not-lazy>
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
        </header>

        <section id="hero" :style="cssBackground">
          <div class="container">
            <div>
              <div class="banner">
                <h1 v-if="banner_title" v-html="bannerTitle" />
                <h1 v-if="banner_subtitle">
                  {{ data_items.attributes.promo_banner.banner_subtitle }}
                </h1>
              </div>
              <button v-if="data_items.attributes.promo_banner.banner_promo_join_button" id="banner-button" class="error">
                <a :href="data_items.attributes.promo_banner.promo_login_button_redirect_url"><strong>{{ data_items.attributes.promo_banner.banner_promo_join_button }}</strong></a>
              </button>
            </div>
          </div>
        </section>

        <Steps
          v-if="data_items.attributes.template === 'steps'"
          :title1="data_items.attributes.steps.step_title_1"
          :description1="data_items.attributes.steps.step_description_1"
          :title2="data_items.attributes.steps.step_title_2"
          :description2="data_items.attributes.steps.step_description_2"
          :title3="data_items.attributes.steps.step_title_3"
          :description3="data_items.attributes.steps.step_description_3"
        />
        <GameSlider
          v-if="data_items.attributes.template === 'game_slider'"
          :game-data="data_items.attributes.game_images"
        />

        <section id="section1">
          <div class="container">
            <div>
              <div v-for="(first_section, first_index) in data_items.attributes.first_section" :key="first_index">
                <h2>{{ first_section.first_section_title }}</h2>
                <p>{{ first_section.first_section_description }}</p>
              </div>

              <div class="separator" />
            </div>
          </div>
        </section>

        <section id="section2">
          <div class="container column-2">
            <div>
              <div v-for="(second_section_left, second_left_index) in data_items.attributes.second_section_left" :key="second_left_index">
                <h2>{{ second_section_left.second_section_title }}</h2>
                <p>{{ second_section_left.second_section_content }}</p>
              </div>
            </div>

            <div>
              <div v-for="(second_section_right, second_right_index) in data_items.attributes.second_section_right" :key="second_right_index">
                <h2>{{ second_section_right.second_section_title }}</h2>
                <p>{{ second_section_right.second_section_content }}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="payment">
          <div class="container">
            <div>
              <img class="desktop" src="@/assets/images/vjlp5/payment_large_jp.svg" alt="payment verajohn desktop">
              <img class="mobile" src="@/assets/images/vjlp5/payment_jp.svg" alt="payment verajohn mobile">
              <div class="separator" />
            </div>
          </div>
        </section>

        <section id="section4">
          <div class="container">
            <div>
              <h2>{{ data_items.attributes.third_section.third_section_title }}</h2>

              <ol>
                <li v-for="(third_section_list, third_index) in data_items.attributes.third_section.third_bullet_list" :key="third_index">
                  {{ third_section_list.third_section_content }}
                </li>
              </ol>

              <div class="separator" />
            </div>
          </div>
        </section>

        <section id="terms">
          <div class="container">
            <div>
              <div v-html="html" />
              <p>通常の<a href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と<a href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。</p>
              <div class="separator" />
            </div>
          </div>
        </section>

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
import Steps from '@/components/Views/Steps.vue'
import GameSlider from '@/components/Views/GameSlider.vue'
import Vjlp5Data from '~/pages/marketing/vjlp5/_slug/index.vue'
import Footer from '~/components/Base/TheFooter.vue'

export default {
  components: {
    Vjlp5Data,
    Steps,
    GameSlider,
    Footer
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

      banner_title: '',
      banner_subtitle: '',
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
        '--bg-banner': `url('${this.tablet}')`
      }
    },
    bannerTitle () {
      if (this.phrase) {
        const position = this.banner_title.indexOf(this.phrase)
        const text = `<span>${this.phrase}</span>`
        const output = [this.banner_title.slice(0, position), text, this.banner_title.slice(position, 0)].join('')
        return output
      }
      return this.banner_title
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

        this.banner_title = item.attributes.promo_banner.banner_title
        this.banner_subtitle = item.attributes.promo_banner.banner_subtitle
        this.phrase = item.attributes.promo_banner.phrase
      })
    }
  }
}
</script>

<style lang="scss">
  .vjlp5_wrapper {
    @import '@/assets/sass/vjlp5/style.scss';
  }
</style>
