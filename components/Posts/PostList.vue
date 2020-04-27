<template>    
    <section class="featured-posts">
        <PostPreview 
            v-for="post in posts"
                :key="post.slug"
                :slug="post.slug"
                :title="post.title"
                :description="post.description"
                :is-admin="true"
        />
    </section>    
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
    components: {
        PostPreview
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: true
        },
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    .post-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .featured-posts {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
