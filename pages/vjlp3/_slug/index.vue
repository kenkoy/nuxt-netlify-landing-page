<template>
  <div>
    <Header 
      :header_login_button = "post.attributes.header_login_button"
      :header_join_button = "post.attributes.header_join_button"/>
    <PromotionalBanner 
      :promo_title = "post.attributes.promo_title"
      :promo_description = "post.attributes.promo_description"
      :promo_join_button = "post.attributes.promo_join_button"/>
    <GameSlider />
    <MainContent :promo_content = "post.html"/>
  </div>
</template>

<script>
import Header from '~/components/VJLP3/Header.vue'
import PromotionalBanner from '~/components/VJLP3/PromotionalBanner.vue'
import GameSlider from '~/components/VJLP3/GameSlider.vue'
import MainContent from '~/components/VJLP3/MainContent.vue'

export default {
    layout: 'vjlp3',

    components: {
      Header,
      PromotionalBanner,
      GameSlider,
      MainContent
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
  #bf-banner { background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url("~assets/images/bg.jpg") center no-repeat; background-size: cover; }
  .bf-game-icon-1 { background: url("~assets/images/icon_1.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-2 { background: url("~assets/images/icon_2.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-3 { background: url("~assets/images/icon_3.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-4 { background: url("~assets/images/icon_4.png") center no-repeat;  background-size: contain; }
  .bf-game-icon-5 { background: url("~assets/images/icon_5.png") center no-repeat;  background-size: contain; }
  #strip .small-terms { display: block; } #strip { background:none; }
  #bf-banner-img-2 { background: url("~assets/images/banner-2.png") bottom center no-repeat; background-size: contain; }
  @media only screen and (max-width: 767px) {
    #bf-banner-img-2 { background: url("~assets/images/banner-2-m.png") bottom center no-repeat; background-size: contain; }
  }
</style>

