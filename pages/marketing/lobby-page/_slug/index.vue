<template>
  <div />
</template>

<script>

export default {
  layout: 'lobby-page/lobby',
  async asyncData ({ params, error, app }) {
<<<<<<< HEAD:pages/marketing/lobby/_slug/index.vue
    const markDownData = await import('~/assets/content/lobby-page/' + params.slug + '.md')
    return {
      markDownData
=======
    try {
      const data = await import('~/assets/content/landing-page/marketing/lobby-page/' + params.slug + '.md')
      return {
        markDownData: app.$toCamelCase(JSON.parse(JSON.stringify(data)))
      }
    } catch (e) {
      error(e)
>>>>>>> 7a282bf81edb8fb6746880b523ec58cdfbdc187d:pages/marketing/lobby-page/_slug/index.vue
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
      this.$root.$emit('lobby-pages-data', {
        ...data.attributes,
        content: data.html
      })
    }
  }
}
</script>
