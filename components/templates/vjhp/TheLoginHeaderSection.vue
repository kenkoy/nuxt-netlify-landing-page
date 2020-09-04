<template>
  <section>
    <div class="logInHeader">
      <a v-bind:href="login_header_redirect_url">
        すでに登録済みですか?
        <span>{{ login_header_text }}</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheLoginHeaderSection',
  props: {
    login_header_text: {
      type: String,
      required: true,
    },
    login_header_redirect_url: {
      type: String,
      required: true,
    },
  },
};
</script>
