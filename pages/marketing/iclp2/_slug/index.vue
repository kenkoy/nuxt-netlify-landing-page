<template>
  <div>
    <TheHeader 
      :statements="post.attributes.promo_banner.promo_banner_statement"
      :higlightedPhrase="post.attributes.promo_banner.promo_banner_highlighted_phrase"
      :registerButtonText="post.attributes.promo_banner.promo_register_button_text"
      :registerButtonURL="post.attributes.promo_banner.promo_register_button_redirect_url"
      :homeButtonText="post.attributes.promo_banner.promo_home_button"
      :homeButtonURL="post.attributes.promo_banner.promo_home_button_redirect_url"
      :termsText="post.attributes.promo_banner.promo_smallterm_text"
      :termsTextLink="post.attributes.promo_banner.promo_smallterm_text_link"
      :termsURL="post.attributes.promo_banner.promo_smallterm_redirect_url"
      :signUpURL="post.attributes.promo_banner.promo_home_button_redirect_url"
      :signUpText="post.attributes.promo_banner.promo_home_button"
      :images="post.attributes.promo_banner.promo_images"
    />
    <TheWelcome 
      :firstStatements="post.attributes.welcome_section.welcome_first_statement"
      :highligtedFirstStatementPhrase="post.attributes.welcome_section.welcome_first_statement_highlighted_phrase"
      :secondStatements="post.attributes.welcome_section.welcome_second_statement"
      :rougeSpeech="post.attributes.welcome_section.welcome_rouge_speech_bubble"
      :chloeSpeech="post.attributes.welcome_section.welcome_chloe_speech_bubble"
    />
    <TheTopGame
      :game1="post.attributes.top_game_section.top_game_game1"
      :game2="post.attributes.top_game_section.top_game_game2"
      :game3="post.attributes.top_game_section.top_game_game3"
      :game4="post.attributes.top_game_section.top_game_game4"
      :gamesInfo1="post.attributes.top_game_section.top_game_gamesInfo1"
      :gamesInfo2="post.attributes.top_game_section.top_game_gamesInfo2"
    />
    <TheLoyalty />
    <TheSafety />
    <TheHistory
      :rougeStatements="post.attributes.history_section.history_rouge_statement"
      :rougeHighlightedPhrase="post.attributes.history_section.history_rouge_highlighted_phrase"
      :chloeStatements="post.attributes.history_section.history_chloe_statement"
      :chloeHighlightedPhrase="post.attributes.history_section.history_chloe_highlighted_phrase"
      :registerButtonText="post.attributes.history_section.history_register_button_text"
      :registerButtonURL="post.attributes.history_section.history_register_button_redirect_url"
    />
    <ThePayment 
      :promo_language_code="post.attributes.promo_locale.promo_language_code"
      :promo_country_code="post.attributes.promo_locale.promo_country_code"
    />
    <TheBody
      :promo_content="post.html"
      :landing_page_type="'intercasino'"
    />
    <TheFooter 
      :ga_tracking_id="post.attributes.promo_locale.ga_tracking_id"
      :promo_language_code="post.attributes.promo_locale.promo_language_code"
      :promo_country_code="post.attributes.promo_locale.promo_country_code"
      :landing_page_type="'intercasino'"
    />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/iclp/iclp2/TheHeader.vue'
import TheWelcome from '~/components/templates/iclp/iclp2/TheWelcome.vue'
import TheTopGame from '~/components/templates/iclp/iclp2/TheTopGame.vue'
import TheLoyalty from '~/components/templates/iclp/iclp2/TheLoyalty.vue'
import TheSafety from '~/components/templates/iclp/iclp2/TheSafety.vue'
import TheHistory from '~/components/templates/iclp/iclp2/TheHistory.vue'
import ThePayment from '~/components/templates/ThePayment.vue'
import TheBody from '~/components/templates/TheBody.vue'
import TheFooter from '~/components/templates/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheWelcome,
    TheTopGame,
    TheLoyalty,
    TheSafety,
    TheHistory,
    ThePayment,
    TheBody,
    TheFooter
  },
  layout: 'iclp2',
  head() {
    return {
      title: 'インターカジノ',
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
      const post = await import('~/assets/content/landing-page/marketing/iclp2/' + params.slug + '.md');
      return { post }
    } catch (error) {
      return false
    }
  }
}
</script>
