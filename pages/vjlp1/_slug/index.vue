<template>
  <div>
    <TheHeader 
      :title = "post.attributes.promo_title"
      :subtitle = "post.attributes.promo_subtitle"
      :login_button = "post.attributes.promo_login_button"
      :join_button = "post.attributes.promo_join_button"
    />
    <TheSteps 
      :step1_header = "post.attributes.promo_step_1_header"
      :step1_description = "post.attributes.promo_step_1_description"
      :step2_header = "post.attributes.promo_step_2_header"
      :step2_description = "post.attributes.promo_step_1_description"
      :step3_header = "post.attributes.promo_step_2_header"
      :step3_description = "post.attributes.promo_step_2_description"
    />
    <TheBody 
      :promo_content = "post.html"
    />
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
    #strip-container { background: url("~assets/images/vjlp1/bg.jpg") no-repeat center; background-size: cover; }
    #stripblank { background: none; }
    @media only screen and (max-width: 575px) {
      #strip-container { background: url("~assets/images/vjlp1/bg_m.jpg") no-repeat center; background-size: cover;  }
    }
    .game-logo { background: url("~assets/images/vjlp1/game-logo.png") no-repeat center; background-size: contain; width: auto; height: 150px; z-index:999999; }
    .co-brand { background: url("~assets/images/vjlp1/co-branded-logo.png") no-repeat center; background-size:contain; width: 100%; height:100px;}
</style>