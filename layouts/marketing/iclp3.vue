<template>
  <div class="layout-css" :class="{ iclp3_wrapper: true }">
    <div class="iclp3-main">
      <!-- PAGE HANDLING DATA -->
      <iclp3 @emit-md-content="getMDcontent" />
      <div v-for="(data_items, data_index) in md_data" :key="data_index">
        <header class="desktop">
          <div class="container">
            <div class="row">
              <div class="inter-casino-logo">
                <img src="@/assets/images/marketing/iclp3v2/logo_inter_pc.png" alt="inter casino logo" data-not-lazy>
              </div>
              <div class="join" aria-label="join">
                <a :href="data_items.attributes.promo_banner.promo_join_url">
                  <img src="@/assets/images/marketing/iclp3v2/btn_signup.png" alt="inter casino logo">
                </a>
              </div>
            </div>
          </div>
        </header>

        <header class="mobile">
          <div class="container">
            <img src="@/assets/images/marketing/iclp3v2/logo_inter_sp.png" alt="inter casino logo" data-not-lazy>
          </div>
          <div class="join" aria-label="join">
            <a :href="data_items.attributes.promo_banner.promo_join_url">
              <img src="@/assets/images/marketing/iclp3v2/btn_signup.png" alt="inter casino logo">
            </a>
          </div>
        </header>
        <section id="firstview" class="firstview">
          <div class="container">
            <div class="row">
              <div>
                <div class="touch">
                  <img src="@/assets/images/marketing/iclp3v2/touch.png" alt="inter casino logo">
                </div>
                <div class="firstview__taparea">
                  <span>タップエリア</span>
                </div>
                <!-- GIRL IMAGE -->
                <div class="firstview__anime">
                  <div id="player" class="player">
                    <div class="spine-player">
                      <canvas class="spine-player-canvas" width="1930" height="1500" />
                      <div class="spine-player-error spine-player-hidden" />
                      <div class="spine-player-controls spine-player-popup-parent spine-player-controls-hidden">
                        <div class="spine-player-timeline">
                          <div class="spine-player-slider">
                            <div class="spine-player-slider-value" style="width: 4.40002%;" />
                            <!--<div class="spine-player-slider-knob"></div>-->
                          </div>
                        </div>
                        <div class="spine-player-buttons">
                          <button
                            id="spine-player-button-play-pause"
                            class="spine-player-button spine-player-button-icon-pause"
                          />
                          <div class="spine-player-button-spacer" />
                          <button
                            id="spine-player-button-speed"
                            class="spine-player-button spine-player-button-icon-speed"
                          />
                          <button
                            id="spine-player-button-animation"
                            class="spine-player-button spine-player-button-icon-animations"
                          />
                          <button
                            id="spine-player-button-skin"
                            class="spine-player-button spine-player-button-icon-skins"
                          />
                          <button
                            id="spine-player-button-settings"
                            class="spine-player-button spine-player-button-icon-settings"
                          />
                          <button
                            id="spine-player-button-fullscreen"
                            class="spine-player-button spine-player-button-icon-fullscreen"
                          />
                          <img
                            id="spine-player-button-logo"
                            class="spine-player-button-icon-spine-logo"
                            src="/marketing/img/iclp3/spine-logo-white.svg"
                            alt="spine-player-button-logo"
                            data-not-lazy
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="firstview__ie"
                    src="/marketing/img/iclp3/oiran.png"
                    alt="oiran"
                    data-not-lazy
                  >
                  <!-- <canvas class="firstview__cvs" id="cvs"></canvas> -->
                  <canvas id="cvs" class="firstview__cvs" width="1920" height="500" />
                </div>
                <!-- COUNTER -->
                <div id="firstview__counter" class="firstview__counter">
                  <div class="number main push">
                    <span class="back">0</span>
                    <div class="number lower" />
                    <div
                      class="number flipbottom"
                      style="animation: 0.5s linear 0s 1 normal forwards running flipb;"
                    >
                      0
                    </div>
                    <div
                      class="number fliptop"
                      style="animation: 0.5s linear 0s 1 normal forwards running flipt;"
                    />
                  </div>
                  <div class="number main push">
                    <span class="back">0</span>
                    <div class="number lower" />
                    <div
                      class="number flipbottom"
                      style="animation: 0.5s linear 0s 1 normal forwards running flipb;"
                    >
                      0
                    </div>
                    <div
                      class="number fliptop"
                      style="animation: 0.5s linear 0s 1 normal forwards running flipt;"
                    />
                  </div>
                  <div class="number main push">
                    <span class="back">0</span>
                    <div class="number lower" />
                    <div
                      class="number flipbottom"
                      style="animation: 0.5s linear 0s 1 normal forwards running flipb;"
                    >
                      0
                    </div>
                    <div
                      class="number fliptop"
                      style="animation: 0.5s linear 0s 1 normal forwards running flipt;"
                    />
                  </div>
                  <div class="number main push">
                    <span class="back">0</span>
                    <div class="number lower">
                      0
                    </div>
                    <div
                      class="number flipbottom"
                      style="animation: 0.5s linear 0s 1 normal forwards running flipb;"
                    >
                      0
                    </div>
                    <div
                      class="number fliptop"
                      style="animation: 0.5s linear 0s 1 normal forwards running flipt;"
                    >
                      0
                    </div>
                  </div>
                </div>
                <div class="dream-logo">
                  <img src="@/assets/images/marketing/iclp3v2/logo_oiran.png" alt="inter casino logo">
                </div>
                <div id="firstvie__inquiry" class="firstvie__inquiry">
                  <div>
                    <div class="firstvie__inquiry__inner">
                      <h3 v-html="formattedRegMessage" />
                      <a :href="data_items.attributes.promo_banner.promo_join_url">{{ data_items.attributes.promo_banner.promo_join_text }}</a>
                      <button onclick="back()">
                        ▶まだまだ触る！
                      </button>
                    </div>
                  </div>
                  <a class="firstvie__inquiry__turm" href="#terms" v-html="bannerTerms">
                    <!-- <span>利用規約</span>に同意します -->
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="bonus">
          <div v-for="(summaryItems, summaryIndex) in data_items.attributes.bonus" :key="summaryIndex" class="container">
            <div class="row">
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
          </div>
        </section>

        <section id="payment">
          <div class="container">
            <img class="desktop" src="@/assets/images/marketing/ic-global-paymentprovider/payment_large_jp.svg">
            <img class="mobile" src="@/assets/images/marketing/ic-global-paymentprovider/payment_jp.svg">
          </div>
        </section>

        <section id="terms">
          <div class="container">
            <div class="row">
              <div v-html="html" />
            </div>
          </div>
        </section>
        <Footer
          :promo-language-code="language"
          :promo-country-code="country_code"
          :landing-page-type="'intercasino'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import iclp3 from '~/pages/marketing/iclp3/_slug/index.vue'
import Footer from '~/components/Marketing/TheFooter.vue'

export default {
  components: {
    iclp3,
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
    @import '@/assets/sass/marketing/iclp3v2/style.scss';
  }
</style>
