<template>
  <header id="header-menu">
    <div>
      <button class="btn menu-hamburger" @click="pageSlideOn(true)">
        <div>
          <span />
          <span />
          <span />
        </div>
        <p class="n-paragraph-1">
          メニュー
        </p>
      </button>
    </div>

    <div id="header-logo">
      <img class="logo" src="@/assets/images/seo/logo.png" alt="alt img">
    </div>

    <div id="header-button">
      <button class="cta_button cta_important login">
        今すぐ登録しよう!
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    pageSlideOn (data) {
      this.$emit('page-slide-on', data)
    }
  }
}
</script>
