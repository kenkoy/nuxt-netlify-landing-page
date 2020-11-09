<template>
  <footer
    id="footer"
    class="animated fadeIn"
    v-if="promo_language_code === 'ja' && promo_country_code === 'jp'"
  >
    <div class="container-fluid pp" style="border-top: 0px;">
      <div class="row">
        <div class="col-12"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="icons text-center">
          <div class="icon">
            <a
              :href="responsibleGamingURL"
              target="blank"
              aria-label="Responsible Gaming">
              <div class="age"></div>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.gamstop.co.uk" target="blank"
              aria-label="GamStop">
              <div class="gamstop"></div>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.begambleaware.org" target="blank"
              aria-label="Be Gamble Aware">
              <div class="bga"></div>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.gamblingtherapy.org/en" target="blank"
              aria-label="Gambling Theraphy">
              <div class="gt"></div>
            </a>
          </div>
          <div class="icon">
            <a
              href="https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39408"
              target="blank"
              aria-label="UK Gambling Commission"
            >
              <div class="ukgc"></div>
            </a>
          </div>
          <div class="icon">
            <a href="#" target="blank" aria-label="Curacao">
              <div class="curacao"></div>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.gamcare.org.uk" target="blank"
              aria-label="GamCare">
              <div class="gamcare"></div>
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
            当ウェブサイトは、キュラソー政府の商業登記に登録されている、番号149132のBreckenridge Curacao B.V.（登録住所：Emancipatie Boulevard, Dominico F. “Don” Martina 31, Willemstad, Curaçao）により運営されています。
            <br />Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #5536/JAZに基づく C.I.L Curacao Interavtive Licensing N.V. により付与されたサブライセンスを通して正式な許可を所持しています
          </p>
        </div>
      </div>
    </div>
  </footer>

  <footer id="footer" class="animated fadeIn" v-else>
    <div class="container-fluid pp">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="payment-providers"></div>
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
              aria-label="Responsible Gaming">
              <div class="age"></div>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.gamstop.co.uk" target="blank"
              aria-label="GamStop">
              <div class="gamstop"></div>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.begambleaware.org" target="blank"
              aria-label="Be Gamble Aware">
              <div class="bga"></div>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.gamblingtherapy.org/en" target="blank"
              aria-label="Gambling Theraphy">>
              <div class="gt"></div>
            </a>
          </div>
          <div class="icon">
            <a
              href="https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39408"
              target="blank"
              aria-label="UK Gambling Commission"
            >
              <div class="ukgc"></div>
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=c0e82570-bf83-4ecc-bda3-89ecb92d5b0e"
              target="blank"
              aria-label="Malta Gaming Authority"
            >
              <div class="mga"></div>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.gamcare.org.uk" target="blank" aria-label="GamCare">
              <div class="gamcare"></div>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="footer-content col-12 text-center"></div>
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
      required: true,
    },
    promo_country_code: {
      type: String,
      required: true,
    },
    landing_page_type: {
      type: String,
      required: false,
    }
  },
  computed: {
    responsibleGamingURL: function () {
      let returnURL = ''
      switch (this.landing_page_type) {
        case 'verajohn':
          returnURL = 'https://www.verajohn.com/about/responsible-gaming';
          break;
        case 'intercasino':
          returnURL = 'https://www.intercasino.com/about/responsible-gaming';
          break;
        default:
          returnURL = '#';
          break;
      }
      return returnURL;
    }
  }
};
</script>
