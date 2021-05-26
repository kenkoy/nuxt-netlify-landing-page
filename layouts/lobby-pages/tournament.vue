<template>
  <div class="layout-css">
    <nuxt />
    <div v-if="Object.keys(mdData).length > 0">
      <!-- Main content -->
      <section>
        <div class="container">
          <div class="row">
            <h1>Tournament</h1>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row negate-gutter">
            <Accordion
              :accordion-data="mdData.accordion"
              :open-multi-accordion="true"
            />
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
import Accordion from '~/components/Lobby-Pages/Accordion.vue'

export default {
  components: {
    Accordion
  },
  data () {
    return {
      mdData: {},
      htmlBody: ''
    }
  },
  created () {
    this.$root.$once('lobby-pages-data', (data) => {
      this.mdData = data.yamlData
      this.htmlBody = data.htmlData
    })
  },
  beforeDestroy () {
    this.$root.$off('lobby-pages-data')
  }
}
</script>
