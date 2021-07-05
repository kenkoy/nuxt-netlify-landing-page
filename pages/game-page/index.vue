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
  async asyncData () {
    const mdFiles = await require.context(
      '~/assets/content/game-page/', // Change to actual md file
      true,
      /\.md$/
    )
    // add slug and path in key list of mdFiles
    const mdFilesContent = await mdFiles.keys().map(key => ({
      ...mdFiles(key),
      slug: `${key.replace('.md', '').replace('./', '')}`,
      path: 'game-page'
    }))
    // filter to vjlp3 templates only
    // .filter((mdFiles) => mdFiles.attributes.promo_template == 'VJLP3-NoForm')

    // return { posts: mdFilesContent.reverse(), dataMD: mdFilesContent.reverse() }
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
</script>
