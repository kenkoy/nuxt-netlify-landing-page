<template>
  <div class="enjoy-wrapper" :class="{ seo_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="seo-main"
    >
      <nav v-if="menuToggle" id="menu-slide">
        <div id="menu-slide-header">
          <div>
            <button class="btn" @click="pageSlideOff()">
              x
            </button>
          </div>
          <div>
            <p>メニュー</p>
          </div>
          <div class="icon-wrapper">
            <i class="home-icon" />
          </div>
        </div>
        <div>
          <h1>Menu Coming Soon</h1>
        </div>
      </nav>

      <main :class="pageSlide">
        <div v-if="menuToggle" id="overlay" />
        <header id="header-menu" :class="menuToggle ? 'nav-slide-up' : 'nav-slide-down'">
          <div>
            <button class="btn menu-gamburger" @click="pageSlideOn()">
              <div>
                <span />
                <span />
                <span />
              </div>
              <p>メニュー</p>
            </button>
          </div>

          <div id="header-logo">
            <img class="logo" src="@/assets/images/seo/logo.png">
          </div>

          <div id="header-button">
            <button class="primary login">
              今すぐ登録しよう!
            </button>
          </div>
        </header>

        <BannerSlider :banner-data="mdData.banner_images" />

        <section id="games">
          <div class="container-grid separator">
            <div class="row">
              <div v-for="(games, games_index) in mdData.game_list" :key="games_index">
                <a :href="games.link">
                  <img :src="games.img" :alt="games.text">
                  <p>{{ games.text }}</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="game-tiles">
          <div class="container">
            <div class="row column-4 negate-gutter">
              <div class="pods">
                <h3>ライブカジノ</h3>
                <img src="@/assets/images/seo/dice-icon.png">
              </div>
              <div class="pods">
                <h3>ライブカジノ</h3>
                <img src="@/assets/images/seo/trophy-icon.png">
              </div>
              <div class="pods">
                <h3>ライブカジノ</h3>
                <img src="@/assets/images/seo/card-icon.png">
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row column-4 loyalty negate-gutter">
              <div class="pods">
                <h3>ライブカジノ</h3>
                <p>賞金プール</p>
                <p class="winning">
                  $3,000.00
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="footer-links">
          <img src="@/assets/images/seo/footer-verajohn.png">
          <div class="footer-item">
            <a href="/ja/help">
              ヘルプ・センター
            </a>
          </div>
          <div class="footer-item">
            <a href="/ja/about/beginnersguidemb">
              ビギナーズガイド
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
      </main>

      <aside id="footer-login-register" :class="menuToggle ? 'footer-slide-down' : 'footer-slide-up'">
        <button class="secondary">
          ログイン
        </button>
        <button class="primary">
          今すぐ登録しよう!
        </button>
      </aside>
    </div>
  </div>
</template>

<script>
import BannerSlider from '~/components/Enjoy/BannerSlider.vue'
export default {
  components: {
    BannerSlider
  },
  data () {
    return {
      pageSlide: '',
      menuToggle: false,
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
    this.$root.$once('seo-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('seo-data') // Change to actual page name
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
  }
}
</script>

<style lang="scss">
  .seo_wrapper {
    @import '@/assets/sass/seo/style.scss';
  }
</style>
