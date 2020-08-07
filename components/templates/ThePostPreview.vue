<template>
  <nuxt-link :to="'/marketing/' + path + '/' + slug" class="post-preview">
    <article>
      <div class="post-content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    path: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: "",
      required: true
    }
  }
};
</script>

<style scoped>
.post-preview {
  color: #004085;
  background-color: #cce5ff;
  border: 1px solid #b8daff;
  border-radius: .25rem;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #cce5ff;
  color: #1B1E21;
}
</style>