<template>
  <div class="layout-css" :class="{ blank_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="blank-main"
    >
    {{ mdData }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mdData: {},
      htmlBody: ''
    }
  },
  computed: {
    // USE THE CODE BELOW IF THE DESIGN / TEMPLATE HAVE BANNERS. ELSE, DELETE
    // cssBackground () {
    //   const images = this.mdData.promo_banner.promo_images
    //   return {
    //     '--bg-image': `url('${images.promo_bg_desktop}')`,
    //     '--bg-image-m': `url('${images.promo_bg_mobile}')`,
    //     '--bg-banner': `url('${images.promo_bg_banner}')`
    //   }
    // }
  },
  created () {
    this.$root.$once('game-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('game-data') // Change to actual page name
  }
}
</script>
