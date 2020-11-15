<template>
  <div />
</template>

<script>

export default {
  layout: 'nathan',
  async asyncData ({ params }) {
    try {
      /* get MD FILE per PAGE / SLUG */
      const PAGE_MDFILE = await import(
        '~/assets/content/landing-page/marketing/nathan/' + params.slug + '.md'
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
  mounted () {
    this.emitData(this.dataMD)
  },
  methods: {
    /* send the 'dataMD' data to 'LAYOUT' */
    emitData (dataMD) {
      this.$emit('emitMDcontent', dataMD)
    }
  }
}
</script>
