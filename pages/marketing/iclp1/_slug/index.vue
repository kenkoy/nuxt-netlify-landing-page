<template>
  <div>
    <TheHeader 
      :title = "post.attributes.promo_banner.promo_title"
      :title_display = "post.attributes.promo_banner.promo_title_display"
      :subtitle1 = "post.attributes.promo_banner.promo_subtitle_1"
      :main_heading = "post.attributes.promo_banner.promo_main_heading"
      :title_animate = "post.attributes.promo_banner.promo_title_animate"
      :subtitle2 = "post.attributes.promo_banner.promo_subtitle_2"
      :login_button = "post.attributes.promo_banner.promo_login_button_text"
      :login_button_redirect_url = "post.attributes.promo_banner.promo_login_button_redirect_url"
      :signup_button = "post.attributes.promo_banner.promo_signup_button"
      :signup_button_redirect_url = "post.attributes.promo_banner.promo_signup_button_redirect_url"
      :small_term_text = "post.attributes.promo_banner.promo_smallterm_text"
      :small_term_text_link = "post.attributes.promo_banner.promo_smallterm_text_link"
      :small_term_redirect_url = "post.attributes.promo_banner.promo_smallterm_redirect_url" 
      :images = "post.attributes.promo_banner.promo_images"
    />
    <TheSteps 
      :title1 = "post.attributes.promo_steps.promo_step_1_title"
      :description1 = "post.attributes.promo_steps.promo_step_1_desc"
      :title2 = "post.attributes.promo_steps.promo_step_2_title"
      :description2 = "post.attributes.promo_steps.promo_step_2_desc"
      :title3 = "post.attributes.promo_steps.promo_step_3_title"
      :description3 = "post.attributes.promo_steps.promo_step_3_desc"
    />
    <ThePayment
      :promo_language_code = "post.attributes.promo_locale.promo_language_code"
      :promo_country_code = "post.attributes.promo_locale.promo_country_code" />
    <TheBody
      :promo_content = "post.html"
      :landing_page_type="'intercasino'"
    />
    <TheFooter 
      :ga_tracking_id="post.attributes.promo_locale.ga_tracking_id"
      :promo_language_code = "post.attributes.promo_locale.promo_language_code"
      :promo_country_code = "post.attributes.promo_locale.promo_country_code"
      :landing_page_type="'intercasino'"
    />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/iclp/iclp1/TheHeader.vue'
import TheSteps from '~/components/templates/iclp/iclp1/TheSteps.vue'
import TheBody from '~/components/templates/TheBody.vue'
import ThePayment from '~/components/templates/ThePayment.vue'
import TheFooter from '~/components/templates/TheFooter.vue'

export default {
  layout: 'iclp1',
  head() {
    const goId = (this.post.attributes.field_ids && this.post.attributes.field_ids.go_container_id) ?
      this.post.attributes.field_ids.go_container_id : 'OPT-PHSNXP6';

    const gaId = (this.post.attributes.field_ids && this.post.attributes.field_ids.ga_tracking_id) ?
      this.post.attributes.field_ids.ga_tracking_id : 'UA-142143961-1';

    const gtmId = (this.post.attributes.field_ids && this.post.attributes.field_ids.gtm_container_id) ?
      this.post.attributes.field_ids.gtm_container_id : 'GTM-MFD3NKM';
    
    return { 
      title: 'InterCasino',
      htmlAttrs: {
        lang: this.post.attributes.promo_locale.promo_language_code
      },
      bodyAttrs: {
        id: this.post.attributes.promo_locale.promo_language_code+
        '-'+this.post.attributes.promo_locale.promo_country_code
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
  components: {
    TheHeader,
    TheSteps,
    TheBody,
    ThePayment,
    TheFooter
  },
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/marketing/iclp1/'+ params.slug +'.md')
      return {
        post
      }
    } catch (error) {
      return false
    }
  }
}
</script>