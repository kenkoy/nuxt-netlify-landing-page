<template>
  <section class="featured-posts">
    <ThePostPreview
      v-for="post in posts"
      :key="post.slug"
      :slug="post.slug"
      :path="post.path"
      :title="post.attributes.slug_name"
      :description="post.attributes.promo_banner.promo_title"
    />
  </section>
</template>

<script>
import ThePostPreview from '~/components/templates/ThePostPreview'

export default {
  components: {
    ThePostPreview
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
