<template>
  <div />
</template>

<script>
export default {
  layout: 'marketing/iclp2v2', // Change to actual layout
  async asyncData ({ params, error }) {
    try {
      const markDownData = await import('~/assets/content/landing-page/marketing/iclp2/' + params.slug + '.md') // Change to actual slug
      return { markDownData }
    } catch (e) {
      error(e)
    }
  },
  head () {
    const tagIds = this.markDownData.attributes.field_ids
    const goId = tagIds.go_container_id || 'OPT-PHSNXP6'
    const gaId = tagIds.ga_tracking_id || 'UA-142143961-1'
    const gtmId = tagIds.gtm_container_id || 'GTM-MFD3NKM'

    return {
      title: 'インターカジノ',
      htmlAttrs: {
        lang: this.markDownData.attributes.promo_locale.promo_language_code
      },
      bodyAttrs: {
        id: this.markDownData.attributes.promo_locale.promo_language_code +
          '-' + this.markDownData.attributes.promo_locale.promo_country_code
      },
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ],
      link: [
        { rel: 'shortcut icon', href: '/marketing/ic-favicon.ico', type: 'image/x-icon' }
      ],
      script: [
        {
          hid: 'goHead',
          innerHTML:
            `(function (a, s, y, n, c, h, i, d, e) {
              s.className += ' ' + y; h.start = 1 * new Date;
              h.end = i = function () { s.className = s.className.replace(RegExp(' ?' + y), '') };
              (a[n] = a[n] || []).hide = h; setTimeout(function () { i(); h.end = null }, c); h.timeout = c;
            })(window, document.documentElement, 'async-hide', 'dataLayer', 4000,
              { '${goId}': true })`
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
            ga('send', 'pageview');`
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
            })(window, document, 'script', 'dataLayer', '${gtmId}');`
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
  },
  mounted () {
    this.emitData(this.markDownData)
  },
  methods: {
    emitData (data) {
      this.$root.$emit('iclp2-data', { // Change to actual page name
        yamlData: data.attributes,
        htmlData: data.html
      })
    }
  }
}
</script>
