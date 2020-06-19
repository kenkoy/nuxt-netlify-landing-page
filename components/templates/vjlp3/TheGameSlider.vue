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
            :slidesToShow="6"
            :slidesToScroll="1"
            :focusOnSelect="true"
            v-bind="carouselSettings"
          >
            <a class="hvr-shrink" v-bind:href="game.game_url_1" v-if="game.game_icon_1">
              <div class="bannerflow-game-icon-1"></div>
            </a>
            <a class="hidden" v-else></a>
            <a class="hvr-shrink" v-bind:href="game.game_url_2" v-if="game.game_icon_2">
              <div class="bannerflow-game-icon-2" v-if="game.game_icon_2"></div>
            </a>
            <a class="hidden" v-else></a>
            <a class="hvr-shrink" v-bind:href="game.game_url_3" v-if="game.game_icon_3">
              <div class="bannerflow-game-icon-3" v-if="game.game_icon_3"></div>
            </a>
            <a class="hidden" v-else></a>
            <a class="hvr-shrink" v-bind:href="game.game_url_4" v-if="game.game_icon_4">
              <div class="bannerflow-game-icon-4" v-if="game.game_icon_4"></div>
            </a>
            <a class="hidden" v-else></a>
            <a class="hvr-shrink" v-bind:href="game.game_url_5" v-if="game.game_icon_5">
              <div class="bannerflow-game-icon-5" v-if="game.game_icon_5"></div>
            </a>
            <a class="hidden" v-else></a>
          </VueSlickCarousel>
          <style>
            :root {
                --bg-game-icon1: url('{{ game.game_icon_1 }}');
                --bg-game-icon2: url('{{ game.game_icon_2 }}');
                --bg-game-icon3: url('{{ game.game_icon_3 }}');
                --bg-game-icon4: url('{{ game.game_icon_4 }}');
                --bg-game-icon5: url('{{ game.game_icon_5 }}');
                --bg-game-icon6: url('{{ game.game_icon_6 }}');
            }
        </style>
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

<style>
.bannerflow-game-icon-1 {
  background: var(--bg-game-icon1) 50% no-repeat;
  background-size: contain;
}
.bannerflow-game-icon-2 {
  background: var(--bg-game-icon2) 50% no-repeat;
  background-size: contain;
}
.bannerflow-game-icon-3 {
  background: var(--bg-game-icon3) 50% no-repeat;
  background-size: contain;
}
.bannerflow-game-icon-4 {
  background: var(--bg-game-icon4) 50% no-repeat;
  background-size: contain;
}
.bannerflow-game-icon-5 {
  background: var(--bg-game-icon5) 50% no-repeat;
  background-size: contain;
}
.bannerflow-game-icon-6 {
  background: var(--bg-game-icon6) 50% no-repeat;
  background-size: contain;
}
.bf-game-icon-1 { background: url("~assets/images/vjlp3/icon_1.png") center no-repeat;  background-size: contain; }
.bf-game-icon-2 { background: url("~assets/images/vjlp3/icon_2.png") center no-repeat;  background-size: contain; }
.bf-game-icon-3 { background: url("~assets/images/vjlp3/icon_3.png") center no-repeat;  background-size: contain; }
.bf-game-icon-4 { background: url("~assets/images/vjlp3/icon_4.png") center no-repeat;  background-size: contain; }
.bf-game-icon-5 { background: url("~assets/images/vjlp3/icon_5.png") center no-repeat;  background-size: contain; }

.hidden {
    display: none;
}
</style>