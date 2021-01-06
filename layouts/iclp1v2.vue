<template>
  <div :class="{ iclp1_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="iclp1-main"
    >
      <section id="hero" :style="cssBackground">
        <div class="container">
          <div class="loginbtn">
            <a rel="noopener" :href="mdData.promo_banner.promo_home_button_redirect_url">
              <i class="material-icons" data-v-7c308f66="">home</i>
              <p class="login-text">ログイン{{ mdData.promo_banner.promo_home_button }}</p>
            </a>
          </div>
          <div>
            <div id="header-text-wrapper">
              <img class="animated fadeIn" alt="alt img" src="@/assets/images/iclp2v2/logo.png">
              <h2>新規プレイヤー特典! 総額$500 ウェルカムキャッシュ</h2>
            </div>
            <div>
              <p v-html="bannerStatement" />
              <button onclick="location.href='#'" type="button">
                <a rel="noopener" :href="mdData.promo_banner.promo_register_button_redirect_url">今すぐ登録{{ mdData.promo_banner.promo_register_button_text }}</a>
              </button>
              <p>
                <a rel="noopener" :href="mdData.promo_banner.promo_smallterm_redirect_url">{{ mdData.promo_banner.promo_smallterm_text_link }}</a>
                {{ mdData.promo_banner.promo_smallterm_text }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="steps">
        <div class="container column-3">
          <div>
            <span>1</span>
            <h2>登録</h2>
            <p>簡単登録でお試しプレイ&amp;無料$10ボーナス獲得!</p>
          </div>
          <div>
            <span>2</span>
            <h2>入金</h2>
            <p>ビットコインで即入金! リアルマネープレイを始めよう!</p>
          </div>
          <div>
            <span>3</span>
            <h2>ボーナス</h2>
            <p>総額$500ウェルカムキャッシュアイテムをゲット!</p>
          </div>
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
        :promo-language-code="mdData.promo_locale.promo_language_code"
        :promo-country-code="mdData.promo_locale.promo_country_code"
        :landing-page-type="'intercasino'"
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
    // USE THE CODE BELOW IF THE DESIGN / TEMPLATE HAVE BANNERS. ELSE, DELETE
    cssBackground () {
      const images = this.mdData.promo_banner.promo_images
      return {
        '--bg-image': `url('${images.promo_bg_desktop}')`,
        '--bg-image-m': `url('${images.promo_bg_mobile}')`,
        '--bg-banner': `url('${images.promo_bg_banner}')`
      }
    }
  },
  created () {
    this.$root.$once('iclp1-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('iclp1-data') // Change to actual page name
  }
}
</script>

<style lang="scss"> // Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .iclp1_wrapper {
    @import '@/assets/sass/base/fonts.css';
    @import '@/assets/sass/iclp1v2/style.scss';
    @import '@/assets/sass/base/style.scss';
  }
</style>
