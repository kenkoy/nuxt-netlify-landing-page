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
          { rel: 'stylesheet', href: '/marketing/styles/vjhp/reset.css' },
          { rel: 'stylesheet', href: '/marketing/styles/vjhp/main.css' },
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