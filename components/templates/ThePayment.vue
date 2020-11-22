<template>
  <div
    v-if="promo_language_code === 'ja' && promo_country_code === 'jp'"
    class="container-fluid pp"
    style="border-top: 0px;"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="payment-providers" />
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'Payment',
  props: {
    promo_language_code: {
      type: String,
      required: true
    },
    promo_country_code: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.payment-providers { width:100%; height:100px; background: url("https://files.vjpromo.com/bannerflow/lp-core/pp/payment_large_en.svg") center center no-repeat; background-size: contain !important; float:left; clear:both; margin: 10px 0; }
#en-gb .payment-providers {height:150px; background: url("https://files.vjpromo.com/bannerflow/lp-core/pp/payment_large_uk.svg") center center no-repeat;}
#fi-fi .payment-providers {height:150px; background: url("https://files.vjpromo.com/bannerflow/lp-core/pp/payment_large_fi.svg") center center no-repeat;}
#de-de .payment-providers {height:150px; background: url("https://files.vjpromo.com/bannerflow/lp-core/pp/payment_large_de.svg") center center no-repeat;}
#nb-no .payment-providers {height:150px; background: url("https://files.vjpromo.com/bannerflow/lp-core/pp/payment_large_no.svg") center center no-repeat;}
#sv-se .payment-providers {height:150px; background: url("https://files.vjpromo.com/bannerflow/lp-core/pp/payment_large_se.svg") center center no-repeat;}
#pt-br .payment-providers {height:150px; background: url("https://files.vjpromo.com/bannerflow/lp-core/pp/payment_large_br.svg") center center no-repeat;}
#ja-jp .payment-providers {height:150px; background: url("https://files.vjpromo.com/bannerflow/lp-core/pp/payment_large_jp.svg") center center no-repeat;}
</style>
