<template>
  <div class="bonus">
    <section class="campaign">
      <!-- <div class="campaign__box">
        <h3 class="campaign__box__title">
          <img
            src="/marketing/img/iclp3/welcome_bonus.png"
            alt="welcome-bonus"
            v-lazy-load
          />
        </h3>
        <p class="campaign__box__summary">
          新規プレイヤー限定!
          <br />入金してキャッシュでのプレイに応じて
          <br />
          <b>総額$500</b>のキャッシュが貰えるチャンス!
        </p>
        <a class="campaign__box__item__link" href="https://www.intercasino.com/#join" alt="今すぐ登録">
          <img
            src="/marketing/img/iclp3/signup_button.png"
            alt="signup"
            v-lazy-load
          />
        </a>
      </div> -->

      <!-- <div class="campaign__box twitter">
        <h3 class="campaign__box__title">
          <img
            src="/marketing/img/iclp3/present_CP.png"
            alt="present"
            v-lazy-load
          />
        </h3>
        <p class="campaign__box__summary">
          姉妹カジノの
          <br class="sp" />ベラジョンカジノの
          <a href="https://twitter.com/Japan_VeraJohn" target="_blank" rel="noopener">公式Twitter</a>で、
          <br />
          <b>
            限定オリジナルグッズの
            <br class="sp" />抽選会を実施中！
          </b>
          <br />詳細はベラジョンカジノの
          <br />
          <a href="https://twitter.com/Japan_VeraJohn" target="_blank" rel="noopener">公式Twitterアカウント</a>をチェック！
        </p>
        <a
          class="campaign__box__item__link"
          href="https://twitter.com/Japan_VeraJohn"
          target="_blank"
          rel="noopener"
        >
          <img
            src="/marketing/img/iclp3/twitter_button.png"
            alt="今すぐtweet"
            v-lazy-load
          />
        </a>
      </div> -->

      <div v-for="(datum, index) of bonusData" :key="index">
        <div class="campaign__box">
          <h3 class="campaign__box__title">
            <img
              :src="datum.box_title_image"
              :alt="datum.box_title_image.replace(/^.*[\\\/]/, '')"
              v-lazy-load
            />
          </h3>
          <p class="campaign__box__summary">
            新規プレイヤー限定!
            <br />入金してキャッシュでのプレイに応じて
            <br />
            <b>総額$500</b>のキャッシュが貰えるチャンス!
          </p>
          <a class="campaign__box__item__link" :href="datum.box_button_image_url" alt="">
            <img
              :src="datum.box_button_image"
              :alt="datum.box_button_image.replace(/^.*[\\\/]/, '')"
              v-lazy-load
            />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Bonus',
  props: {
    bonusData: {
      type: Array,
      required: true
    }
  },
};
</script>

