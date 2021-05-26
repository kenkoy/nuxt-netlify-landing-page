<template>
  <div class="layout-css">
    <nuxt />
    <div v-if="Object.keys(mdData).length > 0">
      <!-- Main content -->
      <BannerSlider :banner-data="mdData.banner" />
      <section id="games">
        <div class="container separator-top separator-bottom">
          <div class="row">
            <div v-for="(game, gameIndex) in mdData.game" :key="gameIndex">
              <a class="n-link" :href="game.url">
                <i v-if="game.isHot" class="hot-icon" />
                <img :src="game.image" :alt="game.title">
                <p class="game-name">{{ game.title }}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="game-tiles">
        <div class="container">
          <div class="row column-4 game-menu negate-gutter">
            <div v-for="(modal, modalIndex) in mdData.game_tiles.modals" :key="modalIndex" class="pods">
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
            <div v-for="(link, linkIndex) in mdData.game_tiles.links" :key="linkIndex" class="pods loyalty">
              <a :href="link.url">
                <div class="pod-bg">
                  <img :src="link.bg_image" alt="alt img">
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
    </div>
  </div>
</template>

<script>
import BannerSlider from '~/components/Lobby-Pages/BannerSlider.vue'

export default {
  components: {
    BannerSlider
  },
  data () {
    return {
      mdData: {},
      htmlBody: ''
    }
  },
  async fetch () {
    await this.$root.$once('lobby-pages-data', (data) => {
      this.mdData = data
    })
  },
  beforeDestroy () {
    this.$root.$off('lobby-pages-data')
  }
}
</script>
