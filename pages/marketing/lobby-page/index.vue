<template>
  <div>
    {{ posts }}
  </div>
</template>
<script>

export default {
  layout: 'default',
  async asyncData () {
    const mdFiles = await require.context(
      '~/assets/content/landing-page/marketing/lobby-page/',
      true,
      /\.md$/
    )
    // add slug and path in key list of mdFiles
    const mdFilesContent = await mdFiles.keys().map(key => ({
      ...mdFiles(key),
      slug: `${key.replace('.md', '').replace('./', '')}`,
      path: 'lobby-page'
    }))
    // filter to vjlp3 templates only
    // .filter((mdFiles) => mdFiles.attributes.promo_template == 'VJLP3-NoForm')

    // return { posts: mdFilesContent.reverse(), dataMD: mdFilesContent.reverse() }
    return { posts: mdFilesContent.reverse() }
  },
  head () {
    return {
      title: 'インターカジノ',
      htmlAttrs: {
        lang: 'ja'
      },
      bodyAttrs: {
        id: 'ja-jp'
      }
    }
  }
}
</script>
