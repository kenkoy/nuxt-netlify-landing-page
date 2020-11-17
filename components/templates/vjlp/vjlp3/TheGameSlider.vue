<template>
  <section id="bf-game-slider">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="slider slick-initialized slick-slider">
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
                v-for="(link, index) in links"
                :key="index"
                class="hvr-shrink"
                :href="link"
                :aria-label="icons[index].replace(/^.*[\\\/]/, '')"
              >
                <div :style="generateSliderIcon(icons[index])" />
              </a>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'GameSlider',
  components: {
    VueSlickCarousel
  },
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      links: [''],
      icons: [''],
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
  beforeMount () {
    this.icons = []
    this.links = []

    Object.entries(this.game).forEach(([key, value]) => {
      key.indexOf('game_icon_') === 0
        ? value != ''
            ? this.icons.push(value)
            : null
        : null
      key.indexOf('game_url_') === 0
        ? value != ''
            ? this.links.push(value)
            : null
        : null
    })
  },
  methods: {
    generateSliderIcon (icon) {
      return {
        background: `center / contain no-repeat url("${icon}")`
      }
    }
  }
}
</script>
