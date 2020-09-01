<template>
  <section id="testimonial" class="main special">
    <header class="heading">
      <h2>先輩プレイヤーの声</h2>
      <p>
        ベラジョン・ファミリーのメンバー様からのコメントをご紹介♪
        <br />ほかにも、勝利を収めたプレイヤー様のリアルなお声は、毎月勝利者インタビューページで大公開し
        <br />ちゃってます!
      </p>
      <p>
        <strong>「ゲームの種類がとにかく多い! 出金手続きが簡単で早いのも嬉しい!」</strong>
      </p>
      <a
        v-bind:href="testimonials_button_redirect_url"
        class="button primary"
      >{{ testimonials_button_text }}</a>
    </header>
  </section>
</template>

<script>
export default {
  name: 'TheTestimonialSection',
  props: {
    testimonials_button_text: {
      type: String,
      required: true,
    },
    testimonials_button_redirect_url: {
      type: String,
      required: true,
    },
  },
};
</script>