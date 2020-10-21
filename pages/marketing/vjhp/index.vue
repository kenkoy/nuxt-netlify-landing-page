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
import TheLoginHeaderSection from '~/components/templates/vjhp/TheLoginHeaderSection.vue';
import TheHeaderSection from '~/components/templates/vjhp/TheHeaderSection.vue';
import TheSection2 from '~/components/templates/vjhp/TheSection2.vue';
import TheGamesBrickSection from '~/components/templates/vjhp/TheGamesBrickSection.vue';
import TheSection4 from '~/components/templates/vjhp/TheSection4.vue';
import TheSection5 from '~/components/templates/vjhp/TheSection5.vue';
import TheTestimonialSection from '~/components/templates/vjhp/TheTestimonialSection.vue';
import TheSection7 from '~/components/templates/vjhp/TheSection7.vue';
import TheFooterSection from '~/components/templates/vjhp/TheFooterSection.vue';

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
    TheLoginHeaderSection,
    TheHeaderSection,
    TheSection2,
    TheGamesBrickSection,
    TheSection4,
    TheSection5,
    TheTestimonialSection,
    TheSection7,
    TheFooterSection,
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