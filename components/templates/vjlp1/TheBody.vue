<template>
  <div>
    <section id="terms-anchor" class="container animated fadeIn"></section>
    <div v-html="promo_content" />
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    promo_content: {
      type: String,
      required: true
    }
  }
};
</script>
