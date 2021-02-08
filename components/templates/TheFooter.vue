<template>
  <footer
    v-if="promo_language_code === 'ja' && promo_country_code === 'jp'"
    id="footer"
    class="animated fadeIn"
  >
    <div class="container-fluid pp" style="border-top: 0px;">
      <div class="row">
        <div class="col-12" />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="icons text-center">
          <div class="icon">
            <a
              :href="responsibleGamingURL"
              target="blank"
              aria-label="Responsible Gaming"
            >
              <div class="age" />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.gamstop.co.uk"
              target="blank"
              aria-label="GamStop"
            >
              <div class="gamstop" />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.begambleaware.org"
              target="blank"
              aria-label="Be Gamble Aware"
            >
              <div class="bga" />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.gamblingtherapy.org/en"
              target="blank"
              aria-label="Gambling Theraphy"
            >
              <div class="gt" />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39408"
              target="blank"
              aria-label="UK Gambling Commission"
            >
              <div class="ukgc" />
            </a>
          </div>
          <div class="icon">
            <a
              :href="landing_page_type === 'verajohn' ? 'https://validator.curacao-egaming.com/validate?domain=www.verajohn.com&seal_id=cc15cb374804a763a5f82ff0a72fd6b436659d0061b3201e86431fa8afff305e39a7bbbadf89ae9274d2e9ee4bd923c3&stamp=ae85a35fb4a6c5816b8b9f17e5b6be96' : 'https://validator.curacao-egaming.com/validate?domain=www.intercasino.com&seal_id=141a575e2e4b5593af3dc1b19e2517deaa0ed9a17b9f809f1ffd32fa97098f83e664f6df6801db35fd76f6bef7f63663&stamp=ae85a35fb4a6c5816b8b9f17e5b6be96'"
              target="blank" aria-label="Curacao">
              <div class="curacao" />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.gamcare.org.uk"
              target="blank"
              aria-label="GamCare"
            >
              <div class="gamcare" />
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="footer-content col-12 text-center">
          <p class="text-center">
            <a
              :href="responsibleGamingURL"
              target="blank"
              aria-label="Responsible Gaming"
            >ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。</a>
          </p>
          <p style="font-size:14px; text-align:center">
            当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。
            <br>Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。
          </p>
        </div>
      </div>
    </div>
  </footer>

  <footer v-else id="footer" class="animated fadeIn">
    <div class="container-fluid pp">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="payment-providers" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="icons text-center">
          <div class="icon">
            <a
              :href="responsibleGamingURL"
              target="blank"
              aria-label="Responsible Gaming"
            >
              <div class="age" />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.gamstop.co.uk"
              target="blank"
              aria-label="GamStop"
            >
              <div class="gamstop" />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.begambleaware.org"
              target="blank"
              aria-label="Be Gamble Aware"
            >
              <div class="bga" />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.gamblingtherapy.org/en"
              target="blank"
              aria-label="Gambling Theraphy"
            >>
              <div class="gt" />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39408"
              target="blank"
              aria-label="UK Gambling Commission"
            >
              <div class="ukgc" />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=c0e82570-bf83-4ecc-bda3-89ecb92d5b0e"
              target="blank"
              aria-label="Malta Gaming Authority"
            >
              <div class="mga" />
            </a>
          </div>
          <div class="icon">
            <a href="https://www.gamcare.org.uk" target="blank" aria-label="GamCare">
              <div class="gamcare" />
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="footer-content col-12 text-center" />
      </div>
    </div>
  </footer>
</template>

<script scoped>
export default {
  name: 'Footer',
  props: {
    promo_language_code: {
      type: String,
      required: true
    },
    promo_country_code: {
      type: String,
      required: true
    },
    landing_page_type: {
      type: String,
      required: false
    }
  },
  computed: {
    responsibleGamingURL () {
      let returnURL = ''
      switch (this.landing_page_type) {
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
  }
}
</script>
