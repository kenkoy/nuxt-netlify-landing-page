<template>
  <div>
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
    >
      <header
        id="strip-container"
        class="container-flex h-100"
        :style="{ backgroundImage: `url('${bgImage}')` }"
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
                  :style="{ backgroundImage: `url('${mdData.promo_banner.promo_images.promo_banner_image_title_1}')` }"
                />
                <div
                  class="title-2 animated tada delay-1s"
                  :style="{ backgroundImage: 'url(' + mdData.promo_banner.promo_images.promo_banner_image_title_2 + ')' }"
                />
              </div>
              <span class="queenprofile-star sprite" />
              <div>
                <p
                  class="text-center parse"
                  v-html="statementsParser(
                    mdData.promo_banner.promo_banner_statement,
                    mdData.promo_banner.promo_banner_highlighted_phrase,
                    'redmark')"
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
      <!-- welcome -->
      <div id="detail" class="gb fadebg-2">
        <section class="container-flex bg-alt steps animated fadeIn fadebg-2">
          <div class="container text-center">
            <img
              v-lazy-load
              style="max-width: 100%;"
              :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-welcome-title.png')"
              alt=""
            >
            <br>
            <img
              v-lazy-load
              style="max-width: 100%;"
              :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-500WC-stamp.png')"
              alt=""
            >
            <br>
            <div>
              <p
                class="text-center parse"
                v-html="statementsParser(
                  mdData.welcome_section.welcome_first_statement,
                  mdData.welcome_section.welcome_first_statement_highlighted_phrase,
                  'redmark')"
              />
            </div>
            <div class="row" style="margin: 25px 0px 0px;">
              <div class="col-12 animated fadeIn delay-0.5s text-center">
                <div class="row">
                  <div class="col-lg-2 d-none d-md-block" />
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <img
                      v-lazy-load
                      style="max-width: 100%;"
                      :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-welcome-graph1.png')"
                      alt=""
                    >
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <img
                      v-lazy-load
                      style="max-width: 100%;"
                      :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-welcome-graph2.png')"
                      alt=""
                    >
                  </div>
                  <div class="col-lg-2 d-none d-md-block" />
                </div>
              </div>
            </div>
            <span class="queenprofile-star sprite" />
            <div class="row" style="margin: 25px 0px 0px;">
              <div class="col-12 animated fadeIn delay-0.5s text-center">
                <div>
                  <p class="text-center parse" v-html="statementsParser(mdData.welcome_section.welcome_second_statement, null, null)" />
                </div>
                <!--destop-->
                <div class="d-none d-md-block">
                  <div class="row">
                    <div class="col-lg-2 d-none d-md-block" />
                    <div class="col-lg-7 col-md-9 col-sm-9">
                      <p class="speech-bubble-r">
                        <font color="#e10057">
                          <b>初めまして、ごきげんよう!</b>
                          <br>
                        </font> インターカジノではスリル満点の各種ゲームやイベントを毎月ご用意しているわ。勝ちたい方、長くじっくりプレイをしたい方にぴったりね。
                        <br>私たちと一緒に、勝負してみない?
                      </p>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-3">
                      <img
                        v-lazy-load
                        style="max-width: 100%;"
                        :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-red-icon.png')"
                        alt=""
                      >
                    </div>
                    <div class="col-lg-1 d-none d-md-block" />
                  </div>
                  <div class="row">
                    <div class="col-lg-1 d-none d-md-block" />
                    <div class="col-lg-2 col-md-3 col-sm-3">
                      <img
                        v-lazy-load
                        style="max-width: 100%;"
                        :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-black-icon.png')"
                        alt=""
                      >
                    </div>
                    <div class="col-lg-7 col-md-9 col-sm-9">
                      <p class="speech-bubble-c">
                        <font color="#a184d6">
                          <b style>チャオ! クロエだよ★</b>
                          <br>
                        </font> みんなも「なんとかなる!」精神で思いっきり勝ちを目指すよー!
                        <br>クロエについて来れる人～？お先にカジノで待ってるね!
                      </p>
                    </div>
                    <div class="col-lg-2 d-none d-md-block" />
                  </div>
                </div>
                <!--mobile-->
                <div class="row d-block d-sm-none">
                  <div class="col-sm-12">
                    <p class="speech-bubble-r-d">
                      <font color="#e10057">
                        <b>初めまして、ごきげんよう!</b>
                        <br>
                      </font>
                      <span class="parse" v-html="statementsParser(mdData.welcome_section.welcome_rouge_speech_bubble, null, null)" />
                    </p>
                  </div>
                  <div class="col-sm-12">
                    <img
                      v-lazy-load
                      style="max-width: 100%;"
                      :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-red-icon.png')"
                      alt=""
                    >
                  </div>
                </div>
                <div class="row d-block d-sm-none">
                  <div class="col-sm-12">
                    <p class="speech-bubble-c-d">
                      <font color="#a184d6">
                        <b style>チャオ! クロエだよ★</b>
                        <br>
                      </font>
                      <span class="parse" v-html="statementsParser(mdData.welcome_section.welcome_chloe_speech_bubble, null, null)" />
                    </p>
                  </div>
                  <div class="col-sm-12">
                    <img
                      v-lazy-load
                      style="max-width: 100%;"
                      :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-black-icon.png')"
                      alt=""
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="detail" class="gb goldenbg">
        <section class="container-flex bg-alt steps animated fadeIn goldenbg">
          <div class="container">
            <div class="row">
              <div class="col-12 animated fadeIn delay-0s text-center">
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-title-topgame1.png')"
                  alt=""
                >
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="detail" class="gb blackbg">
        <section class="container-flex bg-alt steps animated fadeIn">
          <div class="container">
            <div class="row">
              <div class="col-12 animated fadeIn delay-0.5s text-center">
                <!-- title -->
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-title-topgame2.png')"
                  alt=""
                >
                <!-- game cat -->
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <img v-lazy-load style="max-width: 100%;" :src="mdData.top_game_section.top_game_game1" alt="">
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <img v-lazy-load style="max-width: 100%;" :src="mdData.top_game_section.top_game_game2" alt="">
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <img v-lazy-load style="max-width: 100%;" :src="mdData.top_game_section.top_game_game3" alt="">
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <img v-lazy-load style="max-width: 100%;" :src="mdData.top_game_section.top_game_game4" alt="">
                  </div>
                </div>

                <div class="row" style="margin: 25px 0px 0px;">
                  <div class="col-12 animated fadeIn delay-0.5s text-center">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <img v-lazy-load style="max-width: 100%;" :src="mdData.top_game_section.top_game_gamesInfo1" alt="">
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <img v-lazy-load style="max-width: 100%;" :src="mdData.top_game_section.top_game_gamesInfo2" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="detail" class="gb goldenbg" />
      <div id="detail" class="gb blackbg">
        <section class="container-flex bg-alt steps animated fadeIn">
          <div class="container">
            <div class="row">
              <div class="col-12 animated fadeIn delay-0.5s text-center">
                <!-- title -->
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-Loyalty1.png')"
                  alt=""
                >
                <!-- info -->
                <h3 class="text-center">
                  <font color="#ffffff">
                    レベルが上がるとカジノ内での
                  </font>
                  <font color="#ff0375">
                    <b>地位向上</b>
                  </font>
                  <font color="#ffffff">
                    <i>!</i>
                  </font>
                </h3>
                <p class="text-center">
                  <font color="#ff0375">
                    <b>レベル7の最高ランク</b>
                  </font>、
                  <span class="redmark">インター大公</span>ではあの●●アイテムが出現
                  <i>!?</i>
                </p>
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-Loyalty2.png')"
                  alt=""
                >
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-Loyalty3.png')"
                  alt=""
                >
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="detail" class="gb fadebg">
        <section class="container-flex bg-alt steps animated fadeIn fadebg">
          <div class="container">
            <div class="row">
              <div class="col-12 animated fadeIn delay-0.5s text-center">
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-safe-title.png')"
                  alt=""
                >
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="detail" class="gb blackbg">
        <section class="container-flex bg-alt steps animated fadeIn">
          <div class="container">
            <div class="row">
              <div class="col-12 animated fadeIn delay-0.5s text-center">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4 nopadding" style="margin: 10px 0px 0px;">
                    <img
                      v-lazy-load
                      style="max-width: 100%;"
                      :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-safe-fair.png')"
                      alt=""
                    >
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 nopadding" style="margin: 10px 0px 0px;">
                    <img
                      v-lazy-load
                      style="max-width: 100%;"
                      :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-safe-visa.png')"
                      alt=""
                    >
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 nopadding" style="margin: 10px 0px 0px;">
                    <img
                      v-lazy-load
                      style="max-width: 100%;"
                      :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-safe-wa.png')"
                      alt=""
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="detail" class="gb fadebg" />
      <div id="detail" class="gb blackbg">
        <section class="container-flex bg-alt steps animated fadeIn historybg">
          <div class="container">
            <div class="row">
              <div class="col-12 animated fadeIn delay-0.5s text-center">
                <div class="d-none d-md-block">
                  <img
                    v-lazy-load
                    style="max-width: 100%;"
                    :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-History1.png')"
                    alt=""
                  >
                </div>
                <div class="d-block d-md-none">
                  <img
                    v-lazy-load
                    style="max-width: 100%;"
                    :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-History2.png')"
                    alt=""
                  >
                </div>
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-queenprofile-title.png')"
                  alt=""
                >
                <span class="queenprofile-star sprite" />
                <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12" style="margin: 10px 0px 0px;">
                    <p class="text-center">
                      <span class="queenprofile-redtag sprite" />
                      <span class="queenprofile-star sprite" />
                      <span
                        class="parse"
                        v-html="statementsParser(mdData.history_section.history_rouge_statement,mdData.history_section.history_rouge_highlighted_phrase, 'redmark')"
                      />
                    </p>
                    <img
                      v-lazy-load
                      style="max-width: 100%;"
                      :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-Rouge.png')"
                      alt=""
                    >
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12" style="margin: 10px 0px 0px;">
                    <p class="text-center">
                      <span class="queenprofile-blacktag sprite" />
                      <span class="queenprofile-star sprite" />
                      <span
                        class="parse"
                        v-html="statementsParser(mdData.history_section.history_chloe_statement,mdData.history_section.history_chloe_highlighted_phrase, 'redmark')"
                      />
                    </p>
                    <img
                      v-lazy-load
                      style="max-width: 100%;"
                      :src="require('~/assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-Chole.png')"
                      alt=""
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            id="signup-btn"
            :href="mdData.history_section.history_register_button_redirect_url"
            class="button button-lrg"
            style="display:block;font-family:sans-serif !important;"
          >{{ mdData.history_section.history_register_button_text }}</a>
        </section>
      </div>
      <div id="detail" class="gb goldenbg" />
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
import ThePayment from '@/components/templates/ThePayment.vue'
import TheBody from '@/components/templates/TheBody.vue'
import TheFooter from '@/components/templates/TheFooter.vue'

