<template>
  <div class="container">
    <div class="row">
      <div v-for="(post, postIndex) in posts" :key="postIndex" class="posts">
        <nuxt-link :to="'/marketing/' + post.path + '/' + post.slug" class="post-preview">
          <article>
            <h3>{{ post.attributes.slug_name }}</h3>
          </article>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ params: { brand } }) {
    const mdFiles = await require.context(
      '~/assets/content/lobby-page/',
      true,
      /\.md$/
    )

    const mdFilesContent = await mdFiles.keys()
      .filter(key => key.includes(brand))
      .map(key => ({
        ...mdFiles(key),
        slug: `${key.replace('.md', '').replace('./', '')}`,
        path: 'lobby-page'
      }))

    return {
      posts: mdFilesContent.reverse(),
      brand
    }
  }
}
</script>
