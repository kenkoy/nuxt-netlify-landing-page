<template>
    <div>
    </div>
</template>

<script>

export default {
    layout: 'vjlp6',
    data: () => ({
        dataMD: { },
    }),
    mounted(){
      this.emitData(this.dataMD)
    },
    async asyncData({ params }) {
      try {
          /* get MD FILE per PAGE / SLUG */
          const PAGE_MDFILE = await import(
            '~/assets/content/landing-page/marketing/vjlp6/' + params.slug + '.md'
          );

          /* store 'PAGE_MDFILE' data to 'dataMD' local variable' */
          return { dataMD: PAGE_MDFILE.attributes }

      } catch (error) {
          return false;
      }
    },
    methods: {
        /* send the 'dataMD' data to 'LAYOUT' */
        emitData(dataMD){
            this.$emit('emitMDcontent', dataMD)
        }
    },
};
</script>
