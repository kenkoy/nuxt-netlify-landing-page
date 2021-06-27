<template>
  <div />
</template>

<script>

export default {
  layout: 'lobby-page/lobby',
  async asyncData ({ params: { brand, game }, error, app }) {
    try {
      const data = await import('~/assets/content/lobby-page/' + brand + '/' + game + '.md')
      return {
        markDownData: app.$toCamelCase(JSON.parse(JSON.stringify(data))),
        brand
      }
    } catch (e) {
      error(e)
    }
  },
  head () {
    const seoJSON = JSON.parse(JSON.stringify(this.markDownData.attributes.seo))
    const seo = this.$seoBuilder({ ...seoJSON, brand: this.brand })

    return {
      title: seo.title || '',
      meta: seo.meta,
      link: seo.link
    }
  },
  mounted () {
    this.emitData(this.markDownData, this.brand)
  },
  methods: {
    emitData ({ attributes, html }, brand) {
      this.$root.$emit('lobby-page-data', {
        ...attributes,
        content: html,
        brand
      })
    }
  }
}
</script>
