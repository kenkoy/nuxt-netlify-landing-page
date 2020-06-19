<template>
  <section id="bf-game-slider">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <VueSlickCarousel
            :arrows="false"
            :dots="false"
            :infinite="true"
            :speed="300"
            :slidesToShow="5"
            :slidesToScroll="6"
            :focusOnSelect="true"
            v-bind="carouselSettings"
          >
            <a class="hvr-shrink" v-for="(games, keyName, index) in game" :key="index" v-bind:href="games">
              <img v-if="games" :src="keyName == 'game_url_1' ? Object.values(game)[index+5] : Object.values(game)[index+6]">
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
    components: {
        VueSlickCarousel,  
    },
    data() {
        return {
            carouselSettings: {
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                        slidesToShow: 3,
                        infinite: true,
                        autoplay: true,
                        },
                    },
                ],
            },
        };
    },
};
</script>