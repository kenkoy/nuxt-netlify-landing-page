<template>
  <div />
</template>

<script>

export default {
  layout: 'marketing/iclp3v2',
  async asyncData ({ params, error }) {
    try {
      /* get MD FILE per PAGE / SLUG */
      const PAGE_MDFILE = await import(
        '~/assets/content/landing-page/marketing/iclp3/' + params.slug + '.md'
      )

      /* store 'PAGE_MDFILE' data to 'dataMD' local variable' */
      return { dataMD: PAGE_MDFILE }
    } catch (e) {
      error(e)
    }
  },
  data () {
    return {}
  },
  head () {
    const goId = (this.dataMD.attributes.field_ids && this.dataMD.attributes.field_ids.go_container_id)
      ? this.dataMD.attributes.field_ids.go_container_id
      : 'OPT-PHSNXP6'

    const gaId = (this.dataMD.attributes.field_ids && this.dataMD.attributes.field_ids.ga_tracking_id)
      ? this.dataMD.attributes.field_ids.ga_tracking_id
      : 'UA-142143961-1'

    const gtmId = (this.dataMD.attributes.field_ids && this.dataMD.attributes.field_ids.gtm_container_id)
      ? this.dataMD.attributes.field_ids.gtm_container_id
      : 'GTM-MFD3NKM'

    return {
      title: 'インターカジノ',
      htmlAttrs: {
        lang: this.dataMD.attributes.promo_locale.promo_language_code
      },
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ],
      bodyAttrs: {
        id: this.dataMD.attributes.promo_locale.promo_language_code +
            '-' + this.dataMD.attributes.promo_locale.promo_country_code
      },
      link: [
        { rel: 'shortcut icon', href: '/marketing/ic-favicon.ico', type: 'image/x-icon' }
        // { rel: 'stylesheet', href: '/marketing/styles/iclp3/spine-player.min.css' },
        // { rel: 'stylesheet', href: 'https://esotericsoftware.com/files/spine-player/3.8/spine-player.css' },
        // { rel: 'stylesheet', href: '/marketing/styles/iclp3/firstview.css' },
        // { rel: 'stylesheet', body: true, href: '/marketing/styles/iclp3/style.css' }
        // { preload: true, rel: 'stylesheet', body: true, href: '/marketing/styles/iclp3/fonts.css' }
      ],
      style: [],
      script: [
        { src: '/marketing/js/iclp3/spine.js' },
        { defer: true, body: true, src: '/marketing/js/iclp3/velocity.min.js' },
        { defer: true, async: true, body: true, src: '/marketing/js/iclp3/scripts.min.js' },
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
  },
  mounted () {
    this.emitData(this.dataMD)
  },
  methods: {
    /* send the 'dataMD' data to 'LAYOUT' */
    emitData (dataMD) {
      this.$emit('emit-md-content', dataMD)
    }
  }
}
</script>
