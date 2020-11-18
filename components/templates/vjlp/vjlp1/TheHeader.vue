<template>
  <header id="strip-container" class="container-flex h-100" :style="cssBackground">
    <a id="login-btn" :href="loginURL" class="login hvr-pulse">
      <div class="animated fadeIn">
        <i class="material-icons">exit_to_app</i>
        <div class="login-txt">
          <p>{{ loginText }}</p>
        </div>
      </div>
    </a>
    <div class="container">
      <div class="row row-eq-height">
        <div id="strip" class="col-lg-5 strip">
          <div class="strip-container animated fadeIn" style="margin-top: 62.5px;">
            <div class="logo animated fadeIn" />
            <div v-if="titleFirst">
              <h1 v-if="title" v-html="bannerTitle" />
              <h2 v-if="subtitle" v-html="bannerSubtitle" />
            </div>
            <div v-else>
              <h2 v-if="subtitle" v-html="bannerSubtitle" />
              <h1 v-if="title" v-html="bannerTitle" />
            </div>
            <br>
            <!-- <div class="game-logo animated jello delay-2s"></div>
            <h2 class="sub-offer text-center"></h2> -->

            <!-- id="signup-btn" -->
            <a
              :href="signUpURL"
              class="button button-lrg d-block animated pulse infinite signup"
            >{{ signUpText }}</a>
            <!-- <a href="#">
              <div class="co-brand"></div>
            </a> -->
          </div>
          <div class="small-terms banner-terms" v-html="bannerTerms">
            <!-- <a href="#terms" class="link-terms-conditions ctac">{{ termsLinkText }}</a>{{ termsText }} -->
          </div>
        </div>
        <div id="stripblank" class="col-lg-7" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: false
    },
    title_highlighted: {
      type: Array,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    subtitle_highlighted: {
      type: Array,
      required: false
    },
    titleFirst: {
      type: Boolean,
      required: false,
      default: true
    },
    loginText: {
      type: String,
      required: true
    },
    loginURL: {
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
    termsLinkText: {
      type: Array,
      required: false
    },
    termsText: {
      type: String,
      required: true
    },
    images: {
      type: Object,
      required: true
    }
  },
  computed: {
    cssBackground () {
      return {
        '--bg-image': `url('${this.images.promo_bg_desktop}')`,
        '--bg-image-m': `url('${this.images.promo_bg_mobile}')`,
        '--bg-banner': `url('${this.images.promo_game_logo}')`
      }
    },
    bannerTitle () {
      const bannerTitle = this.title.split(/\r?\n/)
        // .filter(title => title)
        .map(title => title.slice(-1) === '\\'
          ? title.substring(0, title.length - 1)
          : title
        )

      let idx = 0
      this.title_highlighted.filter(phrase => phrase)
        .forEach((phrase) => {
          while (bannerTitle.length > idx) {
            if (bannerTitle[idx].includes(phrase)) {
              bannerTitle[idx] = bannerTitle[idx].replace(phrase, `<font color="#ffd966"><b>${phrase}</b></font>`)
              break
            } else {
              idx++
            }
          }
        })

      return bannerTitle.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    },
    bannerSubtitle () {
      const bannerSubTitle = this.subtitle.split(/\r?\n/)
        // .filter(title => title)
        .map(title => title.slice(-1) === '\\'
          ? title.substring(0, title.length - 1)
          : title
        )

      let idx = 0
      this.subtitle_highlighted.filter(phrase => phrase)
        .forEach((phrase) => {
          while (bannerSubTitle.length > idx) {
            if (bannerSubTitle[idx].includes(phrase)) {
              bannerSubTitle[idx] = bannerSubTitle[idx].replace(phrase, `<span class="color-alt-two">${phrase}</span>`)
              break
            } else {
              idx++
            }
          }
        })

      return bannerSubTitle.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    },
    bannerTerms () {
      let termsText = this.termsText
      this.termsLinkText.filter(linkText => linkText)
        .forEach((linkText) => {
          if (this.termsText.includes(linkText)) {
            termsText = termsText.replace(linkText, `<a href="#terms" class="link-terms-conditions ctac">${linkText}</a>`)
          }
        })
      return termsText
    }
  }
}
</script>

<style scoped>
#strip-container {
  background: var(--bg-image) no-repeat center;
  background-size: cover;
}
#stripblank {
  background: none;
}
@media only screen and (max-width: 575px) {
  #strip-container {
    background: var(--bg-image-m) no-repeat center;
    background-size: cover;
  }
}
.game-logo {
  background: var(--game-logo) no-repeat center;
  background-size: contain;
  width: auto;
  height: 150px;
  z-index: 999999;
}
.banner-terms {
  margin-bottom: 2.5rem;
}

@media only screen and (max-width: 280px) {
  .signup { width: 90%; }
}

/* .co-brand {
  background: url("co-branded-logo.png") no-repeat center;
  background-size: contain;
  width: 100%;
  height: 100px;
} */

/* Logo Fix */
@media only screen and (max-height: 750px) {
  #strip-container .logo {
    height: 150px !important;
    margin-bottom: 20px;
    margin-top: -10px;
  }
}
</style>
