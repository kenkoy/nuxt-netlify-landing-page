<template>
  <div>
    <TheHeader 
      :title = "post.attributes.promo_banner.promo_title"
      :subtitle = "post.attributes.promo_banner.promo_subtitle"
      :login_button = "post.attributes.promo_banner.promo_login_button"
      :login_button_redirect_url = "post.attributes.promo_banner.promo_login_button_redirect_url"
      :join_button = "post.attributes.promo_banner.promo_join_button"
      :join_button_redirect_url = "post.attributes.promo_banner.promo_join_button_redirect_url"
    />
    <TheSteps 
      :title1 = "post.attributes.promo_steps.promo_step_1_title"
      :description1 = "post.attributes.promo_steps.promo_step_1_desc"
      :title2 = "post.attributes.promo_steps.promo_step_2_title"
      :description2 = "post.attributes.promo_steps.promo_step_1_desc"
      :title3 = "post.attributes.promo_steps.promo_step_2_title"
      :description3 = "post.attributes.promo_steps.promo_step_2_desc"
    />
    <TheBody 
      :promo_content = "post.html"
    />
    <style>
      :root {
        --bg-image: url('{{ post.attributes.promo_banner.promo_images.promo_bg_desktop }}');
        --bg-image-m: url('{{ post.attributes.promo_banner.promo_images.promo_bg_mobile }}');
        --game-logo: url('{{ post.attributes.promo_banner.promo_images.promo_game_logo }}');
      }
    </style>
  </div>
</template>

<script>
import TheHeader from '~/components/templates/vjlp1/TheHeader.vue'
import TheSteps from '~/components/templates/vjlp1/TheSteps.vue'
import TheBody from '~/components/templates/vjlp1/TheBody.vue'

export default {
  layout: 'vjlp1',
  components: {
    TheHeader,
    TheSteps,
    TheBody
  },
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/vjlp1/'+ params.slug +'.md')
      return {
        post
      }
    } catch (error) {
      return false
    }
  }
}
</script>

<style>
    #strip-container {
       background: var(--bg-image) no-repeat center; 
       background-size: cover; 
       }
    #stripblank { background: none; }
    @media only screen and (max-width: 575px) {
      #strip-container { 
        background: var(--bg-image-m) no-repeat center; 
        background-size: cover; 
      }
    }
    .game-logo {
       background: var(--game-logo) no-repeat center; 
       background-size: contain; width: auto; height: 150px; z-index:999999; 
    }
    .co-brand { background: url("~assets/images/vjlp1/co-branded-logo.png") no-repeat center; background-size:contain; width: 100%; height:100px;}
</style>