<template>
    <div>
    </div>
</template>

<script>

export default {
    layout: 'vjlp5',
    head() {
      const goId = (this.dataMD.attributes.field_ids && this.dataMD.attributes.field_ids.go_container_id) ?
        this.dataMD.attributes.field_ids.go_container_id : 'OPT-PHSNXP6';

      const gaId = (this.dataMD.attributes.field_ids && this.dataMD.attributes.field_ids.ga_tracking_id) ?
        this.dataMD.attributes.field_ids.ga_tracking_id : 'UA-142143961-1';

      const gtmId = (this.dataMD.attributes.field_ids && this.dataMD.attributes.field_ids.gtm_container_id) ?
        this.dataMD.attributes.field_ids.gtm_container_id : 'GTM-MFD3NKM';

      return {
        title: 'Vera&John',
        htmlAttrs: {
          lang: this.dataMD.attributes.promo_locale.promo_language_code,
        },
        bodyAttrs: {
          id: this.dataMD.attributes.promo_locale.promo_language_code +
            '-' + this.dataMD.attributes.promo_locale.promo_country_code,
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
      };
    },
    data: () => ({
        dataMD: { },
    }),
    mounted(){
      this.emitData(this.dataMD)
    },
    async asyncData({ params }) {
      try {
          /* get MD FILE per PAGE / SLUG */
          const PAGE_MDFILE = await import(
            '~/assets/content/landing-page/marketing/vjlp5/' + params.slug + '.md'
          );

          /* store 'PAGE_MDFILE' data to 'dataMD' local variable' */
          return { dataMD: PAGE_MDFILE }

      } catch (error) {
          return false;
      }
    },
    methods: {
        /* send the 'dataMD' data to 'LAYOUT' */
        emitData(dataMD){
            this.$emit('emitMDcontent', dataMD)
        }
    },
};
</script>
