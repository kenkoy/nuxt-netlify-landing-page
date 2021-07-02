<template>
  <div />
</template>

<script>
export default {
  layout: 'game-page/game-layout', // Change to actual layout
  async asyncData ({ params, error }) {
    try {
      const markDownData = await import('~/assets/content/game-page/' + params.slug + '.md') // Change to actual slug
      return { markDownData }
    } catch (e) {
      error(e)
    }
  },
  head () {
    const seoJSON = JSON.parse(JSON.stringify(this.markDownData.attributes.seo))
    const seo = this.$seoBuilder({ ...seoJSON }, 'verajohn')
    return {
      title: seo.title || '',
      meta: seo.meta,
      link: seo.link
    }
    // return {
    //   title: this.markDownData.attributes.seo.title || '',
    //   keyworkds: this.markDownData.attributes.seo.meta.keywords,
    //   alternate: this.markDownData.attributes.seo.meta.alternate_links
    // }
  },
  mounted () {
    this.emitData(this.markDownData)
  },
  methods: {
    emitData (data) {
      this.$root.$emit('game-data', { // Change to actual page name
        yamlData: data.attributes,
        htmlData: data.html
      })
    }
  }
}
</script>
