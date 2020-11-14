<template>
  <div :class="{ vjlp6_wrapper: true }">
    <div class="vjlp6-main">
      <!-- PAGE HANDLING DATA -->
      <Vjlp6Data @emitMDcontent="getMDcontent" />

      <div v-for="(data_items, data_index) in md_data" :key="data_index">
        <section id="hero" :style="cssBackground">
          <a id="login-btn" :href="data_items.attributes.promo_banner.promo_login_button_redirect_url" class="login hvr-pulse">
            <div class="animated fadeIn">
              <i class="material-icons">exit_to_app</i>
              <div class="login-txt">
                <p>{{ data_items.attributes.promo_banner.promo_login_button }}</p>
              </div>
            </div>
          </a>
          <div class="container">
            <div class="strip">
              <img src="@/assets/images/vjlp6/vj-logo.png" data-not-lazy alt="logo"/>
              <div>
                <div v-if="titleFirst">
                  <h1 v-if="data_items.attributes.promo_banner.promo_title"
                    v-html="bannerTitle(
                      data_items.attributes.promo_banner.promo_title,
                      data_items.attributes.promo_banner.promo_title_highlighted)"
                  ></h1>
                  <h2 v-if="data_items.attributes.promo_banner.promo_subtitle"
                    v-html="bannerSubtitle(
                      data_items.attributes.promo_banner.promo_subtitle,
                      data_items.attributes.promo_banner.promo_promo_subtitle_highlighted)"
                  ></h2>
                </div>
                <div v-else>
                  <h2 v-if="data_items.attributes.promo_banner.promo_subtitle"
                    v-html="bannerSubtitle(
                      data_items.attributes.promo_banner.promo_subtitle,
                      data_items.attributes.promo_banner.promo_promo_subtitle_highlighted)"
                  ></h2>
                  <h1 v-if="data_items.attributes.promo_banner.promo_title"
                    v-html="bannerTitle(
                      data_items.attributes.promo_banner.promo_title,
                      data_items.attributes.promo_banner.promo_title_highlighted)"
                  ></h1>
                </div>
                <button class="animated pulse infinite">
                  <a :href="data_items.attributes.promo_banner.promo_join_button_redirect_url">{{data_items.attributes.promo_banner.promo_join_button}}</a></button>
                <div class="small-terms banner-terms" data-v-835fbe4a="">
                  <a href="#terms" class="link-terms-conditions ctac"
                    >{{data_items.attributes.promo_banner.promo_terms_link_text}}</a
                  >{{data_items.attributes.promo_banner.promo_terms_text}}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="steps">
          <div class="container column-3">
            <div class="animated fadeIn delay-halfs">
              <span class="num">1</span>
              <div>
                <h2>{{ data_items.attributes.promo_steps.promo_step_1_title }}</h2>
                <p>{{ data_items.attributes.promo_steps.promo_step_1_desc }}</p>
              </div>
            </div>

            <div class="animated fadeIn delay-1s">
              <span class="num">2</span>
              <div>
                <h2>{{ data_items.attributes.promo_steps.promo_step_2_title }}</h2>
                <p>{{ data_items.attributes.promo_steps.promo_step_2_desc }}</p>
              </div>
            </div>

            <div class="animated fadeIn delay-1-and-halfs">
              <span class="num">3</span>
              <div>
                <h2>{{ data_items.attributes.promo_steps.promo_step_3_title }}</h2>
                <p>{{ data_items.attributes.promo_steps.promo_step_3_desc }}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="section3">
          <div class="container">
            <div class="separator"></div>
          </div>
        </section>

        <div v-html="html"></div>

        <Footer
          :promo_language_code="language"
          :promo_country_code="country_code"
          :landing_page_type="'verajohn'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vjlp6Data from "~/pages/marketing/vjlp6/_slug/index.vue";
import Footer from "~/components/Base/TheFooter.vue";

export default {
  data() {
    return {
      layout: false,
      desktop: true,
      mobile: false,
      titleFirst: true,
      md_data: {},
      language: "",
      country_code: "",
      html: "",
      desktop: "",
      tablet: "",
      mobile: "",
    };
  },
  components: {
    Vjlp6Data,
    Footer,
  },
  computed: {
    cssBackground: function () {
      return {
        "--bg-image": `url('${this.desktop}')`,
        "--bg-image-m": `url('${this.mobile}')`,
        "--bg-banner": `url('${this.tablet}')`,
      };
    },
  },

  bannerTerms: function () {
    let termsText = this.termsText;
    this.termsLinkText
      .filter((linkText) => linkText)
      .forEach((linkText) => {
        if (this.termsText.includes(linkText)) {
          termsText = termsText.replace(
            linkText,
            `<a href="#terms" class="link-terms-conditions ctac">${linkText}</a>`
          );
        }
      });
    return termsText;
  },
  methods: {
    /* data from 'PAGE' store to 'md_data' local variable */
    getMDcontent: function (emitData) {
      this.md_data = [emitData];
      console.log(this.md_data);
      this.md_data.forEach((item) => {
        this.language = item.attributes.promo_locale.promo_language_code;
        this.country_code = item.attributes.promo_locale.promo_country_code;
        this.html = item.html;
        this.desktop =
          item.attributes.promo_banner.promo_images.promo_bg_desktop;
        this.tablet = item.attributes.promo_banner.promo_images.promo_bg_banner;
        this.mobile = item.attributes.promo_banner.promo_images.promo_bg_mobile;
      });
    },
    bannerTitle: function (title, title_highlighted) {
    let bannerTitle = title
      .split(/\r?\n/)
      // .filter(title => title)
      .map((title) =>
        title.slice(-1) === "\\" ? title.substring(0, title.length - 1) : title
      );

    let idx = 0;
    title_highlighted
      .filter((phrase) => phrase)
      .forEach((phrase) => {
        while (bannerTitle.length > idx) {
          if (bannerTitle[idx].includes(phrase)) {
            bannerTitle[idx] = bannerTitle[idx].replace(
              phrase,
              `<font color="#ffd966"><b>${phrase}</b></font>`
            );
            break;
          } else {
            idx++;
          }
        }
      });

    return bannerTitle.reduce((oldVal, newVal) => {
      return oldVal + "<br />" + newVal;
    });
  },
  bannerSubtitle: function (subtitle, subtitle_highlighted) {
    let bannerSubTitle = subtitle
      .split(/\r?\n/)
      // .filter(title => title)
      .map((title) =>
        title.slice(-1) === "\\" ? title.substring(0, title.length - 1) : title
      );

    let idx = 0;
    subtitle_highlighted
      .filter((phrase) => phrase)
      .forEach((phrase) => {
        while (bannerSubTitle.length > idx) {
          if (bannerSubTitle[idx].includes(phrase)) {
            bannerSubTitle[idx] = bannerSubTitle[idx].replace(
              phrase,
              `<span class="color-alt-two">${phrase}</span>`
            );
            break;
          } else {
            idx++;
          }
        }
      });
    return bannerSubTitle.reduce((oldVal, newVal) => {
      return oldVal + "<br />" + newVal;
    });
  },
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.language,
      },
      link: [
        {
          rel: "shortcut icon",
          href: "/marketing/vj-favicon.ico",
          type: "image/x-icon",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.vjlp6_wrapper {
  @import "@/assets/sass/base/fonts.css";
  @import "@/assets/sass/vjlp6/style.scss";
  @import "@/assets/sass/base/style.scss";
}
</style>
