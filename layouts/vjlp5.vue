<template>
  <div :class="{ vjlp5_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="vjlp5-main"
    >
      <header id="header">
        <div class="container">
          <div class="logo">
            <img alt="alt logo" src="@/assets/images/vjlp5/vj-logo.png" data-not-lazy>
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
      <section id="hero" :style="cssBackground">
        <div class="container">
          <div class="banner" />
        </div>
      </section>

      <section id="steps">
        <div class="container column-3">
          <div class="animated fadeIn delay-halfs">
            <span class="num">1</span>
            <div>
              <h3>{{ mdData.steps.step_title_1 }}</h3>
              <p>{{ mdData.steps.step_description_1 }}</p>
            </div>
          </div>

          <div class="animated fadeIn delay-1s">
            <span class="num">2</span>
            <div>
              <h3>{{ mdData.steps.step_title_2 }}</h3>
              <p>{{ mdData.steps.step_description_2 }}</p>
            </div>
          </div>

          <div class="animated fadeIn delay-1-and-halfs">
            <span class="num">3</span>
            <div>
              <h3>{{ mdData.steps.step_title_3 }}</h3>
              <p>{{ mdData.steps.step_description_3 }} </p>
            </div>
          </div>
        </div>
      </section>

      <section id="section1">
        <div class="container">
          <div>
            <div v-for="(first_section, first_index) in mdData.first_section" :key="first_index">
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
            <div v-for="(second_section_left, second_left_index) in mdData.second_section_left" :key="second_left_index">
              <h2>{{ second_section_left.second_section_title }}</h2>
              <p>{{ second_section_left.second_section_content }}</p>
            </div>
          </div>

          <div>
            <div v-for="(second_section_right, second_right_index) in mdData.second_section_right" :key="second_right_index">
              <h2>{{ second_section_right.second_section_title }}</h2>
              <p>{{ second_section_right.second_section_content }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div class="container">
          <div class="separator" />
        </div>
      </section>

      <section id="section4">
        <div class="container">
          <div>
            <h2>{{ mdData.third_section.third_section_title }}</h2>
            <ol>
              <li v-for="(third_section_list, third_index) in mdData.third_section.third_bullet_list" :key="third_index">
                {{ third_section_list.third_section_content }}
              </li>
            </ol>
            <div class="separator" />
          </div>
        </div>
      </section>

      <!-- eslint-disable-next-line vue/no-v-html -->
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
  created () {
    this.$root.$once('vjlp5-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('vjlp5-data')
  }
}
</script>

<style lang="scss">
.vjlp5_wrapper {
  @import '@/assets/sass/base/fonts.css';
  @import '@/assets/sass/vjlp5/style.scss';
  @import '@/assets/sass/base/style.scss';
}
</style>
