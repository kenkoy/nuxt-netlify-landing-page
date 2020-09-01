<template>
  <div>
    <section id="terms" class="container animated fadeIn">
      <div class="row">
        <div class="col-12">
          <div v-html="promo_content"></div>
        </div>
      </div>
      <ul>
        <li>
          通常の
          <a href="https://intercasino.com/about/terms-and-conditions">利用規約</a>と
          <a href="https://intercasino.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Body',
  props: {
    promo_content: {
      type: String,
      required: true,
    },
  },
};
</script>
