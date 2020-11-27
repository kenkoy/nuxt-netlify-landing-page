<template>
  <div />
</template>

<script>

export default {
  layout: 'vjhp2',

  async asyncData () {
    try {
      /* get MD FILE per PAGE */
      const PAGE_MDFILE = await import(
        '~/assets/content/landing-page/marketing/vjhp/vera-john-homepage.md'
      )

      /* store 'PAGE_MDFILE' data to 'dataMD' local variable' */
      return { dataMD: PAGE_MDFILE.attributes }
    } catch (error) {
      return false
    }
  },
  data: () => ({
    dataMD: { }
  }),

  head () {
    return {
      title: 'Vera&John - The fun online casino',
      htmlAttrs: {
        lang: 'ja'
      },
      bodyAttrs: {
        id: 'ja-jp'
      }
    }
  },

  mounted () {
    this.emitData(this.dataMD)
  },

  methods: {
    /* send the 'dataMD' data to 'LAYOUT' */
    emitData (dataMD) {
      this.$emit('emit-md-content', dataMD)
    }
  }
}
</script>
