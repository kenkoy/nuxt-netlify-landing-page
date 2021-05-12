<template>
  <section id="game-slider">
    <div class="container">
      <div class="slider">
        <VueSlickCarousel
          :arrows="false"
          :dots="false"
          :infinite="true"
          :autoplay="true"
          :speed="300"
          :slides-to-show="5"
          :slides-to-scroll="1"
          v-bind="carouselSettings"
        >
          <a
            v-for="(data, index) in carouselData"
            :key="index"
            :href="data.link"
            :aria-label="`link_${index + 1}`"
          >
            <img :alt="`image_${index + 1}`" :src="data.icon">
          </a>
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
    gameData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      carouselSettings: {
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true
            }
          }
        ]
      }
    }
  },
  computed: {
    carouselData () {
      const games = this.gameData
      const links = Object.entries(games)
        .filter(data => data[0].includes('url'))
        .map(data => data[1])
      const icons = Object.entries(games)
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
  #game-slider{
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    padding: 10px 0;

    .container{
      display: block;
    }
  }
  .slick-slide{
    img{
      margin: auto;
    }
    a{
      border: none;
    }
  }
</style>
