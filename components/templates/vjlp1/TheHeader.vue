<template>
  <header id="strip-container" class="container-flex h-100">
    <a id="login-btn" v-bind:href="login_button_redirect_url" class="login hvr-pulse">
      <div class="animated fadeIn">
        <i class="material-icons">exit_to_app</i>
        <div class="login-txt">{{ login_button }}</div>
      </div>
    </a>
    <div class="container">
      <div class="row row-eq-height">
        <div id="strip" class="col-lg-5 strip">
          <div class="strip-container animated fadeIn" style="margin-top: 50.5px;">
            <div class="logo animated fadeIn"></div>
            <h1 v-if="title_display">
              <span class="color-alt-two">{{ title }}</span>
            </h1>
            <div class="game-logo animated jello delay-2s" v-if="images.promo_game_logo"></div>
            <h2 class="sub-offer text-center">
              <span class="color-alt-two">{{ subtitle }}</span>
            </h2>
            <div class="spacer" v-if="!(images.promo_game_logo && subtitle)"></div>
            <a
              id="signup-btn"
              v-bind:href="join_button_redirect_url"
              class="button button-lrg d-block"
            >{{ join_button }}</a>
          </div>
        </div>
        <div id="#stripblank-nobg" class="col-lg-7"></div>
      </div>
    </div>
    <style>
    :root {
      --bg-image: url('{{ images.promo_bg_desktop }}');
      --bg-image-m: url('{{ images.promo_bg_mobile }}');
      --game-logo: url('{{ images.promo_game_logo }}');
    }
    </style>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
    title_display: {
      type: Boolean,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
      required: true,
    },
    login_button: {
      type: String,
      required: true,
    },
    login_button_redirect_url: {
      type: String,
      required: true,
    },
    join_button: {
      type: String,
      required: true,
    },
    join_button_redirect_url: {
      type: String,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.game-logo {
  background: var(--game-logo) no-repeat center;
  background-size: contain;
  width: auto;
  height: 150px;
  z-index: 999999;
}
#strip-container {
  background: var(--bg-image) no-repeat center;
  background-size: cover;
}

#stripblank-nobg { background: none; }

@media only screen and (max-width: 991px) {
  #signup-btn { margin-bottom: 2.5rem; }
}

@media only screen and (max-width: 575px) {
  #strip-container {
    background: var(--bg-image-m) no-repeat center;
    background-size: cover;
  }
}
.spacer {
  margin: 6rem 0;
}
</style>