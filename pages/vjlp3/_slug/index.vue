<template>
  <div>
    <TheHeader 
      :header_login_button = "post.attributes.promo_banner.promo_login_button"
      :header_login_button_redirect_url = "post.attributes.promo_banner.promo_login_button_redirect_url"
      :header_join_button = "post.attributes.promo_banner.promo_join_button"
      :header_join_button_redirect_url = "post.attributes.promo_banner.promo_join_button_redirect_url"/>
    <TheBanner 
      :promo_title = "post.attributes.promo_banner.promo_title"
      :promo_description = "post.attributes.promo_banner.promo_subtitle"
      :promo_join_button = "post.attributes.promo_banner.promo_join_button"
      :promo_join_button_redirect_url = "post.attributes.promo_banner.promo_join_button_redirect_url" />
    <TheGameSlider 
      :game_icon_1 = "post.attributes.promo_banner.game_images.game_icon_1"
      :game_url_1 = "post.attributes.promo_banner.game_images.game_url_1"
      :game_icon_2 = "post.attributes.promo_banner.game_images.game_icon_2"
      :game_url_2 = "post.attributes.promo_banner.game_images.game_url_2"
      :game_icon_3 = "post.attributes.promo_banner.game_images.game_icon_3"
      :game_url_3 = "post.attributes.promo_banner.game_images.game_url_3"
      :game_icon_4 = "post.attributes.promo_banner.game_images.game_icon_4"
      :game_url_4 = "post.attributes.promo_banner.game_images.game_url_4"
      :game_icon_5 = "post.attributes.promo_banner.game_images.game_icon_5"
      :game_url_5 = "post.attributes.promo_banner.game_images.game_url_5"
      :game_icon_6 = "post.attributes.promo_banner.game_images.game_icon_6"
      :game_url_6 = "post.attributes.promo_banner.game_images.game_url_6"
    />
    <TheBody :promo_content = "post.html"/>
    <TheFooter />
    <style>
      :root {
        --bg-image: url('{{ post.attributes.promo_banner.promo_images.promo_bg_desktop }}');
        --bg-image-m: url('{{ post.attributes.promo_banner.promo_images.promo_bg_mobile }}');
        --bg-game-icon1: url('{{ post.attributes.promo_banner.game_images.game_icon_1 }}');
        --bg-game-icon2: url('{{ post.attributes.promo_banner.game_images.game_icon_2 }}');
        --bg-game-icon3: url('{{ post.attributes.promo_banner.game_images.game_icon_3 }}');
        --bg-game-icon4: url('{{ post.attributes.promo_banner.game_images.game_icon_4 }}');
        --bg-game-icon5: url('{{ post.attributes.promo_banner.game_images.game_icon_5 }}');
        --bg-game-icon6: url('{{ post.attributes.promo_banner.game_images.game_icon_6 }}');
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
        console.log(post.attributes.promo_banner.promo_login_button_redirect_url)
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
  /* .bf-game-icon-1 { background: url("~assets/images/vjlp3/icon_1.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-2 { background: url("~assets/images/vjlp3/icon_2.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-3 { background: url("~assets/images/vjlp3/icon_3.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-4 { background: url("~assets/images/vjlp3/icon_4.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-5 { background: url("~assets/images/vjlp3/icon_5.png") center no-repeat;  background-size: contain; } */
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

