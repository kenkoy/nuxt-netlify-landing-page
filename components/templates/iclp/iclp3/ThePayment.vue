<template>
  <section class="payment">
    <div class="payment__inner">
      <img
        v-lazy-load
        class="sp"
        src="/marketing/img/iclp3/payment_jp.svg"
        alt="ペイメント"
      >
      <img
        v-lazy-load
        class="pc"
        src="/marketing/img/iclp3/payment_large_jp.svg"
        alt="ペイメント"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Payment'
}
</script>
