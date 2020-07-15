<template>
  <section id="bf-game-slider">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <VueSlickCarousel
            :arrows="false"
            :dots="false"
            :infinite="true"
            :autoplay="true"
            :speed="300"
            :slidesToShow="5"
            :slidesToScroll="1"
            v-bind="carouselSettings"
          >
            <a class="hvr-shrink" v-for="(link, index) in links" :key="index" v-bind:href="link"> 
              <div v-bind:style="generateSliderIcon(icons[index])"></div>
            </a>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
    name: 'GameSlider',
    props: {
      game: {
        type: Object,
        required: true
      }
    },
    beforeMount() {
      this.icons = []
      this.links = []

      Object.entries(this.game).map(([key, value]) => {
        key.indexOf("game_icon_") === 0 ? value != "" ? this.icons.push(value) : null : null
        key.indexOf("game_url_") === 0 ? value != "" ? this.links.push(value) : null : null
      })
    },
    components: {
        VueSlickCarousel,  
    },
    data() {
      return {
        links: [""],
        icons: [""],
        carouselSettings: {
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
              },
            },
          ],
        }
      };
    },
    methods: {
      generateSliderIcon(icon) {
        return {
          background: `center / contain no-repeat url("${icon}")`,
        }
      }
    }
};
</script>