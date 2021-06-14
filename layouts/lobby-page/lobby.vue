<template>
  <div class="layout-css" :class="{ lobby_pages_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="lobby-page-main vj-theme"
    >
      <SideMenu v-if="menuToggle" @page-slide-off="pageSlideOff" />

      <main :class="pageSlide">
        <!-- Display when Sidemenu is visible -->
        <div v-if="menuToggle" id="overlay" />
        <Header :class="menuToggle ? 'nav-slide-up' : 'nav-slide-down'" @page-slide-on="pageSlideOn" />
        <!-- Main content -->
        <BannerSlider v-if="mdData.banner && mdData.banner.length > 0" :banner-data="mdData.banner" />
        <section id="games">
          <div class="container separator-top separator-bottom">
            <div class="row column-2 negate-gutter">
              <div v-if="mdData.game.gameCategory" class="left-align">
                <p class="emphasize">{{ mdData.game.gameCategory }}</p>
              </div>
              <div v-if="mdData.game.viewAll" class="right-align">
                <p class="view-all">{{ mdData.game.viewAll }}</p>
              </div>
            </div>
            <div class="row">
              <div v-for="(game, gameIndex) in mdData.game.gameList" :key="gameIndex">
                <a class="n-link" :href="game.url">
                  <i v-if="game.isHot" class="hot-icon" />
                  <img :src="game.image" :alt="game.title">
                  <p class="game-name">{{ game.title }}</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="lobby-tiles">
          <div class="container">
            <div class="row negate-gutter">
              <div v-if="mdData.lobbyTiles.lobbyTitle" class="left-align">
                <p class="emphasize">{{ mdData.lobbyTiles.lobbyTitle }}</p>
              </div>
            </div>
            <div class="row game-menu negate-gutter">
              <div v-for="(tile, tileIndex) in mdData.lobbyTiles.lobbyList" :key="tileIndex" class="pods">
                <a :href="tile.link">
                  <div>
                    <div class="pod-content">
                      <h3 class="emphasize">
                        {{ tile.text }}
                      </h3>
                      <img class="pod-feat-img" :src="tile.image" alt="alt img">
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="cta">
          <img src="@/assets/images/lobby-pages/footer-verajohn.png" alt="alt img">
          <div class="footer-item">
            <a class="n-link" href="/ja/help">
              <img src="@/assets/images/lobby-pages/help-icon.png" alt="alt img">
              <span class="n-paragraph">ヘルプ・センター</span>
            </a>
          </div>
          <div class="footer-item">
            <a class="n-link" href="/ja/about/beginnersguidemb">
              <img src="@/assets/images/lobby-pages/beginner-guide-icon.png" alt="alt img">
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
          <div class="container footer-icons">
            <div id="footer-payment-provider">
              <div class="row">
                <p class="footer-title">
                  入出金方法
                </p>
              </div>
              <div class="row">
                <div>
                  <img src="@/assets/images/lobby-pages/visa-icon.png" alt="alt img">
                  <img src="@/assets/images/lobby-pages/master-icon.png" alt="alt img">
                  <img src="@/assets/images/lobby-pages/venus-point-icon.png" alt="alt img">
                  <img src="@/assets/images/lobby-pages/bitcoin-icon.png" alt="alt img">
                  <img src="@/assets/images/lobby-pages/playsafe-icon.png" alt="alt img">
                  <img src="@/assets/images/lobby-pages/eco-icon.png" alt="alt img">
                  <img src="@/assets/images/lobby-pages/i-wallet-icon.png" alt="alt img">
                </div>
              </div>
            </div>

            <div id="footer-providers">
              <div class="row">
                <p class="footer-title">
                  ゲーム配信会社
                </p>
              </div>
              <div class="row">
                <div>
                  <img src="@/assets/images/lobby-pages/e-icon.png" alt="alt img">
                </div>
              </div>
            </div>

            <div id="footer-logo">
              <div class="row">
                <div>
                  <img src="@/assets/images/lobby-pages/CEG_logo.png" alt="alt img">
                  <img src="@/assets/images/lobby-pages/20+.svg" alt="alt img">
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
import SideMenu from '~/components/Lobby-Page/SideMenu.vue'
import Header from '~/components/Lobby-Page/Header.vue'
import BannerSlider from '~/components/Lobby-Page/BannerSlider.vue'
import FooterFixButtons from '~/components/Lobby-Page/FooterFixButtons.vue'

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
    this.$root.$once('lobby-page-data', (data) => {
      if (Object.keys(data).length > 0) {
        this.mdData = data
      }
    })
  },
  beforeDestroy () {
    this.$root.$off('lobby-page-data')
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
    //   } else if (document.documentElement.scrollTop + window.innerHeight < document.documentElement.scrollHeight - document.getElementById('footer-icon-wrapper').offsetHeight) {
    //     this.scrollBottom = false
    //   }
    // }
  }
}
</script>

<style lang="scss">
  .lobby_pages_wrapper {
    @import '@/assets/sass/lobby-page/style.scss';
  }
</style>
