<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Intercasino',
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
          { defer: true, rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/animate.min.css' },
          { defer: true, rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/hover-min.css' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp2/css/core.css' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp2/brand_icjp/css/brand.css' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp2/css/responsive.css' },
          { defer: true, rel: 'stylesheet', href: '/marketing/styles/iclp1/flicker.css' },
        ], 

        script: [
          { src: 'https://files.vjpromo.com/bannerflow/lp-core/js/jquery-1.11.3.min.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp2/brand_icjp/js/before.js' },
        ]
      }
    }
  }
</script>