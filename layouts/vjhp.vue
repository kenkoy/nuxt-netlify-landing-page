<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
  export default {
    head() {
      return {
        link: [
          { rel: 'shortcut icon', href: '/marketing/vj-favicon.ico', type: 'image/x-icon' }, 
          { async: true, rel: 'stylesheet', href: '/marketing/styles/vjhp/reset.css' },
          { async: true, rel: 'stylesheet', href: '/marketing/styles/vjhp/main.css' },
        ]
      }
    }
  }
</script>