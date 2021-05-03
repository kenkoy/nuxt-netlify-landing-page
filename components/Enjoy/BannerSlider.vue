<template>
  <section id="banner-slider">
    <div class="container">
      <div class="slider">
        <VueSlickCarousel
          :arrows="false"
          :dots="false"
          :infinite="true"
          :autoplay="true"
          :speed="300"
          :slides-to-show="1"
          :slides-to-scroll="1"
          v-bind="carouselSettings"
        >
          <div v-for="(data, index) in carouselData" :key="index">
            <a
              :href="data.link"
              :aria-label="`link_${index + 1}`"
            >
              <img :alt="`image_${index + 1}`" :src="data.icon">
            </a>
            <button class="secondary">続きを読む</button>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel
  },
  props: {
    bannerData: {
      type: Array,
      required: true
    }
  },
  computed: {
    carouselData () {
      const banner = this.bannerData
      const links = Object.entries(banner)
        .filter(data => data[0].includes('url'))
        .map(data => data[1])
      const icons = Object.entries(banner)
        .filter(data => data[0].includes('icon'))
        .map(data => data[1])
      return links.map((data, index) => ({
        link: data, icon: icons[index]
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
  #banner-slider{
    padding: 30px 20px;
    .container{
      display: block;
    }
    button{
      display: block;
      margin: auto;
      width: 100%;
      max-width: 352px;
      height: 44px;
      box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 50%), inset 0 -3px 3px rgb(0 0 0 / 20%);
    }
  }
  .slick-slide{
    img{
      margin: auto;
      width: 100%;
    }
    a{
      border: none;
    }
  }
</style>
