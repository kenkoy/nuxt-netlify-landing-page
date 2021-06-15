<template>
  <header id="header-menu">
    <div id="header-home">
      <a href="#">
        <img src="@/assets/images/lobby-pages/home-icon.png">
      </a>
    </div>

    <div id="header-logo">
      <img class="logo" src="@/assets/images/lobby-pages/logo.png" alt="alt img">
    </div>

    <div id="header-button">
      <button class="cta_button login n-button--secondary">
        <a class="btn-register" :href="headerData.joinButtonRedirectUrl">
          {{ headerData.joinButton }}
        </a>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    headerData: {
      type: String,
      required: true
    }
  }
}
</script>
