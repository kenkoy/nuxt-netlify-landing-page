<template>
  <div class="layout-css">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="yglp1-main"
    >
      <section id="hero">
        <div class="container">
          <div class="row">
            <div id="hero-text-wrapper">
              <div>
                <div id="login" class="animated">
                  <div class="fadeIn animated">
                    <a href="mdData.promo_banner.promo_login_button_redirect_url">
                      <i class="material-icons">exit_to_app</i>
                      <span>{{ mdData.promo_banner.promo_login_button_text }}</span>
                    </a>
                  </div>
                </div>
                <img class="logo" src="@/assets/images/marketing/yglp1/logo-jp.png" alt="yuugado logo">
                <div>
                  <p>待望の日本円対応!</p>
                  <h1>花魁ドリームで<br>一撃スリルを</h1>
                  <h2>さらに4000円無料ボーナス進呈中</h2>
                </div>
                <button>
                  <a href="https://www.yuugado.com/">今すぐ登録</a>
                </button>
                <img class="game-logo" src="@/assets/images/marketing/yglp1/game-logo.png" alt="yuugado game">
                <small><a href="#">利用規約</a>に同意します。</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="steps">
        <div class="container">
          <div class="animated fadeIn delay-halfs">
            <span class="num">1</span>
            <div>
              <h3>登録</h3>
              <p>業界No.1ベテランスタッフが運営</p>
            </div>
          </div>
          <div class="animated fadeIn delay-1s">
            <span class="num">2</span>
            <div>
              <h3>お試し</h3>
              <p>2,000円分ボーナス進呈中</p>
            </div>
          </div>
          <div class="animated fadeIn delay-1-and-halfs">
            <span class="num">3</span>
            <div>
              <h3>入金</h3>
              <p>最大10万円＋花魁無料スピン50回付</p>
            </div>
          </div>
        </div>
      </section>
      <section id="image-body">
        <div class="container">
          <div class="row">
            <div>
              <img src="@/assets/images/marketing/yglp1/image1.jpeg">
              <img src="@/assets/images/marketing/yglp1/image2.jpeg">
              <button>
                <a href="https://www.yuugado.com/">今すぐ登録</a>
              </button>
              <h3 class="text-center">
                合計10万円のウェルカムボーナスの詳細は<a href="https://www.yuugado.com/promotions/category/1/2875">こちら</a>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section id="payment" class="separator">
        <div class="container">
          <div class="row">
            <svg class="desktop mobile" />
          </div>
        </div>
      </section>
      <section id="terms" class="separator">
        <div class="container">
          <div class="row">
            <div>
              <div v-html="htmlBody" />
              <ul>
                <li>
                  通常の
                  <a href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と
                  <a href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- <Footer
        :promo-language-code="mdData.promo_locale.promo_language_code"
        :promo-country-code="mdData.promo_locale.promo_country_code"
        :landing-page-type="'yuugado'"
      /> -->
      <footer class="yuugado">
        <div class="container">
          <div class="row">
            <div>
              <div id="footer-icon">
                <a
                  aria-label="Responsible Gaming"
                  target="_blank"
                  href="#"
                  rel="noopener"
                >
                  <img class="twenty-plus" src="@/assets/images/marketing/yglp1/icon_age_twenty.svg" alt="alt img">
                </a>

                <a
                  aria-label="Gambling Therapy"
                  target="_blank"
                  href="https://www.gamblingtherapy.org/en"
                  rel="noopener"
                >
                  <img class="gambling-therapy" src="@/assets/images/marketing/global-footer/icon_gt.svg" alt="alt img">
                </a>

                <a
                  aria-label="CEG"
                  target="_blank"
                  rel="noopener"
                  href="#"
                >
                  <img class="curacao-regulator" src="https://verification.curacao-egaming.com/validate.ashx?domain=verajohn.com" alt="alt img">
                </a>
              </div>

              <p>
                <a
                  aria-label="Responsible Gaming"
                  target="blank"
                  href="#"
                  rel="noopener"
                >
                  ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。
                </a>
              </p>

              <p>当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。</p>
              <p>Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
// import Steps from '@/components/Marketing/Steps.vue'
// import Footer from '@/components/Marketing/TheFooter.vue'

export default {
  // components: {
  //   Steps,
  //   Footer
  // },
  data () {
    return {
      mdData: {},
      htmlBody: ''
    }
  },
  head () {
    return {
      link: [
        { href: require('~/assets/sass/marketing/yglp1/style.scss') }
      ]
    }
  },
  // computed: {
  //   cssBackground () {
  //     const images = this.mdData.promo_banner.promo_images
  //     return {
  //       '--bg-image': `url('${images.promo_bg_desktop}')`,
  //       '--bg-image-m': `url('${images.promo_bg_mobile}')`,
  //       '--bg-banner': `url('${images.promo_bg_banner}')`
  //     }
  //   }
  // },
  created () {
    this.$root.$once('yglp1-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('yglp1-data') // Change to actual page name
  }
}
</script>
