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
          <div class="row">
            <div class="col">
              <div class="tabs">
                <div v-for="(accordionData, accordionData_index) in mdData.accordion" :key="accordionData_index" class="tab">
                  <input :id="accordionData_index" :type="openMultiAccordion ? 'checkbox' : 'radio'" :name="openMultiAccordion ? '' : 'accordion'">
                  <label class="tab-label" :for="accordionData_index">{{ accordionData.title }}</label>
                  <div class="tab-content">
                    {{ accordionData.description }}
                  </div>
                </div>
              </div>
            </div>
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
export default {
  data () {
    return {
      mdData: {},
      openMultiAccordion: true
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
  }
}
</script>

<style lang="scss">
$midnight: #2c3e50;
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
}
.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $midnight;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: $midnight;
    background: white;
    transition: all .35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}

</style>
