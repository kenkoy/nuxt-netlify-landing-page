<template>
  <div class="layout-css">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="lobby-page-main"
      :class="`${shortBrand}-theme`"
    >
      <main>
        <Header :brand="mdData.brand" />
        <!-- Main content -->
        <BannerSlider v-if="mdData.banner && mdData.banner.length > 0" :banner-data="mdData.banner" />
        <section id="games">
          <div class="container separator-top separator-bottom">
            <div class="row negate-gutter">
              <div v-if="gameData && gameData.gameIconsTitle" class="left-align">
                <p class="emphasize">
                  {{ gameData.gameIconsTitle }}
                </p>
              </div>
              <div v-if="gameData && gameData.allGamesTitle && gameData.allGamesRedirectUrl" class="right-align">
                <a class="n-link" :href="gameData.allGamesRedirectUrl">
                  <p class="view-all">{{ gameData.allGamesTitle }}</p>
                </a>
              </div>
            </div>
            <div v-if="gameData && gameData.gameList" class="row game-list">
              <div v-for="(game, gameIndex) in gameData.gameList" :key="gameIndex">
                <a class="n-link" :href="game.url">
                  <i v-if="game.isHot || false" class="hot-icon" />
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
              <div v-if="lobbyTilesData && lobbyTilesData.lobbyTilesTitle" class="left-align">
                <p class="emphasize">
                  {{ lobbyTilesData.lobbyTilesTitle }}
                </p>
              </div>
            </div>
            <div v-if="lobbyTilesData && lobbyTilesData.lobbyList" class="row game-menu negate-gutter">
              <div v-for="(tile, tileIndex) in lobbyTilesData.lobbyList" :key="tileIndex" class="pods">
                <a :href="tile.link">
                  <div>
                    <div class="pod-content">
                      <h3 class="emphasize">
                        {{ tile.title }}
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
          <img v-if="mdData.brand === 'verajohn'" src="@/assets/images/lobby-page/verajohn/footer-verajohn.png" alt="alt img">
          <div class="footer-item">
            <a class="n-link" href="/ja/help">
              <img src="@/assets/images/lobby-page/verajohn/help-icon.png" alt="alt img">
              <span class="n-paragraph">ヘルプ・センター</span>
            </a>
          </div>
          <div class="footer-item">
            <a class="n-link" href="/ja/about/beginnersguidemb">
              <img src="@/assets/images/lobby-page/verajohn/beginner-guide-icon.png" alt="alt img">
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
                  <img
                    v-for="(provider, index) in paymentProvidersJP"
                    :key="index"
                    :src="require(`@/assets/images/lobby-page/${mdData.brand}/${provider}`)"
                    alt="alt img"
                  >
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
                  <img
                    v-for="(provider, index) in gameProvidersJP"
                    :key="index"
                    :src="require(`@/assets/images/lobby-page/${mdData.brand}/${provider}`)"
                    alt="alt img"
                  >
                </div>
              </div>
            </div>

            <div id="footer-logo">
              <div class="row">
                <div>
                  <a
                    aria-label="CEG"
                    target="_blank"
                    rel="noopener"
                    :href="`https://verification.curacao-egaming.com/validateview.aspx?domain=${mdData.brand}.com`"
                  >
                    <img :src="`https://verification.curacao-egaming.com/validate.ashx?domain=${mdData.brand}.com`" alt="alt img">
                  </a>
                  <img
                    v-for="(regulatory, index) in regulatoryLogosJP"
                    :key="index"
                    :src="require(`@/assets/images/lobby-page/${mdData.brand}/${regulatory}`)"
                    alt="alt img"
                  >
                </div>
                <div>
                  <span class="footer-text">当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。<br>
                    Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。</span>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <a class="n-link" :href="'https://www.play-wise.com/'+ mdData.brand +'-jp/'">ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。</a>
          </div>
        </footer>
      </main>
      <FooterFixButtons :brand="mdData.brand" />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Lobby-Page/Header.vue'
import BannerSlider from '~/components/Lobby-Page/BannerSlider.vue'
import FooterFixButtons from '~/components/Lobby-Page/FooterFixButtons.vue'

export default {
  components: {
    Header,
    BannerSlider,
    FooterFixButtons
  },
  data () {
    return {
      paymentProvidersEU: ['s-icon.png', 'ecopayz-icon.png', 'neteller-icon.png', 'playsafe-icon.png'],
      regulatoryLogosEU: ['mga-icon.png', 'lock-icon.png', '20+.svg', 'gamcare-icon.png', 'hands-icon.png'],
      gameProvidersEU: [
        'plaingaming-icon.png', 'netent-icon.png', 'igt-icon.png', 'microgaming-icon.png',
        'playgo-icon.png', 'betsoft-icon.png', 'ggdrasil-icon.png', 't-icon.png', 'gs-icon.png',
        'leander-icon.png', 'evolutiongaming-icon.png', 'quickspin-icon.png'
      ],
      paymentProvidersJP: ['master-icon.png', 'venus-point.png', 'bitcoin-icon.png', 'playsafe-icon.png', 'eco-icon.png', 'i-wallet-icon.png'],
      regulatoryLogosJP: ['20+.svg'],
      gameProvidersJP: ['e-icon.png'],
      mdData: {},
      shortBrand: '',
      gameData: {},
      lobbyTilesData: {}
    }
  },
  head () {
    const headData = {
      htmlAttrs: { lang: 'ja' },
      bodyAttrs: { id: 'ja-jp' },
      link: [{ href: require('~/assets/sass/lobby-page/style.scss') }]
    }

    if (this.mdData.brand) {
      headData.link.push(...[
        { href: require('~/assets/sass/lobby-page/' + this.mdData.brand + '_jp_main.min.css') },
        { hid: 'shortcut icon', rel: 'shortcut icon', href: '/marketing/' + this.shortBrand + '-favicon.ico', type: 'image/x-icon' }
      ])
    }
    return headData
  },
  created () {
    this.$root.$once('lobby-page-data', (data) => {
      if (Object.keys(data).length > 0) {
        this.mdData = data
        this.gameData = data.game
        this.lobbyTilesData = data.lobbyTiles
        switch (this.mdData.brand) {
          case 'verajohn': this.shortBrand = 'vj'; break
          case 'intercasino': this.shortBrand = 'ic'; break
        }
      }
    })
  },
  beforeDestroy () {
    this.$root.$off('lobby-page-data')
  }
}
</script>
