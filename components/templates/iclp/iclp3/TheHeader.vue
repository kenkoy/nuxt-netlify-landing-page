<template>
  <section id="firstview" class="firstview">
    <p class="firstview__logointer">
      <span>インターカジノ</span>
    </p>
    <h1 class="firstview__logo">
      <span>花魁ドリーム</span>
    </h1>
    <p
      class="firstview__exclusive"
      lazy-background="/marketing/img/iclp3/exclusive.png"
    >
      <span>期間限定独占配信中‼</span>
    </p>
    <p id="firstview__touch" class="firstview__touch">
      <span>触ったら帯が緩んじゃう Touch</span>
    </p>
    <a
      class="firstview__btn_inquiry"
      aria-label="join"
      :href="joinURL"
    >
      <span>登録</span>
    </a>
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
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    registrationMessage: {
      type: String,
      required: true
    },
    joinMessage: {
      type: String,
      required: true
    },
    joinURL: {
      type: String,
      required: true
    },
    termsText: {
      type: String,
      required: true
    },
    underlinedLinkText: {
      type: String,
      required: false
    }
  },
  computed: {
    formattedRegMessage () {
      return this.registrationMessage.split(/\r?\n/)
        .filter(msg => msg)
        .map(msg => msg.slice(-1) === '\\'
          ? msg.substring(0, msg.length - 1) : msg
        ).reduce((oldVal, newVal) =>
          oldVal + '<br class="pc" />' + newVal
        )
    },
    bannerTerms () {
      return this.termsText.includes(this.underlinedLinkText)
        ? this.termsText.replace(this.underlinedLinkText, `<span>${this.underlinedLinkText}</span>`)
        : this.termsText
    }
  }
}
</script>
