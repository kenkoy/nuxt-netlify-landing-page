<template>
  <section id="bf-banner">
    <div class="container">
      <div class="row">
        <div id="bf-banner-img-2" class="col-lg-12">
          <h1 v-if="promo_title_display">{{promo_title}}</h1>
          <h2>{{promo_description}}</h2>
          <div :class="promo_join_button_location">
            <a class="signup-btn d-none d-lg-block" v-bind:href="promo_join_button_redirect_url">
              <div class="bf-button bf-secondary-bg">{{promo_join_button}}</div>
            </a>
          </div>
        </div>
        <div class="d-block d-lg-none col-12">
          <div class="center-button" :class="{ hidden: promo_join_button_location === 'hidden' }">
            <a class="signup-btn" v-bind:href="promo_join_button_redirect_url">
              <div class="bf-button bf-secondary-bg">{{promo_join_button}}</div>
            </a>
          </div>
        </div>
        <div id="strip" class="col-12 align-bottom"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Promotion',
  props: {
    promo_title: {
      type: String,
      required: true,
    },
    promo_title_display: {
      type: Boolean,
      required: true,
    },
    promo_description: {
      type: String,
      default: "",
      required: false,
    },
    promo_join_button: {
      type: String,
      required: true,
    },
    promo_join_button_location: {
      type: String,
      default: 'hidden',
      required: false,
    },
    promo_join_button_redirect_url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.hidden { display: none; }

.upper-left { position: absolute; }

.lower-right {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
</style>