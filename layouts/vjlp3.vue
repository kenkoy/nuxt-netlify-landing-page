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
          { rel: 'shortcut icon', href: 'https://files.vjpromo.com/bannerflow/lp-core/brand_vj/img/favicon.ico', type: 'image/x-icon' },
          // { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'},
          // { defer: true, rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/hover-min.css'},
          // { defer: true, rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/animate.min.css'},
          // { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp-core/css/slick.css'},
          // { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp3/css/core.css'},
          // { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp3/brand_vj/css/brand.css'},
          // { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp3/css/responsive.css'},
          { rel: 'stylesheet', href: '/marketing/styles/lp3/core.css' },
          { rel: 'stylesheet', href: '/marketing/styles/lp3/brand.css' },
          { rel: 'stylesheet', href: '/marketing/styles/lp3/responsive.css' },
        ],
        script: [
          // { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
          // { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp3/brand_vj/js/before.js' },
          /* Optional JavaScript */
          // { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp3/brand_vj/js/after.js', body: true },
          // { type: 'text/javascript', src: 'https://files.vjpromo.com/bannerflow/lp-core/brand_vj/js/form.js', body: true },
          // { defer: true, src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', body: true },
          // { defer: true, src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js', body: true },
          // { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp-core/js/slick.min.js', body: true },
          // { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp-core/js/jquery.flexverticalcenter.js', body: true }
        ]
      }
    }
  }
</script>