module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:yaml/recommended'
  ],
  plugins: [
    'yaml'
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off'
  }
}