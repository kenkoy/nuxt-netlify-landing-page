<template>
  <div class="core-wrapper" :class="{ seo_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="seo-main"
    >
      <nav id="menu-slide" v-if="menuToggle">
        <button @click="pageSlideOff()">x</button>

        <div>
          <p>Enjoy a warm welcome with a 200% deposit bonus up to €100 on your first ever deposit! (T&C Apply)</p>
        </div>
      </nav>
      <main :class="pageSlide">
        <header id="header-menu">
          <button id="menu" @click="pageSlideOn()">
            <div>
              <span />
              <span />
              <span />
            </div>
            <p>Menu</p>
          </button>

          <img class="logo" src="@/assets/images/vjlp5/vj-logo.png"/>

          <div>
            <button class="warning">
              Join
            </button>
          </div>
        </header>

        <section>
          <div class="container">
            <div>
              <h1>Title</h1>
              <p>Some contents</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageSlide: '',
      menuToggle: false,
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
    this.$root.$once('seo-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('seo-data') // Change to actual page name
  },
  methods: {
    pageSlideOn () {
      this.pageSlide = 'page-slide'
      this.menuToggle = true
    },
    pageSlideOff () {
      this.pageSlide = ''
      setTimeout(() => {
        this.menuToggle = false
      }, 300)
    }
  }
}
</script>

<style lang="scss"> // Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .seo_wrapper {
    @import '@/assets/sass/seo/style.scss';
  }
</style>
