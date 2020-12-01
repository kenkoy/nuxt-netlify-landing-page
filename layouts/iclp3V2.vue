<template>
  <div :class="{ iclp3_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="iclp3-main"
    >
      <header class="desktop">
        <div class="container">
          <div class="inter-casino-logo">
            <img src="@/assets/images/iclp3V2/logo_inter_pc.png" alt="inter casino logo" data-not-lazy>
          </div>
          <div class="join" aria-label="join">
            <a :href="mdData.promo_banner.promo_join_url">
              <img src="@/assets/images/iclp3V2/btn_signup.png" alt="inter casino logo">
            </a>
          </div>
        </div>
      </header>

      <header class="mobile">
        <div class="container">
          <img src="@/assets/images/iclp3V2/logo_inter_sp.png" alt="inter casino logo" data-not-lazy>
        </div>
        <div class="join" aria-label="join">
          <a :href="mdData.promo_banner.promo_join_url">
            <img src="@/assets/images/iclp3V2/btn_signup.png" alt="inter casino logo">
          </a>
        </div>
      </header>
      <section id="firstview" class="firstview">
        <div class="container">
          <div>
            <div class="touch">
              <img src="@/assets/images/iclp3V2/touch.png" alt="inter casino logo">
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
              <img src="@/assets/images/iclp3V2/logo_oiran.png" alt="inter casino logo">
            </div>
            <div id="firstvie__inquiry" class="firstvie__inquiry">
              <div>
                <div class="firstvie__inquiry__inner">
                  <h3 v-html="formattedRegMessage" />
                  <a :href="mdData.promo_banner.promo_join_url">{{ mdData.promo_banner.promo_join_text }}</a>
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
      </section>

      <section id="bonus">
        <div class="container" v-for="(summaryItems, summaryIndex) in mdData.bonus" :key="summaryIndex">
          <div class="box">
            <div>
              <img class="image-title" :src="require(`~/assets/images${summaryItems.box_title_image}`)" alt="alt img">
              <p>{{summaryItems.summary}}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="payment">
        <div class="container">
          <img class="desktop" src="@/assets/images/iclp3V2/payment_large_jp.svg"/>
          <img class="mobile" src="@/assets/images/iclp3V2/payment_jp.svg"/>
        </div>
      </section>

      <section id="main-content">
        <div class="container">
          <div v-html="htmlBody" />
        </div>
      </section>

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
      htmlBody: '',
      registrationMessage: ''
    }
  },
  computed: {
    formattedRegMessage () {
      return this.mdData.promo_banner.promo_register_message.split(/\r?\n/)
        .filter(msg => msg)
        .map(msg => msg.slice(-1) === '\\' ? msg.substring(0, msg.length - 1) : msg).reduce((oldVal, newVal) =>
          oldVal + '<br class="pc" />' + newVal
        )
    },
    bannerTerms () {
      return this.mdData.promo_banner.promo_terms_text.includes(this.mdData.promo_banner.promo_terms_underlined_text)
        ? this.mdData.promo_banner.promo_terms_text.replace(this.mdData.promo_banner.promo_terms_underlined_text, `<span>${this.mdData.promo_banner.promo_terms_underlined_text}</span>`)
        : this.mdData.promo_banner.promo_terms_text
    }
  },
  created () {
    this.$root.$once('iclp3-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('iclp3-data')
  }
}
</script>

<style lang="scss"> //Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .iclp3_wrapper {
    @import '@/assets/sass/base/fonts.css';
    @import '@/assets/sass/iclp3V2/style.scss';
    @import '@/assets/sass/iclp3V2/spine.css';
    @import '@/assets/sass/iclp3V2/firstview.css';
    @import '@/assets/sass/base/style.scss';
  }
</style>
