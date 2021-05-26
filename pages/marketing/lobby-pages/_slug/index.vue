<template>
  <div />
</template>

<script>

export default {
  layout: 'lobby-pages/index',
  async asyncData ({ params, error, $toCamelCase }) {
    try {
      const data = await import('~/assets/content/lobby-page/' + params.slug + '.md')
      return {
        markDownData: {
          ...$toCamelCase(JSON.parse(JSON.stringify(data.attributes))),
          content: data.html
        }
      }
    } catch (e) {
      error(e)
    }
  },
  head () {
    return {
      title: 'オンラインビデオスロット | Vera&John(ベラジョンカジノ)',
      link: [
        { rel: 'shortcut icon', href: '/marketing/vj-favicon.ico', type: 'image/x-icon' }
      ]
    }
  },
  mounted (params) {
    this.emitData(this.markDownData)
  },
  methods: {
    emitData (data) {
      this.$root.$emit('lobby-pages-data', data)
    }
  }
}
</script>
