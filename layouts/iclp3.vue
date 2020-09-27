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
          { rel: 'shortcut icon', href: '/marketing/ic-favicon.ico', type: 'image/x-icon' },
          { rel: 'stylesheet', href: '/marketing/styles/iclp3/spine-player.min.css' },
          { rel: 'stylesheet', href: '/marketing/styles/iclp3/firstview.css' },
          { rel: 'stylesheet', body: true, href: '/marketing/styles/iclp3/style.css' },
          { preload: true, rel: 'stylesheet', body: true, href: '/marketing/styles/iclp3/fonts.css' },
        ],
        script: [
          { src: '/marketing/js/iclp3/spine-player.min.js' },
          // { defer: true, body: true, src: 'https://files.vjpromo.com/bannerflow/oiranslot/ic/10/assets/js/spine-player.min.js' },
          { defer: true, body: true, src: '/marketing/js/iclp3/velocity.min.js' },
          { defer: true, async: true, body: true, src: '/marketing/js/iclp3/scripts.js' },
        ]
      }
    }
  }
</script>