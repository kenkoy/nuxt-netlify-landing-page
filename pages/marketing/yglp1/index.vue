<template>
  <div class="post-page">
    <ThePostList :posts="posts" />
  </div>
</template>

<script>
import ThePostList from '~/components/Marketing/ThePostList'

export default {
  components: {
    ThePostList
  },
  layout: 'default',
  async asyncData () {
    const mdFiles = await require.context(
      '~/assets/content/landing-page/marketing/yglp1/',
      true,
      /\.md$/
    )
    const mdFilesContent = await mdFiles.keys().map(key => ({
      ...mdFiles(key),
      slug: `${key.replace('.md', '').replace('./', '')}`,
      path: 'yglp'
    }))
    return { posts: mdFilesContent.reverse() }
  },
  head () {
    return {
      title: 'Yuugado',
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
