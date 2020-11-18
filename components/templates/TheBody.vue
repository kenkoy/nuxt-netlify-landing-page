<template>
  <div>
    <section id="terms" class="container animated fadeIn">
      <div class="row">
        <div class="col-12">
          <div v-html="promo_content" />
        </div>
      </div>
      <ul>
        <li>
          通常の
          <a :href="urlData.terms">利用規約</a>と
          <a :href="urlData.promotions">キャンペーン一般利用規約</a>が適用されます。
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
      required: true
    },
    landing_page_type: {
      type: String,
      required: false
    }
  },
  computed: {
    urlData () {
      let returnURL = {
        terms: '',
        promotions: ''
      }
      switch (this.landing_page_type) {
        case 'verajohn':
          returnURL = {
            terms: 'https://verajohn.com/about/terms-and-conditions',
            promotions: 'https://verajohn.com/about/promotions-terms-and-conditions'
          }
          break
        case 'intercasino':
          returnURL = {
            terms: 'https://intercasino.com/about/terms-and-conditions',
            promotions: 'https://intercasino.com/about/promotions-terms-and-conditions'
          }
          break
        default:
          returnURL = {
            terms: '#',
            promotions: '#'
          }
          break
      }
      return returnURL
    }
  }
}
</script>
