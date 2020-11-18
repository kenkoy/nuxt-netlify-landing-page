<template>
  <section id="terms" class="termsdetail">
    <div class="termsdetail__inner">
      <div v-html="promo_content" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Body',
  props: {
    promo_content: {
      type: String,
      required: false
    }
  }
}
</script>
