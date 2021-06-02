<template>
  <!-- <div class="post-page">
    <ThePostList :posts="posts" />
  </div> -->
  <div style="display: flex; justify-content: center; align-items: center; min-height: 500px;">
    <div>
      <img style="margin: 0 auto; display: block;" src="https://cdn.ridgegaming.net/files/repository/103/8/10028/all/all/image/logo-yuugado.svg?qtytfd&60b4&60b4">
      <h2 style="font-size: 45px; font-family: 'Noto Sans', sans-serif; color: #86725D; font-weight: 400; letter-spacing: 5px;">
        Coming Soon
      </h2>
    </div>
  </div>
</template>

<!-- <script>
import ThePostList from '~/components/Marketing/ThePostList'

export default {
  components: {
    ThePostList
  },
  layout: 'default',
  async asyncData () {
    const mdFiles = await require.context(
      '~/assets/content/landing-page/marketing/vjlp5/',
      true,
      /\.md$/
    )
    const mdFilesContent = await mdFiles.keys().map(key => ({
      ...mdFiles(key),
      slug: `${key.replace('.md', '').replace('./', '')}`,
      path: 'vjlp5'
    }))
    return { posts: mdFilesContent.reverse() }
  },
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
  }
}
</script> -->
