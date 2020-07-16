<template>
  <section id class="container">
    <div class="row">
      <div id class="col-12">
        <div v-html="promo_content" />
      </div>
    </div>
  </section>
</template> 

<script>
export default {
  name: 'Content',
  props: {
    promo_content: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
#ja-jp .payment-providers {
  height: 150px;
  background: url(https://files.vjpromo.com/bannerflow/lp-core/pp/payment_large_jp.svg)
    center center no-repeat;
}
.payment-providers {
  height: 150px;
  background: url(https://files.vjpromo.com/bannerflow/lp-core/pp/payment_large_jp.svg)
    center center no-repeat;
}
#bf-game-slider .slick-slider {
  margin: 10px 0;
}
#bf-usps .row {
  margin: 0;
}
</style>