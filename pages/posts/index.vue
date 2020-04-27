<template>
    <div class="post-page">
       <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
    components: {
        PostList
    },
    async asyncData() {
        const resolve = require.context('~/assets/content/blog/', true, /\.json$/)
        const postFromCMS = resolve
        .keys()
        .map((key) => {
            const [, slug] = key.match(/\/(.+)\.json$/)
            return Object.assign(resolve(key), { slug })
        })
        //.filter((post) => post.attributes.category == 'blog')
        return {
            loadedPosts: postFromCMS
        }
    },
    // computed: {
    //     loadedPosts() {
    //         return this.$store.getters.loadedPosts
    //     }
    // },
}
</script>

<style scoped>
    .post-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
