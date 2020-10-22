<template>
  <div>
    <TheHeader 
      :title = "post.attributes.promo_banner.promo_title"
      :title_display = "post.attributes.promo_banner.promo_title_display"
      :subtitle1 = "post.attributes.promo_banner.promo_subtitle_1"
      :main_heading = "post.attributes.promo_banner.promo_main_heading"
      :title_animate = "post.attributes.promo_banner.promo_title_animate"
      :subtitle2 = "post.attributes.promo_banner.promo_subtitle_2"
      :login_button = "post.attributes.promo_banner.promo_login_button_text"
      :login_button_redirect_url = "post.attributes.promo_banner.promo_login_button_redirect_url"
      :signup_button = "post.attributes.promo_banner.promo_signup_button"
      :signup_button_redirect_url = "post.attributes.promo_banner.promo_signup_button_redirect_url"
      :small_term_text = "post.attributes.promo_banner.promo_smallterm_text"
      :small_term_text_link = "post.attributes.promo_banner.promo_smallterm_text_link"
      :small_term_redirect_url = "post.attributes.promo_banner.promo_smallterm_redirect_url" 
      :images = "post.attributes.promo_banner.promo_images"
    />
    <TheSteps 
      :title1 = "post.attributes.promo_steps.promo_step_1_title"
      :description1 = "post.attributes.promo_steps.promo_step_1_desc"
      :title2 = "post.attributes.promo_steps.promo_step_2_title"
      :description2 = "post.attributes.promo_steps.promo_step_2_desc"
      :title3 = "post.attributes.promo_steps.promo_step_3_title"
      :description3 = "post.attributes.promo_steps.promo_step_3_desc"
    />
    <ThePayment
      :promo_language_code = "post.attributes.promo_locale.promo_language_code"
      :promo_country_code = "post.attributes.promo_locale.promo_country_code" />
    <TheBody
      :promo_content = "post.html"
      :landing_page_type="'intercasino'"
    />
    <TheFooter 
      :promo_language_code = "post.attributes.promo_locale.promo_language_code"
      :promo_country_code = "post.attributes.promo_locale.promo_country_code"
      :landing_page_type="'intercasino'"
    />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/iclp/iclp1/TheHeader.vue'
import TheSteps from '~/components/templates/iclp/iclp1/TheSteps.vue'
import TheBody from '~/components/templates/TheBody.vue'
import ThePayment from '~/components/templates/ThePayment.vue'
import TheFooter from '~/components/templates/TheFooter.vue'

export default {
  layout: 'iclp1',
  head() {
    const goId = (this.post.attributes.field_ids && this.post.attributes.field_ids.go_container_id) ?
      this.post.attributes.field_ids.go_container_id : 'OPT-PHSNXP6';

    const gaId = (this.post.attributes.field_ids && this.post.attributes.field_ids.ga_tracking_id) ?
      this.post.attributes.field_ids.ga_tracking_id : 'UA-142143961-1';

    const gtmId = (this.post.attributes.field_ids && this.post.attributes.field_ids.gtm_container_id) ?
      this.post.attributes.field_ids.gtm_container_id : 'GTM-MFD3NKM';
    
    return { 
      title: 'InterCasino',
      htmlAttrs: {
        lang: this.post.attributes.promo_locale.promo_language_code
      },
      bodyAttrs: {
        id: this.post.attributes.promo_locale.promo_language_code+
        '-'+this.post.attributes.promo_locale.promo_country_code
      },
      style: [],
      script: [
        {
          hid: 'goHead',
          innerHTML:
            `(function (a, s, y, n, c, h, i, d, e) {
              s.className += ' ' + y; h.start = 1 * new Date;
              h.end = i = function () { s.className = s.className.replace(RegExp(' ?' + y), '') };
              (a[n] = a[n] || []).hide = h; setTimeout(function () { i(); h.end = null }, c); h.timeout = c;
            })(window, document.documentElement, 'async-hide', 'dataLayer', 4000,
              { '${goId}': true })`,
        },
        {
          hid: 'gaHead',
          innerHTML: `
            (function (i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
              }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', '${gaId}', 'auto');
            ga('require', '${goId}');
            ga('send', 'pageview');`,
        },
        {
          hid: 'gtmHead',
          innerHTML: `
            (function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({
                'gtm.start':
                  new Date().getTime(), event: 'gtm.js'
              }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                  'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', '${gtmId}');`,
        }
      ],
      noscript: [
        {
          hid: 'gtmBody',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id='${gtmId}'" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          pbody: true
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        gtmBody: ['innerHTML'],
        gtmHead: ['innerHTML'],
        goHead: ['innerHTML'],
        gaHead: ['innerHTML'],
      }
    } 
  },
  components: {
    TheHeader,
    TheSteps,
    TheBody,
    ThePayment,
    TheFooter
  },
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/marketing/iclp1/'+ params.slug +'.md')
      return {
        post
      }
    } catch (error) {
      return false
    }
  }
}
</script>