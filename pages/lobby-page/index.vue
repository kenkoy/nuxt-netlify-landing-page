<template>
  <div class="container">
    <div class="row">
      <div v-for="(brand, index) in brands" :key="index" class="posts">
        <nuxt-link :to="`/lobby-page/${brand}`" class="post-preview">
          <article>
            <h3>{{ brand }}</h3>
          </article>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      brands: ['verajohn', 'intercasino']
    }
  }
}
</script>
