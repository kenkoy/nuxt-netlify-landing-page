<template>
  <div>
    <nuxt />
    <div v-if="Object.keys(mdData).length > 0">
      <header
        id="strip-container"
        class="container-flex h-100"
        :style="{ 'background-image': `url('${bgImage}')` }"
      >
        <a
          id="login-btn"
          :href="mdData.promo_banner.promo_home_button_redirect_url"
          class="login hvr-pulse"
        >
          <div class="animated fadeIn">
            <i class="material-icons">home</i>
            <div class="login-txt">
              <p>{{ mdData.promo_banner.promo_home_button }}</p>
            </div>
          </div>
        </a>
        <div class="container">
          <div class="row row-eq-height">
            <div id="strip" class="col-12 strip">
              <div class="strip-container animated fadeIn" style="margin-top: 222px;">
                <div class="logo animated fadeIn" />
                <div
                  class="title-1 animated fadeIn delay-0s"
                  :style="{ backgroundImage: 'url(' + mdData.promo_banner.promo_images.promo_banner_image_title_1 + ')' }"
                />
                <div
                  class="title-2 animated tada delay-1s"
                  :style="{ backgroundImage: 'url(' + mdData.promo_banner.promo_images.promo_banner_image_title_2 + ')' }"
                />
              </div>
              <span class="queenprofile-star sprite" />
              <div>
                <p
                  class="text-center"
                  v-html="formatBannerStatement(
                    mdData.promo_banner.promo_banner_statement,
                    mdData.promo_banner.promo_banner_highlighted_phrase)"
                />
              </div>
              <a
                :href="mdData.promo_banner.promo_register_button_redirect_url"
                class="button button-lrg"
                style="display:block;margin-top: 0px;"
              >{{ mdData.promo_banner.promo_register_button_text }}</a>
              <div class="small-terms">
                <a :href="mdData.promo_banner.promo_smallterm_redirect_url" class="link-terms-conditions ctac">
                  {{ mdData.promo_banner.promo_smallterm_text_link }}
                </a>{{ mdData.promo_banner.promo_smallterm_text }}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="detail" class="gb fadebg" />
      <TheWelcome
        :first-statements="mdData.welcome_section.welcome_first_statement"
        :highligted-first-statement-phrase="mdData.welcome_section.welcome_first_statement_highlighted_phrase"
        :second-statements="mdData.welcome_section.welcome_second_statement"
        :rouge-speech="mdData.welcome_section.welcome_rouge_speech_bubble"
        :chloe-speech="mdData.welcome_section.welcome_chloe_speech_bubble"
      />
      <TheTopGame
        :game1="mdData.top_game_section.top_game_game1"
        :game2="mdData.top_game_section.top_game_game2"
        :game3="mdData.top_game_section.top_game_game3"
        :game4="mdData.top_game_section.top_game_game4"
        :games-info1="mdData.top_game_section.top_game_gamesInfo1"
        :games-info2="mdData.top_game_section.top_game_gamesInfo2"
      />
      <TheLoyalty />
      <TheSafety />
      <TheHistory
        :rouge-statements="mdData.history_section.history_rouge_statement"
        :rouge-highlighted-phrase="mdData.history_section.history_rouge_highlighted_phrase"
        :chloe-statements="mdData.history_section.history_chloe_statement"
        :chloe-highlighted-phrase="mdData.history_section.history_chloe_highlighted_phrase"
        :register-button-text="mdData.history_section.history_register_button_text"
        :register-button-u-r-l="mdData.history_section.history_register_button_redirect_url"
      />
      <ThePayment
        :promo_language_code="mdData.promo_locale.promo_language_code"
        :promo_country_code="mdData.promo_locale.promo_country_code"
      />
      <TheBody
        :promo_content="htmlBody"
        :landing_page_type="'intercasino'"
      />
      <TheFooter
        :promo_language_code="mdData.promo_locale.promo_language_code"
        :promo_country_code="mdData.promo_locale.promo_country_code"
        :landing_page_type="'intercasino'"
      />
    </div>
  </div>
