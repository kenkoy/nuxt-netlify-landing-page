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
          { rel: 'shortcut icon', href: 'https://files.vjpromo.com/bannerflow/lp-core/brand_vj/img/favicon.ico', type: 'image/x-icon' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/bootstrap.min.css'},
          { defer: true, rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/hover-min.css'},
          { defer: true, rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/animate.min.css'},
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/slick.css'},
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp3/css/core.css'},
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp3/brand_vj/css/brand.css'},
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp3/css/responsive.css'},
        ],
        script: [
          { src: 'https://files.vjpromo.com/bannerflow/lp-core/js/jquery-1.11.3.min.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp3/brand_vj/js/before.js' },
          /* Optional JavaScript */
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp3/brand_vj/js/after.js' },
          { type: 'text/javascript', src: 'https://files.vjpromo.com/bannerflow/lp-core/brand_vj/js/form.js' },
          { type: 'text/javascript', src: 'https://files.vjpromo.com/bannerflow/lp-core/brand_vj/js/footer.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp-core/js/popper.min.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp-core/js/bootstrap.min.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp-core/js/slick.min.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp-core/js/jquery.flexverticalcenter.js' }
        ]
      }
    }
  }
</script>