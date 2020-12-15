<template>
  <div :class="{ iclp2_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="iclp2-main"
    >
      <section id ="hero">
        <div class="container">
          <div class="loginbtn">
            <i class="material-icons" data-v-7c308f66="">home</i>
            <p class="login-text">ホーム</p>
          </div>
          <div>
            <div>
              <img src="@/assets/images/iclp2v2/logo.png">
              <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-title-01.png">
              <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-title-02.png">
            </div>
            <div>
              <p>✦新規プレイヤー限定特典✦</p>
              <p>プレイし続けるほどお得な<span>総額$500のウェルカムキャッシュ</span>をゲットしよう！このビギナーズガイドでは、インターカジノをどこよりも詳しく解説しちゃいます★</p>
              <button onclick="location.href='#'" type="button">今すぐ登録</button>
              <p><a href="#">利用規約</a>に同意します。</p>
            </div>
          </div>
        </div>
      </section>
      <section id="detail">
        <div class="container">
          <div>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-welcome-title.png"/>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-500WC-stamp.png"/>
            <p>リアルマネープレイが追加キャッシュに変わる!
              プレイを続けながら、 総額$500キャッシュを獲得しましょう。</p>
          </div>
        </div>
        <div class="container column-2">
          <div>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-welcome-graph1.png"/>
          </div>
          <div>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-welcome-graph2.png"/>
          </div>
        </div>
        <div class="container">
          <div>
            <p>ボーナスやカジノ最新情報をはじめ、
            テーブルゲーム・スロット界のトップに君臨するクイーンが
            選んだ 一押しゲームをいち早くお届けいたします♠</p>
          </div>
        </div>
        <div id="testimonials">
          <div class="container">
            <div class="testi">
              <h3>初めまして、ごきげんよう!</h3>
              <p>インターカジノではスリル満点の各種ゲームやイベントを毎月ご用意しているわ。勝ちたい方、長くじっくりプレイをしたい方にぴったりね。
                私たちと一緒に、勝負してみない?</p>
            </div>
            <div class="feature-img">
              <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-red-icon.png"/>
            </div>
          </div>
          <div class="container">
            <div class="feature-img">
              <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-black-icon.png"/>
            </div>
            <div class="testi">
              <h3>チャオ! クロエだよ★</h3>
              <p>みんなも「なんとかなる!」精神で思いっきり勝ちを目指すよー!
                クロエについて来れる人～？お先にカジノで待ってるね!</p>
            </div>
          </div>
        </div>
      </section>
      <section id="golden-separation">
        <div class="container">
          <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-title-topgame1.png"/>
        </div>
      </section>
      <section id="games">
        <div class="container game-first-section">
          <div>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-title-topgame2.png"/>
          </div>
        </div>
        <div class="container game-second-section column-2">
          <div>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-topgame-livecasino.png"/>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-topgame-tablegame.png"/>
          </div>
          <div>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-topgame-slot.png"/>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-topgame-jackpot.png"/>
          </div>
        </div>
        <div class="container game-third-section column-2">
          <div>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-topgame-CS.png"/>
          </div>
          <div>
            <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-topgame-MOBILE.png"/>
          </div>
        </div>
      </section>
      <section id="#golden-separation"></section>
      <section id="">
        <div class="container">
          <img src="@/assets/images/iclp2v2/319-bic-lan-jp-pro-beginnersguide-0620-Loyalty1.png">
          <h3>レベルが上がるとカジノ内での <span>地位向上</span> !</h3>
          <p><span>レベル7の最高ランク</span>、 <em>インター大公</em>ではあの●●アイテムが出現 !?</p>
          <img src="">
          <img src="">
        </div>
      </section>
      <section id="payment">
        <div class="container">
          <img class="desktop" src="@/assets/images/iclp2v2/payment_large_jp.svg">
          <img class="mobile" src="@/assets/images/iclp2v2/payment_jp.svg">
        </div>
      </section>
      <section id="terms">
        <div class="container">
          <div v-html="htmlBody" />
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
    // USE THE CODE BELOW IF THE DESIGN / TEMPLATE HAVE BANNERS. ELSE, DELETE
    // cssBackground () {
    //   const images = this.mdData.promo_banner.promo_images
    //   return {
    //     '--bg-image': `url('${images.promo_bg_desktop}')`,
    //     '--bg-image-m': `url('${images.promo_bg_mobile}')`,
    //     '--bg-banner': `url('${images.promo_bg_banner}')`
    //   }
    // }
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
