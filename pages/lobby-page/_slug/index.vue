<template>
  <div />
</template>

<script>

export default {
  layout: '_lobby-page/index',
  async asyncData ({ params, error, app }) {
    try {
      const data = await import('~/assets/content/lobby-page/' + params.slug + '.md')
      return {
        markDownData: app.$toCamelCase(JSON.parse(JSON.stringify(data)))
      }
    } catch (e) {
      error(e)
    }
  },
  head () {
    const seoJSON = JSON.parse(JSON.stringify(this.markDownData.attributes.seo))
    const seo = this.$seoBuilder(seoJSON)

    return {
      title: seo.title || '',
      meta: seo.meta,
      link: [
        { hid: 'shortcut icon', rel: 'shortcut icon', href: '/marketing/vj-favicon.ico', type: 'image/x-icon' },
        ...seo.link
      ]
    }
  },
  mounted () {
    this.emitData(this.markDownData)
  },
  methods: {
    emitData (data) {
      this.$root.$emit('lobby-page-data', {
        ...data.attributes,
        content: data.html
      })
    }
  }
}
</script>
