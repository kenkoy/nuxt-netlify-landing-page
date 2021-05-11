<template>
  <div />
</template>

<script>

export default {
  layout: 'vjjp/lobby-pages',
  async asyncData ({ error, $toCamelCase }) {
    try {
      const data = await import('~/assets/content/lobby-page/slots.md')
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
      title: 'オンラインビデオスロット | Vera&John(ベラジョンカジノ)'
    }
  },
  mounted () {
    this.emitData(this.markDownData)
  },
  methods: {
    emitData (data) {
      this.$root.$emit('vjjp-data', data)
    }
  }
}
</script>
