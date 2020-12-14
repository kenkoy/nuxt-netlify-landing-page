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
            >
              <img src="@/assets/images/footer/icon_age.svg" alt="alt img">
            </a>

            <a
              aria-label="Gambling Theraphy"
              target="_blank"
              href="https://www.gamblingtherapy.org/en"
            >
              <img src="@/assets/images/footer/icon_gt.svg" alt="alt img">
            </a>

            <a
              aria-label="Curacao"
              target="_blank"
              href="#"
            >
              <img src="@/assets/images/footer/icon_curacao.svg" alt="alt img">
            </a>
          </div>

          <p>
            <a
              aria-label="Responsible Gaming"
              target="blank"
              :href="responsibleGamingURL"
            >
              ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。
            </a>
          </p>

          <p>当ウェブサイトは、キュラソー政府の商業登記に登録されている、番号149132のBreckenridge Curacao B.V.（登録住所：Emancipatie Boulevard, Dominico F. “Don” Martina 31, Willemstad, Curaçao）により運営されています。</p>
          <p>Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #5536/JAZに基づく C.I.L Curacao Interavtive Licensing N.V. により付与されたサブライセンスを通して正式な許可を所持しています</p>
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
          <div class="separator" />
          <div id="footer-icon" class="second-footer">
            <a
              aria-label="Responsible Gaming"
              target="_blank"
              :href="responsibleGamingURL"
            >
              <img src="@/assets/images/footer/icon_age.svg" alt="responsible gaming">
            </a>

            <a
              aria-label="Gambling Theraphy"
              target="_blank"
              href="https://www.gamblingtherapy.org/en"
            >
              <img src="@/assets/images/footer/icon_gt.svg" alt="gambling theraphy">
            </a>

            <a
              aria-label="Malta Gaming Authority"
              target="_blank"
              href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=c0e82570-bf83-4ecc-bda3-89ecb92d5b0e"
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