</template>

<script>
// import TheHeader from '@/components/templates/iclp/iclp2/TheHeader.vue'
import TheWelcome from '@/components/templates/iclp/iclp2/TheWelcome.vue'
import TheTopGame from '@/components/templates/iclp/iclp2/TheTopGame.vue'
import TheLoyalty from '@/components/templates/iclp/iclp2/TheLoyalty.vue'
import TheSafety from '@/components/templates/iclp/iclp2/TheSafety.vue'
import TheHistory from '@/components/templates/iclp/iclp2/TheHistory.vue'
import ThePayment from '@/components/templates/ThePayment.vue'
import TheBody from '@/components/templates/TheBody.vue'
import TheFooter from '@/components/templates/TheFooter.vue'

export default {
  components: {
    // TheHeader,
    TheWelcome,
    TheTopGame,
    TheLoyalty,
    TheSafety,
    TheHistory,
    TheBody,
    ThePayment,
    TheFooter
  },
  data () {
    return {
      mdData: {},
      htmlBody: '',
      bgImage: ''
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
  },
  created () {
    this.$root.$once('iclp2-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
      this.onResize()
    })
  },
  beforeDestroy () {
    this.$root.$off('iclp2-data')
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      if (Object.keys(this.mdData).length > 0) {
        const images = this.mdData.promo_banner.promo_images
        if (window.innerWidth < 576 && window.innerWidth >= 320) {
          this.bgImage = `${images.promo_bg_mobile}`
        } else {
          this.bgImage = `${images.promo_bg_desktop}`
        }
      }
    },
    formatBannerStatement (bannerStatements, higlightedPhrase) {
      let sentences = bannerStatements.split(/\r?\n/)
        .filter(statement => statement)
        .map((statement) => {
          return statement.slice(-1) === '\\'
            ? statement.substring(0, statement.length - 1)
            : statement
        })
      if (higlightedPhrase) {
        const replacement = `<span class="redmark">${higlightedPhrase}</span>`
        sentences = sentences.map((sentence) => {
          return sentence.includes(higlightedPhrase)
            ? sentence.replace(higlightedPhrase, replacement)
            : sentence
        })
      }
      const data = sentences.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
      // eslint-disable-next-line no-console
      console.log(data)
      return data
    },
    setBgImage () {
      return {}
    }
  }
}
</script>

<style lang='scss' scoped>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import '@/assets/css/base/animate.min.css';
  @import '@/assets/css/base/bootstrap.min.css';
  @import '@/assets/css/iclp2/core.css';
  @import '@/assets/css/iclp2/brand.css';
  @import '@/assets/css/iclp2/custom.css';
  @import '@/assets/css/iclp2/responsive.css';
  @import '@/assets/css/iclp2/scoreboard.css';
  @import '@/assets/css/iclp2/speechbubble.css';

  #strip-container {
    /* background: linear-gradient(rgba(132, 5, 217, 0.2), rgba(0, 0, 0, 0.6)),
      var(--bg-image) no-repeat top center; */
    /* background: linear-gradient(rgba(132, 5, 217, 0.2), rgba(0, 0, 0, 0.6)); */
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media only screen and (max-width: 575px) {
    #strip-container {
      /* background: linear-gradient(rgba(132, 5, 217, 0.2), rgba(0, 0, 0, 0.6)),
        var(--bg-image-m) no-repeat top center; */
      /* background: linear-gradient(rgba(132, 5, 217, 0.2), rgba(0, 0, 0, 0.6)); */
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 10px;
    }
  }
  .title-1 {
    /* background: var(--title-01) no-repeat center; */
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: auto;
    height: 70px;
    z-index: 999999;
  }
  .title-2 {
    /* background: var(--title-02) no-repeat center; */
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: auto;
    height: 150px;
    z-index: 999999;
  }
</style>
