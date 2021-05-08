<template>
  <div class="vjjp-wrapper" :class="{ vjjp_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="vjjp-main"
    >
      <SideMenu v-if="menuToggle" @page-slide-off="pageSlideOff" />

      <main :class="pageSlide">
        <!-- Display when Sidemenu is visible -->
        <div v-if="menuToggle" id="overlay" />
        <Header :class="menuToggle ? 'nav-slide-up' : 'nav-slide-down'" @page-slide-on="pageSlideOn" />
        <!-- Main content -->
        <BannerSlider :banner-data="mdData.banner" />
        <section id="games">
          <div class="container-grid separator-top separator-bottom">
            <div class="row">
              <div v-for="(game, gameIndex) in mdData.game" :key="gameIndex">
                <a class="n-link" :href="game.url">
                  <i v-if="game.isHot" class="hot-icon" />
                  <img :src="game.image" :alt="game.title">
                  <p class="n-paragraph-3">{{ game.title }}</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="game-tiles">
          <div class="container">
            <div class="row column-4 game-menu negate-gutter">
              <div v-for="(modal, modalIndex) in mdData.gameTiles.modals" :key="modalIndex" class="pods">
                <div>
                  <div class="pod-bg">
                    <img :src="modal.image" alt="alt img">
                  </div>
                  <div class="pod-content">
                    <h3 class="emphasize">
                      {{ modal.text }}
                    </h3>
                    <img class="pod-feat-img" :src="modal.image" alt="alt img">
                  </div>
                </div>
              </div>
            </div>

            <div class="row column-4 negate-gutter">
              <div v-for="(link, linkIndex) in mdData.gameTiles.links" :key="linkIndex" class="pods loyalty">
                <a :href="link.url">
                  <div class="pod-bg">
                    <img :src="link.bgImage" alt="alt img">
                  </div>

                  <div class="pod-content">
                    <h3 class="emphasize">
                      {{ link.text }}
                    </h3>
                    <p class="n-paragraph-1">
                      {{ link.title }}
                    </p>
                    <span class="emphasize winning">
                      {{ link.winning }}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="cta">
          <img src="@/assets/images/vjjp/footer-verajohn.png" alt="alt img">
          <div class="footer-item">
            <a class="n-link" href="/ja/help">
              <img src="@/assets/images/vjjp/help-icon.png" alt="alt img">
              <span class="n-paragraph">ヘルプ・センター</span>
            </a>
          </div>
          <div class="footer-item">
            <a class="n-link" href="/ja/about/beginnersguidemb">
              <img src="@/assets/images/vjjp/beginner-guide-icon.png" alt="alt img">
              <span class="n-paragraph">ビギナーズガイド</span>
            </a>
          </div>
        </section>

        <section id="seo-contents">
          <div class="container">
            <div class="row negate-gutter">
              <div v-html="mdData.content" />
            </div>
          </div>
        </section>

        <footer id="footer-icon-wrapper">
          <div class="container footer-icons-wrapper">
            <div id="footer-payment-provider">
              <div class="row">
                <p class="n-paragraph">
                  入出金方法
                </p>
              </div>
              <div class="row">
                <div>
                  <img src="@/assets/images/vjjp/visa-icon.png" alt="alt img">
                  <img src="@/assets/images/vjjp/master-icon.png" alt="alt img">
                  <img src="@/assets/images/vjjp/venus-point-icon.png" alt="alt img">
                  <img src="@/assets/images/vjjp/bitcoin-icon.png" alt="alt img">
                  <img src="@/assets/images/vjjp/playsafe-icon.png" alt="alt img">
                  <img src="@/assets/images/vjjp/eco-icon.png" alt="alt img">
                  <img src="@/assets/images/vjjp/i-wallet-icon.png" alt="alt img">
                </div>
              </div>
            </div>

            <div id="footer-providers">
              <div class="row">
                <p class="n-paragraph">
                  ゲーム配信会社
                </p>
              </div>
              <div class="row">
                <div>
                  <img src="@/assets/images/vjjp/e-icon.png" alt="alt img">
                </div>
              </div>
            </div>

            <div id="footer-logo">
              <div class="row">
                <div>
                  <img src="@/assets/images/vjjp/CEG_logo.png" alt="alt img">
                  <img src="@/assets/images/vjjp/20+.svg" alt="alt img">
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
      <FooterFixButtons :class="menuToggle ? 'footer-slide-down' : 'footer-slide-up'" />
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
      mdData: {},
      pageSlide: '',
      menuToggle: false
      // scrollBottom: false
    }
  },
  created () {
    this.$root.$once('vjjp-data', (data) => {
      this.mdData = data
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
    // handleScroll (event) {
    //   if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.scrollHeight) {
    //     this.scrollBottom = true
    //   } else if (document.documentElement.scrollTop + window.innerHeight < document.documentElement.scrollHeight - 200) {
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
