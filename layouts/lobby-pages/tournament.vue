<template>
  <div class="layout-css" :class="{ lobby_pages_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="lobby-pages-main"
    >
      <SideMenu v-if="menuToggle" @page-slide-off="pageSlideOff" />

      <main :class="pageSlide">
        <!-- Display when Sidemenu is visible -->
        <div v-if="menuToggle" id="overlay" />
        <Header :class="menuToggle ? 'nav-slide-up' : 'nav-slide-down'" @page-slide-on="pageSlideOn" />
        <!-- Main content -->
        <section>
          <h1>Tournament</h1>
        </section>

        <footer id="footer-icon-wrapper">
          <div class="container footer-icons-wrapper">
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
import SideMenu from '~/components/Lobby-Pages/SideMenu.vue'
import Header from '~/components/Lobby-Pages/Header.vue'
import FooterFixButtons from '~/components/Lobby-Pages/FooterFixButtons.vue'

export default {
  components: {
    SideMenu,
    Header,
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
    this.$root.$once('lobby-pages-data', (data) => {
      this.mdData = data
    })
  },
  beforeDestroy () {
    this.$root.$off('lobby-pages-data')
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
    @import '@/assets/sass/lobby-pages/style.scss';
  }
</style>
