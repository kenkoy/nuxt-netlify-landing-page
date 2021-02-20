<template>
  <div class="core-wrapper" :class="{ game_wrapper: true }">
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      :class="mdData.slug_name"
      class="brands-main"
    >
      <Home />
    </div>
  </div>
</template>

<script>
import Home from '@/components/Brands/Home.vue'

export default {
  components: {
    Home
  },
  data () {
    return {
      modal: false,
      mdData: {},
      htmlBody: '',
      search: '',
      limit: 18,
      showMoreAddItems: 6,
      gameCat: 'all_games'
    }
  },
  created () {
    this.$root.$once('brands-data', (data) => {
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('brands-data')
  }
}
</script>

<style lang="scss">
  .game_wrapper {
    @import '@/assets/sass/brands/style.scss';
  }
</style>
