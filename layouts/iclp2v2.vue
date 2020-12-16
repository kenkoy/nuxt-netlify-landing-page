<template>
  <div :class="{ iclp2_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="iclp2-main"
    >
      <section id ="hero" :style="cssBackground">
        <div class="container">
          <div class="loginbtn">
            <a rel="noopener" :href="mdData.promo_banner.promo_home_button_redirect_url">
              <i class="material-icons" data-v-7c308f66="">home</i>
              <p class="login-text">{{mdData.promo_banner.promo_home_button}}</p>
            </a>
          </div>
          <div>
            <div id="header-text-wrapper">
              <img alt="alt img" src="@/assets/images/iclp2v2/logo.png" />
              <img alt="alt img" :src="mdData.promo_banner.promo_images.promo_banner_image_title_1" />
              <img alt="alt img" :src="mdData.promo_banner.promo_images.promo_banner_image_title_2" />
            </div>
            <div class="separation-star">
              <p v-html="bannerStatement"></p>
              <button onclick="location.href='#'" type="button">
                <a rel="noopener" :href="mdData.promo_banner.promo_register_button_redirect_url">{{mdData.promo_banner.promo_register_button_text}}</a>
              </button>
              <p><a rel="noopener" :href="mdData.promo_banner.promo_smallterm_redirect_url">{{mdData.promo_banner.promo_smallterm_text_link}}</a>{{mdData.promo_banner.promo_smallterm_text}}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="detail">
        <div class="container">
          <div>
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-welcome-title.png"/>
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-500WC-stamp.png"/>
            <p v-html="firstWelcomeStatement" />
          </div>
        </div>
        <div class="container column-2">
          <div>
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-welcome-graph1.png"/>
          </div>
          <div>
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-welcome-graph2.png"/>
          </div>
        </div>
        <div class="container">
          <div class="separation-star">
            <p class="text-center" v-html="secondWelcomeStatement"></p>
          </div>
        </div>
        <div id="testimonials">
          <div class="container">
            <div class="testi">
              <h3>初めまして、ごきげんよう!</h3>
              <p class="text-center" v-html="rougeSpeechStatement"></p>
            </div>
            <div class="feature-img">
              <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-red-icon.png"/>
            </div>
          </div>
          <div class="container">
            <div class="feature-img">
              <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-black-icon.png"/>
            </div>
            <div class="testi">
              <h3>チャオ! クロエだよ★</h3>
              <p class="text-center" v-html="chloeSpeechStatement"></p>
            </div>
          </div>
        </div>
      </section>
      <section id="golden-separation">
        <div class="container">
          <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-title-topgame1.png"/>
        </div>
      </section>
      <section id="games">
        <div class="container game-first-section">
          <div>
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-title-topgame2.png"/>
          </div>
        </div>
        <div class="container game-second-section column-2">
          <div>
            <img alt="alt img" :src="mdData.top_game_section.top_game_game1"/>
            <img alt="alt img" :src="mdData.top_game_section.top_game_game2"/>
          </div>
          <div>
            <img alt="alt img" :src="mdData.top_game_section.top_game_game3"/>
            <img alt="alt img" :src="mdData.top_game_section.top_game_game4"/>
          </div>
        </div>
        <div class="container game-third-section column-2">
          <div>
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-topgame-CS.png"/>
          </div>
          <div>
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-topgame-MOBILE.png"/>
          </div>
        </div>
      </section>
      <section id="loyalty-program">
        <div class="container">
          <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-Loyalty1.png">
        </div>
        <div class="container">
          <div>
            <p>レベルが上がるとカジノ内での <span>地位向上</span> !</p>
            <p><span>レベル7の最高ランク</span>、 <em class="redmark">インター大公</em>ではあの●●アイテムが出現 !?</p>
          </div>
        </div>
        <div class="container">
          <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-Loyalty2.png">
        </div>
        <div class="container">
          <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-Loyalty3.png">
        </div>
      </section>
      <section id="gradient-separation">
        <div class="container">
          <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-safe-title.png"/>
        </div>
      </section>
      <section id="pods">
        <div class="container">
          <div>
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-safe-fair.png"/>
          </div>
          <div>
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-safe-visa.png"/>
          </div>
          <div>
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-safe-wa.png"/>
          </div>
        </div>
      </section>
      <section id="history">
        <div class="container">
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-History1.png"/>
        </div>
        <div class="container">
            <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-queenprofile-title.png"/>
        </div>
        <div class="container column-2">
            <div>
              <div class="title">
                <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-queenprofile.png" data-not-lazy/>
              </div>
              <p class="separation-star" v-html="historyRougeParsedStatement"></p>
              <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-Rouge.png" data-not-lazy/>
            </div>

            <div>
              <div class="title">
                <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-queenprofile.png" data-not-lazy/>
              </div>
              <p class="separation-star" v-html="historyChloeParsedStatement"></p>
              <img alt="alt img" src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-Chole.png" data-not-lazy/>
            </div>
        </div>
        <div class="container">
            <button class="warning">
              <a rel="noopener" :href="mdData.history_section.history_register_button_redirect_url">{{mdData.history_section.history_register_button_text}}</a>
            </button>
        </div>
      </section>
      <section id="payment">
        <div class="container">
          <img alt="alt img" class="desktop" src="@/assets/images/iclp2v2/payment_large_jp.svg">
          <img alt="alt img" class="mobile" src="@/assets/images/iclp2v2/payment_jp.svg">
        </div>
      </section>
      <section id="terms">
        <div class="container">
          <div>
            <div v-html="htmlBody" />
            <ul>
              <li>
                通常の
                <a href="https://intercasino.com/about/terms-and-conditions">利用規約</a>と
                <a href="https://intercasino.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer
        :promoLanguageCode="mdData.promo_locale.promo_language_code"
        :promoCountryCode="mdData.promo_locale.promo_country_code"
        :landingPageType="'intercasino'"
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
    bannerStatement () {
      let sentences = this.mdData.promo_banner.promo_banner_statement.split(/\r?\n/)
        .filter(statement => statement)
        .map((statement) => {
          return statement.slice(-1) === '\\'
            ? statement.substring(0, statement.length - 1)
            : statement
        })
      if (this.mdData.promo_banner.promo_banner_highlighted_phrase) {
        const replacement = `<span class="redmark">${this.mdData.promo_banner.promo_banner_highlighted_phrase}</span>`
        sentences = sentences.map((sentence) => {
          return sentence.includes(this.mdData.promo_banner.promo_banner_highlighted_phrase)
            ? sentence.replace(this.mdData.promo_banner.promo_banner_highlighted_phrase, replacement)
            : sentence
        })
      }
      return sentences.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    },
    firstWelcomeStatement () {
      return this.statementsParser(this.mdData.welcome_section.welcome_first_statement, this.mdData.welcome_section.welcome_first_statement_highlighted_phrase, 'redmark')
    },
    secondWelcomeStatement () {
      return this.statementsParser(this.mdData.welcome_section.welcome_second_statement, null, null)
    },
    rougeSpeechStatement () {
      return this.statementsParser(this.mdData.welcome_section.welcome_rouge_speech_bubble, null, null)
    },
    chloeSpeechStatement () {
      return this.statementsParser(this.mdData.welcome_section.welcome_chloe_speech_bubble, null, null)
    },
    historyRougeParsedStatement () {
      return this.statementsParser(this.mdData.history_section.history_rouge_statement, this.mdData.history_section.history_rouge_highlighted_phrase, 'redmark')
    },
    historyChloeParsedStatement () {
      return this.statementsParser(this.mdData.history_section.history_chloe_statement, this.mdData.history_section.history_chloe_highlighted_phrase, 'blackmark')
    },
    cssBackground () {
      const images = this.mdData.promo_banner.promo_images
      return {
        '--bg-image': `url('${images.promo_bg_desktop}')`,
        '--bg-image-m': `url('${images.promo_bg_mobile}')`,
        '--bg-banner': `url('${images.promo_bg_banner}')`
      }
    }
  },
  methods: {
    statementsParser (statements, highLigtedPhrase, classStyle) {
      let sentences = statements.split(/\r?\n/)
        .filter(statement => statement)
        .map((statement) => {
          return statement.slice(-1) === '\\'
            ? statement.substring(0, statement.length - 1)
            : statement
        })
      if (highLigtedPhrase && classStyle) {
        const replacement = `<span class="${classStyle}">${highLigtedPhrase}</span>`
        sentences = sentences.map((line) => {
          return line.includes(highLigtedPhrase)
            ? line.replace(highLigtedPhrase, replacement)
            : line
        })
      }
      return sentences.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    }
  },
  created () {
    this.$root.$once('iclp2-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('iclp2-data') // Change to actual page name
  }
}
</script>

<style lang="scss"> // Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .iclp2_wrapper {
    @import '@/assets/sass/base/fonts.css';
    @import '@/assets/sass/iclp2v2/style.scss';
    @import '@/assets/sass/base/style.scss';
  }
</style>
