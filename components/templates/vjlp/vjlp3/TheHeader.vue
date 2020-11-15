<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <a href="https://www.verajohn.com/ja" class="bf-logo" aria-label="Vera&John" />
          <div class="bf-btn-container" style="display:inline-block;">
            <a id="login-btn" :href="header_login_button_redirect_url">
              <div class="bf-button bf-third-bg">
                <p>{{ header_login_button }}</p>
              </div>
            </a>
            <a id="signup-btn" :href="header_join_button_redirect_url" style="display:inline !important">
              <div class="bf-button bf-secondary-bg">
                <p>{{ header_join_button }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    header_login_button: {
      type: String,
      required: true
    },
    header_login_button_redirect_url: {
      type: String,
      required: true
    },
    header_join_button: {
      type: String,
      required: true
    },
    header_join_button_redirect_url: {
      type: String,
      required: true
    }
  }
}
</script>
