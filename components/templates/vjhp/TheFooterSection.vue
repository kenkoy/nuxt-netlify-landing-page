<template>
  <footer id="footer">
    <h6>そのほかの情報ページ</h6>
    <ul class="items-list footer-menu">
      <li>
        <a v-bind:href="footer_menu_1_redirect_url">{{ footer_menu_1_text }}</a>
      </li>
      <li>
        <a v-bind:href="footer_menu_2_redirect_url">{{ footer_menu_2_text }}</a>
      </li>
      <li>
        <a v-bind:href="footer_menu_3_redirect_url">{{ footer_menu_3_text }}</a>
      </li>
      <li>
        <a v-bind:href="footer_menu_4_redirect_url">{{ footer_menu_4_text }}</a>
      </li>
    </ul>
    <p>
      当ウェブサイトは、キュラソー政府の商業登記に登録されている、番号149132のBreckenridge Curacao B.V.（登録住所：Emancipatie Boulevard, Dominico F.
      “Don” Martina 31, Willemstad, Curaçao）により運営されています。Breckenridge Curaçao B.V. __ はキュラソー州知事により発行されたMaster
      Gaming License #5536/JAZ __ に基づく __ C.I.L Curacao Interactive Licensing N.V. __
      により付与されたサブライセンスを通して正式な許可を所持しています
    </p>
    <a href="https://www.verajohn.com/home">
      <img src="/marketing/img/vjhp/curacao.png" alt="Curacao" v-lazy-load/>
    </a>
    <a href="https://www.verajohn.com/home">
      <img src="/marketing/img/vjhp/18Regulator.png" alt="18Regulator" v-lazy-load/>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'TheFooterSection',
  props: {
    footer_menu_1_text: {
      type: String,
      required: true,
    },
    footer_menu_2_text: {
      type: String,
      required: true,
    },
    footer_menu_3_text: {
      type: String,
      required: true,
    },
    footer_menu_4_text: {
      type: String,
      required: true,
    },
    footer_menu_1_redirect_url: {
      type: String,
      required: true,
    },
    footer_menu_2_redirect_url: {
      type: String,
      required: true,
    },
    footer_menu_3_redirect_url: {
      type: String,
      required: true,
    },
    footer_menu_4_redirect_url: {
      type: String,
      required: true,
    },
  },
};
</script>
