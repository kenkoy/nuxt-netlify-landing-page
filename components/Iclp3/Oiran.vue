<template>
  <client-only>
    <section id="firstview" class="firstview">
      <div class="container">
        <div>
          <div class="touch">
            <img src="@/assets/images/iclp3v2/touch.png" alt="inter casino logo">
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
            <img src="@/assets/images/iclp3v2/logo_oiran.png" alt="inter casino logo">
          </div>
          <!-- <div id="firstvie__inquiry" class="firstvie__inquiry">
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
            </a>
          </div> -->
        </div>
      </div>
    </section>
  </client-only>
</template>

<script>
export default {
  head () {
    return {
      script: [
        { hid: 'stripe', src: '/marketing/js/iclp3/spine.js' },
        { hid: 'stripe', defer: true, body: true, src: '/marketing/js/iclp3/velocity.min.js' },
        { hid: 'stripe', defer: true, async: true, body: true, src: '/marketing/js/iclp3/scripts.min.js' }
      ]
    }
  }
}
</script>
