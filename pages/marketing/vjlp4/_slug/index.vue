<template>
  <div>
    <TheHeader 
      :loginText="post.attributes.promo_banner.promo_login_button"
      :loginURL="post.attributes.promo_banner.promo_login_button_redirect_url"
      :gameLargeSubtitle="post.attributes.promo_banner.promo_large_subtitle"
      :gameSmallSubtitle="post.attributes.promo_banner.promo_small_subtitle"
      :gameSmallSubtitleHighlighted="post.attributes.promo_banner.promo_small_subtitle_highlighted"
      :signUpText="post.attributes.promo_banner.promo_join_button"
      :signUpURL="post.attributes.promo_banner.promo_join_button_redirect_url"
      :termsText="post.attributes.promo_banner.promo_terms"
      :termsLinkText="post.attributes.promo_banner.promo_link_terms"
      :images="post.attributes.promo_banner.promo_images"
    />
    <TheSection
      :sectionData="post.attributes.section"
    />
    <ThePayment 
      :promo_language_code="post.attributes.promo_locale.promo_language_code"
      :promo_country_code="post.attributes.promo_locale.promo_country_code"
    />
    <TheBody v-if="post.html" :promo_content="post.html" />
    <TheFooter 
      :promo_language_code="post.attributes.promo_locale.promo_language_code"
      :promo_country_code="post.attributes.promo_locale.promo_country_code"
    />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/vjlp/vjlp4/TheHeader.vue'
import TheSection from '~/components/templates/vjlp/vjlp4/TheSection.vue'
import ThePayment from '~/components/templates/ThePayment.vue'
import TheBody from '~/components/templates/vjlp/TheBody.vue'
import TheFooter from '~/components/templates/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheSection,
    ThePayment,
    TheBody,
    TheFooter
  },
  layout: 'vjlp4',
  head() {
    return {
      title: 'Vera&John',
      htmlAttrs: {
        lang: this.post.attributes.promo_locale.promo_language_code
      },
      bodyAttrs: {
        id: this.post.attributes.promo_locale.promo_language_code + '-'
          + this.post.attributes.promo_locale.promo_country_code
      }
    }
  },
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/marketing/vjlp4/' + params.slug + '.md');
      return { post }
    } catch (error) {
      return false
    }
  }
}
</script>
