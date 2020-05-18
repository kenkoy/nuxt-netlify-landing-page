<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  footer () {
    return {
      script: [
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