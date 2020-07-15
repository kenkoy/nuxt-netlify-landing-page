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
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans'},
          { rel: 'shortcut icon', type: 'image/x-icon', href: 'https://files.vjpromo.com/bannerflow/lp-core/brand_vj/img/favicon.ico' },
          // { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
          // { defer: true, rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/animate.min.css' },
          // { defer: true, rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/hover-min.css' },
          // { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp1/css/core.css' },
          // { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp1/brand_vj/css/brand.css' },
          // { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp1/css/responsive.css' },
          { rel: 'stylesheet', href: '/marketing/styles/lp1/core.css' },
          { rel: 'stylesheet', href: '/marketing/styles/lp1/brand.css' },
          { rel: 'stylesheet', href: '/marketing/styles/lp1/responsive.css' },
        ],
        script: [
          // { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
          // { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp1/brand_vj/js/before.js' },
          // { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp1/brand_vj/js/after.js' },
          // { type: 'text/javascript', src: 'https://files.vjpromo.com/bannerflow/lp-core/brand_vj/js/form.js' },
          // { defer: true, src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
          // { defer: true, src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' },
          // { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp-core/js/jquery.flexverticalcenter.js' }
        ]
      }
    }
  }
</script>