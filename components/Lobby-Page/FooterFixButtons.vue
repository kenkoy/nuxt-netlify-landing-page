<template>
  <aside id="footer-login-register">
    <button class="n-button n-button--secondary">
      <a class="btn-login" :href="brand === 'verajohn' ? 'https://verajohn.com/#signin' : ''">
        ログイン
      </a>
    </button>
    <button class="n-button n-button--primary">
      <a class="btn-register" :href="brand === 'verajohn' ? 'https://verajohn.com/#join' : ''">
        今すぐ登録しよう!
      </a>
    </button>
  </aside>
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