export default {
  components: {
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
      const images = this.mdData.promo_banner.promo_images
      this.bgImage = (window.innerWidth < 576 && window.innerWidth >= 320)
        ? `${images.promo_bg_mobile}`
        : `${images.promo_bg_desktop}`
    },
    statementsParser (statements, highLigtedPhrase, classStyle) {
      return statements.split(/\r?\n/)
        .filter(statement => statement)
        .map((statement) => {
          return statement.slice(-1) === '\\'
            ? statement.substring(0, statement.length - 1)
            : statement
        })
        .map((statement) => {
          if (highLigtedPhrase && classStyle) {
            const replacement = `<span class="${classStyle}">${highLigtedPhrase}</span>`
            return statement.includes(highLigtedPhrase)
              ? statement.replace(highLigtedPhrase, replacement)
              : statement
          }
          return statement
        })
        .reduce((oldVal, newVal) => {
          return oldVal + '<br />' + newVal
        })
    }
  }
}
</script>

<style scoped>
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
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media only screen and (max-width: 575px) {
    #strip-container {
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 10px;
    }
  }
  .title-1 {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: auto;
    height: 70px;
    z-index: 999999;
  }
  .title-2 {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: auto;
    height: 150px;
    z-index: 999999;
  }
  .historybg {
    background-image: url('~assets/images/iclp2/319-bic-lan-jp-pro-beginnersguide-0620-history-bg.jpg');
    background-repeat: repeat;
  }
</style>
