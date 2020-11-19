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
