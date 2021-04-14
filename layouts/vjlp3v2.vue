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
            <h2 v-if="mdData.promo_banner.promo_title_display">
              {{ mdData.promo_banner.promo_subtitle }}
            </h2>
            <div :class="mdData.promo_banner.promo_join_button_location">
              <button class="error">
                <a :href="mdData.promo_banner.promo_login_button_redirect_url">
                  {{ mdData.promo_banner.promo_join_button }}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="container">
          <div
            class="center"
            :class="{hidden: mdData.promo_banner.promo_join_button_location === 'hidden'}"
          >
            <button class="error">
              <a :href="mdData.promo_banner.promo_login_button_redirect_url">
                {{ mdData.promo_banner.promo_join_button }}
              </a>
            </button>
          </div>
        </div>
      </section>
      <section id="game-slider">
        <div class="container">
          <div class="slider">
            <VueSlickCarousel
              :arrows="false"
              :dots="false"
              :infinite="true"
              :autoplay="true"
              :speed="300"
              :slides-to-show="5"
              :slides-to-scroll="1"
              v-bind="carouselSettings"
            >
              <a
                v-for="(data, index) in carouselData"
                :key="index"
                :href="data.link"
                :aria-label="`link_${index + 1}`"
              >
                <img :alt="`image_${index + 1}`" :src="data.icon">
              </a>
            </VueSlickCarousel>
          </div>
        </div>
      </section>
      <span :style="paymentProviders" v-html="htmlBody" />
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    Footer,
    VueSlickCarousel
  },
  data () {
    return {
      mdData: {},
      htmlBody: '',
      carouselSettings: {
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true
            }
          }
        ]
      }
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
    },
    carouselData () {
      const games = this.mdData.promo_banner.game_images
      const links = Object.entries(games)
        .filter(data => data[0].includes('url'))
        .map(data => data[1])
      const icons = Object.entries(games)
        .filter(data => data[0].includes('icon'))
        .map(data => data[1])
      return links.map((data, index) => ({
        link: data, icon: icons[index]
      }))
    },
    paymentProviders () {
      const country = this.mdData.promo_locale.promo_country_code || 'en'
      const mobile = require(`~/assets/images/payment/payment_${country}.svg`)
      const desktop = require(`~/assets/images/payment/payment_large_${country}.svg`)
      return {
        '--payment-small': `url('${mobile}')`,
        '--payment-large': `url('${desktop}')`
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
}
</style>
