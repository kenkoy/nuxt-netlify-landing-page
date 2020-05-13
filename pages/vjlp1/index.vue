<template>
    <div class="post-page">
       <PostList :posts="posts" />     
    </div>
</template>

<script>
import PostList from '@/components/VJLP3/PostList'

export default {
    components: {
        PostList
    },
    async asyncData () {
        const mdFiles = await require.context('~/assets/content/landing-page/vjlp1/', true, /\.md$/)
        
        //add slug and path in key list of mdFiles
        const mdFilesContent = await mdFiles.keys().map(key => ({
          ...mdFiles(key),
          slug: `${key.replace('.md', '').replace('./', '')}`,
          path: 'vjlp1'
        }))
        //filter to vjlp3 templates only
        //.filter((mdFiles) => mdFiles.attributes.promo_template == 'VJLP1-NoForm')

        return { posts: mdFilesContent.reverse() }
    }  
}
</script>

<style scoped>
    .post-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
