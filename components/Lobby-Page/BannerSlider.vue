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
        >
          <div v-for="(data, index) in bannerData" :key="index">
            <button v-if="desktop" class="n-button n-button--secondary desktop">
              続きを読む
            </button>
            <a
              :href="data.url"
              :aria-label="`link_${index + 1}`"
            >
              <img :alt="`image_${index + 1}`" :src="data.image">
            </a>
            <button v-if="mobile" class="n-button n-button--secondary">
              続きを読む
            </button>
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
  data () {
    return {
      desktop: true,
      mobile: false
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.myEventHandler)
  },
  mounted () {
    this.myEventHandler()
    window.addEventListener('resize', this.myEventHandler)
  },
  methods: {
    myEventHandler () {
      // your code for handling resize...
      if (window.innerWidth <= 768) {
        this.desktop = false
        this.mobile = true
      } else {
        this.desktop = true
        this.mobile = false
      }
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
      box-shadow: inset 0 1px 0 hsla(0deg,0%,100%,.5), inset 0 -3px 3px rgba(0,0,0,.2);
    }
    button.desktop{
      width: auto;
      float: left;
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
