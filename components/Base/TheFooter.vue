<template>
  <div>
    <footer v-if="promoLanguageCode === 'ja' && promoCountryCode === 'jp'" :class="landingPageType">
      <div class="container">
        <div>
          <div id="footer-icon">
            <a
              aria-label="Responsible Gaming"
              target="_blank"
              :href="responsibleGamingURL"
              rel="noopener"
            >
              <img src="@/assets/images/footer/icon_age_twenty.svg" alt="alt img">
            </a>

            <a
              aria-label="Gambling Theraphy"
              target="_blank"
              href="https://www.gamblingtherapy.org/en"
              rel="noopener"
            >
              <img src="@/assets/images/footer/icon_gt.svg" alt="alt img">
            </a>

            <a
              aria-label="Curacao"
              target="_blank"
              href="#"
            >
              <img src="@/assets/images/footer/CEG_logo.png" alt="alt img">
            </a>
          </div>

          <p>
            <a
              aria-label="Responsible Gaming"
              target="blank"
              :href="responsibleGamingURL"
              rel="noopener"
            >
              ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。
            </a>
          </p>

          <p>当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。</p>
          <p>Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。</p>
        </div>
      </div>
    </footer>

    <footer v-else :class="landingPageType">
      <div class="container">
        <div id="footer-payment">
          <img v-if="desktop" src="@/assets/images/footer/payment_large_en.svg" alt="vjpromo payment">
          <img v-if="mobile" src="@/assets/images/footer/payment_en.svg" alt="vjpromo payment">
        </div>
      </div>

      <div class="container">
        <div>
          <div id="footer-icon" class="second-footer">
            <a
              aria-label="Responsible Gaming"
              target="_blank"
              :href="responsibleGamingURL"
              rel="noopener"
            >
              <img src="@/assets/images/footer/icon_age_twenty.svg" alt="responsible gaming">
            </a>

            <a
              aria-label="Gambling Theraphy"
              target="_blank"
              href="https://www.gamblingtherapy.org/en"
              rel="noopener"
            >
              <img src="@/assets/images/footer/icon_gt.svg" alt="gambling theraphy">
            </a>

            <a
              aria-label="Malta Gaming Authority"
              target="_blank"
              href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=c0e82570-bf83-4ecc-bda3-89ecb92d5b0e"
              rel="noopener"
            >
              <img src="@/assets/images/footer/icon_mga.svg" alt="malta gambling authority">
            </a>
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
  computed: {
    responsibleGamingURL () {
      let returnURL = ''
      switch (this.landingPageType) {
        case 'verajohn':
          returnURL = 'https://www.verajohn.com/about/responsible-gaming'
          break
        case 'intercasino':
          returnURL = 'https://www.intercasino.com/about/responsible-gaming'
          break
        default:
          returnURL = '#'
          break
      }
      return returnURL
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
