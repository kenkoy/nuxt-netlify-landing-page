<template>
  <div>
    <TheHeader 
      :loginText="post.attributes.promo_banner.promo_login_button"
      :loginURL="post.attributes.promo_banner.promo_login_button_redirect_url"
      :gameLargeSubtitle="post.attributes.promo_banner.promo_large_subtitle"
      :gameSmallSubtitle="post.attributes.promo_banner.promo_small_subtitle"
      :gameSmallSubtitleHighlighted="post.attributes.promo_banner.promo_small_subtitle_highlighted"
      :signUpText="post.attributes.promo_banner.promo_join_button"
      :signUpURL="post.attributes.promo_banner.promo_join_button_redirect_url"
      :termsText="post.attributes.promo_banner.promo_terms"
      :termsLinkText="post.attributes.promo_banner.promo_link_terms"
      :images="post.attributes.promo_banner.promo_images"
    />
    <TheSection
      :sectionData="post.attributes.section"
    />
    <ThePayment 
      :promo_language_code="post.attributes.promo_locale.promo_language_code"
      :promo_country_code="post.attributes.promo_locale.promo_country_code"
    />
    <TheBody v-if="post.html"
      :promo_content="post.html"
      :landing_page_type="'verajohn'"
    />
    <TheFooter 
      :promo_language_code="post.attributes.promo_locale.promo_language_code"
      :promo_country_code="post.attributes.promo_locale.promo_country_code"
      :landing_page_type="'verajohn'"
    />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/vjlp/vjlp4/TheHeader.vue'
import TheSection from '~/components/templates/vjlp/vjlp4/TheSection.vue'
import ThePayment from '~/components/templates/ThePayment.vue'
import TheBody from '~/components/templates/TheBody.vue'
import TheFooter from '~/components/templates/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheSection,
    ThePayment,
    TheBody,
    TheFooter
  },
  layout: 'vjlp4',
  head() {
    const goId = (this.post.attributes.field_ids && this.post.attributes.field_ids.go_container_id) ?
      this.post.attributes.field_ids.go_container_id : 'OPT-PHSNXP6';

    const gaId = (this.post.attributes.field_ids && this.post.attributes.field_ids.ga_tracking_id) ?
      this.post.attributes.field_ids.ga_tracking_id : 'UA-142143961-1';

    const gtmId = (this.post.attributes.field_ids && this.post.attributes.field_ids.gtm_container_id) ?
      this.post.attributes.field_ids.gtm_container_id : 'GTM-MFD3NKM';

    return {
      title: 'Vera&John',
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
    }
  },
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/marketing/vjlp4/' + params.slug + '.md');
      return { post }
    } catch (error) {
      return false
    }
  }
}
</script>
