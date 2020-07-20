<template>
  <div>
    <TheHeader 
      :title = "post.attributes.promo_banner.promo_title"
      :title_display = "post.attributes.promo_banner.promo_title_display"
      :subtitle = "post.attributes.promo_banner.promo_subtitle"
      :login_button = "post.attributes.promo_banner.promo_login_button"
      :login_button_redirect_url = "post.attributes.promo_banner.promo_login_button_redirect_url"
      :join_button = "post.attributes.promo_banner.promo_join_button"
      :join_button_redirect_url = "post.attributes.promo_banner.promo_join_button_redirect_url"
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
    <TheBody :promo_content = "post.html"/>
  </div>
</template>

<script>
import TheHeader from '~/components/templates/vjlp1/TheHeader.vue'
import TheSteps from '~/components/templates/vjlp1/TheSteps.vue'
import TheBody from '~/components/templates/vjlp1/TheBody.vue'

export default {
  layout: 'vjlp1',
  head() {
    return { 
      title: 'Vera&John',
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
    TheBody
  },
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/marketing/vjlp1/'+ params.slug +'.md')
      return {
        post
      }
    } catch (error) {
      return false
    }
  }
}
</script>