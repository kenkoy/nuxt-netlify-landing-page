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
            <a class="hvr-shrink" v-bind:href="game_url_1">
              <div class="bf-game-icon-1"></div>
            </a>
            <a class="hvr-shrink" v-bind:href="game_url_2">
              <div class="bf-game-icon-2"></div>
            </a>
            <a class="hvr-shrink" v-bind:href="game_url_3">
              <div class="bf-game-icon-3"></div>
            </a>
            <a class="hvr-shrink" v-bind:href="game_url_4">
              <div class="bf-game-icon-4"></div>
            </a>
            <a class="hvr-shrink" v-bind:href="game_url_5">
              <div class="bf-game-icon-5"></div>
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
    game_slider_icon_1: {
        type: String,
        required: true
    },
    game_url_1: {
        type: String,
        required: true
    },
    game_slider_icon_2: {
        type: String,
        required: true
    },
    game_url_2: {
        type: String,
        required: true
    },
    game_slider_icon_3: {
        type: String,
        required: true
    },
    game_url_3: {
        type: String,
        required: true
    },
    game_slider_icon_4: {
        type: String,
        required: true
    },
    game_url_4: {
        type: String,
        required: true
    },
    game_slider_icon_5: {
        type: String,
        required: true
    },
    game_url_5: {
        type: String,
        required: true
    },
    game_slider_icon_6: {
        type: String,
        required: true
    },
    game_url_6: {
        type: String,
        required: true
    }
},
components: {
VueSlickCarousel,
},
async asyncData({ params }) {
try {
    const post = await import(
    "~/assets/content/landing-page/vjlp3/" + params.slug + ".md"
    );
    console.log(post.attributes.game_images.game_url_1);
    return {
    post,
    };
} catch (error) {
    return false;
}
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
.bf-game-icon-1 { background: url("~assets/images/vjlp3/icon_1.png") center no-repeat;  background-size: contain; }
.bf-game-icon-2 { background: url("~assets/images/vjlp3/icon_2.png") center no-repeat;  background-size: contain; }
.bf-game-icon-3 { background: url("~assets/images/vjlp3/icon_3.png") center no-repeat;  background-size: contain; }
.bf-game-icon-4 { background: url("~assets/images/vjlp3/icon_4.png") center no-repeat;  background-size: contain; }
.bf-game-icon-5 { background: url("~assets/images/vjlp3/icon_5.png") center no-repeat;  background-size: contain; }
.bf-game-icon-1 {
  background: var(--bg-game-icon1) 50% no-repeat;
  background-size: contain;
}
.bf-game-icon-2 {
  background: var(--bg-game-icon2) 50% no-repeat;
  background-size: contain;
}
.bf-game-icon-3 {
  background: var(--bg-game-icon3) 50% no-repeat;
  background-size: contain;
}
.bf-game-icon-4 {
  background: var(--bg-game-icon4) 50% no-repeat;
  background-size: contain;
}
.bf-game-icon-5 {
  background: var(--bg-game-icon5) 50% no-repeat;
  background-size: contain;
}
.bf-game-icon-6 {
  background: var(--bg-game-icon6) 50% no-repeat;
  background-size: contain;
}
</style>