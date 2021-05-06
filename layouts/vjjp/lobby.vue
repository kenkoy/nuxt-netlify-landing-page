<template>
  <div class="vjjp-wrapper" :class="{ vjjp_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="vjjp-main"
    >
      <SideMenu @page-slide-off="pageSlideOff" v-if="menuToggle" />

      <main :class="pageSlide">
        <div v-if="menuToggle" id="overlay" /> <!-- Display when Sidemenu is visible -->
        <Header @page-slide-on="pageSlideOn" :class="menuToggle ? 'nav-slide-up' : 'nav-slide-down'" />

        <!-- Main content -->
        <BannerSlider :banner-data="mdData.banner_images" />
        <section id="games">
          <div class="container-grid separator-top separator-bottom">
            <div class="row">
              <div v-for="(games, games_index) in mdData.game_list" :key="games_index">
                <a class="n-link" :href="games.link">
                  <img :src="games.img" :alt="games.text">
                  <p class="n-paragraph-3">{{ games.text }}</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="game-tiles">
          <div class="container">
            <div class="row column-4 game-menu negate-gutter">
              <div class="pods dice">
                <div>
                  <h3 class="emphasize">ライブカジノ</h3>
                  <img src="@/assets/images/seo/dice-icon.png" alt="alt img">
                </div>
              </div>
              <div class="pods trophy">
                <div>
                  <h3 class="emphasize">ライブカジノ</h3>
                  <img src="@/assets/images/seo/trophy-icon.png" alt="alt img">
                </div>
              </div>
              <div class="pods card">
                <div>
                  <h3 class="emphasize">ライブカジノ</h3>
                  <img src="@/assets/images/seo/card-icon.png" alt="alt img">
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row column-4 negate-gutter">
              <div class="pods loyalty">
                <div>
                  <h3 class="emphasize">ライブカジノ</h3>
                  <p class="n-paragraph-1">賞金プール</p>
                  <p class="emphasize winning">
                    $3,000.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta">
          <img src="@/assets/images/seo/footer-verajohn.png" alt="alt img">
          <div class="footer-item">
            <a class="n-link" href="/ja/help">
              <img src="@/assets/images/seo/help-icon.png" alt="alt img"/>
              <span class="n-paragraph">ヘルプ・センター</span>
            </a>
          </div>
          <div class="footer-item">
            <a class="n-link" href="/ja/about/beginnersguidemb">
              <img src="@/assets/images/seo/beginner-guide-icon.png" alt="alt img"/>
              <span class="n-paragraph">ビギナーズガイド</span>
            </a>
          </div>
        </section>

        <section id="seo-contents">
          <div class="container">
            <div class="row negate-gutter">
              <div v-html="htmlBody" />
            </div>
          </div>
        </section>

        <footer id="footer-icon-wrapper">
          <div class="container footer-icons-wrapper">
            <div id="footer-payment-provider">
              <div class="row">
                <p class="n-paragraph">入出金方法</p>
              </div>
              <div class="row">
                <div>
                  <img src="@/assets/images/seo/visa-icon.png" alt="alt img">
                  <img src="@/assets/images/seo/master-icon.png" alt="alt img">
                  <img src="@/assets/images/seo/venus-point-icon.png" alt="alt img">
                  <img src="@/assets/images/seo/bitcoin-icon.png" alt="alt img">
                  <img src="@/assets/images/seo/playsafe-icon.png" alt="alt img">
                  <img src="@/assets/images/seo/eco-icon.png" alt="alt img">
                  <img src="@/assets/images/seo/i-wallet-icon.png" alt="alt img">
                </div>
              </div>
            </div>

            <div id="footer-providers">
              <div class="row">
                <p class="n-paragraph">ゲーム配信会社</p>
              </div>
              <div class="row">
                <div>
                  <img src="@/assets/images/seo/e-icon.png" alt="alt img">
                </div>
              </div>
            </div>

            <div id="footer-logo">
              <div class="row">
                <div>
                  <img src="@/assets/images/seo/CEG_logo.png" alt="alt img">
                  <img src="@/assets/images/seo/20+.svg" alt="alt img">
                </div>
                <div>
                  <span class="footer-text">当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。<br>
                    Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。</span>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <a class="n-link" href="https://www.play-wise.com/verajohn-jp/">ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。</a>
          </div>
        </footer>
      </main>
      <FooterFixButtons :class="menuToggle ? 'footer-slide-down' : 'footer-slide-up'"/>
    </div>
  </div>
</template>

<script>
import SideMenu from '~/components/Vjjp/SideMenu.vue'
import Header from '~/components/Vjjp/Header.vue'
import BannerSlider from '~/components/Vjjp/BannerSlider.vue'
import FooterFixButtons from '~/components/Vjjp/FooterFixButtons.vue'
export default {
  components: {
    SideMenu,
    Header,
    BannerSlider,
    FooterFixButtons
  },
  data () {
    return {
      pageSlide: '',
      menuToggle: false,
      mdData: {},
      htmlBody: ''
      // scrollBottom: false
    }
  },
  created () {
    this.$root.$once('vjjp-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('vjjp-data')
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    pageSlideOn () {
      this.pageSlide = 'page-slide'
      this.menuToggle = true
      document.body.classList.add('noScroll')
    },
    pageSlideOff () {
      this.pageSlide = ''
      document.body.classList.remove('noScroll')
      setTimeout(() => {
        this.menuToggle = false
      }, 300)
    }
    // THIS IS FOR SHOW / HIDE FOOTER WHEN IT REACHES BOTTOM PAGE
    // handleScroll (event) {
    //   if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.scrollHeight) {
    //     this.scrollBottom = true
    //   } else {
    //     this.scrollBottom = false
    //   }
    // }
  }
}
</script>

<style lang="scss">
  .vjjp_wrapper {
    @import '@/assets/sass/vjjp/style.scss';
  }
</style>
