<template>
  <header id="strip-container" class="container-flex h-100">
    <a id="login-btn" v-bind:href="login_button_redirect_url" class="login hvr-pulse">
      <div class="animated fadeIn">
        <i class="material-icons">exit_to_app</i>
        <div class="login-txt">
          <p>{{ login_button }}</p>
        </div>
      </div>
    </a>
    <div class="container">
      <div class="row row-eq-height">
        <div id="strip" class="col-12 strip">
          <div class="strip-container animated fadeIn" style="margin-top: 75px;">
            <div class="logo animated fadeIn"></div>
            <div>
              <h2>{{ subtitle1 }}</h2>
              <div v-bind:class="{sign: title_animate}">
                <h1 style="font-size:3.6em;" class="color-alt-two">
                  <font color="#ffffff">{{ main_heading }}</font>
                </h1>
                <h2>
                  {{ subtitle2 }}
                  <br />
                </h2>
              </div>
            </div>
            <!-- <div class="co-brand"></div>-->
            <a
              id="signup-btn"
              v-bind:href="signup_button_redirect_url"
              class="button button-lrg"
              style="display:block"
            >{{ signup_button }}</a>
            <!-- show button-->
            <!-- <div class="game-logo animated jello delay-2s"></div>-->
          </div>
          <div class="small-terms">
            <a
              v-bind:href="small_term_redirect_url"
              class="link-terms-conditions ctac"
            >{{ small_term_text_link }}</a>
            {{ small_term_text }}
          </div>
        </div>
      </div>
    </div>
    <style>
  :root {
    --bg-image: url("{{ images.promo_bg_desktop }}");
    --bg-image-m: url("{{ images.promo_bg_mobile }}");
    --game-logo: url("{{ images.promo_game_logo }}");
  }
    </style>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
    title_animate: {
      type: Boolean,
      required: true,
    },
    subtitle1: {
      type: String,
      required: true,
    },
    main_heading: {
      type: String,
      required: true,
    },
    subtitle2: {
      type: String,
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
    signup_button: {
      type: String,
      required: true,
    },
    signup_button_redirect_url: {
      type: String,
      required: true,
    },
    small_term_text: {
      type: String,
      required: true,
    },
    small_term_text_link: {
      type: String,
      required: true,
    },
    small_term_redirect_url: {
      type: String,
      required: true,
    },
    promo_title_animate: {
      type: Boolean,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
  },
  data: {
    title_animate: true,
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
  background: var(--bg-image) no-repeat top center;
  background-size: cover;
}

#stripblank-nobg { background: none; }

@media only screen and (max-width: 991px) {
  /* #signup-btn { margin-bottom: 2.5rem; } */
}

@media only screen and (max-width: 575px) {
  #strip-container {
    background: var(--bg-image-m) no-repeat top center;
    background-size: cover;
  }
}
.spacer { margin: 6rem 0; }
.sign {
  color: #ffe6ff;
  text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
    -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
    0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
  animation: shine 2s forwards, flicker 3s infinite;
}
</style>