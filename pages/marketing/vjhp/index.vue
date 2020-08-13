<template>
  <div>
    <TheLoginHeaderSection
      :title="post.attributes.promo_banner.promo_title"
      :login_header_text="post.attributes.login_header_section.login_header_text"
      :login_header_redirect_url="post.attributes.login_header_section.login_header_redirect_url"
    />
    <TheHeaderSection
      :homepage_title="post.attributes.header_section.homepage_title || '' "
      :header_text="post.attributes.header_section.header_text"
      :header_button_redirect_url="post.attributes.header_section.header_button_redirect_url"
      :header_login_account_text="post.attributes.header_section.header_login_account_text"
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
import TheLoginHeaderSection from "~/components/templates/vjhp/TheLoginHeaderSection.vue";
import TheHeaderSection from "~/components/templates/vjhp/TheHeaderSection.vue";
import TheSection2 from "~/components/templates/vjhp/TheSection2.vue";
import TheGamesBrickSection from "~/components/templates/vjhp/TheGamesBrickSection.vue";
import TheSection4 from "~/components/templates/vjhp/TheSection4.vue";
import TheSection5 from "~/components/templates/vjhp/TheSection5.vue";
import TheTestimonialSection from "~/components/templates/vjhp/TheTestimonialSection.vue";
import TheSection7 from "~/components/templates/vjhp/TheSection7.vue";
import TheFooterSection from "~/components/templates/vjhp/TheFooterSection.vue";

export default {
  layout: 'vjhp',
  head() {
    return { 
      title: 'Vera&John Homepage',
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