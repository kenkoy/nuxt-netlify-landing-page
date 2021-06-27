<template>
  <nav id="g-nav-bar-main">
    <div id="g-nav-home">
      <a href="#">
        <img :src="require(`@/assets/images/lobby-page/${brand}/home-icon.png`)" alt="alt img">
      </a>
    </div>

    <div id="g-nav-logo">
      <img class="logo" :src="require(`@/assets/images/lobby-page/${brand}/logo.png`)" alt="alt img">
    </div>

    <div id="g-nav-button">
      <button class="cta_button login n-button--secondary">
        <a class="btn-register" href="#">
          Join Now
        </a>
      </button>
    </div>
  </nav>
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
