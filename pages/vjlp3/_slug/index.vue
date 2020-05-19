<template>
  <div>
    <TheHeader 
      :header_login_button = "post.attributes.promo_banner.promo_login_button"
      :header_join_button = "post.attributes.promo_banner.promo_join_button"/>
    <TheBanner 
      :promo_title = "post.attributes.promo_banner.promo_title"
      :promo_description = "post.attributes.promo_banner.promo_subtitle"
      :promo_join_button = "post.attributes.promo_banner.promo_join_button"/>
    <TheGameSlider />
    <TheBody :promo_content = "post.html"/>
    <TheFooter />
    <style>
      :root {
        --bg-image: url('{{ post.attributes.promo_banner.promo_images.promo_bg_desktop }}');
        --bg-image-m: url('{{ post.attributes.promo_banner.promo_images.promo_bg_mobile }}');
      }
    </style>
  </div>
</template>

<script>
import TheHeader from '~/components/templates/vjlp3/TheHeader.vue'
import TheBanner from '~/components/templates/vjlp3/TheBanner.vue'
import TheGameSlider from '~/components/templates/vjlp3/TheGameSlider.vue'
import TheBody from '~/components/templates/vjlp3/TheBody.vue'
import TheFooter from '~/components/templates/vjlp3/TheFooter.vue'

export default {
    layout: 'vjlp3',
    components: {
      TheHeader,
      TheBanner,
      TheGameSlider,
      TheBody,
      TheFooter
    },
    async asyncData ({ params }) {
      try {
        const post = await import('~/assets/content/landing-page/vjlp3/'+ params.slug +'.md')
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
  #bf-banner { background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url("~assets/images/vjlp3/bg.jpg") center no-repeat; background-size: cover; }
  .bf-game-icon-1 { background: url("~assets/images/vjlp3/icon_1.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-2 { background: url("~assets/images/vjlp3/icon_2.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-3 { background: url("~assets/images/vjlp3/icon_3.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-4 { background: url("~assets/images/vjlp3/icon_4.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-5 { background: url("~assets/images/vjlp3/icon_5.png") center no-repeat;  background-size: contain; }
  #strip .small-terms { display: block; } #strip { background:none; }
  #bf-banner-img-2 { 
    background: var(--bg-image) bottom center no-repeat; 
    background-size: contain; 
  }
  @media only screen and (max-width: 767px) {
    #bf-banner-img-2 { 
      background: var(--bg-image-m) bottom center no-repeat; 
      background-size: contain; }
  }
</style>

