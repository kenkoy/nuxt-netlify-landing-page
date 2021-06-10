<template>
  <div>
    <TheHeaderSection
      :homepage_title="post.attributes.header_section.homepage_title || '' "
      :header_section_top_text="post.attributes.header_section.header_section_top_text"
      :header_section_top_login_text="post.attributes.header_section.header_section_top_login_text"
      :header_section_top_login_text_url="post.attributes.header_section.header_section_top_login_text_url"
      :header_section_welcome_message="post.attributes.header_section.header_section_welcome_message"
      :header_section_main_heading="post.attributes.header_section.header_section_main_heading"
      :header_section_heading_subtitle="post.attributes.header_section.header_section_heading_subtitle"
      :header_section_game_slider_1="post.attributes.header_section.header_section_game_slider_1"
      :header_section_game_slider_url_1="post.attributes.header_section.header_section_game_slider_url_1"
      :header_section_game_slider_2="post.attributes.header_section.header_section_game_slider_2"
      :header_section_game_slider_url_2="post.attributes.header_section.header_section_game_slider_url_2"
      :header_section_game_slider_3="post.attributes.header_section.header_section_game_slider_3"
      :header_section_game_slider_url_3="post.attributes.header_section.header_section_game_slider_url_3"
      :header_section_game_slider_4="post.attributes.header_section.header_section_game_slider_4"
      :header_section_game_slider_url_4="post.attributes.header_section.header_section_game_slider_url_4"
      :header_section_game_slider_5="post.attributes.header_section.header_section_game_slider_5"
      :header_section_game_slider_url_5="post.attributes.header_section.header_section_game_slider_url_5"
      :header_section_game_slider_6="post.attributes.header_section.header_section_game_slider_6"
      :header_section_game_slider_url_6="post.attributes.header_section.header_section_game_slider_url_6"
      :header_section_best_deal_caption="post.attributes.header_section.header_section_best_deal_caption"
      :header_section_best_deal_image="post.attributes.header_section.header_section_best_deal_image"
      :header_section_best_deal_image_url="post.attributes.header_section.header_section_best_deal_image_url"
      :header_section_best_deal_small_caption="post.attributes.header_section.header_section_best_deal_small_caption"
      :header_section_register_button="post.attributes.header_section.header_section_register_button"
      :header_section_register_button_url="post.attributes.header_section.header_section_register_button_url"
      :header_section_account_text="post.attributes.header_section.header_section_account_text"
      :header_section_account_login="post.attributes.header_section.header_section_account_login"
      :header_section_account_login_url="post.attributes.header_section.header_section_account_login_url"
      :header_section_desktop_background_image="post.attributes.header_section.header_section_desktop_background_image"
      :header_section_mobile_background_image="post.attributes.header_section.header_section_mobile_background_image"
      :header_section_top_background_color="post.attributes.header_section.header_section_top_background_color"
      :header_login_account_text_redirect_url="post.attributes.header_section.header_login_account_text_redirect_url"
    />
    <TheSection2 />
    <TheGamesBrickSection
      :games_brick_column_1_button="post.attributes.games_brick_section.games_brick_column_1.games_brick_column_1_button"
      :games_brick_column_2_button="post.attributes.games_brick_section.games_brick_column_2.games_brick_column_2_button"
      :games_brick_column_1_button_redirect_url="post.attributes.games_brick_section.games_brick_column_1.games_brick_column_1_button_redirect_url"
      :games_brick_column_2_button_redirect_url="post.attributes.games_brick_section.games_brick_column_2.games_brick_column_2_button_redirect_url"
    />
    <TheSection4 />
    <TheSection5 />
    <TheTestimonialSection
      :testimonials_button_text="post.attributes.testimonials_section.testimonials_button_text"
      :testimonials_button_redirect_url="post.attributes.testimonials_section.testimonials_button_redirect_url"
    />
    <TheSection7 />
    <TheFooterSection
      :footer_menu_1_text="post.attributes.footer_section.footer_menu_1_text"
      :footer_menu_2_text="post.attributes.footer_section.footer_menu_2_text"
      :footer_menu_3_text="post.attributes.footer_section.footer_menu_3_text"
      :footer_menu_4_text="post.attributes.footer_section.footer_menu_4_text"
      :footer_menu_1_redirect_url="post.attributes.footer_section.footer_menu_1_redirect_url"
      :footer_menu_2_redirect_url="post.attributes.footer_section.footer_menu_2_redirect_url"
      :footer_menu_3_redirect_url="post.attributes.footer_section.footer_menu_3_redirect_url"
      :footer_menu_4_redirect_url="post.attributes.footer_section.footer_menu_4_redirect_url"
    />
  </div>
</template>

<script>
import TheHeaderSection from '~/components/templates/vjhp/TheHeaderSection.vue'
import TheSection2 from '~/components/templates/vjhp/TheSection2.vue'
import TheGamesBrickSection from '~/components/templates/vjhp/TheGamesBrickSection.vue'
import TheSection4 from '~/components/templates/vjhp/TheSection4.vue'
import TheSection5 from '~/components/templates/vjhp/TheSection5.vue'
import TheTestimonialSection from '~/components/templates/vjhp/TheTestimonialSection.vue'
import TheSection7 from '~/components/templates/vjhp/TheSection7.vue'
import TheFooterSection from '~/components/templates/vjhp/TheFooterSection.vue'

export default {
  components: {
    TheHeaderSection,
    TheSection2,
    TheGamesBrickSection,
    TheSection4,
    TheSection5,
    TheTestimonialSection,
    TheSection7,
    TheFooterSection
  },
  layout: 'vjhp',
  async asyncData () {
    try {
      const post = await import(
        '~/assets/content/landing-page/marketing/vjhp/vera-john-homepage.md'
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
      title: 'Vera&John - The fun online casino',
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ],
      bodyAttrs: {
        id: 'ja-jp'
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
