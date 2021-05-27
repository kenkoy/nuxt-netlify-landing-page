<template>
  <div />
</template>

<script>

export default {
  layout: 'lobby-pages/index',
  async asyncData ({ params, error, app }) {
    const markDownData = await import('~/assets/content/lobby-page/' + params.slug + '.md')
    return {
      markDownData
    }
  },
  head () {
    const seoJSON = JSON.parse(JSON.stringify(this.markDownData.attributes.seo))
    const seo = this.$seoBuilder(this.$toCamelCase(seoJSON))

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
      this.$root.$emit('lobby-pages-data', {
        ...data.attributes,
        content: data.html
      })
    }
  }
}
</script>
