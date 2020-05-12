<template>    
    <section class="featured-posts">
        <PostPreview 
            v-for="post in posts"
                :key="post.slug"
                :slug="post.slug"
                :title="post.attributes.promo_title"
                :description="post.attributes.promo_description"
        />
    </section>    
</template>

<script>
import PostPreview from '@/components/VJLP3/PostPreview'

export default {
    components: {
        PostPreview
    },
    props: {
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
