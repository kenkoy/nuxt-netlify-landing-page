<template>
  <div>
   <TheHeader
      :registrationMessage="post.attributes.promo_banner.promo_register_message"
      :joinMessage="post.attributes.promo_banner.promo_join_text"
      :joinURL="post.attributes.promo_banner.promo_join_url"
      :termsText="post.attributes.promo_banner.promo_terms_text"
      :underlinedLinkText="post.attributes.promo_banner.promo_terms_underlined_text"
    />
    <TheBonus 
      :bonusData="post.attributes.bonus"
    />
    <ThePayment />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/iclp/iclp3/TheHeader.vue'
import TheBonus from '~/components/templates/iclp/iclp3/TheBonus.vue'
import ThePayment from '~/components/templates/iclp/iclp3/ThePayment.vue'
import TheBody from '~/components/templates/iclp/iclp3/TheBody.vue'
import TheFooter from '~/components/templates/iclp/iclp3/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheBonus,
    ThePayment,
    TheBody,
    TheFooter,
  },
  layout: 'iclp3',
  head() {
    const goId = (this.post.attributes.field_ids && this.post.attributes.field_ids.go_container_id) ?
      this.post.attributes.field_ids.go_container_id : 'OPT-PHSNXP6';

    const gaId = (this.post.attributes.field_ids && this.post.attributes.field_ids.ga_tracking_id) ?
      this.post.attributes.field_ids.ga_tracking_id : 'UA-142143961-1';

    const gtmId = (this.post.attributes.field_ids && this.post.attributes.field_ids.gtm_container_id) ?
      this.post.attributes.field_ids.gtm_container_id : 'GTM-MFD3NKM';
    
    return {
      title: 'インターカジノ',
      htmlAttrs: {
        lang: this.post.attributes.promo_locale.promo_language_code
      },
      bodyAttrs: {
        id: this.post.attributes.promo_locale.promo_language_code + '-' 
          + this.post.attributes.promo_locale.promo_country_code
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
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/marketing/iclp3/' + params.slug + '.md');
      return { post }
    } catch (error) {
      return false
    }
  }
}
</script>