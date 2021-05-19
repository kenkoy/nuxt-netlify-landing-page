<template>
  <div style="padding: 100px">
    {{ this.$route.params }}
  </div>
</template>

<script>

export default {
  layout: `lobby-pages/${this.template}`,
  // layout (context) {
  //   return $nuxt.$route.params === 'slots' ? 'lobby-pages/lobby' : ''
  // },
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
  data () {
    return {
      template: 'lobby'
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
  mounted () {
    this.emitData(this.markDownData)
    console.log('xxxxx', this.$root._route.fullPath)
  },
  methods: {
    emitData (data) {
      this.$root.$emit('lobby-pages-data', data)
    }
  }
}
</script>
