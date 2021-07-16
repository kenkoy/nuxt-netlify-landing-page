<template>
  <header id="header-menu">
    <div id="header-home">
      <a :href="brand === 'intercasino' ? 'https://intercasino.com/ja' : 'https://verajohn.com/ja'">
        <img :src="require(`@/assets/images/lobby-page/${brand}/home-icon.png`)" alt="alt img">
      </a>
    </div>

    <div id="header-logo">
      <a :href="brand === 'intercasino' ? 'https://intercasino.com/ja' : 'https://verajohn.com/ja'">
        <img class="logo" :src="require(`@/assets/images/lobby-page/${brand}/logo.png`)" alt="alt img">
      </a>
    </div>

    <div id="header-button">
      <button class="cta_button n-button--secondary">
        <a class="btn-login" :href="brand === 'intercasino' ? 'https://intercasino.com/#signin' : 'https://verajohn.com/#signin'">
          ログイン
        </a>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    brand: {
      type: String,
      required: true
    }
  }
}
</script>
