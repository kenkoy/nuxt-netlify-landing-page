<template>
  <div>
    <TheHeader
      :registrationMessage="this.post.attributes.promo_banner.promo_register_message"
      :joinMessage="this.post.attributes.promo_banner.promo_join_text"
      :joinURL="this.post.attributes.promo_banner.promo_join_url"
      :termsText="this.post.attributes.promo_banner.promo_terms_text"
      :underlinedLinkText="this.post.attributes.promo_banner.promo_terms_underlined_text"
    />
    <TheBonus 
      :bonusData="this.post.attributes.bonus"
    />
    <ThePayment />
    <TheBody :promo_content="post.html" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/iclp/iclp3/TheHeader.vue'
import TheBonus from '~/components/templates/iclp/iclp3/TheBonus.vue'
import ThePayment from '~/components/templates/iclp/iclp3/ThePayment.vue'
import TheBody from '~/components/templates/iclp/iclp3/TheBody.vue'
import TheFooter from '~/components/templates/iclp/iclp3/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheBonus,
    ThePayment,
    TheBody,
    TheFooter,
  },
  layout: 'iclp3',
  head() {
    return {
      title: 'インターカジノ',
      htmlAttrs: {
        lang: this.post.attributes.promo_locale.promo_language_code
        // lang: 'ja'
      },
      bodyAttrs: {
        id: this.post.attributes.promo_locale.promo_language_code + '-' 
          + this.post.attributes.promo_locale.promo_country_code
        // id: 'ja-jp'
      }
    }
  },
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/marketing/iclp3/' + params.slug + '.md');
      return { post }
    } catch (error) {
      return false
    }
  }
}
</script>