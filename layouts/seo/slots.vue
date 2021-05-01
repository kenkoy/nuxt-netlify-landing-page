<template>
  <div class="enjoy-wrapper" :class="{ seo_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="seo-main"
    >
      <nav id="menu-slide" v-if="menuToggle">
        <div id="menu-slide-header">
          <div>
            <button class="btn" @click="pageSlideOff()">x</button>
          </div>
          <div>
            <p>メニュー</p>
          </div>
          <div class="icon-wrapper">
            <i class="home-icon"></i>
          </div>
        </div>
        <div>
          <h1>Menu Coming Soon</h1>
        </div>
      </nav>

      <main :class="pageSlide">
        <div id="overlay" v-if="menuToggle"></div>
        <header :class="menuToggle ? 'nav-slide-up' : 'nav-slide-down'" id="header-menu">
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
            <img class="logo" src="@/assets/images/seo/logo.png"/>
          </div>

          <div id="header-button">
            <button class="primary login">
              今すぐ登録しよう!
            </button>
          </div>
        </header>

        <section id="games">
          <div class="container-grid separator">
            <div class="row">
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5e6b251e5292e4956.png?qsbeem&607d&6073" />
                <p>Dreams of Gold</p>
              </div>
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5be43f82cbe050.png?qsbeem&607d&6073" />
                <p>Hawaiian Dream </p>
              </div>
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5d1b0b9a4524e0.png?qsbeem&607d&6073" />
                <p>Battle Dwarf</p>
              </div>
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5d4a8e8a09d5e0.png?qsbeem&607d&6073" />
                <p>Yokozuna Clash</p>
              </div>
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5e254059a8b020.png?qsbeem&607d&6073" />
                <p>Piggy Riches Megaways</p>
              </div>
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5e254059a8b020.png?qsbeem&607d&6073" />
                <p>Drago - Jewels of Fortune</p>
              </div>
            </div>
          </div>
        </section>

        <section id="game-tiles">
          <div class="container">
            <div class="row column-4 negate-gutter">
              <div class="pods">
                <p>ライブカジノ</p>
              </div>
              <div class="pods">
                <p>ライブカジノ</p>
              </div>
              <div class="pods">
                <p>ライブカジノ</p>
              </div>
              <div class="pods">
                <p>ライブカジノ</p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row column-4 loyalty negate-gutter">
              <div class="pods">
                <p>ライブカジノ</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside id="footer-login-register" :class="menuToggle ? 'footer-slide-down' : 'footer-slide-up'">
        <button class="secondary">ログイン</button>
        <button class="primary">今すぐ登録しよう!</button>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
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
    },
    pageSlideOff () {
      this.pageSlide = ''
      setTimeout(() => {
        this.menuToggle = false
      }, 300)
    }
  }
}
</script>

<style lang="scss"> // Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .seo_wrapper {
    @import '@/assets/sass/seo/style.scss';
  }
</style>
