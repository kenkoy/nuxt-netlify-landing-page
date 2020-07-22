<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <a href="#" class="bf-logo"></a>
          <div class="bf-btn-container" style="display:inline-block;">
            <a id="login-btn-u" v-bind:href="header_login_button_redirect_url">
              <div class="bf-button bf-third-bg">{{header_login_button}}</div>
            </a>
            <a id="signup-btn-u" v-bind:href="header_join_button_redirect_url">
              <div class="bf-button bf-secondary-bg">{{header_join_button}}</div>
            </a>
          </div>
        </div>
      </div>
      <style>
      :root {
        --bg-image: url('{{ images.promo_bg_desktop }}');
        --bg-image-m: url('{{ images.promo_bg_mobile }}');
      }
    </style>
    </div>
  </header>
</template>

<script scoped>

export default {
  name: "Header",
  props: {
    header_login_button: {
      type: String,
      required: true
    },
    header_login_button_redirect_url: {
      type: String,
      required: true
    },
    header_join_button: {
      type: String,
      required: true
    },
    header_join_button_redirect_url: {
      type: String,
      required: true
    },
    images: {
      type: Object,
      required: true
    }
  }
};
</script>

<style> 
  #bf-banner { background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url("~assets/images/vjlp3/bg.jpg") center no-repeat; background-size: cover; }

  #strip .small-terms { display: block; } #strip { background:none; }
  #bf-banner-img-2 { 
    background: var(--bg-image) bottom center no-repeat; 
    background-size: contain; 
  }
  @media only screen and (max-width: 767px) {
    #bf-banner-img-2 { 
      background: var(--bg-image-m) bottom center no-repeat; 
      background-size: contain; }
  }
  .imgHolder {
    width: 100%;
    background-size: contain;
  }
</style>