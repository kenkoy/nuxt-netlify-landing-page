<template>
  <div />
</template>

<script>
export default {
  layout: 'lobby-pages/index', // Change to actual layout
  async asyncData ({ params, error }) {
    try {
      const markDownData = await import('~/assets/content/landing-page/marketing/lobby-page/' + params.slug + '.md') // Change to actual slug
      return { markDownData }
    } catch (e) {
      error(e)
    }
  },
  head () {
    return {
      title: 'Vera&John',
      __dangerouslyDisableSanitizersByTagID: {
        gtmBody: ['innerHTML'],
        gtmHead: ['innerHTML'],
        goHead: ['innerHTML'],
        gaHead: ['innerHTML']
      }
    }
  },
  mounted () {
    this.emitData(this.markDownData)
  },
  methods: {
    emitData (data) {
      this.$root.$emit('lobby-pages-data', { // Change to actual page name
        yamlData: data.attributes,
        htmlData: data.html
      })
    }
  }
}
</script>
