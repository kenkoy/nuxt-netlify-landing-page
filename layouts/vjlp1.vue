<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
  export default {
    head(){
      return {
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans'},
          { rel: 'shortcut icon', type: 'image/x-icon', href: 'https://files.vjpromo.com/bannerflow/lp-core/brand_vj/img/favicon.ico' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
          { defer: true, rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/animate.min.css' },
          { defer: true, rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/hover-min.css' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp1/css/core.css' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp1/brand_vj/css/brand.css' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp1/css/responsive.css' }
        ],
        script: [
          { src: 'https://files.vjpromo.com/bannerflow/lp-core/js/jquery-1.11.3.min.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp1/brand_vj/js/before.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp1/brand_vj/js/after.js' },
          { type: 'text/javascript', src: 'https://files.vjpromo.com/bannerflow/lp-core/brand_vj/js/form.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp-core/js/popper.min.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp-core/js/bootstrap.min.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp-core/js/jquery.flexverticalcenter.js' }
        ]
      }
    }
  }
</script>