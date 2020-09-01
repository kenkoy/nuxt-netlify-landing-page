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
          { rel: 'stylesheet', href: '/marketing/styles/vjlp-core/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
          { rel: 'stylesheet', defer: true, href: '/marketing/styles/vjlp-core/animate.min.css' },
          { rel: 'stylesheet', defer: true, href: '/marketing/styles/vjlp-core/hover-min.css' },
          { rel: 'stylesheet', href: '/marketing/styles/iclp2/core.css' },
          { rel: 'stylesheet', href: '/marketing/styles/iclp2/brand.css' },
          { rel: 'stylesheet', href: '/marketing/styles/iclp2/responsive.css' },
          { rel: 'stylesheet', href: '/marketing/styles/iclp2/scoreboard.css' },
          { rel: 'stylesheet', defer: true, href: '/marketing/styles/iclp2/speechbubble.css' },
          { rel: 'stylesheet', href: '/marketing/styles/iclp2/custom.css' },
        ],
        script: [ ]
      }
    }
  }
</script>