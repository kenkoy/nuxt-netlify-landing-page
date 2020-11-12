<template>
  <section id="bf-banner" :style="cssBackground">
    <div class="container">
      <div class="row">
        <div id="bf-banner-img-2" class="col-lg-12">
          <h1 v-if="promo_title_display">{{ promo_title }}</h1>
          <h2>{{ promo_description }}</h2>
          <div :class="promo_join_button_location">
            <a class="signup-btn d-none d-lg-block" 
              :href="promo_join_button_redirect_url">
              <div class="bf-button bf-secondary-bg">
                <!-- <p>
                  今
                  <span style="background-color: initial; font-size: 1.063em;">すぐプレイ</span>
                </p> -->
                {{ promo_join_button }}
              </div>
            </a>
          </div>
        </div>
        <div class="d-block d-lg-none col-12">
          <div class="center-button"
            :class="{ hidden: promo_join_button_location === 'hidden' }">
            <a class="signup-btn" :href="promo_join_button_redirect_url">
              <div class="bf-button bf-secondary-bg">
                <!-- <p>
                  今
                  <span style="background-color: initial; font-size: 1.063em;">すぐプレイ</span>
                </p> -->
                {{ promo_join_button }}
              </div>
            </a>
          </div>
          <div style="margin: 20px 0;"></div>
          <!-- <div id="strip" class="col-12 align-bottom"></div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    images: {
      type: Object,
      required: true,
    },
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
      default: '',
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
  computed: {
    cssBackground: function () {
      return {
        '--bg-image': `url('${this.images.promo_bg_desktop}')`,
        '--bg-image-m': `url('${this.images.promo_bg_mobile}')`,
        '--bg-banner': `url('${this.images.promo_bg_banner}')`
      }
    }
  }
};
</script>

<style scoped>
#bf-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
    var(--bg-banner) center no-repeat;
  background-size: cover;
}
#strip .small-terms {
  display: block;
}
#strip {
  background: none;
}
#bf-banner-img-2 {
  background: var(--bg-image) bottom center no-repeat;
  background-size: contain;
}
@media only screen and (max-width: 767px) {
  #bf-banner-img-2 {
    background: var(--bg-image-m) bottom center no-repeat;
    /* background-size: cover; */
    background-size: contain;
  }
}

@media only screen and (max-width: 480px) {
  .bf-logo {
    width: 75px !important;
  }
  #bf-banner-img-2 {
    min-height: 350px;
  }
}


.hidden { display: none; }

.upper-left { position: absolute; }

.lower-right {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
</style>