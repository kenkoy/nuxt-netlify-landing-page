<template>
  <div>
    <footer v-if="promoLanguageCode === 'ja' && promoCountryCode === 'jp'" :class="landingPageType">
      <div class="container">
        <div class="row">
          <div>
            <div id="footer-icon">
              <a
                aria-label="Responsible Gaming"
                target="_blank"
                :href="`https://www.${landingPageType}.com/about/responsible-gaming`"
                rel="noopener"
              >
                <img src="@/assets/images/marketing/global-footer/20+.svg" alt="alt img">
              </a>

              <a
                aria-label="Gambling Therapy"
                target="_blank"
                href="https://www.gamblingtherapy.org/en"
                rel="noopener"
              >
                <img class="gambling-therapy" src="@/assets/images/marketing/global-footer/icon_gt.svg" alt="alt img">
              </a>

              <a
                aria-label="CEG"
                target="_blank"
                rel="noopener"
                :href="`https://verification.curacao-egaming.com/validateview.aspx?domain=${landingPageType}.com`"
              >
                <img :src="`https://verification.curacao-egaming.com/validate.ashx?domain=${landingPageType}.com`" alt="alt img">
              </a>
            </div>

            <p>
              <a
                aria-label="Responsible Gaming"
                target="blank"
                :href="`https://www.${landingPageType}.com/about/responsible-gaming`"
                rel="noopener"
              >
                ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。
              </a>
            </p>

            <p>当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。</p>
            <p>Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。</p>
          </div>
        </div>
      </div>
    </footer>

    <footer v-else :class="landingPageType">
      <div class="container">
        <div class="row">
          <div id="footer-payment">
            <img v-if="desktop" src="@/assets/images/marketing/global-footer/payment_large_en.svg" alt="vjpromo payment">
            <img v-if="mobile" src="@/assets/images/marketing/global-footer/payment_en.svg" alt="vjpromo payment">
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div>
            <div id="footer-icon" class="second-footer">
              <a
                aria-label="Responsible Gaming"
                target="_blank"
                :href="`https://www.${landingPageType}.com/about/responsible-gaming`"
                rel="noopener"
              >
                <img src="@/assets/images/marketing/global-footer/20+.svg" alt="responsible gaming">
              </a>

              <a
                aria-label="Gambling Therapy"
                target="_blank"
                href="https://www.gamblingtherapy.org/en"
                rel="noopener"
              >
                <img class="gambling-therapy" src="@/assets/images/marketing/global-footer/icon_gt.svg" alt="gambling theraphy">
              </a>

              <a
                aria-label="Malta Gaming Authority"
                target="_blank"
                href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=c0e82570-bf83-4ecc-bda3-89ecb92d5b0e"
                rel="noopener"
              >
                <img src="@/assets/images/marketing/global-footer/icon_mga.svg" alt="malta gambling authority">
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script scoped>
export default {
  name: 'Footer',
  props: {
    promoLanguageCode: {
      type: String,
      required: true
    },
    promoCountryCode: {
      type: String,
      required: true
    },
    landingPageType: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      desktop: true,
      mobile: false
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  },
  mounted () {
    this.myEventHandler()
    window.addEventListener('resize', this.myEventHandler)
  },
  methods: {
    myEventHandler (e) {
      /* code for handling resize */
      if (window.innerWidth <= 992) {
        this.desktop = false
        this.mobile = true
      } else {
        this.desktop = true
        this.mobile = false
      }
    }
  }
}
</script>
