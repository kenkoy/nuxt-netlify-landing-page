<template>
  <section class="termsdetail" id="terms">
    <div class="termsdetail__inner">
      <div v-html="promo_content"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Body',
  props: {
    promo_content: {
      type: String,
      required: false,
    },
  },
};
</script>
