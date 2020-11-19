<template>
  <div>
    <header id="strip-container" class="container-flex h-100" :style="cssHeaderVariables">
      <a id="login-btn" :href="signUpURL" class="login hvr-pulse">
        <div class="animated fadeIn">
          <i class="material-icons">home</i>
          <div class="login-txt">
            <p>{{ signUpText }}</p>
          </div>
        </div>
      </a>
      <div class="container">
        <div class="row row-eq-height">
          <div id="strip" class="col-12 strip">
            <div class="strip-container animated fadeIn" style="margin-top: 222px;">
              <div class="logo animated fadeIn" />
              <div class="title-1 animated fadeIn delay-0s" />
              <div class="title-2 animated tada delay-1s" />
            </div>
            <span class="queenprofile-star sprite" />
            <div>
              <p class="text-center" v-html="bannerStatement">
                <!-- ✦新規プレイヤー限定特典✦
                <br />プレイし続けるほどお得な
                <span class="redmark">総額$500のウェルカムキャッシュ</span>をゲットしよう
                <i>！</i>
                <br />このビギナーズガイドでは、インターカジノをどこよりも詳しく解説しちゃいます★ -->
              </p>
            </div>
            <!-- id="signup-btn" -->
            <a
              :href="registerButtonURL"
              class="button button-lrg"
              style="display:block;margin-top: 0px;"
            >{{ registerButtonText }}</a>
            <!-- show button-->
            <div class="small-terms">
              <a :href="termsURL" class="link-terms-conditions ctac">{{ termsTextLink }}</a>{{ termsText }}
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="detail" class="gb fadebg" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    statements: {
      type: String,
      required: true
    },
    higlightedPhrase: {
      type: String,
      required: false
    },
    registerButtonText: {
      type: String,
      required: true
    },
    registerButtonURL: {
      type: String,
      required: true
    },
    homeButtonText: {
      type: String,
      required: true
    },
    homeButtonURL: {
      type: String,
      required: true
    },
    termsText: {
      type: String,
      required: true
    },
    termsTextLink: {
      type: String,
      required: true
    },
    termsURL: {
      type: String,
      required: true
    },
    signUpText: {
      type: String,
      required: true
    },
    signUpURL: {
      type: String,
      required: true
    },
    images: {
      type: Object,
      required: true
    }
  },
  computed: {
    cssHeaderVariables () {
      return {
        '--bg-image': `url('${this.images.promo_bg_desktop}')`,
        '--bg-image-m': `url('${this.images.promo_bg_mobile}')`,
        '--game-logo': `url('${this.images.promo_game_logo}')`,
        '--title-01': `url('${this.images.promo_banner_image_title_1}')`,
        '--title-02': `url('${this.images.promo_banner_image_title_2}')`
      }
    },
    bannerStatement () {
      let sentences = this.statements.split(/\r?\n/)
        .filter(statement => statement)
        .map((statement) => {
          return statement.slice(-1) === '\\'
            ? statement.substring(0, statement.length - 1)
            : statement
        })
      if (this.higlightedPhrase) {
        const replacement = `<span class="redmark">${this.higlightedPhrase}</span>`
        sentences = sentences.map((sentence) => {
          return sentence.includes(this.higlightedPhrase)
            ? sentence.replace(this.higlightedPhrase, replacement)
            : sentence
        })
      }
      return sentences.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    }
  }
}
</script>

<style scoped>
#strip-container {
  background: linear-gradient(rgba(132, 5, 217, 0.2), rgba(0, 0, 0, 0.6)),
    var(--bg-image) no-repeat top center;
  background-size: cover;
}
@media only screen and (max-width: 575px) {
  #strip-container {
    background: linear-gradient(rgba(132, 5, 217, 0.2), rgba(0, 0, 0, 0.6)),
      var(--bg-image-m) no-repeat top center;
    background-size: cover;
    padding: 10px;
  }
}
/* .game-logo {
  background: url(game-logo.png) no-repeat center;
  background-size: contain;
  width: auto;
  height: 160px;
  z-index: 999999;
} */
.title-1 {
  background: var(--title-01) no-repeat center;
  background-size: contain;
  width: auto;
  height: 70px;
  z-index: 999999;
}
.title-2 {
  background: var(--title-02) no-repeat center;
  background-size: contain;
  width: auto;
  height: 150px;
  z-index: 999999;
}
</style>
