<template>
  <div>
    <section id="terms-anchor" class="container animated fadeIn"></section>
    <section id="terms" class="container animated fadeIn">
      <div class="row">
        <div class="col-12">
          <div v-html="promo_content" />
        </div>
      </div>
    </section>
  </div>
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