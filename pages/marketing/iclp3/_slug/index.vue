<template>
  <div>
   <TheHeader
      :registrationMessage="post.attributes.promo_banner.promo_register_message"
      :joinMessage="post.attributes.promo_banner.promo_join_text"
      :joinURL="post.attributes.promo_banner.promo_join_url"
      :termsText="post.attributes.promo_banner.promo_terms_text"
      :underlinedLinkText="post.attributes.promo_banner.promo_terms_underlined_text"
    />
    <TheBonus 
      :bonusData="post.attributes.bonus"
    />
    <ThePayment />
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
    const goId = (this.post.attributes.field_ids && this.post.attributes.field_ids.go_container_id) ?
      this.post.attributes.field_ids.go_container_id : 'OPT-PHSNXP6';

    const gaId = (this.post.attributes.field_ids && this.post.attributes.field_ids.ga_tracking_id) ?
      this.post.attributes.field_ids.ga_tracking_id : 'UA-142143961-1';

    const gtmId = (this.post.attributes.field_ids && this.post.attributes.field_ids.gtm_container_id) ?
      this.post.attributes.field_ids.gtm_container_id : 'GTM-MFD3NKM';
    
    return {
      title: 'インターカジノ',
      htmlAttrs: {
        lang: this.post.attributes.promo_locale.promo_language_code
      },
      bodyAttrs: {
        id: this.post.attributes.promo_locale.promo_language_code + '-' 
          + this.post.attributes.promo_locale.promo_country_code
      },
      style: [],
      script: [
        { src: '/marketing/js/page-hide.js', id: 'go_data', go_id: goId },
        { src: '/marketing/js/google-analytics.js', id: 'ga_data', go_id: goId, ga_id: gaId },
        { src: '/marketing/js/google-tag-manager.js', id: 'gtm_data', gtm_id: gtmId },
      ],
      noscript: [
        {
          hid: 'gtmBody',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id='${gtmId}'" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          pbody: true
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        gtmBody: ['innerHTML']
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