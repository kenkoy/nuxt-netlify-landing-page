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
  </div>
</template>

<script>
import TheHeaderSection from '~/components/templates/vjhp2/TheHeaderSection.vue';

export default {
  layout: 'vjhp',
  head() {
    return { 
      title: 'Vera&John - The fun online casino',
      htmlAttrs: {
        lang: 'ja',
      },
       bodyAttrs: {
        id: 'ja-jp',
      },
      style: [],
      script: [
        { src: '/marketing/js/page-hide.js', id: 'go_data', go_id: 'OPT-PHSNXP6' },
        { src: '/marketing/js/google-analytics.js', id: 'ga_data', go_id: 'OPT-PHSNXP6', ga_id: 'UA-142143961-1' },
        { src: '/marketing/js/google-tag-manager.js', id: 'gtm_data', gtm_id: 'GTM-MFD3NKM'},
      ],
      noscript: [
        {
          hid: 'gtmBody',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id='GTM-MFD3NKM'" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          pbody: true
        },
      ],
    }
  },
  components: {
    TheHeaderSection
  },
  async asyncData() {
    try {
      const post = await import(
        '~/assets/content/landing-page/marketing/vjhp/vera-john-homepage.md'
      );
      return {
        post,
      };
    } catch (error) {
      return false;
    }
  },
};
</script>