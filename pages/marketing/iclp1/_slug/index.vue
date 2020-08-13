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
    <TheBody :promo_content = "post.html"/>
    <TheFooter 
      :promo_language_code = "post.attributes.promo_locale.promo_language_code"
      :promo_country_code = "post.attributes.promo_locale.promo_country_code" />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/iclp1/TheHeader.vue'
import TheSteps from '~/components/templates/iclp1/TheSteps.vue'
import TheBody from '~/components/templates/iclp1/TheBody.vue'
import ThePayment from '~/components/templates/iclp1/ThePayment.vue'
import TheFooter from '~/components/templates/TheFooter.vue'

export default {
  layout: 'iclp1',
  head() {
    return { 
      title: 'Intercasino',
      htmlAttrs: {
        lang: this.post.attributes.promo_locale.promo_language_code
      },
      bodyAttrs: {
        id: this.post.attributes.promo_locale.promo_language_code+
        '-'+this.post.attributes.promo_locale.promo_country_code
      }
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