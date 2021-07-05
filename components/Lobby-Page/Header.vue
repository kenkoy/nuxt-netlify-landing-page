<template>
  <header id="header-menu">
    <div id="header-home">
      <a href="#">
        <img :src="require(`@/assets/images/lobby-page/${brand}/home-icon.png`)" alt="alt img">
      </a>
    </div>

    <div id="header-logo">
      <img class="logo" :src="require(`@/assets/images/lobby-page/${brand}/logo.png`)" alt="alt img">
    </div>

    <div id="header-button">
      <button class="cta_button login n-button--secondary">
        <a class="btn-register" href="#">
          Join Now
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
