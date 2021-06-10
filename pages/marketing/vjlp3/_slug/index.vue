<template>
  <div>
    <TheHeader
      :header_login_button="post.attributes.promo_banner.promo_login_button"
      :header_login_button_redirect_url="post.attributes.promo_banner.promo_login_button_redirect_url"
      :header_join_button="post.attributes.promo_banner.promo_join_button"
      :header_join_button_redirect_url="post.attributes.promo_banner.promo_join_button_redirect_url"
    />
    <TheBanner
      :promo_title="post.attributes.promo_banner.promo_title"
      :promo_title_display="post.attributes.promo_banner.promo_title_display"
      :promo_description="post.attributes.promo_banner.promo_subtitle"
      :promo_join_button="post.attributes.promo_banner.promo_join_button"
      :promo_join_button_location="post.attributes.promo_banner.promo_join_button_location"
      :promo_join_button_redirect_url="post.attributes.promo_banner.promo_join_button_redirect_url"
      :images="post.attributes.promo_banner.promo_images"
    />
    <TheGameSlider :game="post.attributes.promo_banner.game_images" />
    <TheBody :promo_content="post.html" />
    <TheFooter
      :promo_language_code="post.attributes.promo_locale.promo_language_code"
      :promo_country_code="post.attributes.promo_locale.promo_country_code"
      :landing_page_type="'verajohn'"
    />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/vjlp/vjlp3/TheHeader.vue'
import TheBanner from '~/components/templates/vjlp/vjlp3/TheBanner.vue'
import TheGameSlider from '~/components/templates/vjlp/vjlp3/TheGameSlider.vue'
import TheBody from '~/components/templates/vjlp/vjlp3/TheBody.vue'
import TheFooter from '~/components/templates/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheBanner,
    TheGameSlider,
    TheBody,
    TheFooter
  },
  layout: 'vjlp3',
  async asyncData ({ params }) {
    try {
      const post = await import(
        '~/assets/content/landing-page/marketing/vjlp3/' + params.slug + '.md'
      )
      return {
        post
      }
    } catch (error) {
      return false
    }
  },
  head () {
    const goId = (this.post.attributes.field_ids && this.post.attributes.field_ids.go_container_id)
      ? this.post.attributes.field_ids.go_container_id
      : 'OPT-PHSNXP6'

    const gaId = (this.post.attributes.field_ids && this.post.attributes.field_ids.ga_tracking_id)
      ? this.post.attributes.field_ids.ga_tracking_id
      : 'UA-142143961-1'

    const gtmId = (this.post.attributes.field_ids && this.post.attributes.field_ids.gtm_container_id)
      ? this.post.attributes.field_ids.gtm_container_id
      : 'GTM-MFD3NKM'

    return {
      title: 'Vera&John',
      htmlAttrs: {
        lang: this.post.attributes.promo_locale.promo_language_code
      },
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ],
      bodyAttrs: {
        id: this.post.attributes.promo_locale.promo_language_code +
          '-' + this.post.attributes.promo_locale.promo_country_code
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
          type: 'text/javascript',
          charset: 'utf-8'
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
          type: 'text/javascript',
          charset: 'utf-8'
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
          type: 'text/javascript',
          charset: 'utf-8'
        }
      ],
      noscript: [
        {
          hid: 'gtmBody',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id='${gtmId}'" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          pbody: true
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        gtmBody: ['innerHTML'],
        gtmHead: ['innerHTML'],
        goHead: ['innerHTML'],
        gaHead: ['innerHTML']
      }
    }
  }
}
</script>
