<template>
  <div>
    <loginHeaderSection
      :login_header_text = "post.attributes.login_header_section.login_header_text"
      :login_header_redirect_url = "post.attributes.login_header_section.login_header_redirect_url" />
    <headerSection
      :header_text = "post.attributes.header_section.header_text"
      :header_button_redirect_url = "post.attributes.header_section.header_button_redirect_url"
      :header_login_account_text = "post.attributes.header_section.header_login_account_text"
      :header_login_account_text_redirect_url = "post.attributes.header_section.header_login_account_text_redirect_url" />
    <section2 />
    <gamesBrick
      :games_brick_column_1_button = "post.attributes.games_brick_section.games_brick_column_1_button"
      :games_brick_column_2_button = "post.attributes.games_brick_section.games_brick_column_2_button"
      :games_brick_column_1_button_redirect_url = "post.attributes.games_brick_section.games_brick_column_1_button_redirect_url"
      :games_brick_column_2_button_redirect_url = "post.attributes.games_brick_section.games_brick_column_2_button_redirect_url" />
    <section4 />
    <section5 />
    <testimonialSection
      :testimonials_button_text = "post.attributes.testimonials_section.testimonials_button_text"
      :testimonials_button_redirect_url = "post.attributes.testimonials_section.testimonials_button_redirect_url" />
    <section7 />
    <footerSection
      :footer_menu_1_text = "post.attributes.footer_section.footer_menu_1_text"
      :footer_menu_2_text = "post.attributes.footer_section.footer_menu_2_text"
      :footer_menu_3_text = "post.attributes.footer_section.footer_menu_3_text"
      :footer_menu_4_text = "post.attributes.footer_section.footer_menu_4_text"
      :footer_menu_1_redirect_url = "post.attributes.footer_section.footer_menu_1_redirect_url"
      :footer_menu_2_redirect_url = "post.attributes.footer_section.footer_menu_2_redirect_url"
      :footer_menu_3_redirect_url = "post.attributes.footer_section.footer_menu_3_redirect_url"
      :footer_menu_4_redirect_url = "post.attributes.footer_section.footer_menu_4_redirect_url" />
  </div>
</template>

<script>
import loginHeaderSection from '~/components/templates/vjhp/loginHeaderSection.vue'
import headerSection from '~/components/templates/vjhp/headerSection.vue'
import section2 from '~/components/templates/vjhp/section2.vue'
import gamesBrick from '~/components/templates/vjhp/gamesBrick.vue'
import section4 from '~/components/templates/vjhp/section4.vue'
import section5 from '~/components/templates/vjhp/section5.vue'
import testimonialSection from '~/components/templates/vjhp/testimonialSection.vue'
import section7 from '~/components/templates/vjhp/section7.vue'
import footerSection from '~/components/templates/vjhp/footerSection.vue'

export default {
  components: {
    loginHeaderSection,
    headerSection,
    section2,
    gamesBrick,
    section4,
    section5,
    testimonialSection,
    section7,
    footerSection
  },
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/marketing/vjhp/'+ params.slug +'.md')
      return {
        post
      }
    } catch (error) {
      return false
    }
  }
}
</script>