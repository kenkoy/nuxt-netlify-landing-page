<template>
  <section class="payment">
    <div class="payment__inner">
      <img
        class="sp"
        src="/marketing/img/iclp3/payment_jp.svg"
        alt="ペイメント"
        v-lazy-load
      />
      <img
        class="pc"
        src="/marketing/img/iclp3/payment_large_jp.svg"
        alt="ペイメント"
        v-lazy-load
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Payment'
};
</script>