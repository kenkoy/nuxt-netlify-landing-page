<template>
  <section id="first" class="main special">
    <ul class="features">
      <li class="first-half">
        <h3>
          生配信で楽しめる!
          <br />ライブカジノ
        </h3>
        <span class="icon heading"></span>
        <p>定番ゲームから変わり種まで、その数なんと0000種類! 今まで海外カジノでしか楽しめなかった生ディーラーとの真剣勝負が、あなたのスマホにやってきます!</p>
        <a
          class="button tertiary"
          v-bind:href="games_brick_column_1_button_redirect_url"
        >{{ games_brick_column_1_button }}</a>
      </li>
      <li class="second-half">
        <h3>
          圧倒的ゲーム数!
          <br />スロットゲーム
        </h3>
        <span class="icon heading"></span>
        <p>
          その数1000種類以上! 人気スロットはもちろん、パチスロみたいな新感覚ゲームまでなんでもあり!
          <br />最新作がどこよりも早くプレイできちゃうのも業界ナンバーワンカジノならでは♪
        </p>
        <a
          class="button secondary"
          v-bind:href="games_brick_column_2_button_redirect_url"
        >{{ games_brick_column_2_button }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TheGamesBrickSection',
  props: {
    games_brick_column_1_button: {
      type: String,
      required: true,
    },
    games_brick_column_2_button: {
      type: String,
      required: true,
    },
    games_brick_column_1_button_redirect_url: {
      type: String,
      required: true,
    },
    games_brick_column_2_button_redirect_url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.first-half {
  background-image: url("/marketing/img/vjhp/mobile.png");
}

.second-half {
  background-image: url("/marketing/img/vjhp/ipad.png");
}
</style>