<template>
  <footer id="footer">
    <h6>そのほかの情報ページ</h6>
    <ul class="items-list footer-menu">
      <li>
        <a :href="footer_menu_1_redirect_url">{{ footer_menu_1_text }}</a>
      </li>
      <li>
        <a :href="footer_menu_2_redirect_url">{{ footer_menu_2_text }}</a>
      </li>
      <li>
        <a :href="footer_menu_3_redirect_url">{{ footer_menu_3_text }}</a>
      </li>
      <li>
        <a :href="footer_menu_4_redirect_url">{{ footer_menu_4_text }}</a>
      </li>
    </ul>
    <p>
      当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。
    </p>
    <a href="https://validator.curacao-egaming.com/validate?domain=www.verajohn.com&seal_id=cc15cb374804a763a5f82ff0a72fd6b436659d0061b3201e86431fa8afff305e39a7bbbadf89ae9274d2e9ee4bd923c3&stamp=ae85a35fb4a6c5816b8b9f17e5b6be96">
      <img width="34" height="31" v-lazy-load src="/marketing/img/vjhp/CEG_logo.png" alt="Curacao">
    </a>
    <a href="https://www.verajohn.com/about/responsible-gaming">
      <img width="34" height="31" v-lazy-load src="/marketing/img/vjhp/icon_age_twenty.svg" alt="18Regulator">
    </a>
  </footer>
</template>

<script>
export default {
  name: 'TheFooterSection',
  props: {
    footer_menu_1_text: {
      type: String,
      required: true
    },
    footer_menu_2_text: {
      type: String,
      required: true
    },
    footer_menu_3_text: {
      type: String,
      required: true
    },
    footer_menu_4_text: {
      type: String,
      required: true
    },
    footer_menu_1_redirect_url: {
      type: String,
      required: true
    },
    footer_menu_2_redirect_url: {
      type: String,
      required: true
    },
    footer_menu_3_redirect_url: {
      type: String,
      required: true
    },
    footer_menu_4_redirect_url: {
      type: String,
      required: true
    }
  }
}
</script>
