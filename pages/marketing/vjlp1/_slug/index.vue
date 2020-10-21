<template>
  <div>
    <TheHeader
      :title="post.attributes.promo_banner.promo_title"
      :title_highlighted="post.attributes.promo_banner.promo_title_highlighted || []"
      :subtitle="post.attributes.promo_banner.promo_subtitle"
      :subtitle_highlighted="post.attributes.promo_banner.promo_subtitle_highlighted || []"
      :loginText="post.attributes.promo_banner.promo_login_button"
      :loginURL="post.attributes.promo_banner.promo_login_button_redirect_url"
      :signUpText="post.attributes.promo_banner.promo_join_button"
      :signUpURL="post.attributes.promo_banner.promo_join_button_redirect_url"
      :termsLinkText="post.attributes.promo_banner.promo_terms_link_text || []"
      :termsText="post.attributes.promo_banner.promo_terms_text"
      :titleFirst="post.attributes.promo_banner.promo_render_title_first"
      :images="post.attributes.promo_banner.promo_images"
    />
    <TheSteps
      :step1Title="post.attributes.promo_steps.promo_step_1_title"
      :step1Desc="post.attributes.promo_steps.promo_step_1_desc"
      :step2Title="post.attributes.promo_steps.promo_step_2_title"
      :step2Desc="post.attributes.promo_steps.promo_step_2_desc"
      :step3Title="post.attributes.promo_steps.promo_step_3_title"
      :step3Desc="post.attributes.promo_steps.promo_step_3_desc"
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
      :ga_tracking_id="post.attributes.promo_locale.ga_tracking_id"
      :promo_language_code="post.attributes.promo_locale.promo_language_code"
      :promo_country_code="post.attributes.promo_locale.promo_country_code"
      :landing_page_type="'verajohn'"
    />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/vjlp/vjlp1/TheHeader.vue'
import TheSteps from '~/components/templates/vjlp/vjlp1/TheSteps.vue'
import ThePayment from '~/components/templates/ThePayment.vue'
import TheBody from '~/components/templates/TheBody.vue'
import TheFooter from '~/components/templates/TheFooter.vue'

export default {
  layout: 'vjlp1',
  head() {
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
        { src: '/marketing/js/page-hide.js', id: 'go_data', go_id: 'OPT-PHSNXP6' },
        { src: '/marketing/js/google-analytics.js', id: 'ga_data', go_id: 'OPT-PHSNXP6', ga_id: this.post.attributes.promo_locale.ga_tracking_id },
        { src: '/marketing/js/google-tag-manager.js', id: 'gtm_data', gtm_id: 'GTM-MFD3NKM'},
      ],
      noscript: [
        {
          hid: 'gtmBody',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id='GTM-MFD3NKM'" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          pbody: true
        },
      ],
    } 
  },
  components: {
    TheHeader,
    TheSteps,
    ThePayment,
    TheBody,
    TheFooter
  },
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/marketing/vjlp1/' + params.slug + '.md')
      return { post }
    } catch (error) {
      return false
    }
  }
}
</script>