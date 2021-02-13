<template>
  <div class="core-wrapper" :class="{ iclp3_wrapper: true }">
    <client-only>
      <div class="iclp3-main">
      <!-- PAGE HANDLING DATA -->
        <iclp3v2DataTest @emit-md-content="getMDcontent" />
        <div v-for="(data_items, data_index) in md_data" :key="data_index">
          <header class="desktop">
            <div class="container">
              <div class="inter-casino-logo">
                <img src="@/assets/images/iclp3v2/logo_inter_pc.png" alt="inter casino logo" data-not-lazy>
              </div>
              <div class="join" aria-label="join">
                <a :href="data_items.attributes.promo_banner.promo_join_url">
                  <img src="@/assets/images/iclp3v2/btn_signup.png" alt="inter casino logo">
                </a>
              </div>
            </div>
          </header>

          <header class="mobile">
            <div class="container">
              <img src="@/assets/images/iclp3v2/logo_inter_sp.png" alt="inter casino logo" data-not-lazy>
            </div>
            <div class="join" aria-label="join">
              <a :href="data_items.attributes.promo_banner.promo_join_url">
                <img src="@/assets/images/iclp3v2/btn_signup.png" alt="inter casino logo">
              </a>
            </div>
          </header>

          <section id="bonus">
            <div v-for="(summaryItems, summaryIndex) in data_items.attributes.bonus" :key="summaryIndex" class="container">
              <div class="box">
                <div>
                  <img class="image-title" :src="summaryItems.box_title_image" alt="alt img">
                  <p v-html="formatSummary(summaryItems)" />
                  <a :href="summaryItems.box_button_image_url">
                    <img :src="summaryItems.box_button_image">
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="payment">
            <div class="container">
              <img class="desktop" src="@/assets/images/iclp3v2/payment_large_jp.svg">
              <img class="mobile" src="@/assets/images/iclp3v2/payment_jp.svg">
            </div>
          </section>

          <section id="terms">
            <div class="container">
              <div v-html="html" />
            </div>
          </section>
          <Footer
            :promo-language-code="language"
            :promo-country-code="country_code"
            :landing-page-type="'intercasino'"
          />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import iclp3v2DataTest from '~/pages/marketing/iclp3test/_slug/index.vue'
import Footer from '~/components/Base/TheFooter.vue'

export default {
  components: {
    iclp3v2DataTest,
    Footer
  },
  data () {
    return {
      layout: false,
      md_data: { },
      filter_data: { },
      language: '',
      country_code: '',
      html: ''
    }
  },
  computed: {
    formattedRegMessage () {
      return this.filter_data.promo_banner.promo_register_message.split(/\r?\n/)
        .filter(msg => msg)
        .map(msg => msg.slice(-1) === '\\' ? msg.substring(0, msg.length - 1) : msg).reduce((oldVal, newVal) =>
          oldVal + '<br class="pc" />' + newVal
        )
    },
    bannerTerms () {
      return this.filter_data.promo_banner.promo_terms_text.includes(this.filter_data.promo_banner.promo_terms_underlined_text)
        ? this.filter_data.promo_banner.promo_terms_text.replace(this.filter_data.promo_banner.promo_terms_underlined_text, `<span>${this.filter_data.promo_banner.promo_terms_underlined_text}</span>`)
        : this.filter_data.promo_banner.promo_terms_text
    }
  },
  methods: {
    forceRerender () {
      // Remove my-component from the DOM
      this.renderComponent = false
      console.log('step1', this.renderComponent)

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true
        console.log('step2', this.renderComponent)
      })
    },
    /* data from 'PAGE' store to 'md_data' local variable */
    getMDcontent (emitData) {
      this.md_data = [emitData]
      this.md_data.forEach((item) => {
        this.language = item.attributes.promo_locale.promo_language_code
        this.country_code = item.attributes.promo_locale.promo_country_code
        this.html = item.html
        this.filter_data = item.attributes
      })
    },
    formatSummary (data) {
      const summary = data.summary.split(/\r?\n/)
        .filter(summary => summary)
        .map(summary => summary.slice(-1) === '\\' ? summary.substring(0, summary.length - 1) : summary)

      if (data.higlighted_phrases) {
        let idx1 = 0
        data.higlighted_phrases.filter(phrase => phrase)
          .forEach((phrase) => {
            while (summary.length > idx1) {
              if (summary[idx1].includes(phrase)) {
                summary[idx1] = summary[idx1].replace(phrase, `<strong>${phrase}</strong>`)
                break
              } else {
                idx1++
              }
            }
          })
      }

      if (data.highlighted_link_phrases) {
        let idx2 = 0
        data.highlighted_link_phrases.filter(phrase => phrase)
          .forEach((phrase) => {
            while (summary.length > idx2) {
              if (summary[idx2].includes(phrase.text)) {
                summary[idx2] = summary[idx2].replace(phrase.text,
                  `<a href="${phrase.link}" target="_blank" rel="noopener">${phrase.text}</a>`)
                break
              } else {
                idx2++
              }
            }
          })
      }

      return summary.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    }
  }
}
</script>

<style lang="scss"> //Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .iclp3_wrapper {
    @import '@/assets/sass/iclp3v2/style.scss';
  }
</style>
