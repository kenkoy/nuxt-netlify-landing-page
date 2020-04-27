<template>
    <div class="single-post-page">
        <section class="post">
            <h1>{{ loadedPost.title }}</h1>
            <p>
                {{ loadedPost.body }}
            </p>
            <div>Last update: {{ loadedPost.date }}</div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  // asyncData(context) {
  //   return axios.get('https://nuxt-blog-9177d.firebaseio.com/posts/'+ context.params.id +'.json')
  //     .then(res => {
  //         return {
  //           loadedPost: res.data
  //         }
  //     })
  //     .catch(e => context.error(e))     
  // } 
   async asyncData(context) {
    try {
      let loadedPost = await import('~/assets/content/blog/'+ context.params.id +'.json')
      return {
        loadedPost
      }
    } catch (err) {
      return false
    }
  } 
}
</script>


<style scoped>
    .single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>