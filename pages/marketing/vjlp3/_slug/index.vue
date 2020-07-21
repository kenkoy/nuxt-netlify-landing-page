<template>
  <div>
    <TheHeader 
      :header_login_button = "post.attributes.promo_banner.promo_login_button"
      :header_login_button_redirect_url = "post.attributes.promo_banner.promo_login_button_redirect_url"
      :header_join_button = "post.attributes.promo_banner.promo_join_button"
      :header_join_button_redirect_url = "post.attributes.promo_banner.promo_join_button_redirect_url"
      :images = "post.attributes.promo_banner.promo_images"/>
    <TheBanner 
      :promo_title = "post.attributes.promo_banner.promo_title"
      :promo_title_display = "post.attributes.promo_banner.promo_title_display"
      :promo_description = "post.attributes.promo_banner.promo_subtitle"
      :promo_join_button = "post.attributes.promo_banner.promo_join_button"
      :promo_join_button_location = 'post.attributes.promo_banner.promo_join_button_location'
      :promo_join_button_redirect_url = "post.attributes.promo_banner.promo_join_button_redirect_url" />
    <TheGameSlider :game = "post.attributes.promo_banner.game_images" />
    <TheBody :promo_content = "post.html"/>
    <TheFooter 
      :promo_language_code = "post.attributes.promo_locale.promo_language_code"
      :promo_country_code = "post.attributes.promo_locale.promo_country_code" />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/vjlp3/TheHeader.vue'
import TheBanner from '~/components/templates/vjlp3/TheBanner.vue'
import TheGameSlider from '~/components/templates/vjlp3/TheGameSlider.vue'
import TheBody from '~/components/templates/vjlp3/TheBody.vue'
import TheFooter from '~/components/templates/TheFooter.vue'

export default {
    layout: 'vjlp3',
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
      TheBanner,
      TheGameSlider,
      TheBody,
      TheFooter
    },
    async asyncData ({ params }) {
      try {
        const post = await import('~/assets/content/landing-page/marketing/vjlp3/'+ params.slug +'.md')
        return {
          post
        }
      } catch (error) {
        return false
      }
    }
}
</script>