<template>
  <section :style="cssBackground">
    <div class="logInHeader" v-bind:style='{ backgroundColor: header_section_top_background_color }'>
      {{ header_section_top_text }}
      <a v-bind:href="header_section_top_login_text_url">
        <span>{{ header_section_top_login_text }}</span>
      </a>
    </div>
    <div id="wrapper">
      <header id="header">
        <span class="logo">
          <img src="/marketing/img/vjhp/logo.svg" alt="logo"/>
        </span>
        <h2>{{ header_section_welcome_message }}</h2>
        <h1>{{ header_section_main_heading }}</h1>
        <h3>{{ header_section_heading_subtitle }}</h3>
        <ul class="items-list gameslider">
          <li>
            <a v-bind:href="header_section_game_slider_url_1">
              <img v-bind:src="header_section_game_slider_1" alt="game1" v-lazy-load/>
            </a>
          </li>
          <li>
            <a v-bind:href="header_section_game_slider_url_2">
              <img v-bind:src="header_section_game_slider_2" alt="game2" v-lazy-load/>
            </a>
          </li>
          <li>
            <a v-bind:href="header_section_game_slider_url_3">
              <img v-bind:src="header_section_game_slider_3" alt="game3" v-lazy-load/>
            </a>
          </li>
          <li>
            <a v-bind:href="header_section_game_slider_url_4">
              <img v-bind:src="header_section_game_slider_4" alt="game4" v-lazy-load/>
            </a>
          </li>
          <li>
            <a v-bind:href="header_section_game_slider_url_5">
              <img v-bind:src="header_section_game_slider_5" alt="game5" v-lazy-load/>
            </a>
          </li>
          <li>
            <a v-bind:href="header_section_game_slider_url_6">
              <img v-bind:src="header_section_game_slider_6" alt="game6" v-lazy-load/>
            </a>
          </li>
        </ul>
        <h4>{{ header_section_best_deal_caption }}</h4>
        <div class="chest">
          <a v-bind:href="header_section_best_deal_image_url">
            <img class="img-fluid" v-bind:src="header_section_best_deal_image" alt="image" v-lazy-load/>
          </a>
        </div>
        <p>{{ header_section_best_deal_small_caption }}</p>
        <a class="button primary" v-bind:href="header_section_register_button_url">{{ header_section_register_button }}</a>
        <p>
          {{ header_section_account_text }}
          <a v-bind:href="header_section_account_login_url">{{ header_section_account_login }}</a>
        </p>
      </header>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TheHeaderSection',
  props: {
    header_section_top_text: {
      type: String,
      required: true,
    },
    header_section_top_login_text: {
      type: String,
      required: true,
    },
    header_section_top_login_text_url: {
      type: String,
      required: true,
    },
    header_section_top_background_color: {
      type: String,
      required: true,
    },
    header_login_account_text_redirect_url: {
      type: String,
      required: true,
    },
    homepage_title: {
      type: String,
      required: true,
    },
    header_section_welcome_message: {
      type: String,
      required: true,
    },
    header_section_main_heading: {
      type: String,
      required: true,
    },
    header_section_heading_subtitle: {
      type: String,
      required: true,
    },
    header_section_game_slider_1: {
       type: String,
       required: true,
    },
    header_section_game_slider_url_1: {
      type: String,
      required: true,
    },
    header_section_game_slider_2: {
       type: String,
       required: true,
    },
    header_section_game_slider_url_2: {
      type: String,
      required: true,
    },
    header_section_game_slider_3: {
       type: String,
       required: true,
    },
    header_section_game_slider_url_3: {
      type: String,
      required: true,
    },
    header_section_game_slider_4: {
       type: String,
       required: true,
    },
    header_section_game_slider_url_4: {
      type: String,
      required: true,
    },
    header_section_game_slider_5: {
       type: String,
       required: true,
    },
    header_section_game_slider_url_5: {
      type: String,
      required: true,
    },
    header_section_game_slider_6: {
       type: String,
       required: true,
    },
    header_section_game_slider_url_6: {
      type: String,
      required: true,
    },
    header_section_best_deal_caption: {
      type: String,
      required: true,
    },
    header_section_best_deal_image_url: {
      type: String,
      required: true,
    },
    header_section_best_deal_image: {
       type: String,
       required: true,
    },
    header_section_best_deal_small_caption: {
      type: String,
      required: true,
    },
    header_section_register_button: {
      type: String,
      required: true,
    },
    header_section_register_button_url: {
      type: String,
      required: true,
    },
    header_section_account_text: {
      type: String,
      required: true,
    },
    header_section_account_login: {
      type: String,
      required: true,
    },
    header_section_account_login_url: {
      type: String,
      required: true,
    },
    header_section_desktop_background_image: {
      type: String,
      required: true,
    },
    header_section_mobile_background_image: {
      type: String,
      required: true,
    }
  },
  computed: {
    cssBackground: function () {
      return {
        '--bg-image': `url('${this.header_section_desktop_background_image}')`,
        '--bg-image-m': `url('${this.header_section_mobile_background_image}')`
      }
    }
  }
};
</script>
<style>
#wrapper {
  background-image: var(--bg-desktop);
}

@media screen and (max-width: 767px) {
  #wrapper {
    background-image: var(--bg-mobile);
    background-position: center center;
  }
}
</style>