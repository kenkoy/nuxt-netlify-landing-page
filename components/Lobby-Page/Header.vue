<template>
  <header id="header-menu">
    <div id="header-home">
      <!-- <button class="btn menu-hamburger" @click="pageSlideOn(true)">
        <div>
          <span />
          <span />
          <span />
        </div>
        <p class="n-paragraph-1">
          メニュー
        </p>
      </button> -->
      <a href="#">
        <img src="@/assets/images/lobby-pages/home-icon.png">
      </a>
    </div>

    <div id="header-logo">
      <img class="logo" src="@/assets/images/lobby-pages/logo.png" alt="alt img">
    </div>

    <div id="header-button">
      <button class="cta_button login n-button--secondary">
        JOIN NOW
      </button>
    </div>
  </header>
</template>

<script>
export default {
  // methods: {
  //   pageSlideOn (data) {
  //     this.$emit('page-slide-on', data)
  //   }
  // }
}
</script>
