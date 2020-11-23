<template>
  <div :class="{ iclp3_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="iclp3-main"
    >
      <!-- <header>
        <div class="container">
          <img src="@/assets/images/iclp3V2/logo_inter_pc.png" alt="inter casino logo" data-not-lazy>
        </div>
      </header> -->
      <section id="firstview" class="firstview">
        <div class="container">

          <div>
            <div class="inter-casino-logo">
              <img src="@/assets/images/iclp3V2/logo_inter_pc.png" alt="inter casino logo" data-not-lazy>
            </div>

            <div class="dream-logo">
              <img src="@/assets/images/iclp3V2/logo_oiran.png" alt="inter casino logo">
            </div>

            <div id="firstview__touch" class="firstview__touch">
              <img src="@/assets/images/iclp3V2/touch.png" alt="inter casino logo">
            </div>
            <div class="firstview__btn_inquiry" aria-label="join" :href="joinURL">
              <img src="@/assets/images/iclp3V2/btn_signup.png" alt="inter casino logo">
            </div>
            <div class="firstview__taparea">
              <span>タップエリア</span>
            </div>
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
            <div id="firstvie__inquiry" class="firstvie__inquiry">
              <div class="firstvie__inquiry__inner">
                <h3 v-html="formattedRegMessage" />
                <a :href="joinURL">{{ joinMessage }}</a>
                <button onclick="back()">
                  ▶まだまだ触る！
                </button>
              </div>
              <a class="firstvie__inquiry__turm" href="#terms" v-html="bannerTerms">
                <!-- <span>利用規約</span>に同意します -->
              </a>
            </div>
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
          </div>

        </div>
      </section>

      <!--<div v-html="htmlBody" />-->

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

// import '~/assets/js/iclp3V2/spine.client.js'
// import '~/assets/js/iclp3V2/velocity.min.client.js'
// import '~/assets/js/iclp3V2/scripts.client.js'

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
    @import '@/assets/sass/base/style.scss';
  }
</style>
