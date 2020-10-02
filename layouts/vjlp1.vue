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
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
          { rel: 'stylesheet', href: '/marketing/styles/vjlp-core/bootstrap.min.css' },
          { preload: true, rel: 'stylesheet', href: '/marketing/styles/vjlp-core/fonts.css' },
          { defer: true, rel: 'stylesheet', href: '/marketing/styles/vjlp-core/animate.min.css' },
          { defer: true, rel: 'stylesheet', href: '/marketing/styles/vjlp-core/hover-min.css' },
          { defer: true, rel: 'stylesheet', href: '/marketing/styles/vjlp-core/slick.css' },
          { rel: 'stylesheet', href: '/marketing/styles/vjlp1/core.css' },
          { rel: 'stylesheet', href: '/marketing/styles/vjlp1/brand.css' },
          { rel: 'stylesheet', href: '/marketing/styles/vjlp1/responsive.css' },
          
          { type: 'text/javascript', src: '/marketing/js/vjlp-core/events/.js'},
          { type: 'text/javascript', src: '/marketing/js/vjlp-core/jquery-3.5.1.slim.min.js' },
          { defer: true, src: '/marketing/js/vjlp-core/popper.min.js' },
          { defer: true, src: '/marketing/js/vjlp-core/bootstrap.min.js' },
          // { type: 'text/javascript', src: '/marketing/js/page-hide.js' },
          { type: 'text/javascript', src: '/marketing/js/vjlp-core/form.js' },
          { type: 'text/javascript', src: '/marketing/js/vjlp-core/slick.min.js' },
          { defer: true, type: 'text/javascript', src: '/marketing/js/vjlp-core/jquery.flexverticalcenter.js' },
        ],
        script: [ ]
      }
    }
  }
</script>